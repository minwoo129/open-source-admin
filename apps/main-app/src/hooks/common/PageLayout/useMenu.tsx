import { useEffect, useState } from 'react';

const RESIZE_LIMIT_WIDTH = 768;

const useMenu = () => {
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

  return {
    open,
    toggleButtonDisabled,
    toggleMenu,
  };
};

export default useMenu;
