import React, { ComponentProps, useState } from 'react';
import Radio from '../components/Radio';
import { CheckboxOptionType } from 'antd';

interface RadioComponentProps
  extends Omit<ComponentProps<typeof Radio>, 'value' | 'onChange' | 'options'> {
  options: CheckboxOptionType<number>[];
}

type UseAdminUIRadioRetType = [
  number,
  (args: RadioComponentProps) => React.ReactNode,
];

const useAdminUIRadio = (): UseAdminUIRadioRetType => {
  const [value, setValue] = useState(1);

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
