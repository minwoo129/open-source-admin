import React from 'react';
import { Calendar as AntdCalendar } from 'antd';
import { CalendarProps } from './types';

const Calendar = ({ ...props }: CalendarProps) => {
  return <AntdCalendar {...props} />;
};

export default Calendar;
