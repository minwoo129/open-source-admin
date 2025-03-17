# UI 컴포넌트 상세문서: Chart

## 1. 상세 정보

- Chartjs 라이브러리 제공 차트 컴포넌트
  - 다 연결한 것이 아닌, 관리자에서 사용할 가능성이 높은 기본적인 차트만 적용한 상태
  - 대신, 따로 컴포넌트만 생성하면 바로 사용할 수 있음

## 2. 적용된 차트

- Bar 차트 => [공식문서](https://react-chartjs-2.js.org/components/bar)
- Doughnut 차트 => [공식문서](https://react-chartjs-2.js.org/components/doughnut)
- Line 차트 => [공식문서](https://react-chartjs-2.js.org/components/line)
- Pie 차트 => [공식문서](https://react-chartjs-2.js.org/components/pie)
- PolarArea 차트 => [공식문서](https://react-chartjs-2.js.org/components/polar-area)
- Radar 차트 => [공식문서](https://react-chartjs-2.js.org/components/radar)

## 3. 사용 예시

## 3-1. Bar 차트

- Vertical Bar Chart(출처: [React Chartjs Vertical Bar Chart](https://react-chartjs-2.js.org/examples/vertical-bar-chart))

  ```typescript
    import React from 'react'
    import { Chart } from '@admin/ui';

    const options = {
        responsive: true,
        plugins: {
            legend: {
            position: 'top' as const,
            },
            title: {
            display: true,
            text: 'Chart.js Bar Chart',
            },
        },
    };

    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

    const data = {
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: [622, 725, 992, 294, 502, 910, 288],
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'Dataset 2',
                data: [637, 823, 414, 150, 232, 111, 484],
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    };

    function App() {
        return (
            <>
                <div className="table-test-grid">
                    <Chart.BarChart
                        options={options}
                        data={data}
                    />
                </div>
            </>
        );
    }

    export default App;
  ```

- Stacked Bar Chart(출처: [React Chartjs Stacked Bar Chart](https://react-chartjs-2.js.org/examples/stacked-bar-chart))

  ```typescript
    import React from 'react'
    import { Chart } from '@admin/ui';

    const options = {
        plugins: {
        title: {
            display: true,
            text: 'Chart.js Bar Chart - Stacked',
        },
        },
        responsive: true,
        scales: {
            x: {
                stacked: true,
            },
            y: {
                stacked: true,
            },
        },
    };

    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

    const data = {
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: [565, -492, -850, 44, -650, -10, 900],
                backgroundColor: 'rgb(255, 99, 132)',
            },
            {
                label: 'Dataset 2',
                data: [477, -257, 219, 678, -641, 945, -393],
                backgroundColor: 'rgb(75, 192, 192)',
            },
            {
                label: 'Dataset 3',
                data: [-739, 713, 590, -399, 910, -156, -275],
                backgroundColor: 'rgb(53, 162, 235)',
            },
        ],
    };

    function App() {
        return (
            <>
                <div className="table-test-grid">
                    <Chart.BarChart
                        options={options}
                        data={data}
                    />
                </div>
            </>
        );
    }

    export default App;
  ```

- Horizontal Bar Chart(출처: [React Chartjs Horizontal Bar Chart](https://react-chartjs-2.js.org/examples/horizontal-bar-chart))

  ```typescript
  import React from 'react'
  import { Chart } from '@admin/ui';

  const options = {
      indexAxis: 'y' as const,
      elements: {
          bar: {
          borderWidth: 2,
          },
      },
      responsive: true,
      plugins: {
          legend: {
              position: 'right' as const,
          },
          title: {
              display: true,
              text: 'Chart.js Horizontal Bar Chart',
          },
      },
  };

  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  const data = {
      labels,
      datasets: [
          {
              label: 'Dataset 1',
              data: [405, 347, 475, -931, 176, -688, -994],
              borderColor: 'rgb(255, 99, 132)',
              backgroundColor: 'rgb(255, 99, 132, 0.5)',
          },
          {
              label: 'Dataset 2',
              data: [-78, -30, 744, 633, -506, -435, 949],
              borderColor: 'rgb(75, 192, 192)',
              backgroundColor: 'rgb(75, 192, 192, 0.5)',
          },

      ],
  };

  function App() {
      return (
          <>
              <div className="table-test-grid">
                  <Chart.BarChart
                      options={options}
                      data={data}
                  />
              </div>
          </>
      );
  }

  export default App;
  ```

- Grouped Bar Chart(출처: [React Chartjs Grouped Bar Chart](https://react-chartjs-2.js.org/examples/grouped-bar-chart))

  ```typescript
    import React from 'react'
    import { Chart } from '@admin/ui';

    const options = {
        plugins: {
        title: {
            display: true,
            text: 'Chart.js Bar Chart - Stacked',
            },
        },
        responsive: true,
        interaction: {
            mode: 'index' as const,
            intersect: false,
        },
        scales: {
            x: {
                stacked: true,
            },
            y: {
                stacked: true,
            },
        },
    };

    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

    const data = {
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: [778, -710, 877, -796, 759, -693, 600],
                backgroundColor: 'rgb(255, 99, 132)',
            },
            {
                label: 'Dataset 2',
                data: [-143, -217, -669, -586, 977, -679, -816],
                backgroundColor: 'rgb(75, 192, 192)',
            },
            {
                label: 'Dataset 3',
                data: [-783, -328, -668, 464, -575, 738, 886],
                backgroundColor: 'rgb(53, 162, 235)',
            },
        ],
    };

    function App() {
        return (
            <>
                <div className="table-test-grid">
                    <Chart.BarChart
                        options={options}
                        data={data}
                    />
                </div>
            </>
        );
    }

    export default App;
  ```

## 3-2. Doughnut 차트

- Doughnut Chart(출처: [React Chartjs Doughnut Chart](https://react-chartjs-2.js.org/examples/doughnut-chart))

  ```typescript
    import React from 'react'
    import { Chart } from '@admin/ui';

    export const data = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
            {
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    function App() {
        return (
            <>
                <div className="table-test-grid">
                    <Chart.DoughnutChart
                        data={data}
                    />
                </div>
            </>
        );
    }

    export default App;
  ```

## 3-3. Line 차트

- Line Chart(출처: [React Chartjs Line Chart](https://react-chartjs-2.js.org/examples/line-chart))

  ```typescript
    import React from 'react'
    import { Chart } from '@admin/ui';

    export const options = {
        responsive: true,
        interaction: {
            mode: 'index' as const,
            intersect: false,
        },
        stacked: false,
        plugins: {
            title: {
                display: true,
                text: 'Chart.js Line Chart - Multi Axis',
            },
        },
        scales: {
            y: {
                type: 'linear' as const,
                display: true,
                position: 'left' as const,
            },
            y1: {
                type: 'linear' as const,
                display: true,
                position: 'right' as const,
                grid: {
                    drawOnChartArea: false,
                },
            },
        },
    };

    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

    export const data = {
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: [-258, 544, 209, -165, 513, 578, 113],
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                yAxisID: 'y',
            },
            {
                label: 'Dataset 2',
                data: [-796, 176, -413, 222, -149, 821, -376],
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
                yAxisID: 'y1',
            },
        ],
    };

    function App() {
        return (
            <>
                <div className="table-test-grid">
                    <Chart.LineChart
                        options={options}
                        data={data}
                    />
                </div>
            </>
        );
    }

    export default App;
  ```

- Multiaxis Line Chart(출처: [React Chartjs Multiaxis Line Chart](https://react-chartjs-2.js.org/examples/multiaxis-line-chart))

## 3-4. Pie 차트

- Pie Chart(출처: [React Chartjs Pie Chart](https://react-chartjs-2.js.org/examples/pie-chart))

  ```typescript
    import React from 'react'
    import { Chart } from '@admin/ui';

    export const data = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
            {
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    function App() {
        return (
            <>
                <div className="table-test-grid">
                    <Chart.PieChart
                        data={data}
                    />
                </div>
            </>
        );
    }

    export default App;
  ```

## 3-5. PolarArea 차트

- Polar Area Chart(출처: [React Chartjs Polar Area Chart](https://react-chartjs-2.js.org/examples/polar-area-chart))

  ```typescript
    import React from 'react'
    import { Chart } from '@admin/ui';

    export const data = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
            {
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    function App() {
        return (
            <>
                <div className="table-test-grid">
                    <Chart.PolarAreaChart
                        data={data}
                    />
                </div>
            </>
        );
    }

    export default App;
  ```

## 3-6. Radar 차트

- Radar Chart(출처: [React Chartjs Radar Chart](https://react-chartjs-2.js.org/examples/radar-chart))

  ```typescript
    import React from 'react'
    import { Chart } from '@admin/ui';

    export const data = {
        labels: ['Thing 1', 'Thing 2', 'Thing 3', 'Thing 4', 'Thing 5', 'Thing 6'],
        datasets: [
            {
                label: '# of Votes',
                data: [2, 9, 3, 5, 2, 3],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
            },
        ],
    };

    function App() {
        return (
            <>
                <div className="table-test-grid">
                    <Chart.RadarChart
                        data={data}
                    />
                </div>
            </>
        );
    }

    export default App;
  ```

# 4. 참고

- 현재 차트에서 Title 부분이 안나타날 수 있음
  - 코드 수정 필요
- 차트 데이터만 처리하는 hook을 개발해야 할지 검토가 필요할 듯!!
