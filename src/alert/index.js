import React from 'react';
import PropTypes from 'prop-types';
import { MdThumbUp, MdCheckCircle, MdInfo, MdCancel, MdWarning } from 'react-icons/md';
import propTypes from '@styled-system/prop-types';
import Typography from '../typography';
import { Container, Body, IconContainer, Text } from './elements';

const getIcon = type => {
  switch (type) {
    case 'primary':
      return <MdThumbUp />;
    case 'success':
      return <MdCheckCircle />;
    case 'info':
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

const Alert = ({ type, children, primary, secondary, ...props }) => (
  <Container type={type} {...props}>
    <Body type={type}>
      <IconContainer>{getIcon(type)}</IconContainer>
      <Text>
        <Typography fontWeight="bold" mb="5" variant="muted">
          {primary}
        </Typography>
        {secondary && (
          <Typography fontSize="12px" variant="muted">
            {secondary}
          </Typography>
        )}
        {children}
      </Text>
    </Body>
  </Container>
);

Alert.defaultProps = {
  type: 'primary',
  secondary: '',
  children: null
};

Alert.propTypes = {
  children: PropTypes.any,
  primary: PropTypes.string.isRequired,
  secondary: PropTypes.string,
  type: PropTypes.string,
  ...propTypes.color,
  ...propTypes.space
};

export default Alert;
