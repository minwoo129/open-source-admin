/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Calendar from '.';
import type { Dayjs } from 'dayjs';
import type {
  CalendarMode,
  SelectInfo,
} from 'antd/es/calendar/generateCalendar';

/** 캘린더 컴포넌트 */
const meta: Meta<typeof Calendar> = {
  title: 'AdminUI/Calendar',
  component: Calendar,
  tags: ['autodocs'],
  argTypes: {
    onSelect: {
      type: 'function',
    },
    onPanelChange: {
      type: 'function',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onSelect: (date: Dayjs, selectInfo: SelectInfo) => {},
    onPanelChange: (date: Dayjs, mode: CalendarMode) => {},
  },
};
