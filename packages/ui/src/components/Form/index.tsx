import React from 'react';
import { Form as AntdForm } from 'antd';
import { FormBasicType, FormItemProps, FormProps } from './types';

const Form = <T extends FormBasicType>({ ...props }: FormProps<T>) => {
  return <AntdForm<T> {...props} />;
};

Form.Item = <T extends FormBasicType>({
  children,
  ...props
}: FormItemProps<T>) => {
  return <AntdForm.Item<T> {...props}>{children}</AntdForm.Item>;
};

Form.List = AntdForm.List;

Form.useForm = AntdForm.useForm;

Form.useWatch = AntdForm.useWatch;

export default Form;
