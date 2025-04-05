import React from 'react';
import { Button as AntdButton } from 'antd';
import type { ButtonProps } from './types';

/** 버튼 컴포넌트 */
export const Button = ({ ...props }: ButtonProps) => {
  return <AntdButton {...props} />;
};
