import React from 'react';
import { Doughnut as ChartJSDoughnut } from 'react-chartjs-2';
import type { DoughnutProps } from './types';

const Doughnut = ({ style, ...props }: DoughnutProps) => {
  return (
    <ChartJSDoughnut
      style={{ backgroundColor: 'white', ...style }}
      {...props}
    />
  );
};

export default Doughnut;
