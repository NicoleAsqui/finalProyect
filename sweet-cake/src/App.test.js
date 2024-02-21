import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

test('renders homepage by default', () => {
  render(
    <Router>
      <App />
    </Router>
  );
  const homePageElement = screen.getByText(/Bienvenido a Sweet Cake/i);
  expect(homePageElement).toBeInTheDocument();
});
