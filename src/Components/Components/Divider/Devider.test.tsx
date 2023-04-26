import React from 'react';
import { render, screen } from '@testing-library/react';

import Devider from './Devider';

describe('Devider', () => {
  test('render Devider', () => {
    render(<Devider />);
    const textNews = screen.getByText(/News/i);
    const textPopular = screen.getByText(/Popular/i);
    const addDiv = screen.getByTestId('divDevider');

    expect(textNews).toBeInTheDocument();
    expect(textPopular).toBeInTheDocument();
    expect(addDiv).toHaveClass('DeviderMainLine');
  });
});
