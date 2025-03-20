import React from 'react';
import { Menu as AntdMenu } from 'antd';
import type { MenuProps } from './types';

const Menu = ({ items, onMenuClick, isMenuOpened }: MenuProps) => {
  return (
    <AntdMenu
      mode="inline"
      theme="dark"
      items={items}
      onClick={onMenuClick}
      inlineCollapsed={isMenuOpened}
    />
  );
};

export default Menu;
