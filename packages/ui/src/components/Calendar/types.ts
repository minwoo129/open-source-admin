import type { CalendarProps as AntdCalendarProps } from 'antd';
import type {
  CalendarMode,
  SelectInfo,
} from 'antd/es/calendar/generateCalendar';
import type { Dayjs } from 'dayjs';

export interface CalendarProps
  extends Omit<AntdCalendarProps<Dayjs>, 'onSelect' | 'onPanelChange'> {
  /** 날짜가 변경됬을 때 이벤트 */
  onSelect?: (date: Dayjs, selectInfo: SelectInfo) => void;
  /** 현재 보여지는 화면이 변경됬을 때 이벤트 */
  onPanelChange?: (date: Dayjs, mode: CalendarMode) => void;
}
