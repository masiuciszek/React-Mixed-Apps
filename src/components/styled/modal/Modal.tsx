import * as React from 'react';
import { StyledModalContainer, ModalBoxSetup, ModalBg } from './Styles.modal';

interface P {
  show: boolean;
  // content: React.ReactComponentElement;
  content: any;
  close: Function;
}

const Modal: React.FC<P> = ({ show, content, close }) => {
  let a;
  return (
    <StyledModalContainer>
      <ModalBoxSetup>{content}</ModalBoxSetup>
      <ModalBg />
    </StyledModalContainer>
  );
};


export default Modal;
