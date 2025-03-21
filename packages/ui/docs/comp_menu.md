# UI 컴포넌트 상세문서: Menu

## 1. 상세정보

- Ant Design Menu UI를 기반으로 작성한 메뉴 컴포넌트
  - Ant Design 컴포넌트를 사용하는 것은 맞지만, props를 필요한 것만 제외하고 모두 빼버렸기 때문에 그 외의 기능을 사용하려는 경우 별도의 수정이 필요

## 2. 사용방법(메인 워크스페이스 기준)

### 참고

이미 메인 워크스페이스에 연결이 되어있기 때문에, `3`부터 보시면 됩니다.

---

---

주로 실행할 프로젝트에서 `Route`의 레이아웃을 구성하는 컴포넌트에 추가하시기 바랍니다. 단, 레이아웃에 따른 CSS는 직접 작성하셔야 합니다.

#### 사용 예시

```tsx
import React from 'react';
import '../css/PageLayout.css';
import { Outlet } from 'react-router-dom';
import { Button, Menu } from '@admin/ui';
import {
  CopyOutlined,
  HomeOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import useMenu from '../hooks/common/PageLayout/useMenu';
import { NavigationRouteData } from '../constants/Route';

const PageLayout = () => {
  const { open, toggleButtonDisabled, toggleMenu, handleMenuClick } = useMenu();
  return (
    <div className="page-layout">
      <div className="menu">
        <Button
          className="toggle-button"
          onClick={toggleMenu}
          disabled={toggleButtonDisabled}
          ghost
        >
          <MenuUnfoldOutlined />
        </Button>
        <Menu
          items={[
            {
              key: 'home',
              label: NavigationRouteData['home'].label,
              icon: <HomeOutlined />,
            },
            {
              key: 'test',
              label: 'TestPage',
              icon: <CopyOutlined />,
              children: [
                {
                  key: 'test1',
                  label: NavigationRouteData['test1'].label,
                },
                {
                  key: 'test2',
                  label: NavigationRouteData['test2'].label,
                },
              ],
            },
          ]}
          onMenuClick={({ key }) => handleMenuClick(key)}
          isMenuOpened={open}
        />
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default PageLayout;
```

## 3. 페이지 연결 방법

### 3-1. Route 추가

추가하고자 하는 페이지 컴포넌트를 `pages` 폴더 안에 작성하시고, `App.tsx` 컴포넌트에 Route 정보를 추가합니다.

```tsx
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageLayout from './pages/PageLayout';
import AddedPage from './pages/AddedPage'; // 예시입니다.

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PageLayout />}>
          {...}
          <Route path="/added" element={<AddedPage />} /> {* 이와 같이 작성하시면 됩니다. *}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

```

### 3-2. Route 정보 입력

`apps/main-app/src/constants/Route.ts` 파일로 들어가서 `NavigationRouteData`에 추가한 Route 정보를 작성합니다.

```typescript
export const NavigationRouteData: NavigationRouteType = {
  ...
  /** Route 정보를 구분할 key 값: 원하는 값으로 작성하시면 됩니다. */
  added: {
    /** 메뉴에 보여질 버튼 타이틀 */
    label: 'AddedPage',
    /** App.tsx에 작성한 Route 경로 */
    route:
  }
};
```

### 3-3. PageLayer 컴포넌트에 Route 버튼 추가

#### Route 버튼 하나만 추가하는 경우

다음과 같이 순서에 맞춰 Menu 컴포넌트의 `items` 배열에 추가하시면 됩니다.

````tsx
<Menu
  items={[
    ...{
      /**
       * 위에서 작성한 NavigationRouteData의 키값으로 작성해주세요.
       * 컴포넌트 내부 구조 상 자동완성이 안되기 때문에 키값 매칭에 주의해주시기 바랍니다.
       */
      key: 'added',
      /**
       * 위에서 작성한 NavigationRouteData에서 추가한 키값과 일치하는 프로퍼티에서 label 프로퍼티를 호출해 사용하시기 바랍니다.
       */
      label: NavigationRouteData['added'].label,
      /**
       * 미리 설치된 ```@ant-design/icons``` 패키지에서 적당한 아이콘 컴포넌트를 연결하시는 것을 권장합니다.
       * 별도로 SVG 이미지를 첨부하여 SVG 이미지 컴포넌트를 사용해 연결하셔도 됩니다.
       */
      icon: <HomeOutlined />,
    },
  ]}
