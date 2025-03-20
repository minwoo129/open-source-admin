import React from 'react';
import { Bar as ChartJSBar } from 'react-chartjs-2';
import type { BarProps } from './types';

const Bar = ({ style, ...props }: BarProps) => {
  return (
    <ChartJSBar style={{ backgroundColor: 'white', ...style }} {...props} />
  );
};

export default Bar;
