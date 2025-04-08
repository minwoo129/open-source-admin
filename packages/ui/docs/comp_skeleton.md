# UI 컴포넌트 상세문서: Skeleton

## 1. 상세정보

- Ant Design에서 제공하는 Skeleton 컴포넌트
- 사용방법 또한 Ant Design 라이브러리와 동일  
  -> [공식문서(링크)](https://ant.design/components/skeleton)
- Button, Image, Avatar, Input 등 다양한 유형에 따라 사용할 수 있도록 설계

## 2. 사용 예시

```tsx
import React from 'react';
import { Avatar, Skeleton } from '@admin/ui';
import './App.css';

function App() {
  return (
    <>
      <div className="table-test-grid">
        <Skeleton />
        <Skeleton.Button />
        <Skeleton.Avatar />
        <Skeleton.Image />
        <Skeleton.Input />
        <Skeleton.Node>
          <Avatar size="large" />
        </Skeleton.Node>
      </div>
    </>
  );
}

export default App;
```
