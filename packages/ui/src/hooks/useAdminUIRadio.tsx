import React, { ComponentProps, useState } from 'react';
import Radio from '../components/Radio';
import { CheckboxOptionType } from 'antd';

const RADIO_DEFAULT_SELECTED_VALUE = 1;

interface RadioComponentProps
  extends Omit<ComponentProps<typeof Radio>, 'value' | 'onChange' | 'options'> {
  options: CheckboxOptionType<number>[];
}

type UseAdminUIRadioRetType = [
  number,
  (args: RadioComponentProps) => React.ReactNode,
];

const useAdminUIRadio = (
  defaultValue = RADIO_DEFAULT_SELECTED_VALUE,
): UseAdminUIRadioRetType => {
  const [value, setValue] = useState(defaultValue);

  const RadioComponent = ({ options, ...props }: RadioComponentProps) => {
    return (
      <Radio
        onChange={(e) => setValue(parseInt(e.target.value))}
        value={value}
        options={options}
        {...props}
      />
    );
  };

  return [value, RadioComponent];
};

export default useAdminUIRadio;
