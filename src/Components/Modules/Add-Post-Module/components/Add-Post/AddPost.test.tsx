import { render, screen } from '@testing-library/react';
import AddPost from './AddPost';

describe('AddPostMain', () => {
  test('full render AddPost module ', () => {
    render(<AddPost />);

    const avatarImage = screen.getByAltText('avatar-standart');
    const inputFild = screen.getByTestId('input-post');
    const buttonsHelper = screen.getAllByTestId('helpful-link');

    expect(avatarImage).toBeInTheDocument();
    expect(inputFild).toBeInTheDocument();
    expect(buttonsHelper).toHaveLength(4);
  });
});
