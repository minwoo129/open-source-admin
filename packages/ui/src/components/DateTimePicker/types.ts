import { ComponentProps } from 'react';
import { DatePicker as AntdDatePicker } from 'antd';

export interface DateTimeDatePickerProps
  extends ComponentProps<typeof AntdDatePicker> {}

export interface DateTimeRangeDatePickerProps
  extends ComponentProps<typeof AntdDatePicker.RangePicker> {}

export interface DateTimeTimePickerProps
  extends ComponentProps<typeof AntdDatePicker.TimePicker> {}
