import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { act } from 'react';

test('renders Hello World', () => {
  render(<App />);
  const headingElement = screen.getByText(/Hello World/i);
  expect(headingElement).toBeInTheDocument();
});
