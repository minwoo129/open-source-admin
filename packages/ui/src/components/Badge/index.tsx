import React from 'react';
import { Badge as AntdBadge } from 'antd';
import type { BadgeProps } from './types';

const Badge = ({ ...props }: BadgeProps) => {
  return <AntdBadge {...props} />;
};

export default Badge;
