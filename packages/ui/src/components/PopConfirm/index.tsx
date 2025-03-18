import React from 'react';
import { Popconfirm as AntdPopConfirm } from 'antd';
import { PopConfirmProps } from './types';

const PopConfirm = ({ ...props }: PopConfirmProps) => {
  return <AntdPopConfirm {...props} />;
};

export default PopConfirm;
