import { render, screen } from '@testing-library/react';
import UserCarusel from './UserCarousel';
import { useAppSelector } from '../../../../../hook/UseRedux';
import { vi } from 'vitest';

vi.mock('../../../../../hook/UseRedux');

describe('UserCarusel', () => {
  beforeEach(() => {
    useAppSelector.mockReturnValue({
      carouselData: [
        {
          userImage: './test.svg',
          id: '1',
          name: 'Dwight',
        },
      ],
    });
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  test('full render UserCarusel module ', () => {
    render(<UserCarusel />);

    const avatarImage = screen.getAllByTestId('avatar-list-id');
    const userName = screen.getAllByText(/Dwight/i);

    expect(avatarImage).toHaveLength(2);
    expect(userName).toHaveLength(2);
  });
});
