/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/function-component-definition */
import type { Meta } from '@storybook/react';

import Event from './Events';

const meta: Meta = {
  title: 'Components/Event',
  component: Event,
  argTypes: {
    eventsDate: {
      type: 'string',
      control: {
        type: 'text',
      },
    },
  },
};

export default meta;

const Template = (args: any) => <Event {...args} />;
export const Default: any = Template.bind({});
Default.args = {
  eventsDate: 'Webinar UI Design at 09:00 am.',
};
