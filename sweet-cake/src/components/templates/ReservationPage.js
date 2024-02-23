import React from 'react';
import ReservationForm from '../molecules/ReservationForm';

function ReservationPage() {
  const handleSubmit = (formData) => {
    console.log('Datos de la reserva enviados:', formData);
  };

  return (
    <div>
      <ReservationForm onSubmit={handleSubmit} />
    </div>
  );
}

export default ReservationPage;