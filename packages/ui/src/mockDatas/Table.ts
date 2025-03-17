// 직원 정보 타입 정의
export interface Employee {
  id: number;
  name: string;
  position: string;
  department: string;
  joinDate: string;
  salary: number;
  email: string;
}

// 매출 정보 타입 정의
export interface SalesData {
  id: number;
  employeeId: number;
  date: string;
  product: string;
  quantity: number;
  unitPrice: number;
  totalAmount: number;
  customer: string;
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
  {
    id: 8,
    name: '강미라',
    position: '사원',
    department: '마케팅팀',
    joinDate: '2022-06-15',
    salary: 3700000,
    email: 'mira.kang@company.com',
  },
  {
    id: 9,
    name: '조현우',
    position: '부장',
    department: '인사팀',
    joinDate: '2014-09-05',
    salary: 8800000,
    email: 'hyunwoo.cho@company.com',
  },
  {
    id: 10,
    name: '윤서연',
    position: '대리',
    department: '재무팀',
    joinDate: '2019-11-11',
    salary: 5000000,
    email: 'seoyeon.yoon@company.com',
  },
  {
    id: 11,
    name: '임재현',
    position: '과장',
    department: '개발팀',
    joinDate: '2018-08-23',
    salary: 6300000,
    email: 'jaehyun.lim@company.com',
  },
  {
    id: 12,
    name: '신예진',
    position: '사원',
    department: '영업팀',
    joinDate: '2021-05-17',
    salary: 3900000,
    email: 'yejin.shin@company.com',
  },
  {
    id: 13,
    name: '오승민',
    position: '차장',
    department: '마케팅팀',
    joinDate: '2016-12-01',
    salary: 7100000,
    email: 'seungmin.oh@company.com',
  },
  {
    id: 14,
    name: '백지원',
    position: '대리',
    department: '인사팀',
    joinDate: '2019-03-28',
    salary: 5200000,
    email: 'jiwon.baek@company.com',
  },
  {
    id: 15,
    name: '권태영',
    position: '부장',
    department: '재무팀',
    joinDate: '2015-02-14',
    salary: 8600000,
    email: 'taeyoung.kwon@company.com',
  },
  {
    id: 16,
    name: '홍지수',
    position: '과장',
    department: '영업팀',
    joinDate: '2017-10-09',
    salary: 6400000,
    email: 'jisoo.hong@company.com',
  },
  {
    id: 17,
    name: '문성호',
    position: '사원',
    department: '개발팀',
    joinDate: '2022-01-05',
    salary: 3800000,
    email: 'sungho.moon@company.com',
  },
  {
    id: 18,
    name: '양미경',
    position: '대리',
    department: '마케팅팀',
    joinDate: '2020-07-20',
    salary: 4800000,
    email: 'mikyung.yang@company.com',
  },
  {
    id: 19,
    name: '서동훈',
    position: '차장',
    department: '인사팀',
    joinDate: '2016-06-30',
    salary: 7200000,
    email: 'donghoon.seo@company.com',
  },
  {
    id: 20,
    name: '유하나',
    position: '사원',
    department: '재무팀',
    joinDate: '2021-09-22',
    salary: 3700000,
    email: 'hana.yoo@company.com',
  },
  {
    id: 21,
    name: '나준영',
    position: '과장',
    department: '개발팀',
    joinDate: '2018-04-16',
    salary: 6100000,
    email: 'joonyoung.na@company.com',
  },
  {
    id: 22,
    name: '장소미',
    position: '대리',
    department: '영업팀',
    joinDate: '2019-08-07',
    salary: 5300000,
    email: 'somi.jang@company.com',
  },
  {
    id: 23,
    name: '구민재',
    position: '부장',
    department: '마케팅팀',
    joinDate: '2014-12-03',
    salary: 8700000,
    email: 'minjae.koo@company.com',
  },
  {
    id: 24,
    name: '안소희',
    position: '사원',
    department: '인사팀',
    joinDate: '2022-03-14',
    salary: 3800000,
    email: 'sohee.ahn@company.com',
  },
  {
    id: 25,
    name: '배현우',
    position: '과장',
    department: '재무팀',
    joinDate: '2017-05-25',
    salary: 6300000,
    email: 'hyunwoo.bae@company.com',
  },
  {
    id: 26,
    name: '황민지',
    position: '대리',
    department: '개발팀',
    joinDate: '2020-02-10',
    salary: 5000000,
    email: 'minji.hwang@company.com',
  },
  {
    id: 27,
    name: '전지훈',
    position: '차장',
    department: '영업팀',
    joinDate: '2016-09-19',
    salary: 7400000,
    email: 'jihoon.jeon@company.com',
  },
  {
    id: 28,
    name: '노은지',
    position: '사원',
    department: '마케팅팀',
    joinDate: '2021-11-08',
    salary: 3600000,
    email: 'eunji.noh@company.com',
  },
  {
    id: 29,
    name: '곽승현',
    position: '부장',
    department: '인사팀',
    joinDate: '2015-07-02',
    salary: 8900000,
    email: 'seunghyun.kwak@company.com',
  },
  {
    id: 30,
    name: '심지혜',
    position: '대리',
    department: '재무팀',
    joinDate: '2019-01-15',
    salary: 5100000,
    email: 'jihye.sim@company.com',
  },
  {
    id: 31,
    name: '류태준',
    position: '과장',
    department: '개발팀',
    joinDate: '2018-06-11',
    salary: 6200000,
    email: 'taejoon.ryu@company.com',
  },
  {
    id: 32,
    name: '염하진',
    position: '사원',
    department: '영업팀',
    joinDate: '2022-04-18',
    salary: 3700000,
    email: 'hajin.yeom@company.com',
  },
  {
    id: 33,
    name: '허민영',
    position: '차장',
    department: '마케팅팀',
    joinDate: '2016-03-07',
    salary: 7300000,
    email: 'minyoung.heo@company.com',
  },
  {
    id: 34,
    name: '남기태',
    position: '대리',
    department: '인사팀',
    joinDate: '2020-05-29',
    salary: 4900000,
    email: 'kitae.nam@company.com',
  },
  {
    id: 35,
    name: '주예린',
    position: '과장',
    department: '재무팀',
    joinDate: '2017-12-26',
    salary: 6500000,
    email: 'yerin.joo@company.com',
  },
];

