import React, { useState, useEffect } from 'react'
import right from './../../Assets/images/arrow-right.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook , faInstagram , faTwitter } from '@fortawesome/free-brands-svg-icons'
const fb = <FontAwesomeIcon icon={faFacebook} />;
const insta = <FontAwesomeIcon icon={faInstagram} />;
const twit = <FontAwesomeIcon icon={faTwitter} />;


export default function Footer() {
const [footh1, setH1] = useState("dummy1")
const [footh2, setH2] = useState("dummy2")
const [footline, setLine] = useState("dummy3")

const listenScrollEvent = (event) => {
  if (window.scrollY > 5800) {
  // eslint-disable-next-line
    return setH1("footh1"),
    setH2("footh2"),
    setLine("footline")
  }
}

useEffect(() => {
  window.addEventListener('scroll', listenScrollEvent);

  return () =>
    window.removeEventListener('scroll', listenScrollEvent);
}, []);

  return (
  <div className="footer">

    <div className="footmaindiv">

       <div className={footh1}>
         <div class="text-top">
            <div>
                <span>Why us?</span>
            </div>
         </div>
       </div>
       <div className="footbutton">See our Work</div>;
       <div className={footh2}>
         <div class="text-top">
            <div>
                <span>At Torii, we create world-class product experiences. Founded by an ex-Google engineer,<br/> our technical expertise, human-centered approach, and focus on experimentation allow<br/> us to better understand users and develop products that people love.</span>
            </div>
         </div>
       </div>
       <div className={footline}></div>

    </div>
    <div className="work">
            <div className="worka">LET'S WORK TOGETHER</div>
            <img src={right} className="workb" alt=""/>
    </div>

    <div className="footdiv2"></div>
    <div className="footadr"><b>NYC</b><br/>
606 W. 57th Street,<br/>
28th Floor<br/>
New York, NY, 10019
</div>
<div className="footicon"><a href="facebook.com"><i>{fb}</i></a>
                <a href="facebook.com"><i>{insta}</i></a>
                <a href="facebook.com"><i>{twit}</i></a></div>

  <div className="copyrights">©2020 Torii Studio. All rights reserved</div>
  </div>
  );
}

