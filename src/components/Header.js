import React from 'react';

const Header = (props) => {
  return (
    <div id="Header">
      <img src="/assets/icon.png" alt="logo" />
      <h1>Chatastrophe v2</h1>
      {props.children}
    </div>
  );
};

export default Header;