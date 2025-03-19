# UI 컴포넌트 상세문서: Avatar

## 1. 상세정보

- Ant Design 라이브러리에서 제공하는 기본적인 Avatar 컴포넌트(사용자 또는 사물을 나타내는데 사용)
- 사용방법 또한 Ant Design 라이브러리와 동일  
  -> [공식문서(링크)](https://ant.design/components/avatar)

## 2. 사용 예시

[실제 예시(링크)](https://ant.design/~demos/avatar-demo-basic) => 출처: [공식문서](https://ant.design/components/avatar)

```tsx
import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Space } from 'antd';

const App: React.FC = () => (
  <Space direction="vertical" size={16}>
    <Space wrap size={16}>
      <Avatar size={64} icon={<UserOutlined />} />
      <Avatar size="large" icon={<UserOutlined />} />
      <Avatar icon={<UserOutlined />} />
      <Avatar size="small" icon={<UserOutlined />} />
      <Avatar size={14} icon={<UserOutlined />} />
    </Space>
    <Space wrap size={16}>
      <Avatar shape="square" size={64} icon={<UserOutlined />} />
      <Avatar shape="square" size="large" icon={<UserOutlined />} />
      <Avatar shape="square" icon={<UserOutlined />} />
      <Avatar shape="square" size="small" icon={<UserOutlined />} />
      <Avatar shape="square" size={14} icon={<UserOutlined />} />
    </Space>
  </Space>
);

export default App;
```
