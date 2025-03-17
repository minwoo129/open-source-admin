# UI 컴포넌트 상세문서: Button

## 1. 상세정보

- Ant Design 라이브러리에서 제공하는 기본적인 버튼 컴포넌트
- 사용방법 또한 Ant Design 라이브러리와 동일  
  -> [공식문서(링크)](https://ant.design/components/button)

## 2. 사용 예시 코드

1. 예시 1 => [결과(링크)](https://ant.design/~demos/button-demo-basic)

   ```typescript
   import React from 'react';
   import { Button } from '@admin/ui';

   const App: React.FC = () => (
   <>
       <Button type="primary">Primary Button</Button>
       <Button>Default Button</Button>
       <Button type="dashed">Dashed Button</Button>
       <Button type="text">Text Button</Button>
       <Button type="link">Link Button</Button>
   </>
   );

   export default App;
   ```

2. 예시 2 => [결과(링크)](https://ant.design/~demos/button-demo-color-variant)

   ```typescript
   import React from 'react';
    import { Button } from 'antd';
    import { useResponsive } from 'antd-style';

    const App: React.FC = () => {
    const { xxl } = useResponsive();

    return (
        <>
            <div> {/* default */}
                <Button color="default" variant="solid">
                            Solid
                </Button>
                <Button color="default" variant="outlined">
                    Outlined
                </Button>
                <Button color="default" variant="dashed">
                    Dashed
                </Button>
                <Button color="default" variant="filled">
                    Filled
                </Button>
                <Button color="default" variant="text">
                    Text
                </Button>
                <Button color="default" variant="link">
                    Link
                </Button>
            </div>
            <div> {/* primary */}
                <Button color="primary" variant="solid">
                    Solid
                </Button>
                <Button color="primary" variant="outlined">
                    Outlined
                </Button>
                <Button color="primary" variant="dashed">
                    Dashed
                </Button>
                <Button color="primary" variant="filled">
                    Filled
                </Button>
                <Button color="primary" variant="text">
                    Text
                </Button>
                <Button color="primary" variant="link">
                    Link
                </Button>
            </div>
            <div> {/* danger */}
                <Button color="danger" variant="solid">
                    Solid
                </Button>
                <Button color="danger" variant="outlined">
                    Outlined
                </Button>
                <Button color="danger" variant="dashed">
                    Dashed
                </Button>
                <Button color="danger" variant="filled">
                    Filled
                </Button>
                <Button color="danger" variant="text">
                    Text
                </Button>
                <Button color="danger" variant="link">
                    Link
                </Button>
            </div>
            <div> {/* pink */}
                <Button color="pink" variant="solid">
                    Solid
                </Button>
                <Button color="pink" variant="outlined">
                    Outlined
                </Button>
                <Button color="pink" variant="dashed">
                    Dashed
                </Button>
                <Button color="pink" variant="filled">
                    Filled
                </Button>
                <Button color="pink" variant="text">
                    Text
                </Button>
                <Button color="pink" variant="link">
                    Link
                </Button>
            </div>
            <div>
                <Button color="purple" variant="solid">
                    Solid
                </Button>
                <Button color="purple" variant="outlined">
                    Outlined
                </Button>
                <Button color="purple" variant="dashed">
                    Dashed
                </Button>
                <Button color="purple" variant="filled">
                    Filled
                </Button>
                <Button color="purple" variant="text">
                    Text
                </Button>
                <Button color="purple" variant="link">
                    Link
                </Button>
            </div>
            <div>
                <Button color="cyan" variant="solid">
                    Solid
                </Button>
                <Button color="cyan" variant="outlined">
                    Outlined
                </Button>
                <Button color="cyan" variant="dashed">
                    Dashed
                </Button>
                <Button color="cyan" variant="filled">
                    Filled
                </Button>
                <Button color="cyan" variant="text">
                    Text
                </Button>
                <Button color="cyan" variant="link">
                    Link
                </Button>
            </div>
        </>
    );
    };

    export default App;
   ```

3. 예시 3
