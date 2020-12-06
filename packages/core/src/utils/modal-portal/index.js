import { useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';

const ModalPortal = ({ children }) => {
  const modalsRoot = useMemo(() => document.getElementById('modal'), []);
  const modal = useMemo(() => document.createElement('div'), []);

  useEffect(() => {
    modalsRoot.appendChild(modal);

    return () => modalsRoot.removeChild(modal);
  }, []);

  return createPortal(children, modal);
};

ModalPortal.propTypes = {
  children: PropTypes.element.isRequired
};

export default ModalPortal;
