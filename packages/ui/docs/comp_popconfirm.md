# 기능 상세문서: PopConfirm

## 1. 상세정보

- Ant Design에서 제공하는 PopConfirm 컴포넌트(버튼포함 다른 컴포넌트 위에 버블팝업 형태로 노출되는 Confirm 컴포넌트)
- 사용방법 또한 Ant Design 라이브러리와 동일  
   -> [공식문서(링크)](https://ant.design/components/popconfirm)

## 2. 사용예시

[실제 예시(링크)](https://ant.design/~demos/popconfirm-demo-promise)

```tsx
import React from 'react';
import { Button, PopConfirm } from '@admin/ui';
import './App.css';

function App() {
  const confirm = () => {
    new Promise((resolve) => {
      setTimeout(() => resolve(null), 3000);
    });
  };
  return (
    <>
      <div className="table-test-grid">
        <PopConfirm
          title="Title"
          description="Open Popconfirm with Promise"
          onConfirm={confirm}
          onOpenChange={() => console.log('open change')}
        >
          <Button type="primary">Open Popconfirm with Promise</Button>
        </PopConfirm>
      </div>
    </>
  );
}

export default App;
```
