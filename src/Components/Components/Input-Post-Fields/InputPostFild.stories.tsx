/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/function-component-definition */
import type { Meta } from '@storybook/react';

import InputPostFild from './InputPostFilds';

const meta: Meta = {
  title: 'Components/InputPostFild',
  component: InputPostFild,
  argTypes: {
    placeholder: {
      type: 'string',
      control: {
        type: 'text',
      },
    },
    onChange: {
      type: 'function',
      control: {
        type: 'function',
      },
    },
    size: {
      type: 'string',
      control: {
        type: 'text',
      },
    },
  },
};

export default meta;

const Template = (args: any) => <InputPostFild {...args} />;
export const Default: any = Template.bind({});
Default.args = {
  placeholder: 'Введите текст',
  size: 'large',
};
