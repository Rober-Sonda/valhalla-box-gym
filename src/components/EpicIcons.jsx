import React from 'react';

// Escaldo: Escudo Nórdico Pesado de Infantería (Proporción Larga / Kite Shield Estilizado)
export const EpicShield = (props) => (
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeLinejoin="round" strokeLinecap="round" {...props}>
    {/* Contorno del Escudo Largo (Forma alargada letal) */}
    <path d="M 25 15 L 75 15 L 85 32 C 85 68, 70 88, 50 97 C 30 88, 15 68, 15 32 Z" strokeWidth="5" fill="currentColor" fillOpacity="0.12" />
    
    {/* Ribete metálico interno que sigue el perfil esbelto */}
    <path d="M 30 22 L 70 22 L 78 35 C 78 65, 65 83, 50 90 C 35 83, 22 65, 22 35 Z" strokeWidth="2" strokeDasharray="3 5" opacity="0.4"/>
    
    {/* Eje central vertical (Spine de acero) */}
    <path d="M 50 15 L 50 97" strokeWidth="4" />
    
    {/* Refuerzo superior principal horizontal */}
    <path d="M 15 32 L 85 32" strokeWidth="3" />
    {/* Refuerzo medio */}
    <path d="M 20 50 L 80 50" strokeWidth="2" opacity="0.5" />
    
    {/* Umbo Central (Protección del puño, proporcional al diseño esbelto) */}
    <circle cx="50" cy="41" r="11" strokeWidth="4" fill="#0a0a0c" />
    <circle cx="50" cy="41" r="3" fill="currentColor" />
    
    {/* Remaches de contención estructural */}
    <circle cx="21" cy="24" r="1.5" fill="currentColor" strokeWidth="1" />
    <circle cx="79" cy="24" r="1.5" fill="currentColor" strokeWidth="1" />
    <circle cx="32" cy="32" r="1.5" fill="currentColor" strokeWidth="1" />
    <circle cx="68" cy="32" r="1.5" fill="currentColor" strokeWidth="1" />
    <circle cx="50" cy="50" r="1.5" fill="currentColor" strokeWidth="1" />
    <circle cx="50" cy="65" r="1.5" fill="currentColor" strokeWidth="1" />
    
    {/* Marcas de combate (Cortes) */}
    <path d="M 35 60 L 42 72 M 68 38 L 62 48 M 28 80 L 32 85" strokeWidth="1.5" opacity="0.4" strokeDasharray="1 2" />
  </svg>
);

