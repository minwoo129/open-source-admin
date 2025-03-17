import React, { ComponentProps, useCallback, useState } from 'react';
import DateTimePicker from '../components/DateTimePicker';
import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';

interface DatePickerProps
  extends Omit<
    ComponentProps<typeof DateTimePicker.Date>,
    'value' | 'onChange'
  > {}

type HandleChangeFuncType = (
  date: unknown,
  dateString: string | string[],
) => void;

type UseAdminUIDatePickerRetType = [
  Dayjs,
  (args: DatePickerProps) => React.ReactNode,
];

const useAdminUIDatePicker = (
  defaultValue?: Dayjs,
): UseAdminUIDatePickerRetType => {
  const [value, setValue] = useState<Dayjs>(defaultValue ?? dayjs());

  const handleChange: HandleChangeFuncType = useCallback((_, dates) => {
    if (Array.isArray(dates)) return;
    setValue(dayjs(dates));
  }, []);

  const DatePicker = ({ ...props }: DatePickerProps) => {
    return (
      <DateTimePicker.Date value={value} onChange={handleChange} {...props} />
    );
  };

  return [value, DatePicker];
};

export default useAdminUIDatePicker;
