/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/function-component-definition */
import type { Meta } from '@storybook/react';

import ProfilePods from './ProfilePosts';

const meta: Meta = {
  title: 'Components/ProfilePods',
  component: ProfilePods,
  argTypes: {
    views: {
      type: 'string',
      control: {
        type: 'text',
      },
    },
  },
};

export default meta;

const Template = (args: any) => <ProfilePods {...args} />;
export const Default: any = Template.bind({});
Default.args = {
  views: 'Просмотры профиля: 1 234',
};
