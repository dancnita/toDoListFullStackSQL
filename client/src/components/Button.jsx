import React from 'react';

const Button = ({ text, clickHandler }) => {
  return (
    <>
      <button onClick={clickHandler} className='todo'>
        {text}
      </button>
    </>
  );
};

export default Button;
