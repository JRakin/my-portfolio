import React from 'react';
import './Header.css';
import Banner from '../Banner/Banner';
import Navbar from '../Navbar/Navbar';

const Header = () => {
  return (
    <div id="header" className="banner-container">
      <Navbar></Navbar>
      <Banner></Banner>
    </div>
  );
};

export default Header;
