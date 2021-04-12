import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Input({
  icon: Icon,
  htmlFor,
  type,
  labelText,
  onChange,
}) {
  return (
    <Container>
      <Icon size={14} />
      <input type={type} id={htmlFor} placeholder=" " onChange={onChange} />
      <label htmlFor={htmlFor}>{labelText}</label>
    </Container>
  );
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  htmlFor: PropTypes.string.isRequired,
  icon: PropTypes.oneOfType([PropTypes.func, PropTypes.element]).isRequired,
  onChange: PropTypes.func.isRequired,
};
