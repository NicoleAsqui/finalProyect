import React from 'react';
import CafeBackground from '../organisms/CafeBackground';
import Button from '../atoms/Button';
import { Link } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  return (
    <div className="home-page-container">
      <CafeBackground />
      <div className="content-container">
        <div className="content-box">
          <h1>Bienvenido a Sweet Cake</h1>
          <Link to="/reservation">
            <Button>Reserva</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;