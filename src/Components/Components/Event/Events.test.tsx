import React from 'react';
import { render, screen } from '@testing-library/react';

import Events from './Events';

describe('Events', () => {
  test('render Events', () => {
    render(<Events eventsDate="Webinar UI Design at 09:00 am." />);
    const text = screen.getByText(/Webinar UI Design at 09:00 am./i);
    expect(text).toBeInTheDocument();
  });
});
