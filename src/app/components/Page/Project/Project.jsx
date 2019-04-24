import React from 'react';
import './style_Project.css';

const Project = () => {
  return (
    <div className="stProject">
      <h1 className="titleProject text-center font-weight-bold  t">What we do</h1>
      <div className="obliqueProject"></div>
      <div className="obliqueProjectLine"></div>
      <div className="firstBall"> </div>
      <div className="secondBall"> </div>
      <div className="thirdBall"> </div>

      <div className="row">
        <div className="positionTxt1">
          <h3 className="title1Project"> Blockchain </h3>
          <p className="txt1Project">
            Highly disruptive technology that will<br/> <b>revolutionized</b> plenty
            of activity area<br/> starting from finance<br/> to industry through computing
          </p>
        </div>
      </div>

      <div className="row">
        <div className="positionTxt2">
          <h3 className="title2Project"> Ethereum </h3>
          <p className="txt2Project">
            Ethereum is the leading blockchain<br/> technology that provides<br/> <b>flexibility</b> and <b>security</b>
          </p>
        </div>
      </div>

      <div className="row">
        <div className="positionTxt3">
          <h3 className="title3Project"> Mining pool </h3>
          <p className="txt3Project"> We develop mining pool<br/> from <b>scratch learning</b> on<br/> ourw knowledge of mining
          </p>
        </div>
      </div>
    </div>
  );
};

export default Project;
