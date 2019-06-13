import React from 'react';
import './style_Team.css'
import Crux from './img/iliium_elements-Cruxpool.png';
import Eric from './img/iliium_team-ERIC.png';
import Julien from './img/iliium_team-JULIEN.png';
import Maxime from './img/iliium_team-MAX.png';
import {isMobile} from 'react-device-detect';

const Team = () => {
  if(isMobile){
    return(
      <div className="container-fluid stTeam col-12 d-flex flex-column justify-content-between">
        <div className="teamRo row">
          <div className="mt-5 col-12">
            <h1 className="titleOurTeam text-center font-weight-bold">Our Team</h1>
            <h2 className="sectitleOurTeam text-center"><span className="fnt"> WE ARE HIRING</span><b> TALENT</b></h2>
          </div>
        </div>
          <div className="mx-auto row justify-content-center">
              <a href="https://www.linkedin.com/company/iliium/" className="mt-4 btnStart btn btn-outline-dark btn-lg active" role="button" aria-pressed="true">GET STARTED</a>
          </div>
          <div className="container-fluid">
                <div className="row">
                    <div className="centerVert col-3">
                          <img src={Julien} alt="ballJ" className="circleJulien"/>
                    </div>
                    <div className="centerVert col-9">
                     <p className="pl-2 pt-3">
                      <b className="txtCircle">JULIEN</b>
                      <p className="secTxt">Founder & CEO</p>
                    </p>
                    </div>
                </div>
                <div className="centerVert mt-4 row">
                  <div className=" col-6 offset-2 col-sm-5 offset-sm-4">
                    <div className=" circleSize2">
                      <p className="pt-2 pl-sm-5 txtMax">
                        <b className="txtCircle">MAXIME</b>
                        <p className="secTxt">Full stack engineer & CTO</p>
                      </p>
                    </div>
                  </div>
                    <div className="centerVert col-3">
                        <img src={Maxime} alt="ballM" className="circleMaxime"/>
                    </div>
                </div>
                <div className="mt-4 row">
                  <div className="centerVert col-3">
                    <div className="centerVert circleSize3">
                        <img src={Eric} alt="ballE" className="circleEric"/>
                    </div>
                  </div>
                  <div className="centerVert col-9">
                    <p className="pl-2 mt-3 txtEric">
                      <b className="txtCircle">ERIC</b>
                      <p className="secTxt">Growth hacker</p>
                    </p>
                  </div>
                </div>
              </div>
          </div>
    );
  }else{
  return (
    <div className="stTeam container-fluid col-lg-12 justify-content-stretch">
      <div className="obliqueTeam">
      </div>
      <div className="teamRo row">
        <div className="col-7 pt-5 mt-5">
          <h1 className="titleOurTeam font-weight-bold">Our Team</h1>
          <h2 className=" pl-2 sectitleOurTeam"><span className="fnt"> WE ARE HIRING</span><b> TALENT</b></h2>
          <a href="https://www.linkedin.com/company/iliium/" className="mt-2 btnStart btn btn-outline-dark btn-lg active" role="button" aria-pressed="true">GET STARTED</a>
        </div>
        <div className="col-4 offset-1">
          <div className="row mx-auto">
            <div className="col-12 ">
              <a href="https://www.cruxpool.com"> <img src={Crux} alt="logoCrux" className="logoCrux"/></a>
              <p className="pl-4 txtUnderCrux">
              Launched in October 2018, Cruxpool was made to
              offer the best tools miners can get, Highly
              efficient and stable, Cruxpool providers real time
              statistics, professional supports 24/7 and
              complette tutorials among others features
              </p>
            </div>
          </div>
        </div>
      </div>
          <div className="team container d-flex flex-column justify-content-between">
              <div className="row">
                <div className="centerVert col-lg-2 offset-lg-6">
                  <div className="circleSize1">
                        <img src={Julien} alt="ballJ" className="circleJulien"/>
                  </div>
                </div>
                  <div className="centerVert  pt-3  col-lg-4">
                   <p className="firstTxt">
                    <b>JULIEN</b>
                    <p className="secTxt">Founder & CEO</p>
                  </p>
                  </div>
              </div>
              <div className="row">
                <div className="centerVert col-lg-2 offset-lg-8">
                  <div className="circleSize2">
                    <p className="pt-3-lg firstTxt">
                      <b>MAXIME</b>
                      <p className="secTxt">Full stack engineer & CTO</p>
                    </p>
                  </div>
                </div>
                  <div className="centerVert col-lg-2">
                      <img src={Maxime} alt="ballM" className="circleMaxime"/>
                  </div>
              </div>
              <div className="row">
                <div className="centerVert col-lg-2 offset-lg-6">
                  <div className="circleSize3">
                      <img src={Eric} alt="ballE" className="circleEric"/>
                  </div>
                </div>
                <div className="centerVert pt-4 col-lg-4">
                  <p className=" firstTxt">
                    <b>ERIC</b>
                    <p className="secTxt">Growth hacker</p>
                  </p>
                </div>
              </div>
            </div>
        </div>
  );
}
};
export default Team;
