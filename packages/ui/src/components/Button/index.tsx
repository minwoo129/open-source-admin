import React, { ComponentProps } from 'react';
import { Button as AntdButton } from 'antd';

interface ButtonProps extends ComponentProps<typeof AntdButton> {}

const Button = ({ ...props }: ButtonProps) => {
  return <AntdButton {...props} />;
};

export default Button;
