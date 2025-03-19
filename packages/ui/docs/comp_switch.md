# UI 컴포넌트 상세문서: Switch

## 1. 상세정보

- Ant Design에서 제공하는 Switch 컴포넌트
- 사용방법 또한 Ant Design 라이브러리와 동일  
  -> [공식문서(링크)](https://ant.design/components/switch)

## 2. 사용 방법

### 2-1. 컴포넌트 직접 호출

```tsx
import React from 'react';
import { Switch } from '@admin/ui';
import './App.css';
import { useState } from 'react';

function App() {
  const [value, setValue] = useState(false);
  return (
    <>
      <Switch value={value} onClick={setValue} />
    </>
  );
}

export default App;
```
