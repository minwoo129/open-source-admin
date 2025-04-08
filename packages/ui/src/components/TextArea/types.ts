import { Input as AntdInput } from 'antd';
import { ComponentProps } from 'react';

export interface TextInputProps
  extends ComponentProps<typeof AntdInput.TextArea> {}