// Guerrero: Espada Vikinga de Alto Rango (Ulfberht Realista y Detallada)
export const EpicSword = (props) => (
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeLinejoin="round" strokeLinecap="round" {...props}>
    {/* Rotamos todo el grupo 45 grados para que cruce de esquina a esquina epicamente */}
    <g transform="rotate(45 50 50)">
      {/* Mitad Izquierda de la Hoja (Bisel ensombrecido) */}
      <path d="M 40 70 L 46 12 L 50 3 L 50 70 Z" strokeWidth="2" fill="currentColor" fillOpacity="0.25" />
      {/* Mitad Derecha de la Hoja (Bisel iluminado captando la luz) */}
      <path d="M 60 70 L 54 12 L 50 3 L 50 70 Z" strokeWidth="2" fill="currentColor" fillOpacity="0.08" />
      
      {/* Fuller (Canaladura central que aligera la espada medieval) conectando con el acero */}
      <path d="M 50 15 L 50 68" strokeWidth="4" opacity="0.6" />
      <path d="M 48 18 L 48 65 M 52 18 L 52 65" strokeWidth="1.5" opacity="0.4" />

      {/* Guarda Cruzada (Crossguard) gruesa y recta, sello de espadas nórdicas */}
      <rect x="26" y="70" width="48" height="6" rx="2" strokeWidth="3" fill="#0a0a0c" />
      {/* Decoración incrustada de la guarda */}
      <circle cx="30" cy="73" r="1.5" fill="currentColor" />
      <circle cx="70" cy="73" r="1.5" fill="currentColor" />
      <path d="M 40 70 L 40 76 M 60 70 L 60 76" strokeWidth="2" opacity="0.5" />
      
      {/* Empuñadura envuelta ajustadamente en tiras de cuero entrelazado */}
      <rect x="43" y="76" width="14" height="15" strokeWidth="3" fill="currentColor" fillOpacity="0.15" />
      <path d="M 43 78 L 57 80 M 43 82 L 57 84 M 43 86 L 57 88" strokeWidth="2" opacity="0.9" />
      <path d="M 57 78 L 43 80 M 57 82 L 43 84 M 57 86 L 43 88" strokeWidth="2" opacity="0.5" />
      
      {/* Pomo (Pommel) lobulado clásico de la era Vikinga para contrapeso */}
      <path d="M 38 91 C 45 100, 55 100, 62 91 Z" strokeWidth="3" fill="currentColor" fillOpacity="0.2" />
      {/* Los tres lóbulos remachados del pomo */}
      <circle cx="43" cy="94" r="2.5" strokeWidth="2" fill="#0a0a0c" />
      <circle cx="50" cy="96" r="3" strokeWidth="2" fill="#0a0a0c" />
      <circle cx="57" cy="94" r="2.5" strokeWidth="2" fill="#0a0a0c" />

      {/* Marcas de Herrero / Runas de inscripción en la hoja (Letras de acero Ulfberht) */}
      <path d="M 50 30 L 47 35 M 50 42 L 53 47 M 47 52 L 53 52 M 50 58 L 47 62 L 53 62" strokeWidth="2" opacity="0.4" />
      <circle cx="50" cy="25" r="1" fill="currentColor" opacity="0.5" />
    </g>
  </svg>
);

// Vikingo: Hacha de Dos Filos (Double-Bladed Epic Axe Realista Nivel 3)
export const EpicDoubleAxe = (props) => (
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeLinejoin="round" strokeLinecap="round" {...props}>
    {/* Punta superior de Acero (Lanza) */}
    <path d="M45 15 L55 15 L52 2 L48 2 Z" strokeWidth="3" fill="currentColor" fillOpacity="0.3" />
    
    {/* Mango inferior de madera y pomo */}
    <path d="M46 55 L54 55 L52 95 L48 95 Z" strokeWidth="3" fill="currentColor" fillOpacity="0.2" />
    <path d="M46 95 L54 95 L50 100 Z" strokeWidth="3" fill="currentColor" />
    
    {/* Envolturas de cuero antideslizante en el agarre */}
    <path d="M47 60 L51 63 M47 65 L51 68 M47 70 L51 73 M47 75 L51 78 M47 80 L51 83 M47 85 L51 88" strokeWidth="2" opacity="0.8" />
    
    {/* Encaje central masivo y forjado (Socket) */}
    <rect x="42" y="15" width="16" height="40" rx="2" strokeWidth="3" fill="#0a0a0c" />
    <line x1="42" y1="20" x2="58" y2="20" strokeWidth="2" opacity="0.6" />
    <line x1="42" y1="50" x2="58" y2="50" strokeWidth="2" opacity="0.6" />
    
    {/* Remaches de fijación estructurales */}
    <circle cx="50" cy="25" r="2" strokeWidth="2" fill="currentColor" />
    <circle cx="50" cy="35" r="3" strokeWidth="3" fill="currentColor" fillOpacity="0.5" />
    <circle cx="50" cy="45" r="2" strokeWidth="2" fill="currentColor" />

    {/* ====== HOJA IZQUIERDA ====== */}
    {/* Perfil principal asimétrico pero balanceado */}
    <path d="M42 20 C 25 10, 15 5, 10 5 C 0 25, 0 45, 10 65 C 15 65, 25 60, 42 50 Z" strokeWidth="4" fill="currentColor" fillOpacity="0.1" />
    {/* Bisel del filo de corte (La parte afilada brillante) */}
    <path d="M18 11 C 10 25, 10 45, 18 59" strokeWidth="2" opacity="0.6" />
    {/* Hueco forjado para aligerar peso (Estilo fantasía/nórdico) */}
    <path d="M35 28 L 26 28 L 22 35 L 26 42 L 35 42 Z" strokeWidth="2" opacity="0.4" />
    
    {/* ====== HOJA DERECHA ====== */}
    <path d="M58 20 C 75 10, 85 5, 90 5 C 100 25, 100 45, 90 65 C 85 65, 75 60, 58 50 Z" strokeWidth="4" fill="currentColor" fillOpacity="0.1" />
    {/* Bisel del filo de corte Derecho */}
    <path d="M82 11 C 90 25, 90 45, 82 59" strokeWidth="2" opacity="0.6" />
    {/* Hueco forjado Derecho */}
    <path d="M65 28 L 74 28 L 78 35 L 74 42 L 65 42 Z" strokeWidth="2" opacity="0.4" />

    {/* Sangraduras/Grabados sutiles hacia los bordes */}
    <path d="M35 20 L25 15 M35 50 L25 55" strokeWidth="2" opacity="0.3" strokeDasharray="2 2" />
    <path d="M65 20 L75 15 M65 50 L75 55" strokeWidth="2" opacity="0.3" strokeDasharray="2 2" />
  </svg>
);

