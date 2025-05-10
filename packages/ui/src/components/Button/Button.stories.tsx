import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Button from '.';
import { Flex } from 'antd';

/** 버튼 컴포넌트 */
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
      control: 'select',
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
      description: '버튼 색상',
    },
    size: {
      control: 'select',
      options: ['small', 'middle', 'large'],
      description: '버튼 크기',
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

/** 디폴트 상태일 때의 형태 */
export const Default: Story = {
  args: {
    onClick: fn(),
    color: 'default',
    children: 'Default',
    variant: 'solid',
  },
};

/**
 * 각 컬러별 버튼 형태
 */
export const ColorAndVarient: Story = {
  args: {
    onClick: fn(),
  },
  render: (args) => {
    return (
      <Flex vertical gap="small">
        <Flex gap="small" justify="flex-start" align="center">
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
          <Button color="danger" variant="solid" onClick={args.onClick}>
            {'Danger'}
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
          <Button color="blue" variant="solid" onClick={args.onClick}>
            {'Blue'}
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
          <Button color="purple" variant="solid" onClick={args.onClick}>
            {'Purple'}
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
          <Button color="cyan" variant="solid" onClick={args.onClick}>
            {'Cyan'}
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
          <Button color="green" variant="solid" onClick={args.onClick}>
            {'Green'}
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
          <Button color="magenta" variant="solid" onClick={args.onClick}>
            {'Magenta'}
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
