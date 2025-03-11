import { Button as AntdButton } from 'antd';
import React, { ComponentProps } from 'react';

interface ButtonProps extends ComponentProps<typeof AntdButton> {}

const Button = ({ ...props }: ButtonProps) => {
  return <AntdButton {...props} />;
};

export default Button;
