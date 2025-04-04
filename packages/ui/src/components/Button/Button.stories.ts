import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Button from '.';

const meta: Meta<typeof Button> = {
  title: 'AdminUI/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    onClick: {
      control: 'object',
      type: 'function',
      description: '버튼 클릭 시 발생 이벤트',
    },
    color: {
      control: {
        type: 'select',
      },
      options: [
        'default',
        'primary',
        'danger',
        'blue',
        'purple',
        'cyan',
        'green',
        'magenta',
        'pink',
        'red',
        'orange',
        'yellow',
        'volcano',
        'geekblue',
        'lime',
        'gold',
      ],
      type: 'string',
      description: '버튼 색상',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onClick: fn(),
    color: 'primary',
    children: 'Primary',
  },
};
