import React from 'react';
import '@css/PageLayout.css';
import { Outlet } from 'react-router-dom';
import { Button, Menu } from '@admin/ui';
import {
  CopyOutlined,
  HomeOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import useMenu from '@hooks/common/PageLayout/useMenu';
import { NavigationRouteData } from '@constants/Route';

const PageLayout = () => {
  const { open, toggleButtonDisabled, toggleMenu, handleMenuClick } = useMenu();
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
              key: 'home',
              label: NavigationRouteData['home'].label,
              icon: <HomeOutlined />,
            },
            {
              key: 'test',
              label: 'TestPage',
              icon: <CopyOutlined />,
              children: [
                {
                  key: 'test1',
                  label: NavigationRouteData['test1'].label,
                },
                {
                  key: 'test2',
                  label: NavigationRouteData['test2'].label,
                },
              ],
            },
          ]}
          onMenuClick={({ key }) => handleMenuClick(key)}
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
