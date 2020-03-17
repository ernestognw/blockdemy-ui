import React from 'react';
import PropTypes from 'prop-types';
import { TextAreaContainer, Label, TextAreaContent } from './elements';

const TextArea = ({
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
}) => {
  const box = React.createRef();

  const handleKeyUp = () => {
    const height = box.current.offsetHeight;
    if (height < box.current.scrollHeight) {
      box.current.style.height = `${box.current.scrollHeight}px`;
    }
  };

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
        ref={box}
        onKeyUp={handleKeyUp}
        onChange={onChange}
        rows={rows}
      />
    </TextAreaContainer>
  );
};

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
