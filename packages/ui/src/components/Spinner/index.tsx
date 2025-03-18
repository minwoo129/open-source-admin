import React from 'react';
import { Spin as AntdSpin } from 'antd';
import { SpinnerProps } from './types';

const Spinner = ({ ...props }: SpinnerProps) => {
  return <AntdSpin {...props} />;
};

export default Spinner;
