import React, { ComponentProps, useState } from 'react';
import Switch from '../components/Switch';

interface SwitchComponentProps
  extends Omit<ComponentProps<typeof Switch>, 'value' | 'onChange'> {}

type UseAdminUISwitchRetType = [
  boolean,
  (args: SwitchComponentProps) => React.ReactNode,
];
const useAdminUISwitch = (defaultValue?: boolean): UseAdminUISwitchRetType => {
  const [isChecked, setChecked] = useState(defaultValue || false);

  const SwitchComponent = ({ ...props }: SwitchComponentProps) => {
    return (
      <Switch
        value={isChecked}
        onChange={(checked) => setChecked(checked)}
        {...props}
      />
    );
  };

  return [isChecked, SwitchComponent];
};

export default useAdminUISwitch;
