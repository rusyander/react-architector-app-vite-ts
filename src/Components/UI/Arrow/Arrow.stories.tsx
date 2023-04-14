/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/function-component-definition */
import type { Meta } from '@storybook/react';

import Arrow from './Arrow';

const meta: Meta = {
  title: 'UI/Arrow',
  component: Arrow,
  argTypes: {
    position: {
      type: 'string',
      options: ['left', 'right', 'top', 'bottom'],
      control: {
        type: 'radio',
      },
      desciption: 'позиция стрелки',
      defaultValue: 'left',
    },
  },
};

export default meta;

const Template = (args: any) => <Arrow {...args} />;

export const Left: any = Template.bind({});
Left.args = {
  position: 'left',
};
