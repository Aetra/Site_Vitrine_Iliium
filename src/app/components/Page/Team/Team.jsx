import React from 'react';
import './style_Team.css'
import Crux from './img/iliium_elements-Cruxpool.png';
import Eric from './img/iliium_team-ERIC.png';
import Julien from './img/iliium_team-JULIEN.png';
import Maxime from './img/iliium_team-MAX.png';
import {isMobileOnly} from 'react-device-detect';

const Team = () => {
  if(isMobileOnly){
    return(
      <div className="stTeam container-fluid col-lg-12 justify-content-stretch">
        <div className="teamRo row">
          <div className="mt-5 col-12">
            <h1 className="font-weight-bold">Our Team</h1>
            <h2 className=" pl-2"><span className="fnt"> WE ARE HIRING</span><b> TALENT</b></h2>
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
          </div>
        </div>


            <div class="team container d-flex flex-column justify-content-between">
                <div className="row">
                  <div className="centerVert">
                    <div className="circleSize1">
                          <img src={Julien} alt="ballJ" className="circleJulien"/>
                    </div>
                  </div>
                    <div className=" col-5">
                     <p>
                      <b>JULIEN</b>
                      <p className="secTxt">Founder & CEO</p>
                    </p>
                    </div>
                </div>

                <div className="row">
                  <div className="centerVert col-2 offset-8">
                    <div className="circleSize2">
                      <p className="txtMax">
                        <b>MAXIME</b>
                        <p className="secTxt">Full stack engineer & CTO</p>
                      </p>
                    </div>
                  </div>
                    <div className="col-2">
                        <img src={Maxime} alt="ballM" className="circleMaxime"/>
                    </div>
                </div>

                <div className="row">
                  <div className="centerVert col-1 offset-6">
                    <div className="circleSize3">
                        <img src={Eric} alt="ballE" className="circleEric"/>
                    </div>
                  </div>
                  <div className="col-5">
                    <p className="txtEric">
                      <b>ERIC</b>
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
        <div className="col-5 pt-5 mt-5">
          <h1 className="titleOurTeam font-weight-bold">Our Team</h1>
          <h2 className=" pl-2 sectitleOurTeam"><span className="fnt"> WE ARE HIRING</span><b> TALENT</b></h2>
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
        </div>
      </div>


          <div class="team container d-flex flex-column justify-content-between">
              <div className="row">
                <div className="centerVert col-lg-1 offset-lg-6">
                  <div className="circleSize1">
                        <img src={Julien} alt="ballJ" className="circleJulien"/>
                  </div>
                </div>
                  <div className="centerVert pl-5 pt-3 col-lg-5">
                   <p>
                    <b>JULIEN</b>
                    <p className="secTxt">Founder & CEO</p>
                  </p>
                  </div>
              </div>

              <div className="row">
                <div className="centerVert col-lg-2 offset-lg-8">
                  <div className="circleSize2">
                    <p className="pt-3 txtMax">
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
                <div className="centerVert col-lg-1 offset-lg-6">
                  <div className="circleSize3">
                      <img src={Eric} alt="ballE" className="circleEric"/>
                  </div>
                </div>
                <div className="centerVert pl-5 pt-4 col-lg-5">
                  <p className="txtEric">
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
