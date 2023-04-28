import { render, screen } from '@testing-library/react';
import HeaderModule from './HeaderModule';
import { useAppSelector } from '../../../../../hook/UseRedux';
import { vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';

vi.mock('../../../../../hook/UseRedux');

describe('HeaderModule', () => {
  beforeEach(() => {
    useAppSelector.mockReturnValue({
      user: [{ username: 'Wawan Purwanto', id: '1', avatar: './userIcon.svg' }],
    });
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  test('full render HeaderModule module ', () => {
    render(
      <MemoryRouter>
        <HeaderModule />
      </MemoryRouter>
    );
    const logo = screen.getByAltText('logo');
    const searchFilds = screen.getByAltText('search');
    const inputSearch = screen.getByTestId('input-search');
    const navigationButton = screen.getAllByRole('button', {
      name: /PageButtons/i,
    });
    const navigationIcon = screen.getAllByAltText(/PageButtons/i);

    expect(logo).toBeInTheDocument();
    expect(searchFilds).toBeInTheDocument();
    expect(inputSearch).toBeInTheDocument();
    expect(navigationButton).toHaveLength(5);
    expect(navigationIcon).toHaveLength(5);
  });
});
