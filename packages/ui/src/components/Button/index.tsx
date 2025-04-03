import React from 'react';
import { Button as AntdButton } from 'antd';
import type { ButtonProps } from './types';

const Button = ({ ...props }: ButtonProps) => {
  return <AntdButton {...props} />;
};

export default Button;
