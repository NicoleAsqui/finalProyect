import React, { useState } from 'react';
import './ReservationForm.css';

function ReservationForm() {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
    phoneNumber: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos de la reserva:", formData);
  };

  return (
    <div className="reservation-container">
      <div className="background-image"></div>
      <div className="form-container">
        <h2>Reservación</h2>
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Nombre"
            className="reservation-input"
            />
            <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="reservation-input"
            />
            <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="reservation-input"
            />
            <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Teléfono"
            className="reservation-input"
            />
            <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="reservation-input"
            />
          <button type="submit">Reservar</button>
        </form>
      </div>
    </div>
  );
}

export default ReservationForm;