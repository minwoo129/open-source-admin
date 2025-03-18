import React from 'react';
import { Modal as AntdModal } from 'antd';
import { ModalProps } from './types';

const Modal = ({ ...props }: ModalProps) => {
  return <AntdModal {...props} />;
};

export default Modal;
