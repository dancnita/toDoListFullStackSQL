import React from 'react';
import Title from './Title';
import InputField from './InputField';
import Button from './Button';
import Logos from './Logos';

const Header = ({ submitHandler, getInput, newInput, clearInput }) => {
  return (
    <div className='header'>
      <Logos></Logos>
      <Title></Title>
      <InputField
        placeholder='add todo'
        getInput={getInput}
        newInput={newInput}
      ></InputField>
      <Button text='Submit' clickHandler={submitHandler}></Button>
    </div>
  );
};

export default Header;
