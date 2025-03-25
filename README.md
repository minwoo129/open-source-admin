# OpenSourceAdmin

# 1. 개발 취지

- 기존에 관리자 페이지를 개발하려면, UI 라이브러리, 차트 라이브러리 설치 및 기본적인 API 통신 로직을 직접 작성해야 하는 문제가 있었음.
- 여기에 기본적인 프로젝트 구조와 필요한 UI 컴포넌트, API 통신 함수 등을 미리 개발해두고, 그 이후부터는 리눅스처럼 사용자가 원하는 대로 수정할 수 있게 해주면 어떨까하는 생각에서 시작하게 됨.

# 2. 프로젝트 폴더 구조

## 참고

- `apps/main-app` 워크스페이스 내 폴더 중 이름 앞에 `@` 표시가 되어있는 폴더는 `절대경로 선언`이 되어있는 폴더입니다.
- 절대경로 명칭 형식은 `@{폴더명}`입니다.

## 폴더 구조

```bash
open-source-admin
├─ apps
│  ├─ main-app # 메인 프로젝트
│  │  ├─ node_modules
│  │  ├─ public
│  │  ├─ src
│  │  │  ├─ assets
│  │  │  ├─ @pages # 각 페이지 컴포넌트 관리
│  │  │  │  └─ {페이지 컴포넌트}.tsx
│  │  │  ├─ @components  # 각 페이지(또는 기능) 별 자식 컴포넌트 관리
│  │  │  │  ├─ common # 공통적으로 사용되는 컴포넌트 관리(폴더)
│  │  │  │  │  └─ { 컴포넌트 명 }
│  │  │  │  │     ├─ index.tsx
│  │  │  │  │     └─ types.ts
│  │  │  │  └─ { 페이지 명(폴더) }
│  │  │  │  │  └─ { 컴포넌트 명 }
│  │  │  │  │     ├─ index.tsx
│  │  │  │  │     └─ types.ts
│  │  │  ├─ @hooks # 기능 개발을 위한 커스텀 hooks 관리(공통, 페이지 별)
│  │  │  │  ├─ common # 공통적으로 사용되는 hook 관리
│  │  │  │  └─ pages # 각 페이지 별로 사용되는 hook 관리
│  │  │  │   └─ {페이지 명(폴더)}
│  │  │  │      └─ {커스텀 hook}.tsx
│  │  │  ├─ @constants # 상수 파일 관리
│  │  │  │    └─ {상수 파일}.ts
│  │  │  ├─ @config # env 정보 및 중요 보안정보 관리
│  │  │  │    └─ { 기타 파일 }.ts
│  │  │  │    └─ index.ts # 값들을 모두 모아서 export 처리해주는 파일
│  │  │  ├─ @css # 각 페이지 별 css 파일 통합 관리
│  │  │  │  └─ {페이지 컴포넌트 명}.css
│  │  │  ├─ @utils
│  │  │  ├─ App.css
│  │  │  ├─ App.tsx
│  │  │  ├─ index.css
│  │  │  ├─ main.tsx
│  │  │  └─ vite-env.d.ts
│  │  ├─ eslint.config.js
│  │  ├─ index.html
│  │  ├─ package.json
│  │  ├─ tsconfig.app.json
│  │  ├─ tsconfig.json
│  │  ├─ tsconfig.node.json
│  │  └─ vite.config.ts
│  └─ { 추가로 실행할 워크 스페이스: 상황에 따라 추가하면 됨 }
├─ packages
│  ├─ ui # 공통 UI를 통합 관리하기 위한 워크 스페이스
│  │  ├─ node_modules
│  │  ├─ src
│  │  │  ├─ components
│  │  │  │  ├─ {UI 컴포넌트(폴더단위로 관리)}
│  │  │  │  │  ├─ index.tsx # 실제 컴포넌트를 작성하는 파일
│  │  │  │  │  └─ types.ts # 각 컴포넌트 별 type을 선언하는 파일
│  │  │  ├─ context
│  │  │  │  └─ AdminUIContext.tsx # packages/ui 컴포넌트들을 사용하기 전에 라이브러리, 패키지 등의 초기화를 걸어줌
│  │  │  ├─ hooks # 각 컴포넌트 별 비즈니스 로직 분리를 위한 hook 파일을 관리하는 영역(사용자 측에서 사용)
│  │  │  │  ├─ {hook 파일명}.tsx
│  │  │  └─ mockDatas # 각 UI 컴포넌트 별 모킹 데이터를 관리하는 파일
│  │  │     └─ {파일명}.ts
│  │  ├─ utils
│  │  ├─ index.ts # 이 workspace 안에 있는 모든 컴포넌트들을 export하는 파일
│  │  └─ package.json
│  └─ api # API 호출 기능 개발 워크 스페이스(기본적인 기능 개발 예정)
│     ├─ node_modules
│     ├─ src
│     ├─ index.ts
│     └─ package.json
├─ .prettierrc
├─ package.json
├─ tsconfig.json
├─ vite.config.ts
└─ yarn.lock
```

## 2-1. 기본적인 구조 설계 방향

- 공통적으로 사용하게 될 기능(공통 UI 컴포넌트, API 호출 등등): 별도의 워크 스페이스에서 관리
  - 모듈화의 관점에서 목적에 따라 워크 스페이스가 분리되어야 결합도를 낮춰 재사용성을 높일 수 있음

## 2-2. 메인 워크스페이스(app/main-app)

### 2-2-1. 구조 설명

