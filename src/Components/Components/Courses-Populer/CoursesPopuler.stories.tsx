/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/function-component-definition */
import type { Meta } from '@storybook/react';

import CoursesPopuler from './CoursesPopuler';

const meta: Meta = {
  title: 'Components/CoursesPopuler',
  component: CoursesPopuler,
  argTypes: {
    coursesName: {
      type: 'string',
      control: {
        type: 'text',
      },
    },
    createrName: {
      type: 'string',
      control: {
        type: 'text',
      },
    },
    count: {
      type: 'string',
      control: {
        type: 'text',
      },
    },
  },
};

export default meta;

const Template = (args: any) => <CoursesPopuler {...args} />;
export const Default: any = Template.bind({});
Default.args = {
  coursesName: 'Курс по React',
  createrName: 'Jhon Robert',
  count: '1000',
};
