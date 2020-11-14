import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { TextAreaContainer, Label, TextAreaContent } from './elements';

const TextArea = forwardRef(
  (
    {
      id,
      onChange,
      autofocus,
      value,
      required,
      placeholder,
      label,
      name,
      rows,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <TextAreaContainer className={className} {...props}>
        {label && (
          <Label weight="light" htmlFor={id}>
            {label}
            {required && '*'}
          </Label>
        )}
        <TextAreaContent
          autoFocus={autofocus}
          label={label}
          value={value}
          name={name}
          required={required}
          placeholder={placeholder}
          id={id}
          ref={ref}
          onChange={onChange}
          rows={rows}
        />
      </TextAreaContainer>
    );
  }
);

TextArea.defaultProps = {
  onChange: () => {},
  autofocus: null,
  placeholder: null,
  label: null,
  required: null,
  id: null,
  name: '',
  rows: '3',
  className: '',
  value: undefined
};

TextArea.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  autofocus: PropTypes.bool,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  required: PropTypes.bool,
  rows: PropTypes.string,
  className: PropTypes.string
};

export default TextArea;
