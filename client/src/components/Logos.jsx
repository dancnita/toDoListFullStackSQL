import React from 'react';
import Logo from './Logo';
import reactLogo from '../assets/react.svg';
import viteLogo from '../assets/vite.svg';

const Logos = () => {
  return (
    <div className='logos'>
      <Logo logo={reactLogo}></Logo>
      <Logo logo={viteLogo}></Logo>
    </div>
  );
};

export default Logos;
