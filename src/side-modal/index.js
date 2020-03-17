import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { MdClear } from 'react-icons/md';
import ModalPortal from '../utils/modal-portal';
import {
  ModalBox,
  ModalContainer,
  PseudoContainer,
  ModalTitleContainer,
  ModalTitle,
  ModalBody,
  CloseButton
} from './elements';

const SideModal = ({ active, closeButton, title, children }) => {
  useEffect(() => {
    const { body } = document;

    if (active) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = null;
    }
  }, [active]);

  return (
    <>
      {active && (
        <ModalPortal>
          <ModalContainer>
            <ModalBox id="side-modal-box">
              <CloseButton onClick={closeButton}>
                <MdClear />
              </CloseButton>
              <ModalTitleContainer>{title && <ModalTitle>{title}</ModalTitle>}</ModalTitleContainer>
              <ModalBody>{children}</ModalBody>
            </ModalBox>
            <PseudoContainer onClick={closeButton} />
          </ModalContainer>
        </ModalPortal>
      )}
    </>
  );
};

SideModal.defaultProps = {
  title: null
};

SideModal.propTypes = {
  children: PropTypes.any.isRequired,
  title: PropTypes.string,
  active: PropTypes.bool.isRequired,
  closeButton: PropTypes.func.isRequired
};

export default SideModal;
