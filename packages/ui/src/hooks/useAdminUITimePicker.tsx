import React, { ComponentProps, useState } from 'react';
import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';
import DateTimePicker from '../components/DateTimePicker';

interface TimePickerProps
  extends Omit<
    ComponentProps<typeof DateTimePicker.Time>,
    'value' | 'onChange'
  > {}

type UseAdminUITimePickerRetType = [
  Dayjs,
  (args: TimePickerProps) => React.ReactNode,
];

const useAdminUITimePicker = (
  defaultValue?: Dayjs,
): UseAdminUITimePickerRetType => {
  const [value, setValue] = useState(defaultValue ?? dayjs());

  const TimePicker = ({ ...props }: TimePickerProps) => {
    return (
      <DateTimePicker.Time
        value={value}
        onChange={(_, dates) => {
          if (Array.isArray(dates)) return;
          setValue(dayjs(dates));
        }}
        {...props}
      />
    );
  };

  return [value, TimePicker];
};

export default useAdminUITimePicker;
