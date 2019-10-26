import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import {
  Container,
  PseudoInput,
  PseudoSelect,
  Label,
  Message,
  LeftIconContainer,
  OptionsButton,
  InputGroup,
  Prefix
} from "./elements";

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
      select,
      id,
      success,
      warning,
      error,
      message,
      value,
      onChange,
      placeholderColor,
      children,
      prefix,
      sufix,
      selectIcon,
      className,
      align,
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
            {props.required && "*"}
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
        {select ? (
          <Fragment>
            <PseudoSelect
              id={id}
              value={value}
              onChange={onChange}
              success={success}
              warning={warning}
              error={error}
              leftIcon={leftIcon}
              placeholderColor={placeholderColor}
              {...props}
            >
              {children}
            </PseudoSelect>
            {selectIcon || <OptionsButton label={label} message={message} />}
          </Fragment>
        ) : (
          <InputGroup>
            {prefix && (
              <Prefix
                leftIcon={leftIcon}
                success={success}
                warning={warning}
                error={error}
              >
                {prefix}
              </Prefix>
            )}
            <PseudoInput
              id={id}
              value={value}
              onChange={onChange}
              success={success}
              warning={warning}
              error={error}
              leftIcon={!prefix && leftIcon}
              prefix={prefix}
              align={align}
              {...props}
            />
          </InputGroup>
        )}
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
  label: "",
  leftIcon: "",
  select: false,
  id: null,
  success: false,
  warning: false,
  error: false,
  message: "",
  placeholderColor: "",
  children: "",
  prefix: "",
  sufix: "",
  selectIcon: "",
  className: "",
  align: "left"
};

Input.propTypes = {
  label: PropTypes.string,
  leftIcon: PropTypes.any,
  select: PropTypes.bool,
  id: PropTypes.string,
  success: PropTypes.bool,
  warning: PropTypes.bool,
  error: PropTypes.bool,
  message: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholderColor: PropTypes.string,
  children: PropTypes.any,
  prefix: PropTypes.string,
  sufix: PropTypes.string,
  selectIcon: PropTypes.any,
  className: PropTypes.string,
  align: PropTypes.string
};

export default Input;
