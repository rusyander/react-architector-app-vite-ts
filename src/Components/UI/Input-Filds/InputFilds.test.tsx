import React from 'react';
import { render, screen } from '@testing-library/react';

import InputFilds from './InputFilds';

describe('InputFilds', () => {
  test('render profile filds in InputFilds', () => {
    render(
      <InputFilds
        onChange={() => {}}
        value="profile"
        params="profile"
        placeholder="Placeholder text"
        type="text"
        size="medium"
      />
    );
    const input = screen.getByRole('textbox');
    const displayedText = screen.getByDisplayValue(/profile/i);
    const placeholderText = screen.getByPlaceholderText(/Placeholder text/i);

    expect(input).toBeInTheDocument();
    expect(placeholderText).toBeInTheDocument();
    expect(input).toHaveClass('medium');
    expect(displayedText).toBeInTheDocument();
  });

  test('render search filds in InputFilds', () => {
    render(
      <InputFilds
        onChange={() => {}}
        value="search"
        params="search"
        placeholder="Placeholder text"
        type="text"
        size="medium"
      />
    );
    const input = screen.getByRole('textbox');
    const displayedText = screen.getByDisplayValue(/search/i);
    const placeholderText = screen.getByPlaceholderText(/Placeholder text/i);
    const image = screen.getByAltText(/search/i);

    expect(input).toBeInTheDocument();
    expect(placeholderText).toBeInTheDocument();
    expect(image).toBeInTheDocument();
    expect(displayedText).toBeInTheDocument();
    expect(image).toHaveClass('InputFildsSearchIcons');
    expect(input).toHaveClass('medium');
  });

  test('render post filds in InputFilds', () => {
    render(
      <InputFilds
        onChange={() => {}}
        value="post"
        params="post"
        placeholder="Placeholder text"
        type="text"
        size="medium"
      />
    );
    const input = screen.getByRole('textbox');
    const displayedText = screen.getByDisplayValue(/post/i);
    const placeholderText = screen.getByPlaceholderText(/Placeholder text/i);

    expect(input).toBeInTheDocument();
    expect(placeholderText).toBeInTheDocument();
    expect(displayedText).toBeInTheDocument();
    expect(input).toHaveClass('medium');
  });
});
