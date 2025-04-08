import React, { ComponentProps, useState } from 'react';
import Radio from '../components/Radio';
import type { CheckboxOptionType, RadioChangeEvent } from 'antd';

const RADIO_DEFAULT_SELECTED_VALUE = 1;

interface RadioComponentProps
  extends Omit<
    ComponentProps<typeof Radio.Group>,
    'value' | 'onChange' | 'options'
  > {
  options: CheckboxOptionType<number>[];
}

type handleChangeFuncType = (e: RadioChangeEvent) => void;

type UseAdminUIRadioRetType = [
  number,
  (args: RadioComponentProps) => React.ReactNode,
];

const useAdminUIRadio = (
  defaultValue = RADIO_DEFAULT_SELECTED_VALUE,
): UseAdminUIRadioRetType => {
  const [value, setValue] = useState(defaultValue);

  const handleChange: handleChangeFuncType = (e) => {
    setValue(parseInt(e.target.value));
  };

  const RadioComponent = ({ options, ...props }: RadioComponentProps) => {
    return (
      <Radio.Group
        onChange={handleChange}
        value={value}
        options={options}
        {...props}
      />
    );
  };

  return [value, RadioComponent];
};

export default useAdminUIRadio;
