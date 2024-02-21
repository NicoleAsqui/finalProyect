import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ReservationForm from './ReservationForm';

describe('ReservationForm component', () => {
  it('renders without crashing', () => {
    render(<ReservationForm />);
  });

  it('updates form data when inputs change', () => {
    const { getByPlaceholderText } = render(<ReservationForm />);
    const nameInput = getByPlaceholderText('Nombre');
    const dateInput = getByPlaceholderText('Fecha');
    const timeInput = getByPlaceholderText('Hora');
    const phoneInput = getByPlaceholderText('Teléfono');
    const emailInput = getByPlaceholderText('Email');

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(dateInput, { target: { value: '2022-12-31' } });
    fireEvent.change(timeInput, { target: { value: '12:00' } });
    fireEvent.change(phoneInput, { target: { value: '1234567890' } });
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });

    expect(nameInput.value).toBe('John Doe');
    expect(dateInput.value).toBe('2022-12-31');
    expect(timeInput.value).toBe('12:00');
    expect(phoneInput.value).toBe('1234567890');
    expect(emailInput.value).toBe('john@example.com');
  });

  it('submits form data when the submit button is clicked', () => {
    const handleSubmit = jest.fn();
    const { getByText } = render(<ReservationForm onSubmit={handleSubmit} />);
  
    fireEvent.click(getByText('Reservar'));
  
    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });
});