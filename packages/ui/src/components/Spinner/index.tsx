import React from 'react';
import { Spin as AntdSpin } from 'antd';
import type { SpinnerProps } from './types';

const Spinner = ({ ...props }: SpinnerProps) => {
  return <AntdSpin {...props} />;
};

export default Spinner;
