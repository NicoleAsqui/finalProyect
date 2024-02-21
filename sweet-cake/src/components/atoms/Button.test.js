import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from './Button';

test('button click event works correctly', () => {
    const handleClick = jest.fn();
    const { getByText } = render(<Button onClick={handleClick}>Click me</Button>);
    const button = getByText('Click me');
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);  
});