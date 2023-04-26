import React from 'react';
import { render, screen } from '@testing-library/react';

import Following from './Following';

describe('Following', () => {
  test('render Following', () => {
    render(
      <Following
        imageUrl="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs3.amazonaws.com%2Flibapps%2Faccounts%2F27060%2Fimages%2Fexample.png&f=1&nofb=1&ipt=303b4ac37288e8979f94cf3a476551977a0990fe50bd527fd219d6e0d4f48273&ipo=images"
        textName="Andrey"
        text="Web Developer"
        onChange={() => {}}
      />
    );
    const userName = screen.getByText(/Andrey/i);
    const text = screen.getByText(/Web Developer/i);
    const userImage = screen.getByAltText(/avatar-small/i);
    const umageAdd = screen.getByAltText(/add/i);

    expect(userName).toBeInTheDocument();
    expect(text).toBeInTheDocument();
    expect(userImage).toBeInTheDocument();
    expect(umageAdd).toBeInTheDocument();
  });
});
