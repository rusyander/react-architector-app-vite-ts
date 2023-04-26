import React from 'react';
import { render, screen } from '@testing-library/react';

import FollowersHashtag from './FollowersHashtag';

describe('FollowersHashtag', () => {
  test('render FollowersHashtag', () => {
    render(<FollowersHashtag followersName="#Evelina" />);
    const text = screen.getByText(/#Evelina/i);
    expect(text).toBeInTheDocument();
  });
});
