import React, { ComponentProps, useState } from 'react';
import DateTimePicker from '../components/DateTimePicker';
import dayjs from 'dayjs';

interface DatePickerProps
  extends Omit<
    ComponentProps<typeof DateTimePicker.RangeDate>,
    'value' | 'onChange'
  > {}

interface RangeDateType<T> {
  start: T;
  end: T;
}

interface UseAdminUIRangeDatePickerArgs
  extends Partial<RangeDateType<dayjs.Dayjs>> {}

type UseAdminUIRangeDatePickerRetType = [
  RangeDateType<dayjs.Dayjs>,
  (args: DatePickerProps) => React.ReactNode,
];

const useAdminUIRangeDatePicker = ({
  start,
  end,
}: UseAdminUIRangeDatePickerArgs): UseAdminUIRangeDatePickerRetType => {
  const [startDate, setStartDate] = useState(start ?? dayjs);
  const [endDate, setEndDate] = useState(end ?? dayjs());

  const RangeDatePicker = ({ ...props }: DatePickerProps) => {
    return (
      <DateTimePicker.RangeDate
        value={[startDate, endDate]}
        onChange={(dates) => {
          if (!dates) return;
          const [start, end] = dates;
          if (start) setStartDate(start);
          if (end) setEndDate(end);
        }}
        {...props}
      />
    );
  };

  return [{ start: startDate, end: endDate }, RangeDatePicker];
};

export default useAdminUIRangeDatePicker;
