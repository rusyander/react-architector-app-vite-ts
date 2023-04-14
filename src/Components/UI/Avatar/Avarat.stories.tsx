/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/function-component-definition */
import { Meta } from '@storybook/react';

import Avatat from './Avatar';

const meta: Meta = {
  title: 'UI/Avatat',
  component: Avatat,
  argTypes: {
    avatar: {
      type: 'string',
      options: ['list', 'standart', 'main', 'small', 'default'],
      control: {
        type: 'radio',
      },
      desciption: 'тип аватара',
      defaultValue: 'standart',
    },

    imageUrl: {
      type: 'string',
      control: {
        type: 'text',
      },
      desciption: 'url картинки',
    },
    text: {
      type: 'string',
      control: {
        type: 'text',
      },
      desciption: 'текст',
    },
  },
};

export default meta;

const Template = (args: any) => <Avatat {...args} />;

export const Avatar: any = Template.bind({});
Avatar.args = {
  position: 'left',
};
