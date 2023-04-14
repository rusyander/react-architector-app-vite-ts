/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/function-component-definition */
import type { Meta } from '@storybook/react';

import Devider from './Devider';

const meta: Meta = {
  title: 'Components/Devider',
  component: Devider,
};

export default meta;

const Template = (args: any) => <Devider {...args} />;
export const Default: any = Template.bind({});
Default.args = {};
