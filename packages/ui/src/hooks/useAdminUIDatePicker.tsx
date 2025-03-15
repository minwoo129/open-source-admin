import React, { ComponentProps, useState } from 'react';
import DateTimePicker from '../components/DateTimePicker';
import dayjs from 'dayjs';

interface DatePickerProps
  extends Omit<
    ComponentProps<typeof DateTimePicker.Date>,
    'value' | 'onChange'
  > {}

type UseAdminUIDatePickerRetType = [
  dayjs.Dayjs,
  (args: DatePickerProps) => React.ReactNode,
];

const useAdminUIDatePicker = (
  defaultValue?: dayjs.Dayjs,
): UseAdminUIDatePickerRetType => {
  const [value, setValue] = useState<dayjs.Dayjs>(defaultValue ?? dayjs());

  const DatePicker = ({ ...props }: DatePickerProps) => {
    return (
      <DateTimePicker.Date
        value={value}
        onChange={(_, dates) => {
          if (Array.isArray(dates)) return;
          setValue(dayjs(dates));
        }}
        {...props}
      />
    );
  };

  return [value, DatePicker];
};

export default useAdminUIDatePicker;
