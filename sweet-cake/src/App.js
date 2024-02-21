import React from 'react';
import HomePage from './components/templates/HomePage';
import ReservationPage from './components/templates/ReservationPage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/reservation" element={<ReservationPage />} />
    </Routes>
  );
}

export default App;