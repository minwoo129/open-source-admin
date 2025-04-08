import { Menu as AntdMenu } from 'antd';
import { ComponentProps } from 'react';

export interface MenuProps {
  isMenuOpened?: boolean;
  items: ComponentProps<typeof AntdMenu>['items'];
  onMenuClick: ComponentProps<typeof AntdMenu>['onClick'];
}
