import React from 'react';
import { render, screen } from '@testing-library/react';

import Groups from './Groups';

describe('Groups', () => {
  test('render with props in Groups', () => {
    render(<Groups groupsName="MyGroup" />);
    const groupImage = screen.getByAltText(/groupsImage/i);
    const text = screen.getByText(/MyGroup/i);

    expect(groupImage).toBeInTheDocument();
    expect(text).toBeInTheDocument();
  });
});
