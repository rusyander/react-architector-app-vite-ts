import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import PageButtons from './PageButtons';

describe('PageButtons', () => {
  test('render with props in PageButtons', () => {
    render(
      <MemoryRouter>
        <PageButtons
          url="http://localhost:11160"
          value="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs3.amazonaws.com%2Flibapps%2Faccounts%2F27060%2Fimages%2Fexample.png&f=1&nofb=1&ipt=303b4ac37288e8979f94cf3a476551977a0990fe50bd527fd219d6e0d4f48273&ipo=images"
        />
      </MemoryRouter>
    );
    const buttons = screen.getByRole('button', { name: /PageButtons/i });
    expect(buttons).toBeInTheDocument();
  });

  test('render without props in PageButtons', () => {
    render(
      <MemoryRouter>
        <PageButtons />
      </MemoryRouter>
    );
    const buttons = screen.getByRole('button', { name: /PageButtons/i });
    expect(buttons).toBeInTheDocument();
  });
});
