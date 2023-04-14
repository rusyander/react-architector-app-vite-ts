/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/function-component-definition */
import type { Meta } from '@storybook/react';

import ProfilViews from './ProfilViews';

const meta: Meta = {
  title: 'Components/ProfilViews',
  component: ProfilViews,
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

const Template = (args: any) => <ProfilViews {...args} />;
export const Default: any = Template.bind({});
Default.args = {
  views: 'Просмотры профиля: 1 234',
};
