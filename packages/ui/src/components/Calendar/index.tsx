import React from 'react';
import { Calendar as AntdCalendar } from 'antd';
import type { CalendarProps } from './types';

const Calendar = ({ ...props }: CalendarProps) => {
  return <AntdCalendar {...props} />;
};

export default Calendar;
