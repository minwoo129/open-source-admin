import React, { ComponentProps, useCallback, useState } from 'react';
import DateTimePicker from '../components/DateTimePicker';
import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';
import type { NoUndefinedRangeValueType } from 'rc-picker/lib/PickerInput/RangePicker';

interface DatePickerProps
  extends Omit<
    ComponentProps<typeof DateTimePicker.RangeDate>,
    'value' | 'onChange'
  > {}

interface RangeDateType<T> {
  start: T;
  end: T;
}

interface UseAdminUIRangeDatePickerArgs extends Partial<RangeDateType<Dayjs>> {}

type HandleChangeFuncType = (
  dates: NoUndefinedRangeValueType<Dayjs> | null,
  dateStrings: [string, string],
) => void;

type UseAdminUIRangeDatePickerRetType = [
  RangeDateType<Dayjs>,
  (args: DatePickerProps) => React.ReactNode,
];

const useAdminUIRangeDatePicker = ({
  start,
  end,
}: UseAdminUIRangeDatePickerArgs): UseAdminUIRangeDatePickerRetType => {
  const [startDate, setStartDate] = useState(start ?? dayjs);
  const [endDate, setEndDate] = useState(end ?? dayjs());

  const handleChange: HandleChangeFuncType = useCallback((dates) => {
    if (!dates) return;
    const [start, end] = dates;
    if (start) setStartDate(start);
    if (end) setEndDate(end);
  }, []);

  const RangeDatePicker = ({ ...props }: DatePickerProps) => {
    return (
      <DateTimePicker.RangeDate
        value={[startDate, endDate]}
        onChange={handleChange}
        {...props}
      />
    );
  };

  return [{ start: startDate, end: endDate }, RangeDatePicker];
};

export default useAdminUIRangeDatePicker;
