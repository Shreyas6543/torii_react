import React, { useState, useEffect } from 'react'
import right from './../../Assets/images/arrow-right.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook , faInstagram , faTwitter } from '@fortawesome/free-brands-svg-icons'
const fb = <FontAwesomeIcon icon={faFacebook} />;
const insta = <FontAwesomeIcon icon={faInstagram} />;
const twit = <FontAwesomeIcon icon={faTwitter} />;


export default function Footer() {

  return (
  <div className="footer2">

    <div className="footmaindiv">
       <div className="footh1">Let's collaborate</div>
       <div className="footbutton">Estimate your project</div>;
       <div className="footh3">Torii is equal parts creative agency, engineering firm, and consultancy. We integrate creative thinking with technical expertise to design and build human-centered websites, apps platforms, and mobile sites.</div>
    </div>

    <div className="footdiv3"></div>
    <div className="footadr"><b>NYC</b><br/>
            606 W. 57th Street,<br/>
            28th Floor<br/>
            New York, NY, 10019
    </div>
    <div className="footicon"><a href="facebook.com"><i>{fb}</i></a>
                <a href="facebook.com"><i>{insta}</i></a>
                <a href="facebook.com"><i>{twit}</i></a>
    </div>
    <div className="copyrights">©2020 Torii Studio. All rights reserved</div>
  </div>
  );
}

