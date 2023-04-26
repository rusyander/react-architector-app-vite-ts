import React from 'react';
import { render, screen } from '@testing-library/react';

import ProfilViews from './ProfilViews';

describe('ProfilViews', () => {
  test('render ProfilViews', () => {
    render(<ProfilViews views="MyText" />);

    const staticText = screen.getByText(/Profile Views/i);
    const propsText = screen.getByText(/MyText/i);

    expect(staticText).toBeInTheDocument();
    expect(propsText).toBeInTheDocument();
  });
});
