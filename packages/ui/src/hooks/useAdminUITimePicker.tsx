import React, { ComponentProps, useCallback, useState } from 'react';
import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';
import DateTimePicker from '../components/DateTimePicker';

interface TimePickerProps
  extends Omit<
    ComponentProps<typeof DateTimePicker.Time>,
    'value' | 'onChange'
  > {}

type HandleChangeFuncType = (
  date: unknown,
  dateString: string | string[],
) => void;

type UseAdminUITimePickerRetType = [
  Dayjs,
  (args: TimePickerProps) => React.ReactNode,
];

const useAdminUITimePicker = (
  defaultValue?: Dayjs,
): UseAdminUITimePickerRetType => {
  const [value, setValue] = useState(defaultValue ?? dayjs());

  const handleChange: HandleChangeFuncType = useCallback((_, dates) => {
    if (Array.isArray(dates)) return;
    setValue(dayjs(dates));
  }, []);

  const TimePicker = ({ ...props }: TimePickerProps) => {
    return (
      <DateTimePicker.Time value={value} onChange={handleChange} {...props} />
    );
  };

  return [value, TimePicker];
};

export default useAdminUITimePicker;
