# 기능 상세문서: TextArea

## 1. 상세정보

- Ant Design 기반 TextArea 컴포넌트
  - Ant Design에서 제공하는 Input 컴포넌트의 TextArea 컴포넌트(Input.TextArea)를 따로 분리한 컴포넌트
  - [공식문서(링크)](https://ant.design/components/input#input-demo-textarea)

## 2. 사용 예시

```tsx
import React, { useState } from 'react';
import { TextArea } from '@admin/ui';
import './App.css';

function App() {
  const [value, setValue] = useState('');
  return (
    <>
      <div className="table-test-grid">
        <TextArea value={value} onChange={(e) => setValue(e.target.value)} />
      </div>
    </>
  );
}

export default App;
```
