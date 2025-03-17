# UI 컴포넌트 상세문서: Checkbox

## 1. 상세 정보

- Ant Design 라이브러리에서 제공하는 기본적인 Checkbox 컴포넌트
- 사용방법 또한 Ant Design 라이브러리와 동일  
  -> [공식문서(링크)](https://ant.design/components/checkbox)

## 2. 사용 예시 코드

1. 예시 1 => [결과(링크)](https://ant.design/~demos/checkbox-demo-basic)

   ```typescript
   import React, {ComponentProps} from 'react'
   import { Checkbox } from '@admin/ui';

   const App = () => {
        return (
            <>
                <Checkbox
                    onChange={(e) => {
                        console.log('checked: ', e.target.checked);
                    }}
                >
                    Checkbox
                </Checkbox>
            </>
        );
    }

    export default App
   ```

2. 예시 2