- pages: 페이지 컴포넌트 관리 디렉토리
- hooks: 각 페이지 또는 기능별 커스텀 hook 들을 관리하는 디렉토리
- components: 각 페이지 또는 기능 별 자식 컴포넌트 관리(폴더 단위로 관리)
- constants: 프로젝트에 전체적으로 사용되는 상수 또는 타입 객체를 관리하는 디렉토리
- utils: env 파일에 작성된 보안정보 및 그 외 기능들을 관리하기 위한 디렉토리

### 2-2-2. 구조 설계 뱡향 설명

- page, hook, 자식 컴포넌트라는 명확한 목적에 따라 디렉토리를 분리하고, 그 안에서 페이지 또는 기능별로 분리해야 결합도를 낮춰 불필요한 기능 삭제 시 수정해야 할 부분을 최소화 할 수 있음
- 자식 컴포넌트를 폴더 단위로 관리?
  - 그 자식 컴포넌트 안에서 또 자식 컴포넌트가 생성될 경우 이와 관련된 컴포넌트라는 것을 알리는, 즉 응집도를 높이는 효과를 유도하기 위함
  - 이를 위해 자식 컴포넌트의 타입 객체 중에 중복된 타입 객체가 어딘가에 존재하더라도 중복 선언하는 방식으로 설계  
     -> 다른 컴포넌트에서 사용하는 타입 객체를 상속 처리해 사용하는 경우 결합도가 높아져 유지보수에 어려움을 겪을 수 있음

### 2-2-3. 페이지 Route 연결 방법

#### 참고

해당 내용은 현재 메인 워크스페이스에 연결된 Ant Design Menu 컴포넌트를 기반으로 작성된 문서입니다.

#### 1) Route 추가

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

#### 2) Route 정보 입력

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

#### 4) PageLayer 컴포넌트에 Route 버튼 추가

- Route 버튼 하나만 추가하는 경우
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

- Route 버튼들을 그룹화해서 추가하는 경우

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

## 2-3. packages/ui 워크 스페이스 구조

### 2-3-1. 구조 설명

- src/components
  - UI 컴포넌트를 관리하는 디렉토리
  - 컴포넌트는 디렉토리(폴더) 단위로 생성 후, 그 안에 `index.tsx`, `types.ts` 파일을 생성하여 기본적인 구조 형성
- src/context
  - 오픈소스 라이브러리를 사용하는 경우 라이브러리 초기화를 걸어주는 Context를 관리하는 디렉토리
- src/hooks
  - 사용자가 실제로 사용하될 컴포넌트 별 커스텀 hook을 관리하기 위한 디렉토리
- src/mockDatas
  - 각 컴포넌트 별 테스트 데이터(모킹 데이터)를 관리하기 위한 디렉토리
- index.ts
  - `src/components`, `src/hooks`, `src/context` 등에 개발된 컴포넌트, hook, provider의 import 경로를 하나로 모아주는 파일
  - 이 파일에서 모든 것들의 export 처리를 해줘야 함

### 2-3-2. 구조 설계 방향 설명

- UI 컴포넌트 및 기능은 [Ant Design](https://ant.design/components/overview/)과 [Chartjs](https://www.chartjs.org/) 라이브러리를 기반으로 작성됨
  - 컴포넌트는 사용 시 혼란을 방지하기 위해 대부분의 경우 Ant Design의 컴포넌트를 그대로 반환하도록 설계
  - Table의 경우 사용성 개선을 위해 props 구조를 일부 수정함
- 워크 스페이스 루트 경로의 hooks 폴더
  - 실제로 사용자가 메인 워크스페이스에서 사용할 컴포넌트 별 hook을 관리하는 폴더
  - 만약 컴포넌트 안에서만 사용하는 hook의 경우 components 폴더 안에 hooks 폴더를 따로 생성해 관리할 것!!!

### 2-3-3. 컴포넌트 및 기능 종류

[Avatar](./packages/ui/docs/comp_avatar.md), [Badge](./packages/ui/docs/comp_badge.md), [Button](./packages/ui/docs/comp_button.md), [Calendar](./packages/ui/docs/comp_calendar.md), [Chart](./packages/ui/docs/comp_chart.md), [Checkbox](./packages/ui/docs/comp_checkbox.md), [DateTimePicker](./packages/ui/docs/comp_datetimepicker.md), [Form](./packages/ui/docs/comp_form.md), [Input](./packages/ui/docs/comp_input.md), [LayoutCard](./packages/ui/docs/comp_layoutcard.md), [List](./packages/ui/docs/comp_list.md), [Menu](./packages/ui/docs/comp_menu.md), [Modal](./packages/ui/docs/comp_modal.md), [Notification](./packages/ui/docs/feat_notification.md), [PasswordInput](./packages/ui/docs/comp_passwordinput.md), [PopConfirm](./packages/ui/docs/comp_popconfirm.md), [Progress](./packages/ui/docs/comp_progress.md), [Radio](./packages/ui/docs/comp_radio.md), [SearchInput](./packages/ui/docs/comp_searchinput.md), [Select](./packages/ui/docs/comp_select.md), [Skeleton](./packages/ui/docs/comp_skeleton.md), [Spinner](./packages/ui/docs/comp_spinner.md), [Switch](./packages/ui/docs/comp_switch.md), [Table](./packages/ui/docs/comp_table.md), [Tag](./packages/ui/docs/comp_tag.md), [TextArea](./packages/ui/docs/comp_textarea.md)
