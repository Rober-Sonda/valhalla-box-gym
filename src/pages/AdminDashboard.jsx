import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { db } from '../firebase';
import { collection, onSnapshot, query, orderBy, limit, addDoc, getDocs, doc, setDoc } from 'firebase/firestore';
import { LogOut, BarChart3, ShoppingBag, CreditCard, Settings, PlusCircle, Trash2, Edit2, Plus, Eye, EyeOff, UploadCloud, Bell, MinusCircle, Shield } from 'lucide-react';
import AdminProducts from '../components/admin/AdminProducts';
import AdminPlans from '../components/admin/AdminPlans';
import AdminFinances from '../components/admin/AdminFinances';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const { currentUser, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // Request notification permissions
    if (Notification.permission === 'granted') {
      setNotificationsEnabled(true);
    } else if (Notification.permission !== 'denied') {
      Notification.requestPermission().then(permission => {
        if (permission === 'granted') setNotificationsEnabled(true);
      });
    }

    // Listen to recent orders
    const q = query(collection(db, 'orders'), orderBy('createdAt', 'desc'), limit(10));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === 'added') {
          const data = change.doc.data();
          // Check if this order was created recently (within last minute)
          // To avoid spamming old notifications on initial load
          const now = new Date();
          const orderDate = data.createdAt?.toDate ? data.createdAt.toDate() : new Date(data.createdAt);
          const diffMs = now - orderDate;
          
          if (diffMs < 60000 && Notification.permission === 'granted') {
            new Notification('¡Nueva Venta en Valhalla!', {
              body: `${data.customerName || 'Alguien'} acaba de comprar: ${data.item || 'un artículo'}`,
              icon: '/favicon.ico'
            });
            // Play a subtle sound if desired, though browsers often restrict audio without user interaction
          }
        }
      });
    });

    return () => unsubscribe();
  }, []);

  const handleMigrate = async () => {
    if (!window.confirm('¿Estás seguro de que quieres migrar los datos iniciales? Esto podría duplicar elementos si ya se hizo antes.')) return;
    try {
      const stockProducts = [
        {
          oldId: 106, name: 'Pantalones de Asedio (Short)', description: 'Shorts de entrenamiento de secado rápido, color negro con logos blancos.', price: 25000, tag: 'Forja Local', sizes: ['S', 'M', 'L', 'XL', 'XXL'], images: ['/assets/images/products/new/valhalla_shorts_negros_1.jpg', '/assets/images/products/new/valhalla_shorts_negros_2.jpg'], category: 'vestimenta', status: 'active', isOffer: false
        },
        {
          oldId: 107, name: 'Manto de la Tempestad', description: 'Campera rompevientos ligera con capucha, diseño bicolor beige y negro con cierre frontal.', price: 55000, tag: 'Forja Local', sizes: ['S', 'M', 'L', 'XL', 'XXL'], images: ['/assets/images/products/new/valhalla_campera_bicolor_1.jpg', '/assets/images/products/new/valhalla_campera_bicolor_2.jpg'], category: 'vestimenta', status: 'active', isOffer: false
        },
        {
          oldId: 108, name: 'Armadura de la Tempestad (Conjunto)', description: 'Conjunto deportivo completo: campera rompevientos beige y negro, más shorts negros.', price: 75000, tag: 'Forja Local', sizes: ['S', 'M', 'L', 'XL', 'XXL'], images: ['/assets/images/products/new/valhalla_conjunto_rompevientos_1.jpg', '/assets/images/products/new/valhalla_conjunto_rompevientos_2.jpg'], category: 'vestimenta', status: 'active', isOffer: false
        },
        {
          oldId: 109, name: 'Grebas del Conquistador (Jogger)', description: 'Pantalón largo de entrenamiento tipo jogger, diseño bicolor en negro y gris.', price: 40000, tag: 'Forja Local', sizes: ['S', 'M', 'L', 'XL', 'XXL'], images: ['/assets/images/products/new/valhalla_jogger_bicolor_1.jpg', '/assets/images/products/new/valhalla_jogger_bicolor_2.jpg'], category: 'vestimenta', status: 'active', isOffer: false
        },
        {
          oldId: 110, name: 'Cota de Malla Ligera', description: 'Remera deportiva de entrenamiento manga corta, color negro con estampados en blanco.', price: 25000, tag: 'Forja Local', sizes: ['S', 'M', 'L', 'XL', 'XXL'], images: ['/assets/images/products/new/valhalla_remera_negra_1.jpg', '/assets/images/products/new/valhalla_remera_negra_2.jpg'], category: 'vestimenta', status: 'active', isOffer: false
        },
        {
          oldId: 111, name: 'Armadura de Batalla Estival (Conjunto)', description: 'Conjunto de verano para entrenamiento: incluye remera negra y shorts deportivos negros.', price: 45000, tag: 'Forja Local', sizes: ['S', 'M', 'L', 'XL', 'XXL'], images: ['/assets/images/products/new/valhalla_conjunto_verano_1.jpg', '/assets/images/products/new/valhalla_conjunto_verano_2.jpg'], category: 'vestimenta', status: 'active', isOffer: false
        }
      ];

      const preorderProducts = [
        {
          oldId: 102, name: 'Puños de la Valkiria', description: 'Guantes de Boxeo Proyec Rosa/Negro', price: 95000, tag: 'Por Encargo', sizes: ['10oz', '12oz', '14oz', '16oz'], images: ['/assets/images/products/new/epic_guantes.png', '/assets/images/products/new/IMG_5690.jpg', '/assets/images/products/new/IMG_5691.jpg', '/assets/images/products/new/IMG_5693.jpg', '/assets/images/products/new/IMG_5694.jpg'], category: 'equipamiento', status: 'active', isOffer: false
        },
        {
          oldId: 103, name: 'Lazos de Sangre Valkiria', description: 'Vendas Profesionales Proyec Rosa', price: 18000, tag: 'Por Encargo', images: ['/assets/images/products/new/epic_vendas.png', '/assets/images/products/new/IMG_5698.jpg', '/assets/images/products/new/IMG_5699.jpg', '/assets/images/products/new/IMG_5700.jpg'], category: 'equipamiento', status: 'active', isOffer: false
        }
      ];

      const supplementProducts = [
        { oldId: 13, name: 'Proteína Gold Standard (Optimum Nutrition)', price: 110000, tag: 'Elixir de Recuperación', images: ['/assets/images/products/supp_on.jpg'], category: 'elixires', status: 'active', isOffer: false },
        { oldId: 14, name: 'Creatina Monohidrato (ENA)', price: 45000, tag: 'Fuerza Bruta', images: ['/assets/images/products/supp_ena.jpg'], category: 'elixires', status: 'active', isOffer: false },
        { oldId: 15, name: 'Pre-Entreno C4 Explosive (Cellucor)', price: 60000, tag: 'Furia de Berserker', images: ['/assets/images/products/supp_c4.jpg'], category: 'elixires', status: 'active', isOffer: false },
        { oldId: 16, name: 'Animal Pak Multivitamínico (Universal)', price: 85000, tag: 'Vitalidad Ancestral', images: ['/assets/images/products/supp_animal.jpg'], category: 'elixires', status: 'active', isOffer: false },
        { oldId: 17, name: 'Syntha-6 Protein Blend (BSN)', price: 95000, tag: 'Sabor de Valhalla', images: ['/assets/images/products/supp_syntha.jpg'], category: 'elixires', status: 'active', isOffer: false },
        { oldId: 18, name: 'ISO100 Hidrolizada (Dymatize)', price: 130000, tag: 'Absorción Relámpago', images: ['/assets/images/products/supp_iso100.jpg'], category: 'elixires', status: 'active', isOffer: false },
        { oldId: 19, name: 'Whey Protein (Star Nutrition)', price: 75000, tag: 'Armadura Muscular', images: ['/assets/images/products/supp_star.jpg'], category: 'elixires', status: 'active', isOffer: false },
        { oldId: 20, name: 'L-Glutamina Pura (SPX)', price: 38000, tag: 'Aliento Sanador', images: ['/assets/images/products/supp_glutamina.jpg'], category: 'elixires', status: 'active', isOffer: false },
        { oldId: 21, name: 'AminoX BCAA (BSN)', price: 55000, tag: 'Resistencia de Odín', images: ['/assets/images/products/supp_aminox.jpg'], category: 'elixires', status: 'active', isOffer: false }
      ];

      const allProducts = [...stockProducts, ...preorderProducts, ...supplementProducts];
      for (const prod of allProducts) {
        await addDoc(collection(db, 'products'), {
          ...prod, cost: 0, expenses: 0, profitMargin: 0, createdAt: new Date()
        });
      }

      const plans = [
        { id: 'escaldo', name: 'ESCALDO', desc: 'Plan Nutricional + Rutina (Extra Opcional)', price: 39000, period: '/mes', features: ['APP Exclusiva', 'Plan Nutricional', 'Seguimiento 100%'], btnClass: 'btn-outline', popular: false, weapon: 'StockShield', status: 'active' },
        { id: 'guerrero', name: 'GUERRERO', desc: 'Sala de Musculación', price: 37000, period: '/mes', features: ['Rutinas guiadas', 'APP Exclusiva', '1 vez al día los 6 días (Lun-Sáb)'], btnClass: 'btn-outline', popular: false, weapon: 'StockAxeShield', status: 'active' },
        { id: 'vikingo', name: 'VIKINGO', desc: 'Acceso exclusivo a Clases', price: 39000, period: '/mes', features: ['Kick Boxing', 'G.A.P', 'Crosstraining'], btnClass: 'btn-primary', popular: true, weapon: 'StockHammers', status: 'active' },
        { id: 'berserker', name: 'BERSERKER', desc: 'Pase Libre: Musculación + Clases', price: 44000, period: '/mes', features: ['Rutinas guiadas', 'Clases incluidas', 'APP Exclusiva', 'De Lunes a Sábados'], btnClass: 'btn-outline', popular: false, weapon: 'StockHelmet', status: 'active' }
      ];

      for (const plan of plans) {
        // Use setDoc to maintain IDs like 'escaldo', 'guerrero', etc.
        await setDoc(doc(db, 'plans', plan.id), {
          ...plan, createdAt: new Date()
        });
      }

      alert('¡Migración completada con éxito!');
    } catch (error) {
      console.error('Error migrando datos:', error);
      alert('Hubo un error al migrar los datos.');
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return <AdminFinances />;
      case 'products':
        return <AdminProducts />;
      case 'plans':
        return <AdminPlans />;
      case 'settings':
        return (
          <div className="admin-card">
            <h3 style={{ marginBottom: '1rem' }}>Mantenimiento y Migración</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              Utiliza esta sección para cargar los productos y tarifas predeterminados a la base de datos si está vacía. 
              Esto subirá todos los productos actuales (short, conjuntos, elixires) y los 4 planes.
            </p>
            <button className="admin-btn-primary" onClick={handleMigrate}>
              <UploadCloud size={20} /> Migrar Datos a Firebase
            </button>
          </div>
        );
      default:
        return <div>Módulo no encontrado</div>;
    }
  };

  return (
    <div className="admin-dashboard">
      <div className="admin-sidebar">
        <div className="admin-brand" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Shield size={24} color="var(--accent-gold)" />
          <span className="admin-brand-text"><span className="text-gold">ADMIN</span> PANEL</span>
        </div>
        <nav className="admin-nav">
          <button 
            className={`admin-nav-btn ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            <BarChart3 size={20} /> <span>Finanzas</span>
          </button>
          <button 
            className={`admin-nav-btn ${activeTab === 'products' ? 'active' : ''}`}
            onClick={() => setActiveTab('products')}
          >
            <ShoppingBag size={20} /> <span>Armería</span>
          </button>
          <button 
            className={`admin-nav-btn ${activeTab === 'plans' ? 'active' : ''}`}
            onClick={() => setActiveTab('plans')}
          >
            <CreditCard size={20} /> <span>Tarifas</span>
          </button>
          <button 
            className={`admin-nav-btn ${activeTab === 'settings' ? 'active' : ''}`}
            onClick={() => setActiveTab('settings')}
          >
            <Settings size={20} /> <span>Configuración</span>
          </button>
        </nav>
        <div className="admin-user">
          <div className="admin-user-info">
            <span className="admin-user-email">{currentUser?.email}</span>
            <span className="admin-user-role">Propietario / Admin</span>
          </div>
          <button className="admin-logout-btn" onClick={logout}>
            <LogOut size={18} /> <span>Salir</span>
          </button>
        </div>
      </div>
      <div className="admin-content">
        <div className="admin-topbar">
          <h2 className="admin-page-title">
            {activeTab === 'overview' && 'Panel Financiero'}
            {activeTab === 'products' && 'Gestión de Productos (Armería)'}
            {activeTab === 'plans' && 'Gestión de Tarifas'}
            {activeTab === 'settings' && 'Ajustes y Mantenimiento'}
          </h2>
          <div className="admin-topbar-actions" style={{ display: 'flex', alignItems: 'center' }}>
             <button className={`notification-btn ${notificationsEnabled ? 'enabled' : ''}`} title="Notificaciones activadas">
               <Bell size={20} />
             </button>
             <button className="admin-logout-btn-mobile" onClick={logout} title="Salir" style={{ display: 'none', background: 'transparent', border: 'none', color: '#f87171', cursor: 'pointer', marginLeft: '1rem' }}>
               <LogOut size={20} />
             </button>
          </div>
        </div>
        <div className="admin-main">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
