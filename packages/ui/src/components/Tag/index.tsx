import React from 'react';
import { Tag as AntdTag } from 'antd';
import type { TagProps } from './types';

const Tag = ({ ...props }: TagProps) => {
  return <AntdTag {...props} />;
};

export default Tag;
