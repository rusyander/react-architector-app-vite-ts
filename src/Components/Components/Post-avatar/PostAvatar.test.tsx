import React from 'react';
import { render, screen } from '@testing-library/react';

import PostAvatar from './PostAvatar';

describe('PostAvatar', () => {
  test('render PostAvatar is isFollowing === true', () => {
    render(
      <PostAvatar
        imageUrl="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs3.amazonaws.com%2Flibapps%2Faccounts%2F27060%2Fimages%2Fexample.png&f=1&nofb=1&ipt=303b4ac37288e8979f94cf3a476551977a0990fe50bd527fd219d6e0d4f48273&ipo=images"
        text="programmer"
        textName="Anri"
        time="20 setpember"
        isFollowing={true}
      />
    );
    const avatarImage = screen.getByAltText(/avatar-standart/i);
    const text = screen.getByText(/programmer/i);
    const textName = screen.getByText(/Anri/i);
    const time = screen.getByText(/20 setpember ago/i);
    const followingImage = screen.getByAltText(/Follow-image/i);
    const followingText = screen.getByText(/Follow/i);

    expect(avatarImage).toBeInTheDocument();
    expect(text).toBeInTheDocument();
    expect(textName).toBeInTheDocument();
    expect(time).toBeInTheDocument();
    expect(followingImage).toBeInTheDocument();
    expect(followingText).toBeInTheDocument();
  });

  test('render PostAvatar is isFollowing === false', () => {
    render(
      <PostAvatar
        imageUrl="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs3.amazonaws.com%2Flibapps%2Faccounts%2F27060%2Fimages%2Fexample.png&f=1&nofb=1&ipt=303b4ac37288e8979f94cf3a476551977a0990fe50bd527fd219d6e0d4f48273&ipo=images"
        text="programmer"
        textName="Anri"
        time="20 setpember"
        isFollowing={false}
      />
    );
    const avatarImage = screen.getByAltText(/avatar-standart/i);
    const text = screen.getByText(/programmer/i);
    const textName = screen.getByText(/Anri/i);
    const time = screen.getByText(/20 setpember ago/i);
    const followingImage = screen.queryByAltText(/Follow-image/i);
    const followingText = screen.queryByText(/Follow/i);

    expect(avatarImage).toBeInTheDocument();
    expect(text).toBeInTheDocument();
    expect(textName).toBeInTheDocument();
    expect(time).toBeInTheDocument();
    expect(followingImage).not.toBeInTheDocument();
    expect(followingText).not.toBeInTheDocument();
  });
});
