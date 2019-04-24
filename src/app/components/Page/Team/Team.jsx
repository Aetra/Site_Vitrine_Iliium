import React from 'react';
import './style_Team.css'
import Crux from './img/iliium_elements-Cruxpool.png';
import Eric from './img/iliium_team-ERIC.png';
import Julien from './img/iliium_team-JULIEN.png';
import Maxime from './img/iliium_team-MAX.png';

const Team = () => {
  return (
    <div className="stTeam container-fluid col-lg-12">
      <div className="obliqueTeam">
      </div>
      <div className="teamRo row">
        <div className="col-5 pt-5 mt-5">
          <h1 className="titleOurTeam font-weight-bold">Our Team</h1>
          <h2 className="pt-2 pl-2 sectitleOurTeam"><span className="fnt"> WE ARE HIRING</span><b> TALENT</b></h2>
          <a href="https://cruxpool.com/#/" className="mt-1 ml-1 btnStart btn btn-outline-dark btn-lg active" role="button" aria-pressed="true">GET STARTED</a>
        </div>

        <div className="part_diag col-7 container-fluid">
          <div className="row">
            <div className="col-12 col-sm-6 mx-auto">
              <img src={Crux} alt="logoCrux" className="logoCrux"/>
              <p className="pl-2 txtUnderCrux">
              Launched in October 2018, Cruxpool was made to
              offer the best tools miners can get, Highly
              efficient and stable, Cruxpool providers real time
              statistics, professional supports 24/7 and
              complette tutorials among others features
              </p>
            </div>
          </div>
          <div class="container-fluid">
            <div className="obliqueOne"></div>
            <div className="obliqueTwo"></div>
              <div className="row">
                <div className="col-3 circleSize1">
                  <img src={Julien} alt="ballJ" className="circleJulien"/>
                </div>
                <div className="col-9  txtSize1">
                  <p>
                    <b>JULIEN</b>
                    <p className="secTxt">Founder & CEO</p>
                  </p>
              </div>
            </div>

            <div className="row">
            <div className="col-6 txtSize2">
              <p className="txtMaxdec">
                <b>MAXIME</b>
                <p className="secTxt">Full stack engineer & CTO</p>
              </p>
            </div>
              <div className="col-6 circleSize2">
                <img src={Maxime} alt="ballM" className="circleMaxime"/>
              </div>
            </div>
            <div className="row">
              <div className="col-3 circleSize3">
                <img src={Eric} alt="ballE" className="circleEric"/>
              </div>
              <div className="col-9 txtSize3">
                <p>
                  <b>ERIC</b>
                <p className="secTxt">Growth hacker</p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Team;
