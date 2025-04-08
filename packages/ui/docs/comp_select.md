# UI 컴포넌트 상세문서: Select

## 1. 상세정보

- Ant Design에서 제공하는 Select 컴포넌트
- 사용방법 또한 Ant Design 라이브러리와 동일  
  -> [공식문서(링크)](https://ant.design/components/select)

## 2. 사용 방법

### 2-1. 컴포넌트 직접 호출

```tsx
import React from 'react';
import { Select } from '@admin/ui';
import './App.css';

function App() {
  return (
    <>
      <div className="table-test-grid">
        <Select
          defaultValue="lucy"
          style={{ width: 120 }}
          onChange={(value) => {
            console.log(value);
          }}
          options={[
            { value: 'jack', label: 'Jack' },
            { value: 'lucy', label: 'Lucy' },
            { value: 'Yiminghe', label: 'yiminghe' },
            { value: 'disabled', label: 'Disabled', disabled: true },
          ]}
        />
      </div>
    </>
  );
}

export default App;
```

### 2-2. Hook 호출

```tsx
const [value, SelectComponent] = useAdminUISelect(defaultValue);
```

#### 기본 API 설명

|    반환값 명    |                                                설명                                                 |       type       |
| :-------------: | :-------------------------------------------------------------------------------------------------: | :--------------: |
|      value      |                                           현재 선택된 값                                            | string \| number |
| SelectComponent | Select 컴포넌트 <br> `value`, `defaultValue`, `onChage`를 제외하고 모든 props 정상 사용 가능합니다. |    ReactNode     |
|  defaultValue   |                                              디폴트 값                                              | string \| number |
