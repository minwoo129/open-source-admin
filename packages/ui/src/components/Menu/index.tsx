import React from 'react';
import { Menu as AntdMenu } from 'antd';
import type { MenuProps } from './types';

const Menu = ({ items, onMenuClick, isMenuOpened = true }: MenuProps) => {
  return (
    <AntdMenu
      mode="inline"
      theme="dark"
      style={{ width: isMenuOpened ? '256px' : 'fit-content' }}
      items={items}
      onClick={onMenuClick}
      inlineCollapsed={!isMenuOpened}
    />
  );
};

export default Menu;
