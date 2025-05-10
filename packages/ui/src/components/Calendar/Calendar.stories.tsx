/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Calendar from '.';
import type { Dayjs } from 'dayjs';
import type {
  CalendarMode,
  SelectInfo,
} from 'antd/es/calendar/generateCalendar';
import { Badge, BadgeProps } from 'antd';
import { CalendarProps as AntdCalendarProps } from 'antd/lib/calendar';

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

export const NoticeCalendar: Story = {
  render: (_) => {
    const getListData = (value: Dayjs) => {
      let listData: { type: string; content: string }[] = []; // Specify the type of listData
      switch (value.date()) {
        case 8:
          listData = [
            { type: 'warning', content: 'This is warning event.' },
            { type: 'success', content: 'This is usual event.' },
          ];
          break;
        case 10:
          listData = [
            { type: 'warning', content: 'This is warning event.' },
            { type: 'success', content: 'This is usual event.' },
            { type: 'error', content: 'This is error event.' },
          ];
          break;
        case 15:
          listData = [
            { type: 'warning', content: 'This is warning event' },
            { type: 'success', content: 'This is very long usual event......' },
            { type: 'error', content: 'This is error event 1.' },
            { type: 'error', content: 'This is error event 2.' },
            { type: 'error', content: 'This is error event 3.' },
            { type: 'error', content: 'This is error event 4.' },
          ];
          break;
        default:
      }
      return listData || [];
    };

    const getMonthData = (value: Dayjs) => {
      if (value.month() === 8) {
        return 1394;
      }
    };

    const monthCellRender = (value: Dayjs) => {
      const num = getMonthData(value);
      return num ? (
        <div className="notes-month">
          <section>{num}</section>
          <span>Backlog number</span>
        </div>
      ) : null;
    };

    const dateCellRender = (value: Dayjs) => {
      const listData = getListData(value);
      return (
        <ul className="events">
          {listData.map((item) => (
            <li key={item.content}>
              <Badge
                status={item.type as BadgeProps['status']}
                text={item.content}
              />
            </li>
          ))}
        </ul>
      );
    };

    const cellRender: AntdCalendarProps<Dayjs>['cellRender'] = (
      current,
      info,
    ) => {
      if (info.type === 'date') return dateCellRender(current);
      if (info.type === 'month') return monthCellRender(current);
      return info.originNode;
    };

    return (
      <Calendar
        cellRender={(current, info) => {
          if (info.type === 'date') return dateCellRender(current);
          if (info.type === 'month') return monthCellRender(current);
          return info.originNode;
        }}
      />
    );
  },
};
