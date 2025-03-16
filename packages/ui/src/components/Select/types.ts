import { ComponentProps } from 'react';
import { Select as AntdSelect } from 'antd';
export interface SelectProps<T = string | number>
  extends ComponentProps<typeof AntdSelect<T>> {}
