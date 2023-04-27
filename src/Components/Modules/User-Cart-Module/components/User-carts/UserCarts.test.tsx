import { render, screen } from '@testing-library/react';
import UserCarts from './UserCarts';
import { useAppSelector } from '../../../../../hook/UseRedux';
import { vi } from 'vitest';

vi.mock('../../../../../hook/UseRedux');

describe('UserCartsMain', () => {
  beforeEach(() => {
    useAppSelector.mockReturnValue({
      userProfile: [
        {
          userImage:
            'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs3.amazonaws.com%2Flibapps%2Faccounts%2F27060%2Fimages%2Fexample.png&f=1&nofb=1&ipt=303b4ac37288e8979f94cf3a476551977a0990fe50bd527fd219d6e0d4f48273&ipo=images',
          userName: 'Marko Markovic',
          proffesion: 'Software Engineer',
          profileViews: '14',
          profilePost: '240',
        },
      ],
    });
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  test('full render UserCarts module ', () => {
    render(<UserCarts />);

    const avatarImage = screen.getByAltText('avatar-main');
    const userName = screen.getByText('Marko Markovic');
    const proffesion = screen.getByText('Software Engineer');
    const userProfilViews = screen.getByText('Profile Views');
    const userProfilViewsCount = screen.getByText(/14+/i);
    const userProfilPosts = screen.getByText('Profile Post');
    const userProfilPostsCount = screen.getByText(/240+/i);
    const buttonSaved = screen.getByText('Saved');
    const buttonPremium = screen.getByText('Try Premium');

    expect(avatarImage).toHaveAttribute(
      'src',
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs3.amazonaws.com%2Flibapps%2Faccounts%2F27060%2Fimages%2Fexample.png&f=1&nofb=1&ipt=303b4ac37288e8979f94cf3a476551977a0990fe50bd527fd219d6e0d4f48273&ipo=images'
    );
    expect(avatarImage).toBeInTheDocument();
    expect(userName).toBeInTheDocument();
    expect(proffesion).toBeInTheDocument();
    expect(userProfilViews).toBeInTheDocument();
    expect(userProfilViewsCount).toBeInTheDocument();
    expect(userProfilPosts).toBeInTheDocument();
    expect(userProfilPostsCount).toBeInTheDocument();
    expect(buttonSaved).toBeInTheDocument();
    expect(buttonPremium).toBeInTheDocument();
  });
});
