import { useEffect, useState } from 'react';

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

    setToggleButtonDisabled(width <= 768);
    if (width <= 768) {
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
