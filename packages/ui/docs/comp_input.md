# UI 컴포넌트 상세문서: Button

## 1. 상세정보

- Ant Design 라이브러리에서 제공하는 기본적인 Input 컴포넌트(기본 Input)
  - Ant Design 기준 `Input`에 해당
- 사용방법 또한 Ant Design 라이브러리와 동일  
  -> [공식문서(링크)](https://ant.design/components/input)

## 2. 사용 방법

- Input 컴포넌트를 그대로 호출해서 사용하시면 됩니다.
  - hook 추가 시 컴포넌트를 반환하는 구조로 작성하시면 안됩니다.(한글자 입력되고 focus out되어 버려요)

```tsx
    const [value, setValue] = useState('');
    ...
    <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        inputMode="none"
    />
```

### 기본 API 설명

| props 명  |                    설명                     |                                        타입                                         |
| :-------: | :-----------------------------------------: | :---------------------------------------------------------------------------------: |
|   value   |                 현재 입력값                 |                                       string                                        |
| onChange  | 입력값 변동시 호출되는 이벤트 핸들러 매서드 |            function<br>(e: React.ChangeEvent<HTMLInputElement>) => void             |
| inputMode |                 입력값 형식                 | 'none' \| 'text' \| 'tel' \| 'url' \| 'email' \| 'numeric' \| 'decimal' \| 'search' |
