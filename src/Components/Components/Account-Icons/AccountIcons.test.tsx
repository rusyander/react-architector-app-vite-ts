import React from 'react';
import { render, screen } from '@testing-library/react';

import AccountIcons from './AccountIcons';

describe('AccountIcons', () => {
  test('render AccountIcons', () => {
    render(
      <AccountIcons
        imageUrl="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs3.amazonaws.com%2Flibapps%2Faccounts%2F27060%2Fimages%2Fexample.png&f=1&nofb=1&ipt=303b4ac37288e8979f94cf3a476551977a0990fe50bd527fd219d6e0d4f48273&ipo=images"
        textName="Avelin"
      />
    );
    const userName = screen.getByText(/Avelin/i);
    const avatarImage = screen.getByAltText('avatar-small');
    const arrow = screen.getByAltText('icons-arrow');

    expect(userName).toBeInTheDocument();
    expect(avatarImage).toBeInTheDocument();
    expect(arrow).toBeInTheDocument();
    expect(avatarImage).toHaveClass('smallImage');
    expect(arrow).toHaveClass('Arrow--bottom');
  });
});
