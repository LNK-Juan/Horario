import React from 'react';

const ColumnaDia = ({ day, activities, onDelete }) => {
  return (
    <div className="day-column">
      <h3>{day}</h3>
      <ul>
        {activities.map((activity, index) => (
          <li key={index}>
            {activity.name} - {activity.time}
            <button onClick={() => onDelete(day, index)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ColumnaDia;