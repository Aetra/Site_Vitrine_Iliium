import React from 'react';
import './style_AboutUs.css';
import BP from './img/iliium_elements-BP.png';
import BPI from './img/iliium_elements-BPI.png';
import CA from './img/iliium_elements-CA.png';
import frenchtech from './img/iliium_elements-frenchtech.png';
import supelec from './img/iliium_elements-supelec.png';
import yeast from './img/iliium_elements-yeast.png';
import bitstamp from './img/iliium_elements-bitstamp.png';

const AboutUs = () => {
  return (
    <div className="stAboutUs container-fluid col-lg-12">
      <div className="obliqueAbout">
      </div>
      <div className="row justify-content-stretch fill">
        <div className="pt-5 pl-5 col-7">
          <h1 className="titleAboutUs font-weight-bold">A bit<br/> About Us</h1>
          <div className="textbloc">
            <p className="textAboutUs">
              <b>Founded in July 2017</b>, Iliium begun as a<br/> cryptocurrency mining compagny and evolved to<br/> create a mining pool.
            </p>
            <p className="textAboutUs">
              This leads the compagny to gain wide <b>knowledge</b><br/> and <b>expertise</b> of the blockchain technology and<br/> the Etherum project.
            </p>
            <p className="textAboutUs">
              We provide consulting, training and expertise to<br/> companies that wishes to <b>implement services</b><br/> using <b>decentralized architecture.</b>
            </p>
          </div>
        </div>
        <div className="col-lg-5 col-sm-5 col-5">
          <div className="flex-d flex-column bd-highligh align-items-stretch justify-content-between">
            <div className="flex-shrink bd-highlight align-items-end text-center">
              <img src={bitstamp} alt="log_bitstamp" className="logo_bitstamp"/>
            </div>
            <div className="flex-shrink bd-highlight">
              <img src={frenchtech} alt="log_BPI" className="logo_frenchtech"/>
            </div>
            <div className="flex-shrink-1 bd-highlight">
              <img src={supelec} alt="supelec" className="ml-5 logo_supelec"/>
            </div>
            <div className="flex-grow bd-highlight">
              <img src={yeast} alt="log_yeast" className="logo_yeast"/>
            </div>
            <div className="flex-shrink-1 bd-highlight">
              <img src={BP} alt="BPL" className="mr-2 logo_BP"/>
              <img src={CA} alt="ca" className="mt-5 ml-5 logo_CA"/>
            </div>
            <div className="flex-shrink-1 bd-highlight">
              <img src={BPI} alt="log_BPI" className="logo_BPI"/>
            </div>
          </div>
          </div>
        </div>
    </div>
  );
};
export default AboutUs;
