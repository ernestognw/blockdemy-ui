import React from 'react';
import PropTypes from 'prop-types';
import { MdDone } from 'react-icons/md';
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
  disabled,
  children,
  ...props
}) => {
  return (
    <Container {...props}>
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
          {...props}
        />
        <CheckContainer
          size={size}
          success={success}
          warning={warning}
          error={error}
          color={color}
          checked={checked}
          visible={checked}
          disabled={disabled}
        >
          <MdDone />
        </CheckContainer>
        {children && <Box ml={5}>{children}</Box>}
      </ClickableSection>
    </Container>
  );
};

Checkbox.defaultProps = {
  color: 'primary',
  size: 'normal',
  id: null,
  success: false,
  warning: false,
  error: false,
  disabled: false,
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
  disabled: PropTypes.bool,
  children: PropTypes.any
};

export default Checkbox;
