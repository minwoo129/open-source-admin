import React, { ComponentProps, ReactNode } from 'react';
import { Form as AntdForm, FormInstance } from 'antd';
import Form from '../components/Form';
import type { FormBasicType } from '../components/Form/types';

interface FormComponentProps<T extends FormBasicType>
  extends Omit<ComponentProps<typeof Form<T>>, 'form'> {}

interface FormItemComponentProps<T extends FormBasicType>
  extends ComponentProps<typeof Form.Item<T>> {}

type UseAdminUIFormRetType<T extends FormBasicType> = [
  FormInstance<T>,
  ({ ...props }: FormComponentProps<T>) => ReactNode,
  ({ ...props }: FormItemComponentProps<T>) => ReactNode,
];

const useAdminUIForm = <
  T extends FormBasicType,
>(): UseAdminUIFormRetType<T> => {
  const [form] = AntdForm.useForm<T>();

  const FormComponent = ({
    children,
    initialValues,
    ...props
  }: FormComponentProps<T>) => {
    return (
      <Form<T> form={form as FormInstance<any>} {...props}>
        {children}
      </Form>
    );
  };

  const ItemComponent = ({ ...props }: FormItemComponentProps<T>) => {
    return <Form.Item<T> {...props} />;
  };

  return [form, FormComponent, ItemComponent];
};

export default useAdminUIForm;
