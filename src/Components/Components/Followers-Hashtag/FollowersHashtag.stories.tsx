/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/function-component-definition */
import type { Meta } from '@storybook/react';

import FollowersHashtag from './FollowersHashtag';

const meta: Meta = {
  title: 'Components/FollowersHashtag',
  component: FollowersHashtag,
  argTypes: {
    followersName: {
      type: 'string',
      control: {
        type: 'text',
      },
    },
  },
};

export default meta;

const Template = (args: any) => <FollowersHashtag {...args} />;
export const Default: any = Template.bind({});
Default.args = {
  followersName: '#UIDesign',
};
