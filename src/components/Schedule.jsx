import React, { useState } from 'react';
import './Schedule.css';

const Schedule = () => {
  const [filter, setFilter] = useState('All');

  const classes = [
    { day: 'Lunes', time: '07:00 AM', name: 'FUNCTIONAL WOD', trainer: 'Erik', type: 'Functional' },
    { day: 'Lunes', time: '18:00 PM', name: 'STRENGTH LIFT', trainer: 'Erik', type: 'Strength' },
    { day: 'Martes', time: '08:00 AM', name: 'BOXING TACTICS', trainer: 'Ragnar', type: 'Striking' },
    { day: 'Martes', time: '19:00 PM', name: 'MOBILITY', trainer: 'Freya', type: 'Mobility' },
    { day: 'Miércoles', time: '07:00 AM', name: 'HIIT BURN', trainer: 'Freya', type: 'Functional' },
    { day: 'Miércoles', time: '20:00 PM', name: 'POWERLIFTING', trainer: 'Erik', type: 'Strength' },
    { day: 'Jueves', time: '09:00 AM', name: 'SPARRING', trainer: 'Ragnar', type: 'Striking' },
    { day: 'Viernes', time: '18:00 PM', name: 'VALHALLA WOD (TEAM)', trainer: 'Erik', type: 'Functional' },
    { day: 'Sábado', time: '10:00 AM', name: 'YOGA FOR LIFTERS', trainer: 'Freya', type: 'Mobility' },
  ];

  const types = ['All', 'Functional', 'Strength', 'Striking', 'Mobility'];

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
