import React, { ComponentProps, useState } from 'react';
import Select from '../components/Select';
import type { DefaultOptionType } from 'antd/es/select';

interface SelectOptionType<T extends string | number>
  extends Omit<DefaultOptionType, 'value'> {
  value: T;
}

interface SelectComponentProps<T extends string | number>
  extends Omit<
    ComponentProps<typeof Select<T>>,
    'defaultValue' | 'value' | 'options' | 'onChange'
  > {
  options: SelectOptionType<T>[];
}

type UseAdminUISelectRetType<T extends string | number> = [
  T | undefined,
  (args: SelectComponentProps<T>) => React.ReactNode,
];

const useAdminUISelect = <T extends string | number>(
  defaultValue?: T,
): UseAdminUISelectRetType<T> => {
  const [value, setValue] = useState(defaultValue);

  const SelectComponent = ({ options, ...props }: SelectComponentProps<T>) => {
    return (
      <Select
        value={value}
        options={options}
        onChange={(value) => setValue(value)}
        {...props}
      />
    );
  };

  return [value, SelectComponent];
};

export default useAdminUISelect;
