import React from 'react';
import { Progress as AntdProgress } from 'antd';
import { ProgressProps } from './types';

const Progress = ({ ...props }: ProgressProps) => {
  return <AntdProgress {...props} />;
};

export default Progress;
