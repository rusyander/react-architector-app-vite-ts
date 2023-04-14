/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/function-component-definition */
import type { Meta } from '@storybook/react';

import PostAvatar from './PostAvatar';

const meta: Meta = {
  title: 'Components/PostAvatar',
  component: PostAvatar,
  argTypes: {
    imageUrl: {
      type: 'string',
      control: {
        type: 'text',
      },
    },
    textName: {
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
    time: {
      type: 'string',
      control: {
        type: 'text',
      },
    },
    isFollowing: {
      type: 'boolean',
      control: {
        type: 'false',
      },
    },
  },
};

export default meta;

const Template = (args: any) => <PostAvatar {...args} />;
export const Default: any = Template.bind({});

Default.args = {
  textName: 'Jhon Robert',
  text: 'Product Designer at dsgn.id',
  time: '1h',
  isFollowing: false,
};
