import React from 'react';
import { render, screen } from '@testing-library/react';

import CoursesPopuler from './CoursesPopuler';

describe('CoursesPopuler', () => {
  test('render CoursesPopuler', () => {
    render(
      <CoursesPopuler
        coursesName="design"
        createrName="Maximilian"
        count="500"
      />
    );
    const coursName = screen.getByText(/design/i);
    const createrSurname = screen.getByText(/Maximilian/i);
    const count = screen.getByText(/500+/i);
    const image = screen.getByAltText(/EyeImages/i);

    expect(coursName).toBeInTheDocument();
    expect(createrSurname).toBeInTheDocument();
    expect(count).toBeInTheDocument();
    expect(image).toBeInTheDocument();
  });
});
