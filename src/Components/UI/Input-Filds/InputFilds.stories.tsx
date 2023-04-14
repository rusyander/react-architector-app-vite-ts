/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/function-component-definition */
import type { Meta } from '@storybook/react';

import InputFilds from './InputFilds';

const meta: Meta = {
  title: 'UI/Input',
  component: InputFilds,
  argTypes: {
    size: {
      type: 'string',
      options: ['small', 'medium', 'large'],
      control: {
        type: 'radio',
      },
      desciption: 'размер кнопки',
      defaultValue: 'medium',
    },
    params: {
      type: 'string',
      options: ['profile', 'search', 'post'],
      control: {
        type: 'radio',
      },
      desciption: 'тип кнопки',
      defaultValue: 'profile',
    },
    placeholder: {
      type: 'string',
      control: {
        type: 'text',
      },
      desciption: 'placeholder',
      defaultValue: 'Search',
    },
    value: {
      type: 'string',
      control: {
        type: 'text',
      },
      desciption: 'ваше значение',
      defaultValue: '',
    },
    onChange: {
      type: 'function',
      control: {
        type: 'function',
      },
      desciption: 'функция которая возврахает значение введенное в инпут',
      defaultValue: () => {},
    },
  },
};

export default meta;

const Template = (args: any) => <InputFilds {...args} />;

export const Search: any = Template.bind({});
Search.args = {
  type: 'text',
  placeholder: 'Search',
  value: '',
  onChange: () => {},
  size: 'large',
  params: 'search',
};
