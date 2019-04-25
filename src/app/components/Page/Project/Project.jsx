import React from 'react';
import './style_Project.css';

const Project = () => {
  return (
    <div className="stProject">
      <h1 className="titleProject text-center font-weight-bold">What we do</h1>
      <div className="obliqueProject"></div>

      <div className="mt-5 row">
        <div className="centerVert col-lg-3 offset-lg-6">
          <div className="positionTxt1">
            <h3 className="text-right title1Project"> Blockchain </h3>
            <p className=" text-justify text-right txt1Project">
              Highly disruptive technology that will <b>revolutionized</b> plenty
              of activity area starting from finance to industry through computing
            </p>
          </div>
        </div>
        <div className="centerVert col-lg-3">
          <div className="firstBall"> </div>
        </div>
      </div>

      <div className="mt-3 row">
        <div className="centerVert col-lg-1 offset-lg-8">
          <div className="secondBall"> </div>
        </div>
        <div className="centerVert col-lg-3">
          <div className="positionTxt2">
            <h3 className="title2Project"> Ethereum </h3>
            <p className="txt2Project">
              Ethereum is the leading blockchain<br/> technology that provides<br/> <b>flexibility</b> and <b>security</b>
            </p>
          </div>
        </div>

      </div>

      <div className="mt-3 row">
        <div className="centerVert col-lg-2 offset-lg-5">
          <div className="positionTxt3">
            <h3 className="title3Project"> Mining pool </h3>
            <p className="txt3Project"> We develop mining pool<br/> from <b>scratch learning</b> on<br/> ourw knowledge of mining
            </p>
          </div>
        </div>
        <div className="centerVert col-lg-5">
          <div className="thirdBall"> </div>
        </div>

      </div>
</div>
  );
};

export default Project;
