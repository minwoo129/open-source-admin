# UI 컴포넌트 상세문서: Button

## 1. 상세정보

- Ant Design 라이브러리에서 제공하는 Form 컴포넌트를 모노레포 프로젝트 구조에 맞게 변형한 컴포넌트
- [공식문서(링크)](https://ant.design/components/button)

## 2. 유의사항

1. 컴포넌트 직접 호출 대신 hook을 호출하는 방법으로 사용해주세요.
   - hook 내부에 필요한 기능들이 모두 구현되어 있어 사용하기 편하실 겁니다.

## 3. 사용 방법

- useAdminUIForm hook을 호출해서 사용하세요
  - 이 hook의 제네릭 타입을 선언하면 더더욱 사용하기 편하실 겁니다.
- useAdminUIForm의 반환 형식은 아래와 같습니다.(예시)
  ```tsx
  const [form, FormComponent, FormItem] = useAdminUIForm<UserInputType>();
  ```
  ### 기본 API 설명
  |   반환값 명   |                                                                                                                                                               설명                                                                                                                                                               |                              type                               |
  | :-----------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------: |
  |     form      | hook 내부에서 Ant Design에서 제공한 useForm hook과 <br>컴포넌트를 연결해주기 위한 값입니다. 이를 통해 form 영역 내 <br>입력된 값을 가져오거나 submit 이벤트를 걸어줄 수 있습니다. <br><br> 이 값은 이미 useAdminUI hook 내부에서 useForm <br> hook과 연결된 상태로 반환되므로 직접 연결할 필요 <br> 없이 바로 사용하시면 됩니다. | [FormInstance](https://ant.design/components/form#forminstance) |
  | FormComponent |                                                                                                                        Form 컴포넌트입니다. 이 컴포넌트를 선언하고자 하는 <br>영역에 작성해주시면 됩니다.                                                                                                                        |                            ReactNode                            |
  |   FormItem    |                         입력값을 인식하는데 사용하는 컴포넌트입니다. 각 Input <br>컴포넌트에 이 컴포넌트를 덧씌워주시면 됩니다. <br><br> 사용시, 이 컴포넌트의 props 중 `name`에 입력값에 대한<br>key 값을 적용해주시면 됩니다. (hook에서 제네릭 타입을 <br>작성하면 key값이 자동완성으로 표시됩니다!!!)                         |                            ReactNode                            |

### 참고!!!

위 hook의 반환값은 튜플 타입으로 반환되므로, 반환값의 이름은 원하는 대로 변경하셔도 됩니다!!!

## 4. 사용 예시

```tsx
import React from 'react';
import {
  Button,
  Calendar,
  Input,
  PasswordInput,
  Radio,
  useAdminUIForm,
} from '@admin/ui';
import './App.css';

type UserInputType = {
  name: string;
  gender: string;
  email: string;
  password: string;
};

function App() {
  const [form, Form, FormItem] = useAdminUIForm<UserInputType>();

  return (
    <>
      <div className="table-test-grid">
        <Form
          name="user-form"
          onSubmitCapture={(e) => {
            e.preventDefault();

            const value = form.getFieldsValue();
            console.log('value: ', value); // 출력값: value: {email: "test@aaa.aa", gender: "male", name: "나나나", password: "test123!!"}
          }}
        >
          <FormItem name={'name'} label="이름">
            <Input />
          </FormItem>
          <FormItem name={'gender'} label="성별">
            <Radio.Group>
              <Radio.Item value={'male'}>남자</Radio.Item>
              <Radio.Item value={'female'}>여자</Radio.Item>
            </Radio.Group>
          </FormItem>
          <FormItem name={'email'} label="이메일">
            <Input inputMode="email" />
          </FormItem>
          <FormItem
            name={'password'}
            label="비밀번호"
            rules={[
              {
                required: true,
                pattern: new RegExp(
                  '^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,15}$',
                ),
                message:
                  '비밀번호는 영문, 숫자, 특수문자를 포함한 8~15자리여야 합니다.',
              },
            ]}
          >
            <PasswordInput />
          </FormItem>
          <FormItem>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </FormItem>
        </Form>
      </div>
    </>
  );
}

export default App;
```
