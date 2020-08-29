import React from 'react';

import './Input.css';

const Input = (props) => {
  return (
    <input
      className="form-text-input"
      type={props.type ? props.type : 'text'}
      placeholder={props.placeholder ? props.placeholder : null}
      value={props.value}
      onChange={props.onChange}
    />
  );
};

export default Input;
