import React from 'react';
import './style_Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Iliium_logo from './img/Iliium_logo.png';

const Footer = () => (
  <footer className="wn-footer">
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 col-lg-4 col-md-4">
          <img src={Iliium_logo} alt="logo_iliium" className="img-fluid home-logo"/>
        </div>
        <div className="blMenu col-lg-4 col-md-4 col-sm-12 mt-lg-4 mt-sm-2">
          <a href="https://cruxpool.com/" class="menu-item font-weight-light align-bottom lg-mt-2">cruxpool.com</a>
          <p><a href="mailto:support@cruxpool.com" class="menu-item font-weight-light align-bottom mt-lg-2">support@cruxpool.com</a></p>
        </div>
        <div className="linkbl col-lg-4 col-md-4 col-sm-12 align-bottom mt-lg-4 mt-sm-2">
          <p className="font-weight-lighter">Join us on LinkedIn</p>
          <div className="iconLnk">
            <a href="https://www.linkedin.com/showcase/cruxpool/" ><FontAwesomeIcon icon={faLinkedin} className="fa" /></a>
          </div>
        </div>
      </div>
      <hr className="hrOne"/>
      <div className="col-lg-12">
        <div className="row copyright flex-row justify-content-center">
          <p className="text-muted">Iliium 2019</p>
          </div>
      </div>
    </div>
  </footer>

);

export default Footer;
