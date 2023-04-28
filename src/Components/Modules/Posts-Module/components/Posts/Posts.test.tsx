import { render, screen } from '@testing-library/react';
import Posts from './Posts';

describe('Posts', () => {
  test('full render Posts module ', () => {
    render(<Posts />);

    const userAcatar = screen.getByAltText('avatar-standart');
    const userName = screen.getByText('Julia Robert');
    const profession = screen.getByText('Product Designer at lancar.id');
    const time = screen.getByText(/1 hr ago/i);
    const dotsImage = screen.getByTestId('dots-image');
    const textUser = screen.getByText(
      /Challenge Application about food and Coffe Restaurant/i
    );
    const toTranslate = screen.getByText(/See translate/i);
    const userImage = screen.getByAltText('user-image-push');

    const postLinkIcons = screen.getAllByTestId('post-links-icons');
    const postLinkText = screen.getAllByTestId('post-link-text');
    const avatarDefault = screen.getByAltText('avatar-default');

    const inputPost = screen.getByTestId('input-post');
    const addFileIcon = screen.getByAltText('fileDownloadIcon');
    const fileInput = screen.getByTestId('fileInput');

    const submitButton = screen.getByRole('button', { name: /submit/i });
    const submitIcon = screen.getByTestId('submitIcon');

    expect(userAcatar).toBeInTheDocument();
    expect(userName).toBeInTheDocument();
    expect(profession).toBeInTheDocument();
    expect(time).toBeInTheDocument();
    expect(dotsImage).toBeInTheDocument();
    expect(textUser).toBeInTheDocument();
    expect(toTranslate).toBeInTheDocument();
    expect(userImage).toBeInTheDocument();
    expect(postLinkIcons).toHaveLength(5);
    expect(postLinkText).toHaveLength(5);
    expect(avatarDefault).toBeInTheDocument();
    expect(inputPost).toBeInTheDocument();
    expect(addFileIcon).toBeInTheDocument();
    expect(fileInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
    expect(submitIcon).toBeInTheDocument();
  });
});
