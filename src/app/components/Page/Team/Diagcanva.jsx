import React from 'react';
import './style_Team.css'


import Eric from './img/iliium_team-ERIC.png';
import Julien from './img/iliium_team-JULIEN.png';
import Maxime from './img/iliium_team-MAX.png';

class DiagCanvas extends React.Component {

  componentDidMount()
  {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

    //Text
    ctx.font = '15px Montserrat';
    ctx.fillText('JULIEN GOURLET', 110, 35);
    ctx.fillText('MAXIME RIGGI', 99, 169);
    ctx.fillText('ERIC GEOFFREY', 97, 305);

     //circles
    var c1=ctx.arc(70, 33, 29, 6.9,0, 2 * Math.PI, false);
    var c2=ctx.arc(280, 170, 29, 15.7,0, 2 * Math.PI, false);
    var c3=ctx.arc(40, 300, 29, 100,0, 2 * Math.PI, false);
    ctx.lineWidth = 5;
    ctx.stroke();
  }
}

  render() {
  return(
    <div class="graph">
     <canvas id="canvas" width="550" height="580">
      <div class="img1"></div>
      <div class="img2"></div>
      <div class="img3"></div>
     </canvas>
    </div>

 );
}
}
export default DiagCanvas
