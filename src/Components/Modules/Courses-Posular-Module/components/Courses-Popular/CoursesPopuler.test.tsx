import { render, screen } from '@testing-library/react';
import CoursesPopular from './CoursesPopuler';
import { useAppSelector } from '../../../../../hook/UseRedux';
import { vi } from 'vitest';

vi.mock('../../../../../hook/UseRedux');

describe('CoursesPopularMain', () => {
  beforeEach(() => {
    useAppSelector.mockReturnValue({
      coursesPopulerData: [
        {
          coursName: 'Learning UX Design - Mobile apps',
          id: '1',
          createrName: 'Thomas Wick',
          count: '50',
        },
      ],
    });
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  test('full render CoursesPopular module ', () => {
    render(<CoursesPopular />);

    const coursesPopularText = screen.getByText('Courses Populer');
    const arrowIcons = screen.getByAltText('icons-arrow');
    const moreRecomendation = screen.getByText('More Recomendation');

    const coursesName = screen.getAllByTestId('defaultText');
    const createrName = screen.getByText(/Thomas Wick/i);
    const count = screen.getByText(/50+/i);
    const courseName = screen.getByText(/Learning UX Design - Mobile apps/i);
    const iconEye = screen.getByAltText('EyeImages');

    expect(coursesPopularText).toBeInTheDocument();
    expect(arrowIcons).toBeInTheDocument();
    expect(moreRecomendation).toBeInTheDocument();
    expect(createrName).toBeInTheDocument();
    expect(count).toBeInTheDocument();
    expect(courseName).toBeInTheDocument();
    expect(iconEye).toBeInTheDocument();
    expect(coursesName).toHaveLength(4);
  });
});
