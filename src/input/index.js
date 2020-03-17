import React, { Component } from 'react';
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

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  }

  toggleActive = () => {
    const { active } = this.state;
    this.setState({ active: !active });
  };

  render() {
    const {
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
      ...props
    } = this.props;
    const { active } = this.state;
    return (
      <Container
        className={className}
        onFocus={this.toggleActive}
        onBlur={this.toggleActive}
        {...props}
      >
        {label && (
          <Label weight="light" htmlFor={id}>
            {label}
            {props.required && '*'}
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
            align={align}
            placeholder={placeholder}
            disabled={disabled}
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
}

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
  disabled: PropTypes.bool
};

export default Input;
