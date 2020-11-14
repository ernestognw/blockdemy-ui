import React, { useEffect, useState, createRef, forwardRef } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
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

const Select = forwardRef(
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
      children,
      prefix,
      suffix,
      selectIcon,
      className,
      align,
      disabled,
      required,
      ...props
    },
    ref
  ) => {
    const [active, setActive] = useState(false);
    const [suffixWidth, setSuffixWidth] = useState(0);
    const suffixRef = createRef();

    useEffect(() => {
      if (suffixRef && suffixRef.current) setSuffixWidth(suffixRef.current.offsetWidth);
    }, [suffixRef]);

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
            required={required}
            ref={ref}
            {...props}
          >
            {children}
          </PseudoSelect>
          {selectIcon || (
            <OptionsButton
              suffixWidth={suffixWidth || 0}
              rightIcon={rightIcon}
              label={label}
              message={message}
            >
              <MdKeyboardArrowDown />
            </OptionsButton>
          )}
          {suffix && (
            <Suffix ref={suffixRef} success={success} warning={warning} error={error}>
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
);

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
  required: false,
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
  disabled: PropTypes.bool,
  required: PropTypes.bool
};

export default Select;
