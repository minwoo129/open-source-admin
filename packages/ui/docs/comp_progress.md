# UI 컴포넌트 상세문서: Progress

## 1. 상세정보

- Ant Design에서 제공하는 Progress 컴포넌트
- 사용방법 또한 Ant Design 라이브러리와 동일  
  -> [공식문서(링크)](https://ant.design/components/progress)

## 2. 사용 예시

### 2-1. Progressbar

[실제 예시(링크)](https://ant.design/~demos/progress-demo-line)

```tsx
import React from 'react';
import { Progress } from '@admin/ui';
import './App.css';

function App() {
  return (
    <>
      <div className="table-test-grid">
        <Progress percent={30} />
        <Progress percent={50} status="active" />
        <Progress percent={70} status="exception" />
        <Progress percent={100} />
        <Progress percent={50} showInfo={false} />
      </div>
    </>
  );
}

export default App;
```

### 2-2. Circle Progress bar

[실제 예시(링크)](https://ant.design/~demos/progress-demo-circle)

```tsx
import React from 'react';
import { Progress } from '@admin/ui';
import './App.css';

function App() {
  return (
    <>
      <div className="table-test-grid">
        <Progress type="circle" percent={75} />
        <Progress type="circle" percent={70} status="exception" />
        <Progress type="circle" percent={100} />
      </div>
    </>
  );
}

export default App;
```

### 2-3. Custom Text Format

[실제 예시(링크)](https://ant.design/~demos/progress-demo-format)

```tsx
import React from 'react';
import { Progress } from '@admin/ui';
import './App.css';

function App() {
  return (
    <>
      <div className="table-test-grid">
        <Progress
          type="circle"
          percent={75}
          format={(percent) => `${percent} Days`}
        />
        <Progress type="circle" percent={100} format={() => 'Done'} />
      </div>
    </>
  );
}

export default App;
```
