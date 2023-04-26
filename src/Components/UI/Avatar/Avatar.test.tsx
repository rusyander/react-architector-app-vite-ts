import React from 'react';
import { render, screen } from '@testing-library/react';

import Avatar from './Avatar';

describe('Avatar', () => {
  test('render with props in Avatar - list', () => {
    render(
      <Avatar
        imageUrl="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs3.amazonaws.com%2Flibapps%2Faccounts%2F27060%2Fimages%2Fexample.png&f=1&nofb=1&ipt=303b4ac37288e8979f94cf3a476551977a0990fe50bd527fd219d6e0d4f48273&ipo=images"
        text="MyText"
        avatar="list"
      />
    );
    const altImage = screen.getByAltText(/avatar-list/i);
    const text = screen.getByText(/MyText/i);

    expect(altImage).toBeInTheDocument();
    expect(text).toBeInTheDocument();
    expect(text).toHaveClass('listtImageText');
  });

  test('render without text in Avatar - list', () => {
    render(
      <Avatar
        imageUrl="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs3.amazonaws.com%2Flibapps%2Faccounts%2F27060%2Fimages%2Fexample.png&f=1&nofb=1&ipt=303b4ac37288e8979f94cf3a476551977a0990fe50bd527fd219d6e0d4f48273&ipo=images"
        avatar="list"
      />
    );
    const altImage = screen.getByAltText(/avatar-list/i);

    expect(altImage).toBeInTheDocument();
  });

  // -------
  test('render Avatar - standart', () => {
    render(
      <Avatar
        imageUrl="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs3.amazonaws.com%2Flibapps%2Faccounts%2F27060%2Fimages%2Fexample.png&f=1&nofb=1&ipt=303b4ac37288e8979f94cf3a476551977a0990fe50bd527fd219d6e0d4f48273&ipo=images"
        avatar="standart"
      />
    );
    const altImage = screen.getByAltText(/avatar-standart/i);

    expect(altImage).toBeInTheDocument();
  });

  //   --------

  test('render with props in Avatar - main', () => {
    render(
      <Avatar
        imageUrl="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs3.amazonaws.com%2Flibapps%2Faccounts%2F27060%2Fimages%2Fexample.png&f=1&nofb=1&ipt=303b4ac37288e8979f94cf3a476551977a0990fe50bd527fd219d6e0d4f48273&ipo=images"
        text="MyText"
        avatar="main"
      />
    );
    const altImage = screen.getByAltText(/avatar-main/i);
    const text = screen.getByText(/MyText/i);

    expect(altImage).toBeInTheDocument();
    expect(text).toBeInTheDocument();
    expect(text).toHaveClass('mainImageText');
  });

  test('render without text in Avatar - main', () => {
    render(
      <Avatar
        imageUrl="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs3.amazonaws.com%2Flibapps%2Faccounts%2F27060%2Fimages%2Fexample.png&f=1&nofb=1&ipt=303b4ac37288e8979f94cf3a476551977a0990fe50bd527fd219d6e0d4f48273&ipo=images"
        avatar="main"
      />
    );
    const altImage = screen.getByAltText(/avatar-main/i);

    expect(altImage).toBeInTheDocument();
  });

  //   ----------

  test('render Avatar - small', () => {
    render(
      <Avatar
        imageUrl="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs3.amazonaws.com%2Flibapps%2Faccounts%2F27060%2Fimages%2Fexample.png&f=1&nofb=1&ipt=303b4ac37288e8979f94cf3a476551977a0990fe50bd527fd219d6e0d4f48273&ipo=images"
        avatar="small"
      />
    );
    const altImage = screen.getByAltText(/avatar-small/i);

    expect(altImage).toBeInTheDocument();
  });

  //   ----------

  test('render Avatar - default', () => {
    render(
      <Avatar
        imageUrl="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs3.amazonaws.com%2Flibapps%2Faccounts%2F27060%2Fimages%2Fexample.png&f=1&nofb=1&ipt=303b4ac37288e8979f94cf3a476551977a0990fe50bd527fd219d6e0d4f48273&ipo=images"
        avatar="default"
      />
    );
    const altImage = screen.getByAltText(/avatar-default/i);

    expect(altImage).toBeInTheDocument();
  });
});
