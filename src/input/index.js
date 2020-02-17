import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  PseudoInput,
  Label,
  Message,
  LeftIconContainer,
  InputGroup,
  Prefix
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
      id,
      success,
      warning,
      error,
      message,
      value,
      onChange,
      prefix,
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
        <InputGroup>
          {prefix && (
            <Prefix leftIcon={leftIcon} success={success} warning={warning} error={error}>
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
            leftIcon={!prefix && leftIcon}
            prefix={prefix}
            align={align}
            placeholder={placeholder}
            disabled={disabled}
            {...props}
          />
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
  id: null,
  success: false,
  warning: false,
  error: false,
  message: '',
  placeholder: '',
  prefix: '',
  className: '',
  align: 'left',
  disabled: false
};

Input.propTypes = {
  label: PropTypes.string,
  leftIcon: PropTypes.any,
  id: PropTypes.string,
  success: PropTypes.bool,
  warning: PropTypes.bool,
  error: PropTypes.bool,
  message: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  prefix: PropTypes.string,
  className: PropTypes.string,
  align: PropTypes.string,
  disabled: PropTypes.bool
};

export default Input;
