import React from 'react';
import { Layout } from 'antd';
import { LayoutCardProps } from './types';
const { Content } = Layout;

const LayoutCard = ({ style, ...props }: LayoutCardProps) => {
  return <Content style={{ backgroundColor: 'white', ...style }} {...props} />;
};

export default LayoutCard;
