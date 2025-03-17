import React, { ComponentProps } from 'react';
import { Button as AntdButton } from 'antd';
import { ButtonProps } from './types';

const Button = ({ ...props }: ButtonProps) => {
  return <AntdButton {...props} />;
};

export default Button;
