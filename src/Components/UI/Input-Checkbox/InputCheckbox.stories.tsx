/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/function-component-definition */
import type { Meta } from '@storybook/react';

import InputCheckbox from './InputCheckbox';

const meta: Meta = {
  title: 'UI/InputCheckbox',
  component: InputCheckbox,
  argTypes: {
    checked: {
      type: 'boolean',
      control: {
        type: 'boolean',
      },
      desciption: 'выбран ли чекбокс',
      defaultValue: false,
    },
    disabled: {
      type: 'boolean',
      control: {
        type: 'boolean',
      },
      desciption: 'отключен ли чекбокс',
      defaultValue: false,
    },
    onChange: {
      type: 'function',
      control: {
        type: 'function',
      },
    },
  },
};

export default meta;

const Template = (args: any) => <InputCheckbox {...args} />;
export const Checkbox: any = Template.bind({});
Checkbox.args = {
  onChange: () => {},
};