// Berserker: Yelmo de Bestia (Savage Horned Berserker Helm Épico)
export const EpicBerserker = (props) => (
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeLinejoin="round" strokeLinecap="round" {...props}>
    {/* Cota de malla desgarrada colgando de los bordes */}
    <path d="M 15 50 C 5 70, 15 90, 25 100 C 35 85, 45 95, 50 90 C 55 95, 65 85, 75 100 C 85 90, 95 70, 85 50 Z" strokeWidth="2" opacity="0.25" strokeDasharray="2 3" />
    
    {/* Cuernos estriados masivos (Sello inequívoco de ferocidad) */}
    {/* Cuerno Izquierdo */}
    <path d="M 18 45 C -15 30, -5 -10, 15 5 C 10 20, 20 28, 30 35 Z" strokeWidth="4" fill="currentColor" fillOpacity="0.12" />
    {/* Estrías de cuerno natural */}
    <path d="M 5 22 C 10 32, 15 37, 25 40 M 8 13 C 12 25, 18 30, 24 35" strokeWidth="1.5" opacity="0.6" />
    
    {/* Cuerno Derecho */}
    <path d="M 82 45 C 115 30, 105 -10, 85 5 C 90 20, 80 28, 70 35 Z" strokeWidth="4" fill="currentColor" fillOpacity="0.12" />
    <path d="M 95 22 C 90 32, 85 37, 75 40 M 92 13 C 88 25, 82 30, 76 35" strokeWidth="1.5" opacity="0.6" />

    {/* Bóveda forjada del casco de placas gruesas */}
    <path d="M 18 50 C 18 10, 40 5, 50 5 C 60 5, 82 10, 82 50 Z" strokeWidth="5" fill="currentColor" fillOpacity="0.18" />

    {/* Bandas de acero cruzadas fijadas a martillo */}
    <path d="M 50 5 L 50 45" strokeWidth="6" />
    <path d="M 18 35 Q 50 20, 82 35" strokeWidth="5" />
    <circle cx="50" cy="15" r="2.5" fill="currentColor" />
    <circle cx="50" cy="28" r="2.5" fill="currentColor" />

    {/* Máscara Frontal Demoniaca (Mutación de máscara ocular a mandíbula) */}
    <path d="M 12 45 C 12 70, 25 75, 35 72 L 40 85 L 47 75 L 53 75 L 60 85 L 65 72 C 75 75, 88 70, 88 45 Z" strokeWidth="5" fill="#0a0a0c" />
    
    {/* Cuencas oculares furiosas y oblicuas */}
    <path d="M 22 55 L 35 58 C 40 50, 50 50, 50 50 C 50 50, 60 50, 65 58 L 78 55 Z" strokeWidth="2.5" opacity="0.5" />
    {/* Ceño fruncido de acero oscuro */}
    <line x1="26" y1="50" x2="40" y2="56" strokeWidth="4" />
    <line x1="74" y1="50" x2="60" y2="56" strokeWidth="4" />
    
    {/* Los ojos del Berserker, pupilas fijas brillando */}
    <circle cx="38" cy="56" r="3" fill="currentColor" />
    <circle cx="62" cy="56" r="3" fill="currentColor" />

    {/* Colmillos de acero colgando a los laterales de las mandíbulas */}
    <path d="M 26 68 L 28 92 L 35 72" strokeWidth="3" fill="currentColor" fillOpacity="0.4" />
    <path d="M 74 68 L 72 92 L 65 72" strokeWidth="3" fill="currentColor" fillOpacity="0.4" />

    {/* Rasguños super profundos en la cabeza: Sobrevivió a bestias */}
    <path d="M 23 20 L 30 32 M 27 17 L 34 29 M 31 15 L 38 27" strokeWidth="2" opacity="0.6" strokeDasharray="3 3"/>
  </svg>
);

