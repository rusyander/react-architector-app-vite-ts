/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/function-component-definition */
import type { Meta } from '@storybook/react';

import CartIcon from './CartIcon';

const meta: Meta = {
  title: 'UI/CartIcon',
  component: CartIcon,
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

const Template = (args: any) => <CartIcon {...args} />;

export const CartIcons: any = Template.bind({});
CartIcons.args = {
  text: '',
};
