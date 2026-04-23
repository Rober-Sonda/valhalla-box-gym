const functions = require("firebase-functions/v2");
const admin = require("firebase-admin");
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const axios = require("axios");
const crypto = require("crypto");
// const dotenv = require("dotenv"); // En produccion usaremos firebase functions:secrets, local process.env
// dotenv.config();

// Inicializar app de admin 
admin.initializeApp();

const app = express();
app.use(cors({ origin: true }));
app.use(cookieParser());

// === CONFIGURACION DE ENTORNO ===
// Para local, puedes usar process.env. Para proudcción se usarían las variables de Firebase.
const TIKTOK_CLIENT_KEY = process.env.TIKTOK_CLIENT_KEY || functions.params.defineString("TIKTOK_CLIENT_KEY").value() || "TU_TIKTOK_CLIENT_KEY";
const TIKTOK_CLIENT_SECRET = process.env.TIKTOK_CLIENT_SECRET || functions.params.defineString("TIKTOK_CLIENT_SECRET").value() || "TU_TIKTOK_CLIENT_SECRET";
const MERCADOPAGO_ACCESS_TOKEN = process.env.MERCADOPAGO_ACCESS_TOKEN || functions.params.defineString("MERCADOPAGO_ACCESS_TOKEN").value() || "APP_USR-137470552603191-022019-9f33e4301cca5bea5d43e4f79ca29d48-139054499";

// Importante: esta URL en producción debe ser la url pública de la función
// Localmente, si probamos con emulador y React en puerto 5173, usamos hardcodeada para proxy o enviamos una base redirect.
// Para evitar problemas local vs prod, pasaremos la base url desde el frontend o la determinaremos aquí.
const getAppUrl = (req) => {
    // Si estamos en entorno local de la Firebase function
    if (req.hostname === "localhost" || req.hostname === "127.0.0.1") {
        return `http://localhost:5001/${process.env.GCLOUD_PROJECT || "valhalla-box-gym-app"}/us-central1/api`;
    }
    return `https://${req.get('host')}/api`; // Produccion
};

const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:5173";

// ====== TIKTOK OAUTH ======

// 1. Iniciar el Login de TikTok
app.get("/auth/tiktok", (req, res) => {
    const state = crypto.randomBytes(20).toString('hex');
    // Guardar el state en una cookie segura para verificar luego
    res.cookie("oauth_state", state, { maxAge: 3600000, httpOnly: true, secure: req.hostname !== "localhost" });
    
    // Cookie adicional para recordar de qué URL del frontend vinimos
    const redirectFront = req.query.redirect_to || FRONTEND_URL;
    res.cookie("oauth_frontend", redirectFront, { maxAge: 3600000, httpOnly: true, secure: req.hostname !== "localhost" });

    const redirectUri = `${getAppUrl(req)}/auth/tiktok/callback`;
    
    // Construir la URL de autorización
    const authUrl = new URL("https://www.tiktok.com/v2/auth/authorize/");
    authUrl.searchParams.append("client_key", TIKTOK_CLIENT_KEY);
    authUrl.searchParams.append("response_type", "code");
    authUrl.searchParams.append("scope", "user.info.basic");
    authUrl.searchParams.append("redirect_uri", redirectUri);
    authUrl.searchParams.append("state", state);

    res.redirect(authUrl.toString());
});

// 2. Callback de TikTok
app.get("/auth/tiktok/callback", async (req, res) => {
    const { code, state, error } = req.query;
    
    // Recuperar cookies
    const savedState = req.cookies.oauth_state;
    const frontendUrl = req.cookies.oauth_frontend || FRONTEND_URL;

    // Limpiar cookies
    res.clearCookie('oauth_state');
    res.clearCookie('oauth_frontend');

    if (error) {
        console.error("TikTok Login Error:", error);
        return res.redirect(`${frontendUrl}/auth-callback?error=tiktok_rejected`);
    }

    if (!state || state !== savedState) {
        return res.redirect(`${frontendUrl}/auth-callback?error=invalid_state`);
    }

    try {
        const redirectUri = `${getAppUrl(req)}/auth/tiktok/callback`;
        
        // Intercambiar código por token de acceso
        const tokenResponse = await axios.post("https://open.tiktokapis.com/v2/oauth/token/", {
            client_key: TIKTOK_CLIENT_KEY,
            client_secret: TIKTOK_CLIENT_SECRET,
            code: code,
            grant_type: "authorization_code",
            redirect_uri: redirectUri
        }, {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'Cache-Control': 'no-cache' }
        });

        const accessToken = tokenResponse.data.access_token;
        const openId = tokenResponse.data.open_id;

        // Obtener info del usuario
        const userResponse = await axios.get("https://open.tiktokapis.com/v2/user/info/?fields=open_id,union_id,avatar_url,display_name", {
            headers: { 'Authorization': `Bearer ${accessToken}` }
        });

        const userData = userResponse.data.data.user;
        const uid = `tiktok:${userData.open_id || openId}`;
        const displayName = userData.display_name || "Guerrero";
        const photoURL = userData.avatar_url || "";

        // Intentar crear o actualizar el usuario en Firebase
        let firebaseUser;
        try {
            firebaseUser = await admin.auth().getUser(uid);
            // Actualizamos la foto o el nombre si es necesario
            await admin.auth().updateUser(uid, { displayName, photoURL });
        } catch (e) {
            if (e.code === 'auth/user-not-found') {
                // Crear usuario
                firebaseUser = await admin.auth().createUser({
                    uid: uid,
                    displayName: displayName,
                    photoURL: photoURL
                });
            } else {
                throw e;
            }
        }

        // Crear Custom Token
        const customToken = await admin.auth().createCustomToken(uid);

        // Envía el Custom Token de vuelta al frontend
        res.redirect(`${frontendUrl}/auth-callback?token=${customToken}&provider=tiktok`);

    } catch (err) {
        console.error("Error validando token con TikTok:", err.response ? err.response.data : err.message);
        res.redirect(`${frontendUrl}/auth-callback?error=server_error`);
    }
});

