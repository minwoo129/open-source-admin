# 기능 상세문서: SearchInput

## 1. 상세정보

- Ant Design 기반 검색어 입력 컴포넌트
  - Ant Design에서 제공하는 Input 컴포넌트의 검색어 입력 컴포넌트(Input.Search)를 따로 분리한 컴포넌트
  - [공식문서(링크)](https://ant.design/components/input#input-demo-search-input)

## 2. 사용예시

### 2-1. 예시 1

```tsx
import React from 'react';
import { SearchInput } from '@admin/ui';
import './App.css';

function App() {
  return (
    <>
      <div className="table-test-grid">
        <SearchInput
          onSearch={(value, e, info) => {
            e?.preventDefault();
            console.log('value: ', value); // 검색어 입력값
            console.log('info: ', info);
          }}
        />
      </div>
    </>
  );
}

export default App;
```

### 2-2. 예시 2

```tsx
import React, { useState } from 'react';
import { SearchInput } from '@admin/ui';
import './App.css';

function App() {
  const [value, setValue] = useState('');
  return (
    <>
      <div className="table-test-grid">
        <SearchInput
          //value={value}
          //onChange={(e) => setValue(e.target.value)}
          onSearch={(value, e, info) => {
            e?.preventDefault();
            console.log('value: ', value);
            console.log('info: ', info);
          }}
        />
      </div>
    </>
  );
}

export default App;
```
