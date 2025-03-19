# UI 컴포넌트 상세문서: DateTimePicker

## 1. 상세 정보

- Ant Design 라이브러리에서 제공하는 DatePicker 컴포넌트를 날짜 선택, 날짜 범위 선택, 시간 선택으로 나누어 제공하는 컴포넌트 입니다.  
  -> [공식문서(링크)](https://ant.design/components/date-picker)

## 2. 컴포넌트 설명

- 참고
  - 아래 세개 컴포넌트들은 기본적으로 `Dayjs` 타입만 값으로 사용 가능한 구조입니다. VSCode에서 값이 `undefined`로 뜨는 경우가 있을 수 있지만, Dayjs 타입의 상태값을 적용하면 빨간불은 바로 없어지니 안심하고 사용하면 됩니다.(코드 설계 오류로 추정됩니다.)

### 2-1. DateTimePicker.Date

날짜 선택 컴포넌트(props에서 추가 설정 시 여러개 선택 가능)

#### 컴포넌트 사용 예시

```typescript
import { DateTimePicker } from '@admin/ui';

<DateTimePicker.Date
    value={day}
    onChange={(date, dateString) => {

    }}
/>
```

#### 기본 API 설명

| props명  |            설명            | 타입                                                                                  |
| :------: | :------------------------: | :------------------------------------------------------------------------------------ |
|  value   |        현재 날짜값         | dayjs.Dayjs                                                                           |
| onChange | 값 변경 이벤트 처리 메서드 | function <br>((date: dayjs.Dayjs \| unknown, dateString: string \| string[])) => void |

#### hook을 통한 사용 예시

이 컴포넌트는 컴포넌트 외에 hook을 사용할 때도 사용이 가능하도록 설계되었습니다. 기본적으로 사용하는 비즈니스 로직이 hook에 미리 적용되어 있으니, 가급적 hook을 사용하시는 것을 권장합니다.

```typescript
import React from 'react'
import { useAdminUIDatePicker } from '@admin/ui';
import './App.css';
import dayjs from 'dayjs';

function App() {
  const [currentValue, DatePickerComponent] = useAdminUIDatePicker(dayjs('2021-01-01'));
  return (
    <>
      <div className="table-test-grid">
        <DatePickerComponent />
      </div>
    </>
  );
}

export default App;
```

기본적인 구조

```typescript
const [value, Component] = useAdminUIDatePicker(defaultValue);
```

| 프로퍼티(또는 반환값)명 |                                                                                                           설명                                                                                                           | type            |
| :---------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------- |
|      defaultValue       |                                                                                       날짜 초기값을 지정하고 싶은 경우 사용하세요.                                                                                       | dayjs.Dayjs     |
|          value          |                                                                                                현재 선택된 날짜값입니다.                                                                                                 | dayjs.Dayjs     |
|        Component        | value, onChange props가 제거된 DatePicker 컴포넌트입니다. <br> 값 변경 로직은 hook 안에 처리되니 이 컴포넌트를 그대로 사용하시면 됩니다. <br> 그 외 props 들은 모두 Ant Design에서 제공하는 props 그대로 사용 가능합니다 | React.ReactNode |

### 2-2. DateTimePicker.RangeDate

날짜 범위 선택 컴포넌트

#### 컴포넌트 사용 예시

```typescript
import { DateTimePicker } from '@admin/ui';

<DateTimePicker.RangeDate
    value={[startDate, endDate]}
    onChange={(date, dateString) => {

    }}
/>
```

#### 기본적인 props 설명 및 타입

| props명  |            설명            | 타입                                                                                               |
| :------: | :------------------------: | :------------------------------------------------------------------------------------------------- |
|  value   |        현재 날짜값         | [dayjs.Dayjs, dayjs.Dayjs]                                                                         |
| onChange | 값 변경 이벤트 처리 메서드 | function <br>((date: [dayjs.Dayjs, dayjs.Dayjs] \| null , dateString: string \| string[])) => void |

#### hook을 통한 사용 예시

이 컴포넌트는 컴포넌트 외에 hook을 사용할 때도 사용이 가능하도록 설계되었습니다. 기본적으로 사용하는 비즈니스 로직이 hook에 미리 적용되어 있으니, 가급적 hook을 사용하시는 것을 권장합니다.

```typescript
import React from 'react'
import { useAdminUIRangeDatePicker } from '@admin/ui';
import './App.css';
import dayjs from 'dayjs';

function App() {
  const [currentValue, DatePickerComponent] = useAdminUIRangeDatePicker({start: dayjs('2021-01-01'), end: dayjs('2021-01-01')});
  return (
    <>
      <div className="table-test-grid">
        <DatePickerComponent />
      </div>
    </>
  );
}

export default App;
```

기본적인 구조

```typescript
const [value, Component] = useAdminUIDatePicker(defaultValue);
```

| 프로퍼티(또는 반환값)명 |                                                                                                           설명                                                                                                           | type                                                 |
| :---------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------- |
|      defaultValue       |                                                                     날짜 초기값을 지정하고 싶은 경우 사용하세요. <br> start: 시작날짜, end: 끝 날짜                                                                      | Object <br> {start?: dayjs.Dayjs, end?: dayjs.Dayjs} |
|          value          |                                                                                                현재 선택된 날짜값입니다.                                                                                                 | Object <br> {start: dayjs.Dayjs, end: dayjs.Dayjs}   |
|        Component        | value, onChange props가 제거된 DatePicker 컴포넌트입니다. <br> 값 변경 로직은 hook 안에 처리되니 이 컴포넌트를 그대로 사용하시면 됩니다. <br> 그 외 props 들은 모두 Ant Design에서 제공하는 props 그대로 사용 가능합니다 | React.ReactNode                                      |

### 2-3. DateTimePicker.Time

시간 선택 컴포넌트(props에서 추가 설정 시 여러개 선택 가능)

#### 컴포넌트 사용 예시

```typescript
import { DateTimePicker } from '@admin/ui';

<DateTimePicker.Time
    value={time}
    onChange={(date, dateString) => {

    }}
/>
```

#### 기본적인 props 설명 및 타입

| props명  |            설명            | 타입                                                                                  |
| :------: | :------------------------: | :------------------------------------------------------------------------------------ |
|  value   |   현재 날짜값(시간 포함)   | dayjs.Dayjs                                                                           |
| onChange | 값 변경 이벤트 처리 메서드 | function <br>((date: dayjs.Dayjs \| unknown, dateString: string \| string[])) => void |

#### hook을 통한 사용 예시

이 컴포넌트는 컴포넌트 외에 hook을 사용할 때도 사용이 가능하도록 설계되었습니다. 기본적으로 사용하는 비즈니스 로직이 hook에 미리 적용되어 있으니, 가급적 hook을 사용하시는 것을 권장합니다.

```typescript
import React from 'react'
import { useAdminUITimePicker } from '@admin/ui';
import './App.css';
import dayjs from 'dayjs';

function App() {
  const [currentValue, DatePickerComponent] = useAdminUITimePicker(dayjs('2021-01-01 11:00:00'));
  return (
    <>
      <div className="table-test-grid">
        <DatePickerComponent />
      </div>
    </>
  );
}

export default App;
```

기본적인 구조

```typescript
const [value, Component] = useAdminUITimePicker(defaultValue);
```

| 프로퍼티(또는 반환값)명 |                                                                                                           설명                                                                                                           | type            |
| :---------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------- |
|      defaultValue       |                                                                                  시간(날짜 포함)초기값을 지정하고 싶은 경우 사용하세요.                                                                                  | dayjs.Dayjs     |
|          value          |                                                                                           현재 선택된 시간(날짜 포함)값입니다.                                                                                           | dayjs.Dayjs     |
|        Component        | value, onChange props가 제거된 DatePicker 컴포넌트입니다. <br> 값 변경 로직은 hook 안에 처리되니 이 컴포넌트를 그대로 사용하시면 됩니다. <br> 그 외 props 들은 모두 Ant Design에서 제공하는 props 그대로 사용 가능합니다 | React.ReactNode |
