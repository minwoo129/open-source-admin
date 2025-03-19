import React from 'react';
import { Input as AntdInput } from 'antd';
import { TextInputProps } from './types';

const TextInput = ({ ...props }: TextInputProps) => {
  return <AntdInput.TextArea {...props} />;
};

export default TextInput;
