import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavigationRouteData } from '../../../constants/Route';

const RESIZE_LIMIT_WIDTH = 768;

const useMenu = () => {
  const navigate = useNavigate();

  const [open, setOpen] = useState(true);
  const [toggleButtonDisabled, setToggleButtonDisabled] = useState(false);

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleResize = () => {
    const width = window.innerWidth;

    setToggleButtonDisabled(width <= RESIZE_LIMIT_WIDTH);
    if (width <= RESIZE_LIMIT_WIDTH) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  const toggleMenu = () => {
    setOpen(!open);
  };

  const handleMenuClick = (key: string) => {
    if (!(key in NavigationRouteData)) {
      return;
    }
    navigate(NavigationRouteData[key].route);
  };

  return {
    open,
    toggleButtonDisabled,
    toggleMenu,
    handleMenuClick,
  };
};

export default useMenu;
