/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/function-component-definition */
import type { Meta } from '@storybook/react';

import AccountIcons from './AccountIcons';

const meta: Meta = {
  title: 'Components/AccountIcons',
  component: AccountIcons,
  argTypes: {
    imageUrl: {
      type: 'string',
      control: {
        type: 'text',
      },
      desciption: 'ссылка на аватарку',
    },
    textName: {
      type: 'string',
      control: {
        type: 'text',
      },
    },
  },
};

export default meta;

const Template = (args: any) => <AccountIcons {...args} />;
export const Default: any = Template.bind({});
Default.args = {
  textName: 'Jhon Robert',
};
