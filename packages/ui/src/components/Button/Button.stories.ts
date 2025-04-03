import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Button from '.';

const meta: Meta<typeof Button> = {
  title: 'AdminUI/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    color: { control: 'color' },
  },
  args: {
    onClick: fn(),
    children: 'Button',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    color: 'primary',
    children: 'Primary',
  },
};
