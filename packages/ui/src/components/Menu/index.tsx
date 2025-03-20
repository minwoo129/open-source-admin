import React from 'react';
import { Menu as AntdMenu } from 'antd';
import type { MenuProps } from './types';
import useMenu from './hooks/useMenu';

const Menu = ({ items, onMenuClick }: MenuProps) => {
  const { open, handleOpen } = useMenu();
  return (
    <AntdMenu mode="inline" theme="dark" items={items} onClick={onMenuClick} />
  );
};

export default Menu;
