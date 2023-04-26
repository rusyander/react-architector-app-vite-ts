import React from 'react';
import { render, screen } from '@testing-library/react';

import ProfilePosts from './ProfilePosts';

describe('ProfilePosts', () => {
  test('render ProfilePosts', () => {
    render(<ProfilePosts views="MyText" />);

    const staticText = screen.getByText(/Profile Post/i);
    const propsText = screen.getByText(/MyText/i);

    expect(staticText).toBeInTheDocument();
    expect(propsText).toBeInTheDocument();
  });
});
