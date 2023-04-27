import React from 'react';
import { vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';

import InputPostFilds from './InputPostFilds';

describe('InputPostFilds', () => {
  test('render InputPostFilds', () => {
    const callback = vi.fn();
    render(
      <InputPostFilds placeholder="MyText" onChange={callback} size="medium" />
    );

    const input = screen.getByRole('textbox');
    const inputPlacaholder = screen.getByPlaceholderText('MyText');
    const fileDownloadIcon = screen.getByAltText('fileDownloadIcon');
    const fileInput = screen.getByTestId('fileInput');
    const submitButton = screen.getByRole('button', { name: /submit/i });
    const submitIcon = screen.getByTestId('submitIcon');

    user.click(input);
    user.keyboard('MyInput');

    user.click(submitButton);

    expect(input).toBeInTheDocument();
    expect(inputPlacaholder).toBeInTheDocument();
    expect(fileDownloadIcon).toBeInTheDocument();
    expect(fileInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
    expect(submitIcon).toBeInTheDocument();
    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledWith({ text: 'MyInput', image: [] });
  });
});
