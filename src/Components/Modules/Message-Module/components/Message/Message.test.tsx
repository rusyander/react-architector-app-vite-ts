import { render, screen } from '@testing-library/react';

import Message from './Message';

describe('Message', () => {
  test('renders Message module', () => {
    render(<Message />);

    const messageIcon = screen.getByAltText('message-icon');
    const messageText = screen.getByText('Message');

    expect(messageIcon).toBeInTheDocument();
    expect(messageText).toBeInTheDocument();
  });
});
