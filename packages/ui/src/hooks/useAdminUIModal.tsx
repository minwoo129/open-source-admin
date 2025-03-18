import React, { ComponentProps, ReactNode, useState } from 'react';
import Modal from '../components/Modal';

interface ModalComponentProps
  extends Omit<ComponentProps<typeof Modal>, 'open'> {}

type UseAdminUIModalRetType = [
  boolean,
  (isOpen: boolean) => void,
  (args: ModalComponentProps) => ReactNode,
];

const useAdminUIModal = (): UseAdminUIModalRetType => {
  const [isOpen, setOpen] = useState(false);

  const handleModalVisible = (isOpen: boolean) => {
    setOpen(isOpen);
  };

  const ModalComponent = ({ children, ...props }: ModalComponentProps) => {
    return (
      <Modal open={isOpen} {...props}>
        {children}
      </Modal>
    );
  };

  return [isOpen, handleModalVisible, ModalComponent];
};

export default useAdminUIModal;
