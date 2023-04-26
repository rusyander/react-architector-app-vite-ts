import React from 'react';
import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';

import InputPostFilds from './InputPostFilds';

describe('InputPostFilds', () => {
  test('render InputPostFilds', () => {
    // const onChange = jest.fn();

    const argList: any = [];
    const callback = (...args: any) => {
      argList.push(args);
      console.log(argList);
    };
    render(
      <InputPostFilds placeholder="MyText" onChange={callback} size="medium" />
    );

    const input = screen.getByRole('textbox');
    const inputPlacaholder = screen.getByPlaceholderText('MyText');
    const fileDownloadIcon = screen.getByAltText('fileDownloadIcon');
    const fileInput = screen.getByTestId('fileInput');
    const submitButton = screen.getByRole('button', { name: /submit/i });
    const submitIcon = screen.getByTestId('submitIcon');

    user.click(input);
    user.keyboard('MyInput');

    user.click(submitButton);

    expect(input).toBeInTheDocument();
    expect(inputPlacaholder).toBeInTheDocument();
    expect(fileDownloadIcon).toBeInTheDocument();
    expect(fileInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
    expect(submitIcon).toBeInTheDocument();
    expect(argList).toHaveLength(1);
    expect(argList).toEqual([[{ text: 'MyInput', image: [] }]]);
  });
});
