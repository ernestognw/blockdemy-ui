import React, { Fragment, Component } from "react";
import PropTypes from "prop-types";
import RoundClear from "react-md-icon/dist/RoundClear";
import ModalPortal from "../utils/modal-portal";
import {
  ModalBox,
  ModalContainer,
  PseudoContainer,
  ModalTitleContainer,
  ModalTitle,
  ModalBody,
  CloseButton
} from "./elements";

class SideModal extends Component {
  componentDidUpdate = prevProps => {
    const { active } = this.props;
    const { body } = document;
    if (prevProps.active !== active) {
      if (active) {
        body.style.overflow = "hidden";
      } else {
        body.style.overflow = null;
      }
    }
  };

  render() {
    const { active, closeButton, title, children } = this.props;
    return (
      <Fragment>
        {active && (
          <ModalPortal>
            <ModalContainer>
              <ModalBox id="side-modal-box">
                <CloseButton onClick={closeButton}>
                  <RoundClear />
                </CloseButton>
                <ModalTitleContainer>
                  {title && <ModalTitle>{title}</ModalTitle>}
                </ModalTitleContainer>
                <ModalBody>{children}</ModalBody>
              </ModalBox>
              <PseudoContainer onClick={closeButton} />
            </ModalContainer>
          </ModalPortal>
        )}
      </Fragment>
    );
  }
}

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
