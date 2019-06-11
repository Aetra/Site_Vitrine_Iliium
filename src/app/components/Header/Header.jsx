import React from 'react';
import './style_Header.css';
import iliium_logo from './img/Iliium_logo.png';
import { Link} from 'react-scroll'

const Header = () => {
  return (
    <header className="parallax container-fluid col-lg-12">
      <div className="row">
        <div className="firstPart col-lg-12 mt-5">
          <img src={iliium_logo} alt="imglogo" className="logo_iliium"/>
        </div>
      </div>
      <div className="paddHeader row">
        <div className="col-12 mt-3 pl-5">
          <h1 className="titleHeader font-weight-bold mb-4">
            What would you do if you could predict the furture?
          </h1>
          <Link className="linkAn" to="anchor" spy={true} smooth={true} duration={600}>
            <button className="btnContact btn btn-outline-dark txtBtn" type="submit">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