// Jarl: Casco Vikingo de Alto Rango
export const EpicHelmet = (props) => (
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeLinejoin="round" strokeLinecap="round" {...props}>
    {/* Cuernos texturados */}
    <path d="M22 45 C 5 25, 5 5, 15 5 C 20 20, 25 35, 30 40" strokeWidth="5" />
    <path d="M78 45 C 95 25, 95 5, 85 5 C 80 20, 75 35, 70 40" strokeWidth="5" />
    {/* Cúpula */}
    <path d="M20 65 C 20 20, 80 20, 80 65" strokeWidth="7" fill="currentColor" fillOpacity="0.05" />
    <line x1="12" y1="65" x2="88" y2="65" strokeWidth="10" />
    <circle cx="25" cy="65" r="2" strokeWidth="3" fill="#0a0a0c" />
    <circle cx="50" cy="65" r="2" strokeWidth="3" fill="#0a0a0c" />
    <circle cx="75" cy="65" r="2" strokeWidth="3" fill="#0a0a0c" />
    {/* Protección Ocular (Antifaz de placa) */}
    <path d="M35 65 C 35 85, 45 90, 50 95 C 55 90, 65 85, 65 65" strokeWidth="6" />
    <path d="M25 65 C 25 80, 35 85, 35 65" strokeWidth="5" />
    <path d="M75 65 C 75 80, 65 85, 65 65" strokeWidth="5" />
  </svg>
);

// Hero: Mjolnir (Martillo de Thor) super detallado
export const EpicMjolnir = (props) => (
  <svg viewBox="0 0 140 140" fill="none" stroke="currentColor" strokeLinejoin="round" strokeLinecap="round" {...props}>
    {/* Correa trasera */}
    <path d="M70 120 C 50 140, 90 140, 70 120" strokeWidth="6" />
    {/* Mango con envoltura de cuero */}
    <rect x="55" y="45" width="30" height="75" rx="5" strokeWidth="6" fill="currentColor" fillOpacity="0.1" />
    <path d="M55 55 L85 65 M55 65 L85 75 M55 75 L85 85 M55 85 L85 95 M55 95 L85 105" strokeWidth="4" />
    <rect x="50" y="115" width="40" height="10" rx="2" strokeWidth="6" fill="#0a0a0c" />
    {/* Cabeza del martillo */}
    <path d="M30 45 L110 45 L125 10 L15 10 Z" strokeWidth="7" fill="currentColor" fillOpacity="0.1" />
    {/* Grabados rúnicos y nodos (Triskelion simple central) */}
    <circle cx="70" cy="27" r="10" strokeWidth="4" />
    <path d="M70 27 Q 80 17, 90 27" strokeWidth="3" />
    <path d="M70 27 Q 60 40, 50 30" strokeWidth="3" />
    <path d="M70 27 Q 80 40, 85 20" strokeWidth="3" />
    <line x1="35" y1="27" x2="45" y2="27" strokeWidth="4" />
    <line x1="95" y1="27" x2="105" y2="27" strokeWidth="4" />
    <line x1="50" y1="10" x2="50" y2="45" strokeWidth="2" opacity="0.5" />
    <line x1="90" y1="10" x2="90" y2="45" strokeWidth="2" opacity="0.5" />
  </svg>
);
