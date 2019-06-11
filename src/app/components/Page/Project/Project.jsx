import React from 'react';
import './style_Project.css';
import {isMobileOnly} from 'react-device-detect';
import Crux from './img_Project/iliium_elements-Cruxpool.png';


const Project = () => {
  if(isMobileOnly){
    return(
      <div className="stProject ">
        <div className="enfant container-fluid">
        <h1 className="titleProject text-center font-weight-bold">What we do</h1>
        <div className="mt-4 row">
          <div className="col-12">
              <h3 className="mt-5 text-center subTitleProject"> Blockchain </h3>
              <p className="text-center txtProject">
                Highly disruptive technology that will <b>revolutionized</b> plenty
                of activity area starting from finance to industry through computing
              </p>
          </div>
        </div>

          <div className="row">
            <div className="col-12">
                <h3 className="mt-5 text-center subTitleProject">Ethereum </h3>
                <p className="text-center txtProject">
                  Ethereum is the leading blockchain technology that provides <b>flexibility</b> and <b>security</b>
                </p>
            </div>
          </div>
            <h3 className="mt-5 text-center subTitleProject "> Mining pool </h3>
          <div className="row">
            <div className="col-12">
                <p className="text-center txtProject">We develop mining pool from <b>scratch learning</b> on ourw knowledge of mining
                </p>
            </div>
          </div>
          <div className="text-center col-12 logo">
              <img src={Crux} alt="logoCrux" className=" logoCrux"/>
          </div>
              <div className=" col-12">
                <p className="text-center txtUnderCrux">
                  Launched in October 2018, Cruxpool was made to
                  offer the best tools miners can get, Highly
                  efficient and stable, Cruxpool providers real time
                  statistics, professional supports 24/7 and
                  complette tutorials among others features
                </p>
            </div>
          </div>
  </div>
);
  }
  return (
    <div className="stProject">
      <h1 className="titleProject text-center font-weight-bold">What we do</h1>
      <div className="obliqueProject"></div>
      <div className="mt-5 pt-5 row">
        <div className="centerVert col-lg-3 offset-lg-5 col-sm-3 offset-sm-5">
          <div className="positionTxt1">
            <h3 className="text-right subTitleProject"> Blockchain </h3>
            <p className=" text-justify text-right txt1Project">
              Highly disruptive technology that will <b>revolutionized</b> plenty
              of activity area starting from finance to industry through computing
            </p>
          </div>
        </div>
        <div className="centerVert col-lg-3 col-sm-3">
          <div className="firstBall"> </div>
        </div>
      </div>

      <div className="mt-3 row">
        <div className="centerVert col-lg-1 offset-lg-8 col-sm-1 offset-sm-8">
          <div className="secondBall"> </div>
        </div>
        <div className="centerVert col-lg-3 col-sm-3">
          <div className="positionTxt2">
            <h3 className="subTitleProject"> Ethereum </h3>
            <p className="txtProject">
              Ethereum is the leading blockchain<br/> technology that provides<br/> <b>flexibility</b> and <b>security</b>
            </p>
          </div>
        </div>

      </div>

      <div className="mt-3 row">
        <div className="centerVert col-lg-2 offset-lg-6 col-sm-2 offset-sm-6">
          <div className="positionTxt3">
            <h3 className="subTitleProject text-right"> Mining pool </h3>
            <p className="txtProject text-right"> We develop mining pool<br/> from <b>scratch learning</b> on<br/> ourw knowledge of mining
            </p>
          </div>
        </div>
        <div className="centerVert col-lg-2 col-sm-2">
          <div className="thirdBall"> </div>
        </div>

      </div>
</div>
  );
};

export default Project;
