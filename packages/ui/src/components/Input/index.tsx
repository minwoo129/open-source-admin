import React from 'react';
import { Input as AntdInput } from 'antd';
import type { InputProps } from './types';

const Input = ({ ...props }: InputProps) => {
  return <AntdInput {...props} />;
};

export default Input;
