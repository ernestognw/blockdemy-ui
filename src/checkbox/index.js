import React from 'react';
import PropTypes from 'prop-types';
import RoundDone from 'react-md-icon/dist/RoundDone';
import VisuallyHidden from '../utils/visually-hidden';
import Box from '../box';
import { Container, CheckContainer, ClickableSection } from './elements';

const Checkbox = ({
  color,
  id,
  size,
  success,
  warning,
  error,
  checked,
  onChange,
  className,
  disabled,
  children,
  required,
  ...props
}) => {
  return (
    <Container className={className} {...props}>
      <ClickableSection disabled={disabled}>
        <VisuallyHidden
          as="input"
          type="checkbox"
          id={id}
          onChange={event =>
            onChange({
              ...event,
              target: { ...event.target, value: event.target.value === 'false' }
            })
          }
          checked={checked}
          value={checked}
          disabled={disabled}
          required={required}
          {...props}
        />
        <CheckContainer
          size={size}
          success={success}
          warning={warning}
          error={error}
          color={color}
          checked={checked}
          disabled={disabled}
        >
          {checked && <RoundDone />}
        </CheckContainer>
        {children && <Box ml={5}>{children}</Box>}
      </ClickableSection>
    </Container>
  );
};

Checkbox.defaultProps = {
  color: 'secondary',
  size: 'normal',
  id: null,
  success: false,
  warning: false,
  error: false,
  className: '',
  disabled: false,
  required: false,
  children: undefined
};

Checkbox.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOf(['small', 'normal', 'large']),
  id: PropTypes.string,
  success: PropTypes.bool,
  warning: PropTypes.bool,
  error: PropTypes.bool,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  children: PropTypes.any
};

export default Checkbox;
