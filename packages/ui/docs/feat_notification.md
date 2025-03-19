# 기능 상세문서: Notification

## 1. 상세정보

- Ant Design에서 제공하는 Notification 기능
  - 예시) 화면 가장자리 부분에서 나타나는 팝업 알림
  - [공식문서(링크)](https://ant.design/components/notification)

## 2. 사용 방법

- Notification 기능 사용을 위해 만들어놓은 `useAdminUINotification` hook을 사용하면 됩니다.
  - Notification은 타입(open, error, success, info, warning)에 따라 노출되는 UI가 미세하게 다릅니다.
  - 이 타입에 따라 호출 메서드 명을 구분해 놓았으므로, 원하는 타입에 맞춰 메서드를 호출하시면 됩니다.
  - 각 함수의 인수 구조는 타입에 따라 미세하게 다를 수 있지만, 기본적으로 거의 대부분 동일합니다. 따라서 아래 기본 API 설명을 참고하여 호출하시면 됩니다.
  - Notification 사용을 위한 기본적인 내부 설정이 다 완료되어 있는 상태이므로, 추가 설정 없이 hook만 호출해서 사용하시면 됩니다!!!

```tsx
import { useAdminUINotification } from '@admin/ui';

const { open, error, success, info, warning } = useAdminUINotification();
```

### 기본 API 설명

| 프로퍼티 명 |                                                                         설명                                                                          |                                type                                 |
| :---------: | :---------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------: |
|   message   |                                                                Notification 제목(필수)                                                                |                              ReactNode                              |
| description |                                                                Notification 내용(필수)                                                                |                              ReactNode                              |
|   actions   |                 Notification 영역 내 하단에 추가로 적용할 컴포넌트<br>하단 영역에 다른 컴포넌트가 들어가야 되는 경우 사용하면 됩니다.                 |                             ReactNode[]                             |
|  closeIcon  |                                                                   닫힘 버튼 아이콘                                                                    |                              ReactNode                              |
|    icon     | 커스텀 아이콘<br><br>ex, 만약 success 메서드를 호출하면 success에 맞는 기본 아이콘이 노출되는데, 이 프로퍼티를 사용하면 이 아이콘을 바꿀 수 있습니다. |                              ReactNode                              |
|  placement  |                                                    Notification의 노출 위치<br>default: `topRight`                                                    | `top`, `topLeft`, `topRight`, `bottom`, `bottomLeft`, `bottomRight` |
|   onClick   |                                                     Notification 영역을 클릭했을 때 이벤트 핸들러                                                     |                             () => void                              |
|   onClose   |                                                        Notification이 닫혔을 때 이벤트 핸들러                                                         |                             () => void                              |
|  duration   |                                                        Notification 노출 시간<br>default: 4.5s                                                        |                               number                                |

## 3. 사용예시

```tsx
import React from 'react';
import { Button, useAdminUINotification } from '@admin/ui';
import './App.css';

function App() {
  const { success } = useAdminUINotification();

  return (
    <>
      <div className="table-test-grid">
        <Button
          onClick={() => {
            success({
              message: '제목',
              description: '내용',
              actions: [
                <Button onClick={() => console.log('확인')}>확인</Button>,
                <Button onClick={() => console.log('완료')}>완료</Button>,
              ],
            });
          }}
        >
          success
        </Button>
      </div>
    </>
  );
}

export default App;
```
