# UI 컴포넌트 상세문서: Button

## 1. 상세정보

- Ant Design 라이브러리에서 제공하는 기본적인 Calendar 컴포넌트
- 사용방법 또한 Ant Design 라이브러리와 동일  
  -> [공식문서(링크)](https://ant.design/components/calendar)

## 2. 사용 예시

### 2-1. 기본 캘린더

[실제 예시(링크)](https://ant.design/~demos/calendar-demo-basic)

```tsx
import React from 'react';
import { Calendar } from '@admin/ui';
import './App.css';

function App() {
  return (
    <>
      <div className="table-test-grid">
        <Calendar
          onSelect={(date, selectInfo) => {
            console.log('onSelect');
            console.log('date: ', date.format('YYYY-MM-DD'));
            console.log('selectInfo: ', selectInfo);
          }}
          onPanelChange={(date, mode) => {
            console.log('onPanelChange');
            console.log('date: ', date.format('YYYY-MM-DD'));
            console.log('mode: ', mode);
          }}
        />
      </div>
    </>
  );
}

export default App;
```

### 2-2. 공지형 캘린더

[실제 예시(링크)](https://ant.design/~demos/calendar-demo-notice-calendar)

```tsx
import React from 'react';
import { Calendar } from '@admin/ui';
import './App.css';
import type { Dayjs } from 'dayjs';

const getListData = (value: Dayjs) => {
  let listData: { type: string; content: string }[] = []; // Specify the type of listData
  switch (value.date()) {
    case 8:
      listData = [
        { type: 'warning', content: 'This is warning event.' },
        { type: 'success', content: 'This is usual event.' },
      ];
      break;
    case 10:
      listData = [
        { type: 'warning', content: 'This is warning event.' },
        { type: 'success', content: 'This is usual event.' },
        { type: 'error', content: 'This is error event.' },
      ];
      break;
    case 15:
      listData = [
        { type: 'warning', content: 'This is warning event' },
        { type: 'success', content: 'This is very long usual event......' },
        { type: 'error', content: 'This is error event 1.' },
        { type: 'error', content: 'This is error event 2.' },
        { type: 'error', content: 'This is error event 3.' },
        { type: 'error', content: 'This is error event 4.' },
      ];
      break;
    default:
  }
  return listData || [];
};

const getMonthData = (value: Dayjs) => {
  if (value.month() === 8) {
    return 1394;
  }
};

function App() {
  const monthCellRender = (value: Dayjs) => {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  };

  const dateCellRender = (value: Dayjs) => {
    const listData = getListData(value);
    return (
      <ul className="events">
        {listData.map((item) => (
          <li key={item.content}>
            <Badge
              status={item.type as BadgeProps['status']}
              text={item.content}
            />
          </li>
        ))}
      </ul>
    );
  };

  const cellRender: CalendarProps<Dayjs>['cellRender'] = (current, info) => {
    if (info.type === 'date') return dateCellRender(current);
    if (info.type === 'month') return monthCellRender(current);
    return info.originNode;
  };
  return (
    <>
      <div className="table-test-grid">
        <Calendar cellRender={cellRender} />;
      </div>
    </>
  );
}

export default App;
```

### 2-3. 카드형 캘린더

[실제 예시(링크)](https://ant.design/~demos/calendar-demo-card)

```tsx
import React from 'react';
import { Calendar } from '@admin/ui';
import './App.css';

function App() {
  return (
    <>
      <div className="table-test-grid">
        <Calendar
          fullscreen={false}
          onPanelChange={(date, mode) => {
            console.log('onPanelChange');
            console.log('date: ', date.format('YYYY-MM-DD'));
            console.log('mode: ', mode);
          }}
        />
      </div>
    </>
  );
}

export default App;
```
