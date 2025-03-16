import React from 'react';
import { CheckboxProps } from './types';
import { Checkbox as AntdCheckbox } from 'antd';

const Checkbox = ({ ...props }: CheckboxProps) => {
  return <AntdCheckbox {...props} />;
};

export default Checkbox;
