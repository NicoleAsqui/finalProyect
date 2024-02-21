import React from 'react';
import { render } from '@testing-library/react';
import CafeBackground from './CafeBackground';

describe('CafeBackground component', () => {
  it('renders without crashing', () => {
    render(<CafeBackground />);
  });

  it('renders with the correct container class', () => {
    const { container } = render(<CafeBackground />);
    const backgroundDiv = container.firstChild;

    expect(backgroundDiv).toHaveClass('contenedor');
  });
});