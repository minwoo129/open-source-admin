# UI 컴포넌트 상세문서: Table

## 1. 상세정보

- Ant Design UI를 기반으로 작성한 테이블 컴포넌트
  - 사용성을 높이기 위해 일부 props의 구조를 변경함
  - 호출 구조만 변경하였기 때문에 사용하는데는 Ant Design의 방식과 거의 비슷함
  - [공식문서(링크)](https://ant.design/components/table)

## 2. 사용방법

## 2-1. 컴포넌트 구조

```tsx
<Table
    datas={}
    columns={}
    header={}
    rowKey={}
    onRowItemClick={}
    onRowItemDoubleClick={}
    onRowItemContextMenu={}
    onRowItemMouseEnter={}
    onRowItemMouseLeave={}
    {...이하 동일}
/>
```

### 기본 API 구조

#### 참고

이 컴포넌트는 내부에서 제네릭 타입 처리가 되어 있는 컴포넌트입니다.
아래 설명에서 타입부분에 `T`라고 표시된 것은 제네릭 타입이 적용된다는 뜻이니 이점 참고하시기 바랍니다.

|       props 명       |                                                                                                                                                  설명                                                                                                                                                   |                                                 type                                                 |
| :------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------: |
|        datas         |                                                                                                                                               데이터 목록                                                                                                                                               |                                               Array(T)                                               |
|       columns        |                                                                                                                                 데이터 타입 구조에 따른 컬럼 구조 선언                                                                                                                                  |                      Oblect<br>{ [key: keyof T]?: ColumnStructureItemType<T> }                       |
|        header        |                                                                                        테이블 상단에 적용할 header 컴포넌트<br>테이블 상단에 추가로 적용하고 싶은 컴포넌트가 있으면<br>여기에 추가하시면 됩니다.                                                                                        |                                              ReactNode                                               |
|        rowKey        | 행(레코드)를 구분하기 위한 key 값<br><br>ant design의 테이블은 기본적으로 `datas` 중 `key`라는 값을 레코드 구분을 위한 key값으로 사용합니다.<br>이 props 속성을 정의해주면 `key`외에 데이터 내 원하는 값을 key값으로 지정하게 됩니다.<br>이 기능은 selector를 사용할 때 매우 중요한 역할을 하게 됩니다. |                                       (value: T) => React.Key                                        |
|    onRowItemClick    |                                                                                                                                         행(레코드) 클릭 이벤트                                                                                                                                          | function<br>(e: React.MouseEvent<any, MouseEvent>, record: T, rowIndex: number \| undefined) => void |
| onRowItemDoubleClick |                                                                                                                                       행(레코드) 더블 클릭 이벤트                                                                                                                                       | function<br>(e: React.MouseEvent<any, MouseEvent>, record: T, rowIndex: number \| undefined) => void |
| onRowItemContextMenu |                                                                                                                                        행(레코드) 우클릭 이벤트                                                                                                                                         | function<br>(e: React.MouseEvent<any, MouseEvent>, record: T, rowIndex: number \| undefined) => void |
| onRowItemMouseEnter  |                                                                                                                                       행(레코드) 포커스 in 이벤트                                                                                                                                       | function<br>(e: React.MouseEvent<any, MouseEvent>, record: T, rowIndex: number \| undefined) => void |
| onRowItemMouseLeave  |                                                                                                                                      행(레코드) 포커스 out 이벤트                                                                                                                                       | function<br>(e: React.MouseEvent<any, MouseEvent>, record: T, rowIndex: number \| undefined) => void |

## 2-2. Hook(useAdminUITable) 구조

```tsx
const [selectedKeys, TableComponent] = useAdminUITable<T>();
```

### 기본 API 구조

#### 참고

- 이 Hook은 내부에서 제네릭 타입 처리가 되어 있는 Hook입니다.  
   아래 설명에서 타입부분에 `T`라고 표시된 것은 제네릭 타입이 적용된다는 뜻이니 이점 참고하시기 바랍니다.
- Hook 사용시 제네릭 타입을 선언하셔야 컴포넌트 props 사용시 이와 관련한 (VSCode)자동완성 기능이 활성화됩니다.

|   반환값 명    |                                                                     설명                                                                      |       type       |
| :------------: | :-------------------------------------------------------------------------------------------------------------------------------------------: | :--------------: |
|  selectedKeys  |                                                           선택된 행(레코드) 아이디                                                            | Array(React.Key) |
| TableComponent | 테이블 컴포넌트<br>위에서 설명한 컴포넌트와 동일한 컴포넌트이며,<br>props 중 rowSelection을 제외한 나머지 props<br> 동일하게 사용 가능합니다. |    ReactNode     |

## 3. 사용 예시

### 3-1. 컴포넌트

```tsx
import React from 'react';
import { Table } from '@admin/ui';
import './App.css';
import dayjs from 'dayjs';

export interface Employee {
  id: number;
  name: string;
  position: string;
  department: string;
  joinDate: string;
  salary: number;
  email: string;
}

// 직원 정보 35개 생성
export const employees: Employee[] = [
  {
    id: 1,
    name: '김민수',
    position: '과장',
    department: '영업팀',
    joinDate: '2018-03-15',
    salary: 6200000,
    email: 'minsu.kim@company.com',
  },
  {
    id: 2,
    name: '이지연',
    position: '대리',
    department: '마케팅팀',
    joinDate: '2019-05-22',
    salary: 5100000,
    email: 'jiyeon.lee@company.com',
  },
  {
    id: 3,
    name: '박준호',
    position: '부장',
    department: '개발팀',
    joinDate: '2015-11-08',
    salary: 8500000,
    email: 'junho.park@company.com',
  },
  {
    id: 4,
    name: '최수진',
    position: '사원',
    department: '인사팀',
    joinDate: '2021-02-01',
    salary: 3800000,
    email: 'sujin.choi@company.com',
  },
  {
    id: 5,
    name: '정대현',
    position: '과장',
    department: '재무팀',
    joinDate: '2017-07-19',
    salary: 6500000,
    email: 'daehyun.jung@company.com',
  },
  {
    id: 6,
    name: '한지민',
    position: '대리',
    department: '영업팀',
    joinDate: '2020-01-13',
    salary: 4900000,
    email: 'jimin.han@company.com',
  },
  {
    id: 7,
    name: '송영수',
    position: '차장',
    department: '개발팀',
    joinDate: '2016-04-27',
    salary: 7300000,
    email: 'youngsoo.song@company.com',
  },
];

function App() {
  return (
    <>
      <div className="table-test-grid">
        <Table
          datas={employees}
          rowKey={(record: Employee) => record.id}
          columns={{
            id: {
              title: '아이디',
            },
            name: {
              title: '이름',
            },
            email: {
              title: '이메일',
            },
            joinDate: {
              title: '입사일',
              render: (value) => {
                return <p>{dayjs(value).format('YYYY-MM-DD')}</p>;
              },
            },
          }}
        />
      </div>
    </>
  );
}

export default App;
```

### 3-2. Hook

```tsx
import React from 'react';
import { useAdminUITable } from '@admin/ui';
import './App.css';
import dayjs from 'dayjs';

export interface Employee {
  id: number;
  name: string;
  position: string;
  department: string;
  joinDate: string;
  salary: number;
  email: string;
}

// 직원 정보 35개 생성
export const employees: Employee[] = [
  {
    id: 1,
    name: '김민수',
    position: '과장',
    department: '영업팀',
    joinDate: '2018-03-15',
    salary: 6200000,
    email: 'minsu.kim@company.com',
  },
  {
    id: 2,
    name: '이지연',
    position: '대리',
    department: '마케팅팀',
    joinDate: '2019-05-22',
    salary: 5100000,
    email: 'jiyeon.lee@company.com',
  },
  {
    id: 3,
    name: '박준호',
    position: '부장',
    department: '개발팀',
    joinDate: '2015-11-08',
    salary: 8500000,
    email: 'junho.park@company.com',
  },
  {
    id: 4,
    name: '최수진',
    position: '사원',
    department: '인사팀',
    joinDate: '2021-02-01',
    salary: 3800000,
    email: 'sujin.choi@company.com',
  },
  {
    id: 5,
    name: '정대현',
    position: '과장',
    department: '재무팀',
    joinDate: '2017-07-19',
    salary: 6500000,
    email: 'daehyun.jung@company.com',
  },
  {
    id: 6,
    name: '한지민',
    position: '대리',
    department: '영업팀',
    joinDate: '2020-01-13',
    salary: 4900000,
    email: 'jimin.han@company.com',
  },
  {
    id: 7,
    name: '송영수',
    position: '차장',
    department: '개발팀',
    joinDate: '2016-04-27',
    salary: 7300000,
    email: 'youngsoo.song@company.com',
  },
];

function App() {
  const [selectedKeys, Table] = useAdminUITable<Employee>();
  return (
    <>
      <div className="table-test-grid">
        <Table
          datas={employees}
          rowKey={(record) => record.id}
          columns={{
            id: {
              title: '아이디',
            },
            name: {
              title: '이름',
            },
            email: {
              title: '이메일',
            },
            joinDate: {
              title: '입사일',
              render: (value) => {
                return <p>{dayjs(value).format('YYYY-MM-DD')}</p>;
              },
            },
          }}
        />
      </div>
    </>
  );
}

export default App;
```
