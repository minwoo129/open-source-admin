import React from 'react';
import { Pie as ChartJSPie } from 'react-chartjs-2';
import type { PieProps } from './types';

const Pie = ({ style, ...props }: PieProps) => {
  return (
    <ChartJSPie style={{ backgroundColor: 'white', ...style }} {...props} />
  );
};

export default Pie;
