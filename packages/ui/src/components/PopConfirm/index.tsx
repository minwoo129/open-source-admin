import React from 'react';
import { Popconfirm as AntdPopConfirm } from 'antd';
import type { PopConfirmProps } from './types';

const PopConfirm = ({ ...props }: PopConfirmProps) => {
  return <AntdPopConfirm {...props} />;
};

export default PopConfirm;
