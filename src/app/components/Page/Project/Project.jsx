import React from 'react';
import './style_Project.css';

const Project = () => {
  return (
    <div className="stProject">
    <h1 className="titleProject text-center font-weight-bold  t">What we do</h1>
      <div className="obliqueProject">
      </div>
      <div className="obliqueProjectLine"></div>

      <div className="firstRow row">
        <div className="col-lg-8 col-sm-8 col-8">
          <h3 className="title1Project"> Blockchain </h3>
          <p className="txt1Project">
          Highly disruptive technology that will <b>revolutionized</b> plenty
          of activity area starting from finance to industry through computing
          </p>
        </div>
        <div className="pl-2 col-lg-4 col-sm-4 col-4">
          <div className="firstBall"> </div>
        </div>
      </div>

        <div className="secRow row">
          <div className="col-lg-7 col-sm-7 col-5"></div>
          <div className="col-lg-1 col-sm-1 col-1">
            <div className="secondBall"> </div>
          </div>
          <div className="col-lg-4 col-sm-4 col-5">
            <h3 className="title2Project"> Ethereum </h3>
            <p className="txt2Project">
            Ethereum is the leading blockchain<br/> technology that provides<br/> <b>flexibility</b> and <b>security</b>
            </p>
          </div>
        </div>

        <div className="thirdRow row">
          <div className="col-lg-7 col-sm-7 col-6">
            <h3 className="title3Project"> Mining pool </h3>
            <p className="txt3Project"> We develop mining pool from <b>scratch learning</b> on our knowledge of mining
            </p>
          </div>
        <div className="col-lg-5 col-sm-5 col-6">
            <div className="thirdBall"> </div>
          </div>
        </div>
    </div>
  );
};

export default Project;
