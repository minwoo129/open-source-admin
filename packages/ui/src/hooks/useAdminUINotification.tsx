import { notification } from 'antd';
import { ArgsProps } from 'antd/es/notification';
import { useCallback } from 'react';

const useAdminUINotification = () => {
  const open = useCallback((args: ArgsProps) => {
    notification.open(args);
  }, []);

  const error = useCallback((args: ArgsProps) => {
    notification.error(args);
  }, []);

  const success = useCallback((args: ArgsProps) => {
    notification.success(args);
  }, []);

  const info = useCallback((args: ArgsProps) => {
    notification.info(args);
  }, []);

  const warning = useCallback((args: ArgsProps) => {
    notification.warning(args);
  }, []);

  return { open, error, success, info, warning };
};

export default useAdminUINotification;
