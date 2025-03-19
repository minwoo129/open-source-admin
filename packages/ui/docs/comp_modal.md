# UI 컴포넌트 상세문서: Modal

## 1. 상세정보

- Ant Design 라이브러리에서 제공하는 기본적인 Badge 컴포넌트(사용자 또는 사물을 나타내는데 사용)  
  -> [공식문서(링크)](https://ant.design/components/modal)

## 2. 사용방법

### 2-1. 컴포넌트 직접 호출

```tsx
import { Button, Modal } from '@admin/ui';
...
    <Modal
        open={open}
        title="Title"
        onOk={(e) => {}}
        onCancel={(e) => {}}
        footer={[
          ...
        ]}
      >
        {children}
      </Modal>
```

#### 기본 API 설명

| props 명 |                                                                                          설명                                                                                           |                                   type                                   |
| :------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------: |
|   open   |                                                                                  모달이 열렸는지 여부                                                                                   |                                 boolean                                  |
|  title   |                                                                                       모달 Title                                                                                        |                                  string                                  |
|   onOk   |                                                                 모달 내 Footer 영역에서 `OK` 버튼의 클릭 이벤트 헨들러                                                                  | function <br>(e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => void |
| onCancel |                                                               모달 내 Footer 영역에서 `Cancel` 버튼의 클릭 이벤트 헨들러                                                                | function<br>(e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => void  |
|  footer  | 모달 내 Footer 영역에 들어갈 Elements.<br>커스텀 Footer 버튼들을 사용하고 싶은 경우 사용하면 됩니다.<br><br> 만약 footer를 사용하고 싶지 않은 경우 `footer={null}`로 선언하시면 됩니다. |                         Array(ReactNode) \| null                         |
| children |                                                                         모달의 메인 컨텐츠 노출 영역(body 영역)                                                                         |                                ReactNode                                 |

### 2-2. hook 사용

`useAdminUIModal` hook을 사용하는 경우, 조금 더 편리하게 사용할 수 있습니다.

```tsx
const [isOpen, handleModalVisible, ModalComponent] = useAdminUIModal();
```

#### 기본 API 설명

|       반환값       |                                                               설명                                                                |            type            |
| :----------------: | :-------------------------------------------------------------------------------------------------------------------------------: | :------------------------: |
|       isOpen       |                                                       모달이 열렸는지 여부                                                        |          boolean           |
| handleModalVisible | 모달의 열림 또는 닫힘을 제어하는 함수.<br><br>`handleModalVisible(true)` => 모달 열림<br>`handleModalVisible(false)` => 모달 닫힘 | (visible: boolean) => void |
|   ModalComponent   |                             모달 컴포넌트<br>`open` props를 제외한 모든 props는 정상 사용 가능합니다.                             |         ReactNode          |
