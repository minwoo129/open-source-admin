import { ComponentProps } from 'react';
import { Form as AntdForm } from 'antd';

export type FormBasicType = Record<string, any>;

export interface FormProps<T extends FormBasicType>
  extends ComponentProps<typeof AntdForm<T>> {}

export interface FormItemProps<T extends FormBasicType>
  extends ComponentProps<typeof AntdForm.Item<T>> {}
