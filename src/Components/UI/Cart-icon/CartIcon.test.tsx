import React from 'react';
import { render, screen } from '@testing-library/react';

import CartIcon from './CartIcon';

describe('CartIcon', () => {
  test('render with props in CartIcon', () => {
    render(
      <CartIcon
        imageUrl="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs3.amazonaws.com%2Flibapps%2Faccounts%2F27060%2Fimages%2Fexample.png&f=1&nofb=1&ipt=303b4ac37288e8979f94cf3a476551977a0990fe50bd527fd219d6e0d4f48273&ipo=images"
        text="MyText"
      />
    );
    const text = screen.getByText(/MyText/i);
    expect(text).toBeInTheDocument();
  });

  test('render without props in CartIcon', () => {
    render(<CartIcon />);
    const text = screen.queryByText(/My text/i);
    expect(text).toBeInTheDocument();
  });
});
