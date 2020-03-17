import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  PseudoSelect,
  Label,
  Message,
  LeftIconContainer,
  RightIconContainer,
  OptionsButton,
  SelectGroup,
  Prefix,
  Suffix
} from './elements';

class Select extends Component {
  constructor(props) {
    super(props);
    this.suffixRef = React.createRef();
    this.state = {
      active: false,
      suffixWidth: 0
    };
  }

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({ suffixWidth: this.suffixRef.current.offsetWidth });
    }, 1);
  };

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
      children,
      prefix,
      suffix,
      selectIcon,
      className,
      align,
      disabled,
      ...props
    } = this.props;
    const { active, suffixWidth } = this.state;
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
        <SelectGroup>
          {prefix && (
            <Prefix success={success} warning={warning} error={error}>
              {prefix}
            </Prefix>
          )}
          <PseudoSelect
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
            disabled={disabled}
            {...props}
          >
            {children}
          </PseudoSelect>
          {selectIcon || (
            <OptionsButton
              suffixWidth={suffixWidth}
              rightIcon={rightIcon}
              label={label}
              message={message}
            />
          )}
          {suffix && (
            <Suffix ref={this.suffixRef} success={success} warning={warning} error={error}>
              {suffix}
            </Suffix>
          )}
        </SelectGroup>
        {message && (
          <Message success={success} warning={warning} error={error}>
            {message}
          </Message>
        )}
      </Container>
    );
  }
}

Select.defaultProps = {
  label: undefined,
  leftIcon: undefined,
  rightIcon: undefined,
  select: false,
  id: null,
  success: false,
  warning: false,
  error: false,
  message: undefined,
  children: undefined,
  prefix: undefined,
  suffix: undefined,
  selectIcon: undefined,
  className: undefined,
  align: 'left',
  disabled: false,
  value: undefined
};

Select.propTypes = {
  label: PropTypes.string,
  leftIcon: PropTypes.any,
  rightIcon: PropTypes.any,
  select: PropTypes.bool,
  id: PropTypes.string,
  success: PropTypes.bool,
  warning: PropTypes.bool,
  error: PropTypes.bool,
  message: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  children: PropTypes.any,
  prefix: PropTypes.string,
  suffix: PropTypes.string,
  selectIcon: PropTypes.any,
  className: PropTypes.string,
  align: PropTypes.string,
  disabled: PropTypes.bool
};

export default Select;
