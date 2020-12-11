import React, { Component } from 'react';
import google from './../../Assets/images/google-wordmark-black.svg';
import trello from './../../Assets/images/trello-logo.png';
import wego from './../../Assets/images/wego.png';
import total from './../../Assets/images/totalbrain-wordmark-black.svg';
import taboola from './../../Assets/images/taboola-wordmark-black.svg';
import skill from './../../Assets/images/skillhire.svg';


class Main2 extends Component {
  render() {
  return (
  <div className="main2">
    <div className="main2head">Trusted Partners</div>
    <div className="main2button">See our Work</div>;
    <div className="main2partnerscont">
        <img src={google} className="main2partnercont2" alt="google"/>
        <img src={trello} className="main2partnercont2" alt="trello"/>
        <img src={wego} className="main2partnercont2" alt="wego"/>
        <img src={taboola} className="main2partnercont2" alt="taboola"/>
        <img src={skill} className="main2partnercont2" alt="skillhire"/>
        <img src={total} className="main2partnercont2" alt="totalbrain"/>

    </div>
  </div>
  );
}
}

export default Main2;