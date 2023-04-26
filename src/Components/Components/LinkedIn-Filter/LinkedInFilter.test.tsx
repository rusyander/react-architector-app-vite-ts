import React from 'react';
import { render, screen } from '@testing-library/react';

import LinedInFilter from './LinkedInFilter';

describe('LinedInFilter', () => {
  test('render with setGreen === true in LinedInFilter', () => {
    render(
      <LinedInFilter
        returnData={() => {}}
        setGreen={true}
        category="Research"
      />
    );
    const categoryText = screen.queryByTestId('greenText');
    const categoryTextNotShow = screen.queryByTestId('defaultText');
    const category = screen.getByText(/Research/i);
    const checkbox = screen.getByRole('checkbox');

    expect(categoryText).toBeInTheDocument();
    expect(categoryTextNotShow).not.toBeInTheDocument();
    expect(category).toBeInTheDocument();
    expect(checkbox).toBeInTheDocument();
  });

  test('render with setGreen === true in LinedInFilter', () => {
    render(
      <LinedInFilter
        returnData={() => {}}
        setGreen={false}
        category="Research"
      />
    );
    const categoryText = screen.queryByTestId('defaultText');
    const categoryTextNotShow = screen.queryByTestId('greenText');
    const category = screen.getByText(/Research/i);
    const checkbox = screen.getByRole('checkbox');

    expect(categoryText).toBeInTheDocument();
    expect(categoryTextNotShow).not.toBeInTheDocument();
    expect(category).toBeInTheDocument();
    expect(checkbox).toBeInTheDocument();
  });
});
