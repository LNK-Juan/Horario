import React, { useState } from 'react';

const FormActividades = ({ addActivity }) => {
  const [form, setForm] = useState({
    name: '',
    time: '',
    day: 'Lunes'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.time) return;
    addActivity(form.day, { name: form.name, time: form.time });
    setForm({ name: '', time: '', day: 'Lunes' });
  };

  return (
    <form onSubmit={handleSubmit} className="activity-form">
      <input
        type="text"
        placeholder="Nombre"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <input
        type="time"
        value={form.time}
        onChange={(e) => setForm({ ...form, time: e.target.value })}
      />
      <select
        value={form.day}
        onChange={(e) => setForm({ ...form, day: e.target.value })}
      >
        <option value="Lunes">Lunes</option>
        <option value="Martes">Martes</option>
        <option value="Miércoles">Miércoles</option>
        <option value="Jueves">Jueves</option>
        <option value="Viernes">Viernes</option>
      </select>
      <button type="submit">Añadir</button>
    </form>
  );
};

export default FormActividades;