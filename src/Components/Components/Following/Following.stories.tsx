/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/function-component-definition */
import type { Meta } from '@storybook/react';

import Folliwing from './Following';

const meta: Meta = {
  title: 'Components/Following',
  component: Folliwing,
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
  },
};

export default meta;

const Template = (args: any) => <Folliwing {...args} />;

export const Default: any = Template.bind({});
Default.args = {
  textName: 'Jhon Robert',
  text: 'Product Designer at dsgn.id',
};
