import React from 'react';
import { Input as AntdInput } from 'antd';
import { PasswordInputProps } from './types';

const PasswordInput = ({ ...props }: PasswordInputProps) => {
  return <AntdInput.Password {...props} />;
};

export default PasswordInput;
