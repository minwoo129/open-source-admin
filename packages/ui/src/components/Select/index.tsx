import React from 'react';
import { Select as AntdSelect } from 'antd';
import { SelectProps } from './types';

const Select = <T extends string | number>({
  style,
  ...props
}: SelectProps<T>) => {
  return (
    <AntdSelect style={{ backgroundColor: 'white', ...style }} {...props} />
  );
};

export default Select;
