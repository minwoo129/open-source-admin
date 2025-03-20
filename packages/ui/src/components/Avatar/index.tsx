import React from 'react';
import { Avatar as AntdAvatar } from 'antd';
import type { AvatartProps } from './types';

const Avatart = ({ ...props }: AvatartProps) => {
  return <AntdAvatar {...props} />;
};

export default Avatart;
