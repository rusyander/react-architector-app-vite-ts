import React from 'react';
import { render, screen } from '@testing-library/react';

import UserPostIcons from './UserPostIcons';

describe('UserPostIcons', () => {
  test('render with props in UserPostIcons', () => {
    render(
      <UserPostIcons
        imageUrl="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs3.amazonaws.com%2Flibapps%2Faccounts%2F27060%2Fimages%2Fexample.png&f=1&nofb=1&ipt=303b4ac37288e8979f94cf3a476551977a0990fe50bd527fd219d6e0d4f48273&ipo=images"
        text="MyText"
      />
    );
    const text = screen.getByText(/MyText/i);
    expect(text).toBeInTheDocument();
  });

  test('render without props in UserPostIcons', () => {
    render(<UserPostIcons />);
    const text = screen.queryByText(/My text/i);
    expect(text).toBeInTheDocument();
  });
});
