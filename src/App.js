import React, { useState, useEffect } from 'react';
import './App.css';
import ColumnaDia from './ColumnaDia';
import FormActividades from './FormActividades';

const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];




function App() {


  const [activities, setActivities] = useState(() => {
    const saved = localStorage.getItem('horario-actividades');
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    localStorage.setItem('horario-actividades', JSON.stringify(activities));
  }, [activities]);

  const addActivity = (day, activity) => {
    setActivities(prev => ({
      ...prev,
      [day]: [...(prev[day] || []), activity]
    }));
  };

  const deleteActivity = (day, index) => {
    setActivities(prev => ({
      ...prev,
      [day]: prev[day].filter((_, i) => i !== index)
    }));
  };



  return (
    <div className="app">
      <h1>Mi Horario Semanal</h1>
      <FormActividades addActivity={addActivity} />
      <div className="schedule">
        {days.map(day => (
          <ColumnaDia
            key={day}
            day={day}
            activities={activities[day] || []}
            onDelete={deleteActivity}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
