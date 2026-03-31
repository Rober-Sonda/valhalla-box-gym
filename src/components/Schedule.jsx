import React, { useState } from 'react';
import './Schedule.css';

const Schedule = () => {
  const [filter, setFilter] = useState('All');

  const classes = [
    { day: 'Lunes', time: '08:00 AM', name: 'MUSCULACIÓN', trainer: 'Lautaro', type: 'Musculación' },
    { day: 'Lunes', time: '13:00 PM', name: 'GAP', trainer: 'Nacho', type: 'GAP' },
    { day: 'Lunes', time: '19:00 PM', name: 'MUSCULACIÓN', trainer: 'Santino', type: 'Musculación' },
    
    { day: 'Martes', time: '08:00 AM', name: 'MUSCULACIÓN', trainer: 'Lautaro', type: 'Musculación' },
    { day: 'Martes', time: '13:00 PM', name: 'GAP', trainer: 'Nacho', type: 'GAP' },
    { day: 'Martes', time: '20:00 PM', name: 'KICKBOXING', trainer: 'Nacho', type: 'Kickboxing' },

    { day: 'Miércoles', time: '08:00 AM', name: 'MUSCULACIÓN', trainer: 'Lautaro', type: 'Musculación' },
    { day: 'Miércoles', time: '13:00 PM', name: 'GAP', trainer: 'Nacho', type: 'GAP' },
    { day: 'Miércoles', time: '19:00 PM', name: 'MUSCULACIÓN', trainer: 'Santino', type: 'Musculación' },

    { day: 'Jueves', time: '08:00 AM', name: 'MUSCULACIÓN', trainer: 'Lautaro', type: 'Musculación' },
    { day: 'Jueves', time: '13:00 PM', name: 'GAP', trainer: 'Nacho', type: 'GAP' },
    { day: 'Jueves', time: '20:00 PM', name: 'KICKBOXING', trainer: 'Nacho', type: 'Kickboxing' },

    { day: 'Viernes', time: '08:00 AM', name: 'MUSCULACIÓN', trainer: 'Lautaro', type: 'Musculación' },
    { day: 'Viernes', time: '13:00 PM', name: 'GAP', trainer: 'Nacho', type: 'GAP' },
    { day: 'Viernes', time: '19:00 PM', name: 'MUSCULACIÓN', trainer: 'Santino', type: 'Musculación' },
  ];

  const types = ['All', 'Musculación', 'GAP', 'Kickboxing'];

  const filteredClasses = filter === 'All' ? classes : classes.filter(c => c.type === filter);

  return (
    <section className="schedule-section" id="schedule">
      <div className="container">
        <div className="section-header text-center">
          <h2>HORARIOS DE <span className="text-gold">BATALLA</span></h2>
          <p className="subtitle">PREPÁRATE PARA LA ACCIÓN</p>
        </div>

        <div className="filter-container">
          {types.map(t => (
            <button 
              key={t} 
              className={`filter-btn ${filter === t ? 'active' : ''}`}
              onClick={() => setFilter(t)}
            >
              {t === 'All' ? 'TODAS' : t.toUpperCase()}
            </button>
          ))}
        </div>

        <div className="schedule-table-container">
          <table className="schedule-table">
            <thead>
              <tr>
                <th>Día</th>
                <th>Hora</th>
                <th>Clase</th>
                <th>Entrenador</th>
                <th>Acción</th>
              </tr>
            </thead>
            <tbody>
              {filteredClasses.map((cls, index) => (
                <tr key={index}>
                  <td className="font-bold">{cls.day}</td>
                  <td className="text-gold">{cls.time}</td>
                  <td>{cls.name}</td>
                  <td className="text-muted">{cls.trainer}</td>
                  <td>
                    <button className="book-btn">RESERVAR</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {filteredClasses.length === 0 && (
            <div className="text-center mt-4 text-muted">No hay clases programadas para este filtro.</div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
