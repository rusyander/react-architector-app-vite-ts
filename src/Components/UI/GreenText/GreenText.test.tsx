import React from 'react';
import { render, screen } from '@testing-library/react';

import GreenText from './GreenText';

describe('GreenText', () => {
  test('render with props in GreenText', () => {
    render(
      <GreenText size="large" weight="bold" className="MyClass">
        Test
      </GreenText>
    );
    const text = screen.getByText(/Test/i);

    expect(text).toBeInTheDocument();
    expect(text).toHaveClass('large');
    expect(text).not.toHaveClass('notFount');
  });

  test('render without props in GreenText', () => {
    render(<GreenText>Test</GreenText>);
    const text = screen.queryByText(/Test/i);

    expect(text).toBeInTheDocument();
    expect(text).not.toHaveClass('large');
  });
});
