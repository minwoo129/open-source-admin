# UI 컴포넌트 상세문서: List

## 1. 상세정보

- Ant Design 라이브러리에서 제공하는 기본적인 List 컴포넌트(사용자 또는 사물을 나타내는데 사용)
- props 구조는 동일하지만, List 컴포넌트와 Item 컴포넌트를 호출하는 방법이 다름  
  -> [공식문서(링크)](https://ant.design/components/list)

## 2. 사용 예시

[실제 예시(링크)](https://ant.design/~demos/list-demo-basic) => 출처: [공식문서](https://ant.design/components/list)

```tsx
import React from 'react';
import { Avatar, List } from '@admin/ui';

const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
];

const App: React.FC = () => (
  <List
    itemLayout="horizontal"
    dataSource={data}
    renderItem={(item, index) => (
      <List.Item>
        <List.ItemMeta
          avatar={
            <Avatar
              src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}
            />
          }
          title={<a href="https://ant.design">{item.title}</a>}
          description="Ant Design, a design language for background applications, is refined by Ant UED Team"
        />
      </List.Item>
    )}
  />
);

export default App;
```
