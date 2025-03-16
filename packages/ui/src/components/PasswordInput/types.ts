import { Input as AntdInput } from 'antd';
import { ComponentProps } from 'react';

export interface PasswordInputProps
  extends ComponentProps<typeof AntdInput.Password> {}
