import React from 'react';
import { describe, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import App from './App';

describe('testing app', () => {
  test('Renders hello world', () => {
    render(<App />);
    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });
});