// ====== INSTAGRAM OAUTH ======

const INSTAGRAM_CLIENT_ID = process.env.INSTAGRAM_CLIENT_ID || functions.params.defineString("INSTAGRAM_CLIENT_ID").value() || "TU_INSTAGRAM_CLIENT_ID";
const INSTAGRAM_CLIENT_SECRET = process.env.INSTAGRAM_CLIENT_SECRET || functions.params.defineString("INSTAGRAM_CLIENT_SECRET").value() || "TU_INSTAGRAM_CLIENT_SECRET";

// 1. Iniciar Login de Instagram
app.get("/auth/instagram", (req, res) => {
    const state = crypto.randomBytes(20).toString('hex');
    res.cookie("oauth_state", state, { maxAge: 3600000, httpOnly: true, secure: req.hostname !== "localhost" });
    const redirectFront = req.query.redirect_to || FRONTEND_URL;
    res.cookie("oauth_frontend", redirectFront, { maxAge: 3600000, httpOnly: true, secure: req.hostname !== "localhost" });

    const redirectUri = `${getAppUrl(req)}/auth/instagram/callback`;
    const authUrl = new URL("https://api.instagram.com/oauth/authorize");
    authUrl.searchParams.append("client_id", INSTAGRAM_CLIENT_ID);
    authUrl.searchParams.append("redirect_uri", redirectUri);
    authUrl.searchParams.append("scope", "user_profile,user_media");
    authUrl.searchParams.append("response_type", "code");
    authUrl.searchParams.append("state", state);

    res.redirect(authUrl.toString());
});

// 2. Callback de Instagram
app.get("/auth/instagram/callback", async (req, res) => {
    const { code, state, error, error_description } = req.query;
    const savedState = req.cookies.oauth_state;
    const frontendUrl = req.cookies.oauth_frontend || FRONTEND_URL;

    res.clearCookie('oauth_state');
    res.clearCookie('oauth_frontend');

    if (error) {
        console.error("Instagram Login Error:", error_description || error);
        return res.redirect(`${frontendUrl}/auth-callback?error=instagram_rejected`);
    }

    if (!state || state !== savedState) {
        return res.redirect(`${frontendUrl}/auth-callback?error=invalid_state`);
    }

    try {
        const redirectUri = `${getAppUrl(req)}/auth/instagram/callback`;
        
        // Form Data is required for Instagram
        const params = new URLSearchParams();
        params.append('client_id', INSTAGRAM_CLIENT_ID);
        params.append('client_secret', INSTAGRAM_CLIENT_SECRET);
        params.append('grant_type', 'authorization_code');
        params.append('redirect_uri', redirectUri);
        params.append('code', code);

        const tokenResponse = await axios.post("https://api.instagram.com/oauth/access_token", params, {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        });

        const accessToken = tokenResponse.data.access_token;
        const userId = tokenResponse.data.user_id;

        // Obtener la información gráfica básica del perfil
        const userResponse = await axios.get(`https://graph.instagram.com/me?fields=id,username&access_token=${accessToken}`);
        
        const username = userResponse.data.username;
        const instagramId = userResponse.data.id;
        const uid = `instagram:${instagramId}`;

        let firebaseUser;
        try {
            firebaseUser = await admin.auth().getUser(uid);
            await admin.auth().updateUser(uid, { displayName: username });
        } catch (e) {
            if (e.code === 'auth/user-not-found') {
                firebaseUser = await admin.auth().createUser({
                    uid: uid,
                    displayName: username
                });
            } else {
                throw e;
            }
        }

        const customToken = await admin.auth().createCustomToken(uid);
        res.redirect(`${frontendUrl}/auth-callback?token=${customToken}&provider=instagram`);

    } catch (err) {
        console.error("Error validando token con Instagram:", err.response ? err.response.data : err.message);
        res.redirect(`${frontendUrl}/auth-callback?error=server_error`);
    }
});

// ====== MERCADO PAGO CHECKOUT PRO ======
app.post("/checkout/preference", async (req, res) => {
    try {
        const { items, payer } = req.body;
        
        if (!items || items.length === 0) {
            return res.status(400).json({ error: "No items provided" });
        }

        const frontendUrl = req.body.redirectUrl || req.headers.origin || FRONTEND_URL;

        const preferenceData = {
            items: items.map(item => ({
                title: item.title,
                unit_price: Number(item.unit_price),
                quantity: Number(item.quantity),
                currency_id: "ARS"
            })),
            payer: {
                name: payer?.name || "Guerrero",
                email: payer?.email || "guerrero@valhallaboxgym.com"
            },
            back_urls: {
                success: frontendUrl,
                failure: frontendUrl,
                pending: frontendUrl
            },
            auto_return: "approved"
        };

        const response = await axios.post(
            "https://api.mercadopago.com/checkout/preferences",
            preferenceData,
            {
                headers: {
                    "Authorization": `Bearer ${MERCADOPAGO_ACCESS_TOKEN}`,
                    "Content-Type": "application/json"
                }
            }
        );

        res.json({ init_point: response.data.init_point, id: response.data.id });
    } catch (error) {
        console.error("Mercado Pago Preference Error:", error.response?.data || error.message);
        res.status(500).json({ error: "Failed to create preference" });
    }
});

exports.api = functions.https.onRequest(app);
