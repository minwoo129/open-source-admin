import { Radio as AntdRadio } from 'antd';
import { ComponentProps } from 'react';

export interface RadioProps extends ComponentProps<typeof AntdRadio> {}

export interface RadioGroupProps
  extends ComponentProps<typeof AntdRadio.Group> {}

export interface RadioItemProps extends ComponentProps<typeof AntdRadio> {}
