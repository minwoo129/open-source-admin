import React from 'react';
import { Radio as AntdRadio } from 'antd';
import { RadioProps } from './types';

const Radio = ({ style, ...props }: RadioProps) => {
  return (
    <AntdRadio.Group
      style={{ backgroundColor: 'white', ...style }}
      {...props}
    />
  );
};

export default Radio;
