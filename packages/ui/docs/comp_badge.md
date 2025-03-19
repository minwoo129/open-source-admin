# UI 컴포넌트 상세문서: Badge

## 1. 상세정보

- Ant Design 라이브러리에서 제공하는 기본적인 Badge 컴포넌트(사용자 또는 사물을 나타내는데 사용)
- 사용방법 또한 Ant Design 라이브러리와 동일  
  -> [공식문서(링크)](https://ant.design/components/badge)

## 2. 사용 예시

[실제 예시(링크)](https://ant.design/~demos/badge-demo-basic) => 출처: [공식문서](https://ant.design/components/badge)

```tsx
import React from 'react';
import { ClockCircleOutlined } from '@ant-design/icons';
import { Avatar, Badge, Space } from 'antd';

const App: React.FC = () => (
  <Space size="middle">
    <Badge count={5}>
      <Avatar shape="square" size="large" />
    </Badge>
    <Badge count={0} showZero>
      <Avatar shape="square" size="large" />
    </Badge>
    <Badge count={<ClockCircleOutlined style={{ color: '#f5222d' }} />}>
      <Avatar shape="square" size="large" />
    </Badge>
  </Space>
);

export default App;
```
