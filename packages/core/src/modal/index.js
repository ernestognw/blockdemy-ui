import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { MdClear } from 'react-icons/md';
import ModalPortal from '../utils/modal-portal';
import Button from '../button';
import Loader from '../loader';
import {
  ModalContainer,
  ModalBox,
  ModalTitle,
  CloseButton,
  ModalActions,
  PseudoContainer,
  ContentHeader,
  ContentBody,
  ContentFooter
} from './elements';

const Modal = ({
  children,
  title,
  active,
  closeButton,
  primaryAction,
  primaryVariant,
  primaryText,
  primaryColor,
  secondaryAction,
  secondaryVariant,
  secondaryText,
  secondaryColor,
  loading,
  size,
  zIndex,
  ...props
}) => {
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
          <ModalContainer zIndex={zIndex}>
            <ModalBox {...props} size={size} animate={active}>
              {title ? (
                <ContentHeader>
                  <ModalTitle>{title}</ModalTitle>
                  <CloseButton onClick={closeButton}>
                    <MdClear />
                  </CloseButton>
                </ContentHeader>
              ) : (
                <CloseButton noHeader onClick={closeButton}>
                  <MdClear />
                </CloseButton>
              )}
              <ContentBody>{children}</ContentBody>
              {(secondaryAction || primaryAction) && (
                <ContentFooter>
                  <ModalActions>
                    {loading ? (
                      <Loader />
                    ) : (
                      <>
                        {secondaryAction && (
                          <Button
                            variant={secondaryVariant}
                            color={secondaryColor}
                            onClick={secondaryAction}
                            mr={10}
                          >
                            {secondaryText}
                          </Button>
                        )}
                        {primaryAction && (
                          <Button
                            variant={primaryVariant}
                            color={primaryColor}
                            onClick={primaryAction}
                          >
                            {primaryText}
                          </Button>
                        )}
                      </>
                    )}
                  </ModalActions>
                </ContentFooter>
              )}
            </ModalBox>
            <PseudoContainer onClick={closeButton} />
          </ModalContainer>
        </ModalPortal>
      )}
    </>
  );
};

Modal.defaultProps = {
  title: '',
  primaryAction: null,
  primaryVariant: '',
  primaryText: 'Confirm',
  primaryColor: 'primary',
  secondaryAction: null,
  secondaryVariant: '',
  secondaryText: 'Cancel',
  secondaryColor: 'danger',
  loading: false,
  size: 'normal',
  zIndex: '3000'
};

Modal.propTypes = {
  children: PropTypes.any.isRequired,
  title: PropTypes.string,
  active: PropTypes.bool.isRequired,
  closeButton: PropTypes.func.isRequired,
  primaryAction: PropTypes.func,
  primaryVariant: PropTypes.string,
  primaryText: PropTypes.string,
  primaryColor: PropTypes.string,
  secondaryAction: PropTypes.func,
  secondaryVariant: PropTypes.string,
  secondaryText: PropTypes.string,
  secondaryColor: PropTypes.string,
  loading: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'normal', 'large']),
  zIndex: PropTypes.string
};

export default Modal;