// 매출 정보 35개 생성
export const salesData: SalesData[] = [
  {
    id: 1,
    employeeId: 1,
    date: '2023-01-15',
    product: '노트북',
    quantity: 5,
    unitPrice: 1200000,
    totalAmount: 6000000,
    customer: 'ABC 기업',
  },
  {
    id: 2,
    employeeId: 6,
    date: '2023-01-17',
    product: '모니터',
    quantity: 10,
    unitPrice: 350000,
    totalAmount: 3500000,
    customer: '테크랩',
  },
  {
    id: 3,
    employeeId: 12,
    date: '2023-01-20',
    product: '키보드',
    quantity: 20,
    unitPrice: 85000,
    totalAmount: 1700000,
    customer: '디지털월드',
  },
  {
    id: 4,
    employeeId: 16,
    date: '2023-01-25',
    product: '마우스',
    quantity: 30,
    unitPrice: 45000,
    totalAmount: 1350000,
    customer: '스마트솔루션',
  },
  {
    id: 5,
    employeeId: 22,
    date: '2023-01-31',
    product: '헤드폰',
    quantity: 15,
    unitPrice: 120000,
    totalAmount: 1800000,
    customer: '음향시스템',
  },
  {
    id: 6,
    employeeId: 27,
    date: '2023-02-05',
    product: '태블릿',
    quantity: 8,
    unitPrice: 550000,
    totalAmount: 4400000,
    customer: '모바일샵',
  },
  {
    id: 7,
    employeeId: 32,
    date: '2023-02-10',
    product: '스피커',
    quantity: 12,
    unitPrice: 95000,
    totalAmount: 1140000,
    customer: '사운드마스터',
  },
  {
    id: 8,
    employeeId: 1,
    date: '2023-02-15',
    product: '프린터',
    quantity: 7,
    unitPrice: 320000,
    totalAmount: 2240000,
    customer: '오피스플러스',
  },
  {
    id: 9,
    employeeId: 6,
    date: '2023-02-20',
    product: '외장하드',
    quantity: 18,
    unitPrice: 150000,
    totalAmount: 2700000,
    customer: '데이터시스템',
  },
  {
    id: 10,
    employeeId: 12,
    date: '2023-02-28',
    product: '그래픽카드',
    quantity: 6,
    unitPrice: 700000,
    totalAmount: 4200000,
    customer: '게이밍월드',
  },
  {
    id: 11,
    employeeId: 16,
    date: '2023-03-05',
    product: '웹캠',
    quantity: 25,
    unitPrice: 65000,
    totalAmount: 1625000,
    customer: '영상솔루션',
  },
  {
    id: 12,
    employeeId: 22,
    date: '2023-03-10',
    product: 'USB 메모리',
    quantity: 50,
    unitPrice: 25000,
    totalAmount: 1250000,
    customer: '스토리지샵',
  },
  {
    id: 13,
    employeeId: 27,
    date: '2023-03-15',
    product: '노트북',
    quantity: 4,
    unitPrice: 1300000,
    totalAmount: 5200000,
    customer: '비즈니스솔루션',
  },
  {
    id: 14,
    employeeId: 32,
    date: '2023-03-20',
    product: '모니터',
    quantity: 12,
    unitPrice: 380000,
    totalAmount: 4560000,
    customer: '디스플레이월드',
  },
  {
    id: 15,
    employeeId: 1,
    date: '2023-03-25',
    product: '키보드',
    quantity: 15,
    unitPrice: 90000,
    totalAmount: 1350000,
    customer: '컴퓨터마트',
  },
  {
    id: 16,
    employeeId: 6,
    date: '2023-04-01',
    product: '마우스',
    quantity: 25,
    unitPrice: 50000,
    totalAmount: 1250000,
    customer: 'IT서플라이',
  },
  {
    id: 17,
    employeeId: 12,
    date: '2023-04-05',
    product: '헤드폰',
    quantity: 10,
    unitPrice: 130000,
    totalAmount: 1300000,
    customer: '사운드샵',
  },
  {
    id: 18,
    employeeId: 16,
    date: '2023-04-10',
    product: '태블릿',
    quantity: 6,
    unitPrice: 580000,
    totalAmount: 3480000,
    customer: '테크스토어',
  },
  {
    id: 19,
    employeeId: 22,
    date: '2023-04-15',
    product: '스피커',
    quantity: 20,
    unitPrice: 100000,
    totalAmount: 2000000,
    customer: '오디오시스템',
  },
  {
    id: 20,
    employeeId: 27,
    date: '2023-04-20',
    product: '프린터',
    quantity: 5,
    unitPrice: 350000,
    totalAmount: 1750000,
    customer: '프린트솔루션',
  },
  {
    id: 21,
    employeeId: 32,
    date: '2023-04-25',
    product: '외장하드',
    quantity: 15,
    unitPrice: 160000,
    totalAmount: 2400000,
    customer: '스토리지월드',
  },
  {
    id: 22,
    employeeId: 1,
    date: '2023-05-01',
    product: '그래픽카드',
    quantity: 8,
    unitPrice: 750000,
    totalAmount: 6000000,
    customer: '하드웨어마스터',
  },
  {
    id: 23,
    employeeId: 6,
    date: '2023-05-05',
    product: '웹캠',
    quantity: 30,
    unitPrice: 70000,
    totalAmount: 2100000,
    customer: '화상회의솔루션',
  },
  {
    id: 24,
    employeeId: 12,
    date: '2023-05-10',
    product: 'USB 메모리',
    quantity: 60,
    unitPrice: 28000,
    totalAmount: 1680000,
    customer: '데이터스토어',
  },
  {
    id: 25,
    employeeId: 16,
    date: '2023-05-15',
    product: '노트북',
    quantity: 7,
    unitPrice: 1350000,
    totalAmount: 9450000,
    customer: '엔터프라이즈IT',
  },
  {
    id: 26,
    employeeId: 22,
    date: '2023-05-20',
    product: '모니터',
    quantity: 15,
    unitPrice: 400000,
    totalAmount: 6000000,
    customer: '스크린샵',
  },
  {
    id: 27,
    employeeId: 27,
    date: '2023-05-25',
    product: '키보드',
    quantity: 25,
    unitPrice: 95000,
    totalAmount: 2375000,
    customer: '게이밍기어',
  },
  {
    id: 28,
    employeeId: 32,
    date: '2023-05-31',
    product: '마우스',
    quantity: 35,
    unitPrice: 55000,
    totalAmount: 1925000,
    customer: '디지털악세서리',
  },
  {
    id: 29,
    employeeId: 1,
    date: '2023-06-05',
    product: '헤드폰',
    quantity: 18,
    unitPrice: 140000,
    totalAmount: 2520000,
    customer: '프리미엄오디오',
  },
  {
    id: 30,
    employeeId: 6,
    date: '2023-06-10',
    product: '태블릿',
    quantity: 9,
    unitPrice: 600000,
    totalAmount: 5400000,
    customer: '모바일테크',
  },
  {
    id: 31,
    employeeId: 12,
    date: '2023-06-15',
    product: '스피커',
    quantity: 22,
    unitPrice: 110000,
    totalAmount: 2420000,
    customer: '오디오파크',
  },
  {
    id: 32,
    employeeId: 16,
    date: '2023-06-20',
    product: '프린터',
    quantity: 6,
    unitPrice: 370000,
    totalAmount: 2220000,
    customer: '프린트월드',
  },
  {
    id: 33,
    employeeId: 22,
    date: '2023-06-25',
    product: '외장하드',
    quantity: 20,
    unitPrice: 170000,
    totalAmount: 3400000,
    customer: '데이터보관소',
  },
  {
    id: 34,
    employeeId: 27,
    date: '2023-06-30',
    product: '그래픽카드',
    quantity: 10,
    unitPrice: 780000,
    totalAmount: 7800000,
    customer: '그래픽스튜디오',
  },
  {
    id: 35,
    employeeId: 32,
    date: '2023-07-05',
    product: '웹캠',
    quantity: 35,
    unitPrice: 75000,
    totalAmount: 2625000,
    customer: '화상미디어',
  },
];
