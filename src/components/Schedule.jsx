import React, { useState } from 'react';
import './Schedule.css';

const Schedule = () => {
  const [filter, setFilter] = useState('Musculación');

  const disciplines = [
    {
      name: 'Musculación',
      trainer: 'Lautaro, Santino & Nacho (Jarl)',
      schedules: [
        { days: 'Lunes a Viernes', time: '08:00 a 10:00\n13:00 a 21:30' },
        { days: 'Sábados', time: '11:00 a 14:00' }
      ]
    },
    {
      name: 'Crosstraining',
      trainer: 'Santino & Nacho (Jarl)',
      schedules: [
        { days: 'Lunes, Miérc y Viernes', time: '14:00 a 15:00\n20:15 a 21:15' }
      ]
    },
    {
      name: 'GAP',
      trainer: 'Nacho (Jarl)',
      schedules: [
        { days: 'Martes y Jueves', time: '14:00 a 15:00\n20:00 a 21:00' }
      ]
    },
    {
      name: 'Kickboxing',
      trainer: 'Nacho (Jarl)',
      schedules: [
        { days: 'Lunes, Miérc y Viernes', time: '13:00 a 14:00\n19:15 a 20:15' },
        { days: 'Martes y Jueves', time: '19:00 a 20:00' }
      ]
    }
  ];

  const activeDiscipline = disciplines.find(d => d.name === filter) || disciplines[0];

  return (
    <section className="schedule-section" id="schedule">
      <div className="container">
        <div className="section-header text-center">
          <h2>HORARIOS DE <span className="text-gold">BATALLA</span></h2>
          <p className="subtitle">ELIGE TU DISCIPLINA</p>
        </div>

        <div className="filter-container">
          {disciplines.map(d => (
            <button 
              key={d.name} 
              className={`filter-btn ${filter === d.name ? 'active' : ''}`}
              onClick={() => setFilter(d.name)}
            >
              {d.name.toUpperCase()}
            </button>
          ))}
        </div>

        <div className="schedule-cards">
          {activeDiscipline.schedules.map((sched, index) => (
            <div className="class-card animate-fade-in" key={index}>
              <h4 className="font-bold mb-2">{sched.days}</h4>
              <p className="text-gold text-2xl font-heading mb-1" style={{ whiteSpace: 'pre-line' }}>{sched.time}</p>
              <p className="mb-4 text-muted">A cargo de: <span className="text-light">{activeDiscipline.trainer}</span></p>
              <button className="book-btn w-100" disabled style={{ opacity: 0.6, cursor: 'not-allowed', border: '1px dashed var(--border-color)', color: 'var(--text-muted)' }}>RESERVAS PROXIMAMENTE</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
