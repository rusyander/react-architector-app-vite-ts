/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/function-component-definition */
import type { Meta } from '@storybook/react';

import P from './P';

const meta: Meta = {
  title: 'UI/P',
  component: P,
  argTypes: {
    size: {
      type: 'string',
      options: ['small', 'medium', 'large'],
      control: {
        type: 'radio',
      },
    },
    weight: {
      type: 'string',
      options: ['standart', 'bold'],
      control: {
        type: 'radio',
      },
    },
  },
};

export default meta;

const Template = (args: any) => <P {...args} />;
export const PText: any = Template.bind({});
PText.args = {
  size: 'small',
  weight: 'standart',
  children: 'Text',
};
