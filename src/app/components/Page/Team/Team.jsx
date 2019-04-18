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
          <img src={Crux} class="logo_Crux"/>
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
      <div class="obliqueOne"></div>
      <div class="obliqueTwo"></div>
        <div className="col-lg-5 col-sm-5 col-5">
          <h1 className="titleOurTeam font-weight-bold">Our Team</h1>
          <h2 className="sectitleOurTeam"><span class="fnt"> WE ARE HIRING</span><b> TALENT</b></h2>
          <a href="#" class="mt-2 btnStart btn btn-outline-dark btn-lg active" role="button" aria-pressed="true">GET STARTED</a>
        </div>
        <div className="col-lg-7 col-sm-7 col-7 container-fluid">
          <div className="row">
            <div className="circle_size1">
            <p className="txtDiag1">
              <img src={Julien} class="circleJulien"/>
              JULIEN GOURLET
              Founder & CEO
            </p>
            </div>
          </div>
          <div className="row">
            <div className="circle_size2">
              <p className="txtDiag2">
              <img src={Maxime} class="circleMaxime"/>
              MAXIME RIGGI
              </p>
            </div>
          </div>
          <div className="row">
            <div className="circle_size3">
              <p className="txtDiag3">
              <img src={Eric} class="circleEric"/>
                ERIC GEOFFREY
                Growth hacker
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Team;