/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/function-component-definition */
import type { Meta } from '@storybook/react';

import LinkedInFilter from './LinkedInFilter';

const meta: Meta = {
  title: 'Components/LinkedInFilter',
  component: LinkedInFilter,
  argTypes: {
    returnData: {
      type: 'string',
      control: {
        type: 'text',
      },
    },
    setGreen: {
      type: 'boolean',
      control: {
        type: 'false',
      },
    },
    category: {
      type: 'string',
      control: {
        type: 'text',
      },
    },
  },
};

export default meta;

const Template = (args: any) => <LinkedInFilter {...args} />;
export const Default: any = Template.bind({});
Default.args = {
  returnData: 'Все',
  setGreen: false,
  category: 'Все',
};
