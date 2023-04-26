import React from 'react';
import { render, screen } from '@testing-library/react';

import InputCheckbox from './InputCheckbox';

describe('InputCheckbox', () => {
  test('render with checkeds === true in InputCheckbox', () => {
    render(<InputCheckbox checkeds={true} setChecked={() => {}} />);
    const checkbox = screen.getByRole('checkbox');

    expect(checkbox).toBeInTheDocument();
    expect(checkbox).toBeChecked();
  });

  test('render with checkeds === false in InputCheckbox', () => {
    render(<InputCheckbox checkeds={false} setChecked={() => {}} />);
    const checkbox = screen.getByRole('checkbox');

    expect(checkbox).toBeInTheDocument();
    expect(checkbox).not.toBeChecked();
  });
});
