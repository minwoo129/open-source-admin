import React from 'react';
import { Switch as AntdSwitch } from 'antd';
import { SwitchProps } from './types';

const Switch = ({ ...props }: SwitchProps) => {
  return <AntdSwitch {...props} />;
};

export default Switch;
