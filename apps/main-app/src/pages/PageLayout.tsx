import React from 'react';
import '../css/PageLayout.css';
import { Outlet } from 'react-router-dom';
import { Button, Menu } from '@admin/ui';
import { HomeOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import useMenu from '../hooks/common/PageLayout/useMenu';

const PageLayout = () => {
  const { open, toggleButtonDisabled, toggleMenu } = useMenu();
  return (
    <div className="page-layout">
      <div className="menu">
        <Button
          className="toggle-button"
          onClick={toggleMenu}
          disabled={toggleButtonDisabled}
          ghost
        >
          <MenuUnfoldOutlined />
        </Button>
        <Menu
          items={[
            {
              key: '1',
              label: 'Home',
              icon: <HomeOutlined />,
            },
          ]}
          onMenuClick={({ key }) => console.log(key)}
          isMenuOpened={open}
        />
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default PageLayout;
