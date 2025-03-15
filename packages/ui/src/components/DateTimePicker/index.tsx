import React from 'react';
import { DatePicker as AntdDatePicker } from 'antd';
import {
  DateTimeDatePickerProps,
  DateTimeRangeDatePickerProps,
  DateTimeTimePickerProps,
} from './types';

const Date = ({ ...props }: DateTimeDatePickerProps) => {
  return <AntdDatePicker {...props} />;
};

const RangeDate = ({ ...props }: DateTimeRangeDatePickerProps) => {
  return <AntdDatePicker.RangePicker {...props} />;
};

const Time = ({ ...props }: DateTimeTimePickerProps) => {
  return <AntdDatePicker.TimePicker {...props} />;
};

const DateTimePicker = {
  Date,
  RangeDate,
  Time,
};

export default DateTimePicker;