/>
````

#### Route 버튼들을 그룹화해서 추가하는 경우

다음과 같이 순서에 맞춰 Menu 컴포넌트의 `items` 배열에 추가하시면 됩니다.

````tsx
        <Menu
          items={[
            ...
            {
              /**
               * 이 값은 Route 정보가 연결되지 않아 아무값이나 상관없으나,
               * 기존에 추가된 값들과 중복되지만 않게 원하는 값으로 연결하면 됩니다.
               */
              key: 'home',
              /**
               * 이 값은 Route 정보가 연결되지 않아 원하시는 아무 값으로 연결하시면 됩니다.
              */
              label: ,
              /**
               * 미리 설치된 ```@ant-design/icons``` 패키지에서
               * 적당한 아이콘 컴포넌트를 연결하시는 것을 권장합니다.
               *
               * 별도로 SVG 이미지를 첨부하여 SVG 이미지 컴포넌트를 사용해 연결하셔도 됩니다.
              */
              icon: <HomeOutlined />,
              children: [
                {
                    /**
                     * 위에서 작성한 NavigationRouteData의 키값으로 작성해주세요.
                     * 컴포넌트 내부 구조 상 자동완성이 안되기 때문에 키값 매칭에 주의해주시기 바랍니다.
                     */
                    key: 'added1',
                    /**
                     * 위에서 작성한 NavigationRouteData에서 추가한 키값과
                     * 일치하는 프로퍼티에서 label 프로퍼티를 호출해 사용하시기 바랍니다.
                     */
                    label: NavigationRouteData['added1'].label,
                    /**
                     * 미리 설치된 ```@ant-design/icons``` 패키지에서
                     * 적당한 아이콘 컴포넌트를 연결하시는 것을 권장합니다.
                     * 별도로 SVG 이미지를 첨부하여 SVG 이미지 컴포넌트를 사용해 연결하셔도 됩니다.
                     */
                    icon: <HomeOutlined />,
                },
                {
                    /**
                     * 위에서 작성한 NavigationRouteData의 키값으로 작성해주세요.
                     * 컴포넌트 내부 구조 상 자동완성이 안되기 때문에 키값 매칭에 주의해주시기 바랍니다.
                     */
                    key: 'added2',
                    /**
                     * 위에서 작성한 NavigationRouteData에서 추가한 키값과
                     * 일치하는 프로퍼티에서 label 프로퍼티를 호출해 사용하시기 바랍니다.
                     */
                    label: NavigationRouteData['added2'].label,
                    /**
                     * 미리 설치된 ```@ant-design/icons``` 패키지에서
                     * 적당한 아이콘 컴포넌트를 연결하시는 것을 권장합니다.
                     * 별도로 SVG 이미지를 첨부하여 SVG 이미지 컴포넌트를 사용해 연결하셔도 됩니다.
                     */
                    icon: <HomeOutlined />,
                },
              ]
            },
          ]}
        />
````

#### 여기까지가 끝입니다.

이렇게만 추가가 이루어지면, `Menu` 컴포넌트의 `onMenuClick` props에 연결된 `handleMenuClick` 함수를 통해 페이지 라우팅이 이루어지게 됩니다.

#### 참고) `handleMenuClick` 함수 내부구조

```tsx
...
import { useNavigate } from 'react-router-dom';
...

const useMenu = () => {
  const navigate = useNavigate();

  ...

  const handleMenuClick = (key: string) => {
    if (!(key in NavigationRouteData)) {
      return;
    }
    navigate(NavigationRouteData[key].route);
  };

  ...
};

export default useMenu;

```
