import React from 'react';

const InputField = ({ getInput, placeholder, newInput }) => {
  return (
    <input
      type='text'
      placeholder={placeholder}
      onChange={getInput}
      value={newInput}
    ></input>
  );
};

export default InputField;
