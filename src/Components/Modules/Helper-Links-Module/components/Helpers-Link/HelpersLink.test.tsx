import { render, screen } from '@testing-library/react';
import HelpersLink from './HelpersLink';
import { useAppSelector } from '../../../../../hook/UseRedux';
import { vi } from 'vitest';

vi.mock('../../../../../hook/UseRedux');

describe('HelpersLink', () => {
  beforeEach(() => {
    useAppSelector.mockReturnValue({
      helperLinkData: [
        {
          groupName: [
            { groups: 'UI/UX Design', id: '1' },
            { groups: 'UI Design', id: '2' },
            { groups: 'UI/UX Design', id: '3' },
            { groups: 'UI Design', id: '4' },
          ],
        },
        { event: 'Webinar UI Design at 09:00 am.' },
        {
          hashtags: [
            { hashtag: '#UIDesign', id: '1' },
            { hashtag: '#UIUXDesign', id: '2' },
            { hashtag: '#UIRemote', id: '3' },
            { hashtag: '#wfh', id: '4' },
            { hashtag: '#RemoteWork', id: '5' },
            { hashtag: '#UXDesign', id: '61' },
            { hashtag: '#jobsUIDesign', id: '7' },
            { hashtag: '#Userexperince', id: '8' },
          ],
        },
      ],
    });
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  test('full render HelpersLink module ', () => {
    render(<HelpersLink />);

    const groupText = screen.getByText('Groups');
    const arrow = screen.getAllByAltText('icons-arrow');
    const userGroups = screen.getAllByTestId('user-groups');
    const groupImage = screen.getAllByAltText('groupsImage');

    const EventText = screen.getByText('Event');
    const allEvents = screen.getAllByTestId('events-time');
    const calendarImage = screen.getByAltText('calendar-image');

    const hashtagText = screen.getByText('Hashtags');
    const defaultText = screen.getAllByTestId('defaultText');

    expect(groupText).toBeInTheDocument();
    expect(arrow).toHaveLength(3);
    expect(userGroups).toHaveLength(4);
    expect(groupImage).toHaveLength(4);
    expect(EventText).toBeInTheDocument();
    expect(allEvents).toHaveLength(1);

    expect(calendarImage).toBeInTheDocument();
    expect(hashtagText).toBeInTheDocument();
    expect(defaultText).toHaveLength(16);
  });
});
