import React, { useState, forwardRef } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  PseudoInput,
  Label,
  Message,
  LeftIconContainer,
  RightIconContainer,
  InputGroup,
  Prefix,
  Suffix
} from './elements';

const Input = forwardRef(
  (
    {
      label,
      leftIcon,
      rightIcon,
      id,
      success,
      warning,
      error,
      message,
      value,
      onChange,
      prefix,
      suffix,
      className,
      align,
      placeholder,
      disabled,
      required,
      ...props
    },
    ref
  ) => {
    const [active, setActive] = useState(false);

    const toggleActive = () => setActive(!active);

    return (
      <Container className={className} onFocus={toggleActive} onBlur={toggleActive} {...props}>
        {label && (
          <Label weight="light" htmlFor={id}>
            {label}
            {required && '*'}
          </Label>
        )}
        {leftIcon && (
          <LeftIconContainer
            success={success}
            warning={warning}
            error={error}
            message={message}
            active={active}
          >
            {leftIcon}
          </LeftIconContainer>
        )}
        {rightIcon && (
          <RightIconContainer
            success={success}
            warning={warning}
            error={error}
            message={message}
            active={active}
          >
            {rightIcon}
          </RightIconContainer>
        )}
        <InputGroup>
          {prefix && (
            <Prefix success={success} warning={warning} error={error}>
              {prefix}
            </Prefix>
          )}
          <PseudoInput
            id={id}
            label={label}
            value={value}
            onChange={onChange}
            success={success}
            warning={warning}
            error={error}
            leftIcon={leftIcon}
            rightIcon={rightIcon}
            prefix={prefix}
            suffix={suffix}
            ref={ref}
            align={align}
            placeholder={placeholder}
            disabled={disabled}
            required={required}
            {...props}
          />
          {suffix && (
            <Suffix success={success} warning={warning} error={error}>
              {suffix}
            </Suffix>
          )}
        </InputGroup>
        {message && (
          <Message success={success} warning={warning} error={error}>
            {message}
          </Message>
        )}
      </Container>
    );
  }
);

Input.defaultProps = {
  label: '',
  leftIcon: '',
  rightIcon: '',
  id: null,
  success: false,
  warning: false,
  error: false,
  message: '',
  placeholder: '',
  prefix: '',
  suffix: '',
  className: '',
  align: 'left',
  disabled: false,
  required: false,
  value: undefined
};

Input.propTypes = {
  label: PropTypes.string,
  leftIcon: PropTypes.any,
  rightIcon: PropTypes.any,
  id: PropTypes.string,
  success: PropTypes.bool,
  warning: PropTypes.bool,
  error: PropTypes.bool,
  message: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  prefix: PropTypes.string,
  suffix: PropTypes.string,
  className: PropTypes.string,
  align: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool
};

export default Input;
