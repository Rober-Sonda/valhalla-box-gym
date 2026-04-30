import React, { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { collection, onSnapshot, addDoc, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { DollarSign, TrendingUp, TrendingDown, MinusCircle, PlusCircle, Trash2 } from 'lucide-react';

const AdminFinances = () => {
  const [orders, setOrders] = useState([]);
  const [inscriptions, setInscriptions] = useState([]);
  const [expenses, setExpenses] = useState([]);
  
  const [newExpense, setNewExpense] = useState({ name: '', amount: 0 });

  useEffect(() => {
    const unsubOrders = onSnapshot(collection(db, 'orders'), (snapshot) => {
      setOrders(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });
    
    const unsubInscriptions = onSnapshot(collection(db, 'inscriptions'), (snapshot) => {
      setInscriptions(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });

    const unsubExpenses = onSnapshot(collection(db, 'finances', 'gastos_fijos', 'list'), (snapshot) => {
      setExpenses(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });

    return () => {
      unsubOrders();
      unsubInscriptions();
      unsubExpenses();
    };
  }, []);

  const handleAddExpense = async (e) => {
    e.preventDefault();
    if (!newExpense.name || newExpense.amount <= 0) return;
    
    try {
      await addDoc(collection(db, 'finances', 'gastos_fijos', 'list'), {
        name: newExpense.name,
        amount: Number(newExpense.amount),
        createdAt: new Date()
      });
      setNewExpense({ name: '', amount: 0 });
    } catch (error) {
      console.error("Error agregando gasto:", error);
    }
  };

  const handleDeleteExpense = async (id) => {
    try {
      await deleteDoc(doc(db, 'finances', 'gastos_fijos', 'list', id));
    } catch (error) {
      console.error("Error borrando gasto:", error);
    }
  };

  const handleDeleteMovement = async (item) => {
    if (!window.confirm('¿Seguro que quieres borrar este registro? Esta acción no se puede deshacer y afectará tus ingresos totales.')) return;
    try {
      const collectionName = item.type === 'Armería' ? 'orders' : 'inscriptions';
      await deleteDoc(doc(db, collectionName, item.id));
    } catch (error) {
      console.error("Error borrando movimiento:", error);
      alert("Hubo un error al borrar el registro.");
    }
  };

  const handleDeleteAllMovements = async () => {
    if (!window.confirm('⚠️ ADVERTENCIA ⚠️\n\nEstás a punto de borrar TODO el historial de ingresos (Inscripciones y Ventas de Armería).\n\n¿Estás completamente seguro de que deseas limpiar todo?')) return;
    
    try {
      const deletePromises = [];
      orders.forEach(o => {
        deletePromises.push(deleteDoc(doc(db, 'orders', o.id)));
      });
      inscriptions.forEach(i => {
        deletePromises.push(deleteDoc(doc(db, 'inscriptions', i.id)));
      });
      
      await Promise.all(deletePromises);
      alert('Se ha limpiado todo el historial de movimientos.');
    } catch (error) {
      console.error("Error limpiando movimientos:", error);
      alert("Hubo un error al intentar limpiar el historial.");
    }
  };

  // Calcular totales
  const totalIngresosArmeria = orders.reduce((sum, order) => sum + Number(order.total || 0), 0);
  
  // Inscripciones tienen precioFinal formateado como string "39.000", hay que parsearlo
  const parsePrice = (priceStr) => {
    if (!priceStr) return 0;
    if (typeof priceStr === 'number') return priceStr;
    const cleanStr = priceStr.replace(/\./g, '').replace(/,/g, '.');
    return Number(cleanStr) || 0;
  };

  const totalIngresosTarifas = inscriptions.reduce((sum, ins) => sum + parsePrice(ins.precioFinal || ins.plan?.price), 0);
  const ingresosTotales = totalIngresosArmeria + totalIngresosTarifas;

  // Gastos Fijos
  const totalGastosFijos = expenses.reduce((sum, exp) => sum + Number(exp.amount), 0);

  // Costos de Productos (Estimado basado en historial si quisiéramos, pero por ahora sumamos los costos base guardados, 
  // idealmente cada order guardaría el costo del producto al momento de la compra)
  // Como simplificación por ahora, tomamos costos desde la orden si los tiene, o 0.
  const totalCostosProductos = orders.reduce((sum, order) => {
    let orderCost = 0;
    if (order.items) {
      orderCost = order.items.reduce((itemSum, item) => itemSum + (Number(item.cost || 0) * (item.quantity || 1)), 0);
    }
    return sum + orderCost;
  }, 0);

  const gananciaNeta = ingresosTotales - totalGastosFijos - totalCostosProductos;

  return (
    <div className="admin-finances">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
        
        <div className="admin-card" style={{ borderLeft: '4px solid #4ade80' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h4 style={{ margin: 0, color: 'var(--text-muted)', fontWeight: 500 }}>Ingresos Totales</h4>
            <TrendingUp size={20} color="#4ade80" />
          </div>
          <div style={{ fontSize: '2rem', fontWeight: 'bold', marginTop: '1rem', color: 'var(--text-light)' }}>
            ${new Intl.NumberFormat('es-AR').format(ingresosTotales)}
          </div>
          <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
            Armería: ${new Intl.NumberFormat('es-AR').format(totalIngresosArmeria)} <br/>
            Tarifas: ${new Intl.NumberFormat('es-AR').format(totalIngresosTarifas)}
          </div>
        </div>

        <div className="admin-card" style={{ borderLeft: '4px solid #f87171' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h4 style={{ margin: 0, color: 'var(--text-muted)', fontWeight: 500 }}>Gastos Fijos</h4>
            <TrendingDown size={20} color="#f87171" />
          </div>
          <div style={{ fontSize: '2rem', fontWeight: 'bold', marginTop: '1rem', color: 'var(--text-light)' }}>
            ${new Intl.NumberFormat('es-AR').format(totalGastosFijos)}
          </div>
        </div>

        <div className="admin-card" style={{ borderLeft: '4px solid #facc15' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h4 style={{ margin: 0, color: 'var(--text-muted)', fontWeight: 500 }}>Costos Armería</h4>
            <MinusCircle size={20} color="#facc15" />
          </div>
          <div style={{ fontSize: '2rem', fontWeight: 'bold', marginTop: '1rem', color: 'var(--text-light)' }}>
            ${new Intl.NumberFormat('es-AR').format(totalCostosProductos)}
          </div>
        </div>

        <div className="admin-card" style={{ borderLeft: '4px solid var(--accent-gold)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h4 style={{ margin: 0, color: 'var(--text-muted)', fontWeight: 500 }}>Ganancia Neta</h4>
            <DollarSign size={20} color="var(--accent-gold)" />
          </div>
          <div style={{ fontSize: '2rem', fontWeight: 'bold', marginTop: '1rem', color: 'var(--accent-gold)' }}>
            ${new Intl.NumberFormat('es-AR').format(gananciaNeta)}
          </div>
        </div>

      </div>

      <div className="admin-form-grid">
        <div className="admin-card">
          <h3 style={{ marginTop: 0, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <MinusCircle size={20} color="#f87171" /> Registro de Gastos
          </h3>
          <form onSubmit={handleAddExpense} className="expense-form">
            <input 
              type="text" 
              className="admin-input" 
              placeholder="Nombre del gasto" 
              value={newExpense.name} 
              onChange={e => setNewExpense({...newExpense, name: e.target.value})} 
              required 
            />
            <input 
              type="number" 
              className="admin-input" 
              placeholder="Monto ($)" 
              value={newExpense.amount || ''} 
              onChange={e => setNewExpense({...newExpense, amount: e.target.value})} 
              required 
            />
            <button type="submit" className="admin-btn-primary" style={{ padding: '0.5rem 1rem' }}>Agregar</button>
          </form>

          <div className="table-responsive">
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '350px' }}>
              <tbody>
                {expenses.map(exp => (
                  <tr key={exp.id} style={{ borderBottom: '1px solid var(--border-color)' }}>
                    <td style={{ padding: '1rem 0' }}>{exp.name}</td>
                    <td style={{ padding: '1rem 0', color: '#f87171', fontWeight: 'bold' }}>${new Intl.NumberFormat('es-AR').format(exp.amount)}</td>
                    <td style={{ padding: '1rem 0', textAlign: 'right' }}>
                      <button onClick={() => handleDeleteExpense(exp.id)} style={{ background: 'transparent', border: 'none', color: '#f87171', cursor: 'pointer' }}>
                        <Trash2 size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
                {expenses.length === 0 && (
                  <tr><td colSpan="3" style={{ padding: '1rem 0', color: 'var(--text-muted)' }}>No hay gastos registrados.</td></tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        <div className="admin-card">
          <h3 style={{ marginTop: 0, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <PlusCircle size={20} color="#4ade80" /> Últimos Movimientos
            </div>
            {(orders.length > 0 || inscriptions.length > 0) && (
              <button 
                onClick={handleDeleteAllMovements} 
                className="admin-btn-secondary" 
                style={{ fontSize: '0.7rem', padding: '0.3rem 0.6rem', color: '#f87171', borderColor: '#f87171' }}
              >
                LIMPIAR TODO
              </button>
            )}
          </h3>
          <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
            {[...orders.map(o => ({...o, type: 'Armería', amt: o.total, dateStr: o.createdAt || o.date})), 
              ...inscriptions.map(i => ({...i, type: 'Tarifa', amt: parsePrice(i.precioFinal || i.plan?.price), dateStr: i.createdAt}))]
              .sort((a, b) => {
                const dA = a.dateStr?.toDate ? a.dateStr.toDate() : new Date(a.dateStr);
                const dB = b.dateStr?.toDate ? b.dateStr.toDate() : new Date(b.dateStr);
                return dB - dA;
              })
              .map((item, idx) => {
                const dateObj = item.dateStr?.toDate ? item.dateStr.toDate() : new Date(item.dateStr);
                return (
                  <div key={idx} style={{ padding: '1rem 0', borderBottom: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <strong style={{ display: 'block' }}>{item.userName || item.nombre}</strong>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                        {item.type} - {dateObj.toLocaleDateString()} {dateObj.toLocaleTimeString()}
                      </span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <div style={{ color: '#4ade80', fontWeight: 'bold' }}>
                        +${new Intl.NumberFormat('es-AR').format(item.amt)}
                      </div>
                      <button onClick={() => handleDeleteMovement(item)} style={{ background: 'transparent', border: 'none', color: '#f87171', cursor: 'pointer' }} title="Borrar registro">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                )
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminFinances;
