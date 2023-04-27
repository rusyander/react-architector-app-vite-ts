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
  });
});
