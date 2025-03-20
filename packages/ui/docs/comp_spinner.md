# UI 컴포넌트 상세문서: Spinner

## 1. 상세정보

- Ant Design에서 제공하는 Spin 컴포넌트(명칭만 바꿈)
- 사용방법 또한 Ant Design 라이브러리와 동일  
  -> [공식문서(링크)](https://ant.design/components/spin)

## 2. 사용 예시

```tsx
import React from 'react';
import { Spinner } from '@admin/ui';
import './App.css';

function App() {
  return (
    <>
      <div className="table-test-grid">
        <Spinner />
      </div>
    </>
  );
}

export default App;
```
