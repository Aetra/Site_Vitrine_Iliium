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
      <div className="cruxRo row">
        <div className="oui col-lg-12">
          <img src={Crux} alt="logo_crux" className="logo_Crux"/>
          <p className="txtUnderCrux">
          Launched in October 2018, Cruxpool was made to<br/>
          offer the best tools miners can get, Highly<br/>
          efficient and stable, Cruxpool providers real time<br/>
          statistics, professional supports 24/7 and<br/>
          complette tutorials among others features
          </p>
        </div>
      </div>
      <div className="teamRo row">
      <div className="obliqueOne"></div>
      <div className="obliqueTwo"></div>

        <div className="col-lg-5 col-sm-5 col-5">
          <h1 className="titleOurTeam font-weight-bold">Our Team</h1>
          <h2 className="sectitleOurTeam"><span className="fnt"> WE ARE HIRING</span><b> TALENT</b></h2>
          <a href="https://cruxpool.com/#/" className="mt-2 btnStart btn btn-outline-dark btn-lg active" role="button" aria-pressed="true">GET STARTED</a>
        </div>

        <div className="part_diag col-lg-7 col-sm-7 col-7 container-fluid">
          <div className="r1_diag row">
            <div className="col-lg-3 col-sm-3 col-3 circle_size1">
              <img src={Julien} alt="ballJ" className="circleJulien"/>
            </div>
            <div className="col-lg-9 col-sm-9 col-9  txt_size1">
              <p>
                <b>JULIEN GOURLET</b>
              <p className="sec_txt">Founder & CEO</p>
              </p>
            </div>
          </div>

          <div className="row">
          <div className="col-lg-6 col-sm-6 col-6 txt_size2">
            <p className="txtMaxdec">
              <b>MAXIME RIGGI</b>
              <p className="sec_txt">Full stack engineer & CTO</p>
            </p>
          </div>
            <div className="col-lg-6 col-sm-6 col-6 circle_size2">
              <img src={Maxime} alt="ballM" className="circleMaxime"/>
            </div>

          </div>
          <div className="row">
            <div className="col-lg-3 col-sm-3 col-3 circle_size3">
              <img src={Eric} alt="ballE" className="circleEric"/>
            </div>
            <div className="col-lg-9 col-sm-9 col-9 txt_size3">
              <p>
                <b>ERIC GEOFFREY</b>
              <p className="sec_txt">Growth hacker</p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Team;
