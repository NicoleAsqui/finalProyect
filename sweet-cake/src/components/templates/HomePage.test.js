import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import HomePage from './HomePage';

describe('HomePage component', () => {
  it('renders without crashing', () => {
    render(
      <Router>
        <HomePage />
      </Router>
    );
  });

  it('renders welcome message', () => {
    const { getByText } = render(
      <Router>
        <HomePage />
      </Router>
    );
    const welcomeMessage = getByText('Bienvenido a Sweet Cake');
    expect(welcomeMessage).toBeInTheDocument();
  });

  it('renders reservation button', () => {
    const { getByText } = render(
      <Router>
        <HomePage />
      </Router>
    );
    const reservationButton = getByText('Reserva');
    expect(reservationButton).toBeInTheDocument();
  });
});