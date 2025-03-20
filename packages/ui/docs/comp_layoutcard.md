# UI 컴포넌트 상세문서: Button

## 1. 상세정보

- Ant Design 라이브러리에서 제공하는 Layout 컴포넌트를 사용해 화면에서 기본적인 그리드를 잡는데 사용하기 위한 컴포넌트
- 주로 메인화면에서 추가될 가능성이 있음

## 2. 사용방법 및 유의사항

- API 참고: [Ant Design Layer](https://ant.design/components/layout)의 Content를 사용하였습니다
- 이 컴포넌트에는 기본적으로 전방향 20px의 padding이 적용되어 있습니다.(이점 참고 부탁드립니다.)

## 3. 사용 예시

```tsx
import { LayoutCard } from '@admin/ui';
import './App.css';

function App() {
  return (
    <>
      <div className="table-test-grid">
        <LayoutCard />
      </div>
    </>
  );
}

export default App;
```
