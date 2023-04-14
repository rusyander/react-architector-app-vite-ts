/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/function-component-definition */
import type { Meta } from '@storybook/react';

import GreenText from './GreenText';

const meta: Meta = {
  title: 'UI/GreenText',
  component: GreenText,
  argTypes: {
    size: {
      type: 'string',
      options: ['small', 'medium', 'large'],
      control: {
        type: 'radio',
      },
      desciption: 'размер текста',
      defaultValue: 'small',
    },
    weight: {
      type: 'string',
      options: ['standart', 'bold'],
      control: {
        type: 'radio',
      },
    },
    className: {
      type: 'string',
      control: {
        type: 'text',
      },
    },
  },
};

export default meta;

const Template = (args: any) => <GreenText {...args} />;
export const PGreen: any = Template.bind({});
PGreen.args = {
  children: 'text',
};
