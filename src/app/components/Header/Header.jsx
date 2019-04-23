import React from 'react';
import './style_Header.css';
import iliium_logo from './img/Iliium_logo.png';

const Header = () => {
  return (
    <header className="parallax container-fluid col-lg-12">
      <div className="row">
        <div className="firstPart col-lg-12">
          <img src={iliium_logo} class="logo_iliium"/>
        </div>
      </div>
      <div className="row">
        <div className="secPart col-lg-12 col-md-12 col-xs-12">
          <h1 className="titleHeader font-weight-bold">
            What would you do <br/> if you could predict the furture?
          </h1>
          <a href="#contact-form" class="mt-2 btnContact btn btn-outline-dark btn-lg active" role="button" aria-pressed="true"><p className="txtBtn">Contact Us</p></a>
        </div>
      </div>
    </header>
  );
};

export default Header;
