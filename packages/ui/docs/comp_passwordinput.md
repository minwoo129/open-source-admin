# 기능 상세문서: PasswordInput

## 1. 상세정보

- Ant Design 기반 비밀번호 입력 컴포넌트
  - Ant Design에서 제공하는 Input 컴포넌트의 비밀번호 입력 컴포넌트(Input.Password)를 따로 분리한 컴포넌트
  - [공식문서(링크)](https://ant.design/components/input#input-demo-password-input)

## 2. 사용 예시

```tsx
import React, { useState } from 'react';
import { PasswordInput } from '@admin/ui';
import './App.css';

function App() {
  const [value, setValue] = useState('');

  return (
    <>
      <div className="table-test-grid">
        <PasswordInput
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </>
  );
}

export default App;
```

### 참고

- 단순히 `PasswordInput` 컴포넌트만 사용하는 경우 컴포넌트 내에서 비밀번호 유효성 검사 처리가 불가능합니다.
  - 유효성 검사가 필요한 경우 `Form` 컴포넌트 안에서 `Form.Item` 컴포넌트로 감싸줘야 사용이 가능합니다.
  - hook을 사용하는 경우
    ```tsx
    const [form, Form, FormItem] = useAdminUIForm<UserInputType>();
    ```
    `FormItem` 컴포넌트로 감싸주면 사용이 가능합니다!!!
