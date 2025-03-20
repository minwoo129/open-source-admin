import { useState } from 'react';

const useMenu = () => {
  const [open, setOpen] = useState(true);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return {
    open,
    toggleMenu,
  };
};

export default useMenu;
