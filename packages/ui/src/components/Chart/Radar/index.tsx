import React from 'react';
import { Radar as ChartJSRadar } from 'react-chartjs-2';
import { RadarProps } from './types';

const Radar = ({ style, ...props }: RadarProps) => {
  return (
    <ChartJSRadar style={{ backgroundColor: 'white', ...style }} {...props} />
  );
};

export default Radar;
