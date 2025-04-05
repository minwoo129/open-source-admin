import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from '.';
import { Flex } from 'antd';

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
      control: 'color',
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
    variant: {
      control: 'select',
      options: ['outlined', 'dashed', 'solid', 'filled', 'text', 'link'],
      description: '버튼 스타일',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onClick: fn(),
    color: 'default',
    children: 'Default',
    variant: 'solid',
  },
};

export const ColorAndVarient: Story = {
  args: {
    onClick: fn(),
  },
  render: (args) => {
    return (
      <Flex vertical gap="small">
        <Flex gap="small" justify="flex-start" align="center">
          <Flex style={{ width: '80px' }}>Primary:</Flex>

          <Button color="primary" variant="solid" onClick={args.onClick}>
            {'Primary'}
          </Button>
          <Button color="primary" variant="outlined" onClick={args.onClick}>
            {'Outlined'}
          </Button>
          <Button color="primary" variant="dashed" onClick={args.onClick}>
            {'Dashed'}
          </Button>
          <Button color="primary" variant="filled" onClick={args.onClick}>
            {'Filled'}
          </Button>
          <Button color="primary" variant="text" onClick={args.onClick}>
            {'Text'}
          </Button>
          <Button color="primary" variant="link" onClick={args.onClick}>
            {'Link'}
          </Button>
        </Flex>
        <Flex gap="small" justify="flex-start" align="center">
          <Flex style={{ width: '80px' }}>Danger:</Flex>
          <Button color="danger" variant="solid" onClick={args.onClick}>
            {'Primary'}
          </Button>
          <Button color="danger" variant="outlined" onClick={args.onClick}>
            {'Outlined'}
          </Button>
          <Button color="danger" variant="dashed" onClick={args.onClick}>
            {'Dashed'}
          </Button>
          <Button color="danger" variant="filled" onClick={args.onClick}>
            {'Filled'}
          </Button>
          <Button color="danger" variant="text" onClick={args.onClick}>
            {'Text'}
          </Button>
          <Button color="danger" variant="link" onClick={args.onClick}>
            {'Link'}
          </Button>
        </Flex>
        <Flex gap="small" justify="flex-start" align="center">
          <Flex style={{ width: '80px' }}>Blue:</Flex>
          <Button color="blue" variant="solid" onClick={args.onClick}>
            {'Primary'}
          </Button>
          <Button color="blue" variant="outlined" onClick={args.onClick}>
            {'Outlined'}
          </Button>
          <Button color="blue" variant="dashed" onClick={args.onClick}>
            {'Dashed'}
          </Button>
          <Button color="blue" variant="filled" onClick={args.onClick}>
            {'Filled'}
          </Button>
          <Button color="blue" variant="text" onClick={args.onClick}>
            {'Text'}
          </Button>
          <Button color="blue" variant="link" onClick={args.onClick}>
            {'Link'}
          </Button>
        </Flex>
        <Flex gap="small" justify="flex-start" align="center">
          <Flex style={{ width: '80px' }}>Purple: </Flex>
          <Button color="purple" variant="solid" onClick={args.onClick}>
            {'Primary'}
          </Button>
          <Button color="purple" variant="outlined" onClick={args.onClick}>
            {'Outlined'}
          </Button>
          <Button color="purple" variant="dashed" onClick={args.onClick}>
            {'Dashed'}
          </Button>
          <Button color="purple" variant="filled" onClick={args.onClick}>
            {'Filled'}
          </Button>
          <Button color="purple" variant="text" onClick={args.onClick}>
            {'Text'}
          </Button>
          <Button color="purple" variant="link" onClick={args.onClick}>
            {'Link'}
          </Button>
        </Flex>
        <Flex gap="small" justify="flex-start" align="center">
          <Flex style={{ width: '80px' }}>Cyan:</Flex>
          <Button color="cyan" variant="solid" onClick={args.onClick}>
            {'Primary'}
          </Button>
          <Button color="cyan" variant="outlined" onClick={args.onClick}>
            {'Outlined'}
          </Button>
          <Button color="cyan" variant="dashed" onClick={args.onClick}>
            {'Dashed'}
          </Button>
          <Button color="cyan" variant="filled" onClick={args.onClick}>
            {'Filled'}
          </Button>
          <Button color="cyan" variant="text" onClick={args.onClick}>
            {'Text'}
          </Button>
          <Button color="cyan" variant="link" onClick={args.onClick}>
            {'Link'}
          </Button>
        </Flex>
        <Flex gap="small" justify="flex-start" align="center">
          <Flex style={{ width: '80px' }}>Green:</Flex>
          <Button color="green" variant="solid" onClick={args.onClick}>
            {'Primary'}
          </Button>
          <Button color="green" variant="outlined" onClick={args.onClick}>
            {'Outlined'}
          </Button>
          <Button color="green" variant="dashed" onClick={args.onClick}>
            {'Dashed'}
          </Button>
          <Button color="green" variant="filled" onClick={args.onClick}>
            {'Filled'}
          </Button>
          <Button color="green" variant="text" onClick={args.onClick}>
            {'Text'}
          </Button>
          <Button color="green" variant="link" onClick={args.onClick}>
            {'Link'}
          </Button>
        </Flex>
        <Flex gap="small" justify="flex-start" align="center">
          <Flex style={{ width: '80px' }}>Magenta:</Flex>
          <Button color="magenta" variant="solid" onClick={args.onClick}>
            {'Primary'}
          </Button>
          <Button color="magenta" variant="outlined" onClick={args.onClick}>
            {'Outlined'}
          </Button>
          <Button color="magenta" variant="dashed" onClick={args.onClick}>
            {'Dashed'}
          </Button>
          <Button color="magenta" variant="filled" onClick={args.onClick}>
            {'Filled'}
          </Button>
          <Button color="magenta" variant="text" onClick={args.onClick}>
            {'Text'}
          </Button>
          <Button color="magenta" variant="link" onClick={args.onClick}>
            {'Link'}
          </Button>
        </Flex>
      </Flex>
    );
  },
};
