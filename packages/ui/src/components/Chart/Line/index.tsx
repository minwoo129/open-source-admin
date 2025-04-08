import React from 'react';
import { Line as ChartJSLine } from 'react-chartjs-2';
import type { LineProps } from './types';

const Line = ({ style, ...props }: LineProps) => {
  return (
    <ChartJSLine style={{ backgroundColor: 'white', ...style }} {...props} />
  );
};

export default Line;
