import React, { Children, cloneElement, isValidElement } from 'react';
import PropTypes from 'prop-types';
import VisuallyHidden from '../utils/visually-hidden';
import Box from '../box';
import { Container, CheckContainer, ClickableSection, Circle, Label, Message } from './elements';

const RadioGroup = ({
  onChange,
  name,
  color,
  size,
  inline,
  value,
  spacing,
  children,
  required,
  success,
  warning,
  error,
  label,
  message,
  ...props
}) => {
  const clones = Children.map(children, (child, index) => {
    if (!isValidElement(child)) return <></>;

    const isLastRadio = children.length === index + 1;
    const spacingProps = inline ? { mr: spacing } : { mb: spacing };

    return (
      <Box display={inline ? 'inline-block' : 'block'} {...(!isLastRadio && spacingProps)}>
        {cloneElement(child, {
          ...child.props,
          size: child.props.size || size,
          color: child.props.color || color,
          name,
          onChange,
          required,
          success,
          warning,
          error,
          checked: child.props.value === value
        })}
      </Box>
    );
  });

  return (
    <Box display="flex" flexDirection="column" {...props}>
      {label && (
        <Label weight="light">
          {label}
          {required && '*'}
        </Label>
      )}
      <Box>{clones}</Box>
      {message && (
        <Message success={success} warning={warning} error={error}>
          {message}
        </Message>
      )}
    </Box>
  );
};

const Radio = ({
  color,
  size,
  checked,
  onChange,
  disabled,
  children,
  success,
  warning,
  error,
  value,
  ...props
}) => (
  <Container {...props}>
    <ClickableSection disabled={disabled}>
      <VisuallyHidden
        as="input"
        type="radio"
        onChange={onChange}
        checked={checked}
        value={value}
        disabled={disabled}
        {...props}
      />
      <CheckContainer
        success={success}
        warning={warning}
        error={error}
        size={size}
        color={color}
        checked={checked}
        disabled={disabled}
      >
        <Circle visible={checked} />
      </CheckContainer>
      {children && <Box ml={5}>{children}</Box>}
    </ClickableSection>
  </Container>
);

RadioGroup.defaultProps = {
  name: undefined,
  color: 'secondary',
  size: 'normal',
  inline: false,
  value: undefined,
  spacing: 10,
  required: undefined,
  success: false,
  warning: false,
  error: false,
  label: undefined,
  message: undefined
};

RadioGroup.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.oneOf(['small', 'normal', 'large']),
  inline: PropTypes.bool,
  value: PropTypes.string,
  spacing: PropTypes.number,
  children: PropTypes.any.isRequired,
  required: PropTypes.bool,
  success: PropTypes.bool,
  warning: PropTypes.bool,
  error: PropTypes.bool,
  label: PropTypes.string,
  message: PropTypes.string
};

Radio.defaultProps = {
  color: undefined,
  size: undefined,
  disabled: false,
  required: false,
  success: false,
  warning: false,
  error: false,
  children: undefined,
  onChange: undefined,
  checked: undefined
};

Radio.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOf(['small', 'normal', 'large']),
  checked: PropTypes.bool,
  value: PropTypes.string.isRequired,
  success: PropTypes.bool,
  warning: PropTypes.bool,
  error: PropTypes.bool,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  children: PropTypes.any
};

export { RadioGroup, Radio };
