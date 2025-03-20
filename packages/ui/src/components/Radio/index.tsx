import React from 'react';
import { Radio as AntdRadio } from 'antd';
import type { RadioGroupProps, RadioItemProps, RadioProps } from './types';

const Radio = ({ style, ...props }: RadioProps) => {
  return (
    <AntdRadio style={{ backgroundColor: 'white', ...style }} {...props} />
  );
};

Radio.Group = ({ ...props }: RadioGroupProps) => {
  return <AntdRadio.Group {...props} />;
};

Radio.Item = ({ ...props }: RadioItemProps) => {
  return <AntdRadio {...props} />;
};

export default Radio;
