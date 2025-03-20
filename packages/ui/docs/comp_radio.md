# UI 컴포넌트 상세문서: Radio

## 1. 상세정보

- Ant Design 기반 Radio 컴포넌트
  - 사용방법은 Ant Design과 거의 동일
  - [공식문서(링크)](https://ant.design/components/radio)

## 2. 사용 방법

1. 컴포넌트 직접호출: 방법 1

   ```tsx
   import React, { useState } from 'react';
   import { Radio } from '@admin/ui';
   import './App.css';

   function App() {
     const [value, setValue] = useState('Apple');
     return (
       <>
         <div className="table-test-grid">
           <Radio.Group
             options={[
               { label: 'Apple', value: 'Apple' },
               { label: 'Pear', value: 'Pear' },
               { label: 'Orange', value: 'Orange' },
             ]}
             value={value}
             onChange={(e) => setValue(e.target.value)}
           />
         </div>
       </>
     );
   }

   export default App;
   ```

2. 컴포넌트 직접호출: 방법 2

   ```tsx
   import React, { useState } from 'react';
   import { Radio } from '@admin/ui';
   import './App.css';

   const options = [
     { label: 'Apple', value: 'Apple' },
     { label: 'Pear', value: 'Pear' },
     { label: 'Orange', value: 'Orange' },
   ];

   function App() {
     const [value, setValue] = useState('Apple');
     return (
       <>
         <div className="table-test-grid">
           <Radio.Group
             value={value}
             onChange={(e) => setValue(e.target.value)}
           >
             {options.map((item, idx) => {
               return (
                 <Radio key={idx} value={item.value}>
                   {item.label}
                 </Radio>
               );
             })}
           </Radio.Group>
         </div>
       </>
     );
   }

   export default App;
   ```

3. `useAdminUIRadio` Hook을 사용하는 방법
   호출 예시
   ```tsx
   const [value, RadioComponent] = useAdminUIRadio(defaultValue);
   ```
   ### 기본 API 설명
   |     반환값     |                                            설명                                            |   type    |
   | :------------: | :----------------------------------------------------------------------------------------: | :-------: |
   |     value      |                                       현재 선택된 값                                       |  number   |
   | RadioComponent | Radio 컴포넌트<br>`value`, `onChange` Props를 제외한 모든 props 정상적으로 사용가능합니다. | ReactNode |
   |  defaultValue  |                              Radio 컴포넌트의 default 선택값                               |  number   |
