import React, { useState, useEffect } from 'react'
import Lottie from 'react-lottie';
import Data from './../../Assets/lottie/main5.json';



export default function Main5() {

const [mainh1, setH1] = useState("dummy1")
const [mainh1b, setH1b] = useState("dummy2")
const [mainh2, setH2] = useState("dummy3")
const [mainh2b, setH2b] = useState("dummy4")
const [mainline, setLine] = useState("dummy5")
const [maincircle5, setCircle] = useState("dummy6")
const ele = (document.documentElement.clientHeight * 0.65);
const element=(ele*5);


const listenScrollEvent = (event) => {
  if (window.scrollY > element) {
  // eslint-disable-next-line
    return setH1("mainh1"),
    setH1b("mainh1b"),
    setH2("mainh2"),
    setH2b("mainh2b"),
    setLine("mainline"),
    setCircle("maincircle5")
  }
}

useEffect(() => {
  window.addEventListener('scroll', listenScrollEvent);

  return () =>
    window.removeEventListener('scroll', listenScrollEvent);
});
  const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData:Data,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };

  return (
 <div className="main5">
    <div className="maindiv3">
       <div className={mainline}></div>
       <div className={mainh1}>
         <div class="text-top">
            <div>
                <span>Create seamless</span>
            </div>
         </div>
       </div>
       <div className={mainh1b}>
         <div class="text-top">
            <div>
                <span>experiences</span>
            </div>
         </div>
       </div>
       <div className={mainh2}>
         <div class="text-top">
            <div>
                <span>We create functional, delightful</span>
            </div>
         </div>
       </div>
       <div className={mainh2b}>
         <div class="text-top">
            <div>
                <span>user-friendly experiences</span>
            </div>
         </div>
       </div>

    </div>
    <div className="maindiv3a">
        <div className={maincircle5}>
        <Lottie
	    options={defaultOptions}
      /></div>
    </div>
  </div>
  );
}

