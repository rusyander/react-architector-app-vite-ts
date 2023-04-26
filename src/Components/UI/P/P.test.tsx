import React from 'react';
import { render, screen } from '@testing-library/react';

import P from './P';

describe('P', () => {
  test('render with props in P', () => {
    render(
      <P size="large" weight="bold" className="MyClass">
        Test
      </P>
    );
    const text = screen.getByText(/Test/i);
    expect(text).toBeInTheDocument();
  });

  test('render without props in P', () => {
    render(<P>Test</P>);
    const text = screen.queryByText(/Test/i);
    expect(text).toBeInTheDocument();
  });
});
