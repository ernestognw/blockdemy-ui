import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { MdClear, MdThumbUp, MdCheckCircle, MdInfo, MdCancel, MdWarning } from 'react-icons/md';
import Typography from '../../../typography';
import { Container, CloseContainer, TextContainer, MainIconContainer } from './elements';

const getIcon = type => {
  switch (type) {
    case 'primary':
      return <MdThumbUp />;
    case 'success':
      return <MdCheckCircle />;
    case 'info':
      return <MdInfo />;
    case 'default':
      return <MdInfo />;
    case 'secondary':
      return <MdWarning />;
    case 'warning':
      return <MdWarning />;
    case 'danger':
      return <MdCancel />;
    default:
      return <MdThumbUp />;
  }
};

const ToastComponent = ({ title, message, type, options, removeElements }) => {
  const [isGoingToBeRemoved, setIsGoingToBeRemoved] = useState(false);
  let timeOut;

  const startCounting = () => {
    timeOut = setTimeout(() => {
      setIsGoingToBeRemoved(true);
    }, options.autoClose);
  };

  const cancelCounting = () => clearTimeout(timeOut);

  useEffect(() => {
    startCounting();

    return cancelCounting;
  }, []);

  const remove = () => {
    if (isGoingToBeRemoved) removeElements();
  };

  const forceRemove = () => {
    setIsGoingToBeRemoved(true);
    cancelCounting();
    remove();
  };

  return (
    <Container
      onAnimationEnd={remove}
      onFocus={cancelCounting}
      onMouseOver={cancelCounting}
      onMouseLeave={startCounting}
      type={type}
      isGoingToBeRemoved={isGoingToBeRemoved}
      onClick={forceRemove}
    >
      <CloseContainer onClick={forceRemove}>
        <MdClear />
      </CloseContainer>
      <MainIconContainer>{getIcon(type)}</MainIconContainer>
      <TextContainer>
        <Typography uppercase fontWeight="bold" fontSize="14px">
          {title}
        </Typography>
        {message && (
          <Typography mt="5" fontSize="12px">
            {message}
          </Typography>
        )}
      </TextContainer>
    </Container>
  );
};

ToastComponent.defaultProps = {
  message: ''
};

ToastComponent.propTypes = {
  removeElements: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  message: PropTypes.string,
  type: PropTypes.string.isRequired,
  options: PropTypes.shape({
    autoClose: PropTypes.number,
    marginTop: PropTypes.number
  }).isRequired
};

export default ToastComponent;
