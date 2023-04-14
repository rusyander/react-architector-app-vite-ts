/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/function-component-definition */
import type { Meta } from '@storybook/react';

import UserPostIcon from './UserPostIcons';

const meta: Meta = {
  title: 'UI/UserPostIcon',
  component: UserPostIcon,
  argTypes: {
    imageUrl: {
      type: 'string',
      control: {
        type: 'text',
      },
    },
    text: {
      type: 'string',
      control: {
        type: 'text',
      },
    },
  },
};

export default meta;

const Template = (args: any) => <UserPostIcon {...args} />;
export const UserPostIcons: any = Template.bind({});
UserPostIcons.args = {
  text: 'text',
};
