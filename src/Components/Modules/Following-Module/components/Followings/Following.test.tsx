import { render, screen } from '@testing-library/react';
import Followings from './Followings';
import { useAppSelector } from '../../../../../hook/UseRedux';
import { vi } from 'vitest';

vi.mock('../../../../../hook/UseRedux');

describe('FollowingsMain', () => {
  beforeEach(() => {
    useAppSelector.mockReturnValue({
      followingData: [
        {
          userImage: './userIcon.svg',
          userName: 'Jhon Robert',
          proffesion: 'Product Designer at dsgn.id',
          id: '1',
        },
      ],
    });
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  test('full render Followings module ', () => {
    render(<Followings />);

    const followingText = screen.getByText('Following');
    const arrowIcons = screen.getByAltText('icons-arrow');
    const moreRecomendation = screen.getByText('More Recomendation');

    const userAvatar = screen.getAllByAltText('avatar-small-id');
    const userText = screen.getAllByTestId('defaultText');
    const userProffesion = screen.getByText(/Product Designer at dsgn.id/i);
    const userName = screen.getByText(/Jhon Robert/i);
    const add = screen.getByAltText('add');

    expect(followingText).toBeInTheDocument();
    expect(arrowIcons).toBeInTheDocument();
    expect(moreRecomendation).toBeInTheDocument();
    expect(userAvatar).toHaveLength(1);
    expect(userText).toHaveLength(3);
    expect(userProffesion).toBeInTheDocument();
    expect(userName).toBeInTheDocument();
    expect(add).toBeInTheDocument();
  });
});
