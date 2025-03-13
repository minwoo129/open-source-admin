import React from 'react';
import { PolarArea as ChartJSPolarArea } from 'react-chartjs-2';
import { PolarProps } from './types';

const Polar = ({ style, ...props }: PolarProps) => {
  return (
    <ChartJSPolarArea
      style={{ backgroundColor: 'white', ...style }}
      {...props}
    />
  );
};

export default Polar;
