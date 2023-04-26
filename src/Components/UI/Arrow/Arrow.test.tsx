import React from 'react';
import { render, screen } from '@testing-library/react';

import Arrow from './Arrow';

describe('Arrow', () => {
  test('render left in Arrow', () => {
    render(<Arrow position="left" />);
    const img = screen.getByRole('img');

    expect(img).toHaveClass('Arrow--left');
  });

  test('render right in Arrow', () => {
    render(<Arrow position="right" />);
    const img = screen.getByRole('img');

    expect(img).toHaveClass('Arrow--right');
  });

  test('render top in Arrow', () => {
    render(<Arrow position="top" />);
    const img = screen.getByRole('img');

    expect(img).toHaveClass('Arrow--top');
  });

  test('render bottom in Arrow', () => {
    render(<Arrow position="bottom" />);
    const img = screen.getByRole('img');

    expect(img).toHaveClass('Arrow--bottom');
  });
});
