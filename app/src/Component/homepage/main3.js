import React, { useState, useEffect } from 'react'
import Lottie from 'react-lottie';
import Data from './../../Assets/lottie/main3.json';



export default function Main3() {

const [mainh1, setH1] = useState("dummy1")
const [mainh1b, setH1b] = useState("dummy2")
const [mainh2, setH2] = useState("dummy3")
const [mainh2b, setH2b] = useState("dummy4")
const [mainline, setLine] = useState("dummy5")
const [maincircle3, setCircle] = useState("dummy6")

const listenScrollEvent = (event) => {
  if (window.scrollY > 1400) {
    return setH1("mainh1"),
    setH1b("mainh1b"),
    setH2("mainh2"),
    setH2b("mainh2b"),
    setLine("mainline"),
    setCircle("maincircle3")
  }
}

useEffect(() => {
  window.addEventListener('scroll', listenScrollEvent);

  return () =>
    window.removeEventListener('scroll', listenScrollEvent);
}, []);
  const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData:Data,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };

  return (
 <div className="main3">
    <div className="maindiv3">
       <div className={mainline}></div>
       <div className={mainh1}>
         <div class="text-top">
            <div>
                <span>Discover what your</span>
            </div>
         </div>
       </div>
       <div className={mainh1b}>
         <div class="text-top">
            <div>
                <span>user is looking for</span>
            </div>
         </div>
       </div>
       <div className={mainh2}>
         <div class="text-top">
            <div>
                <span>We validate and deliver your ideas</span>
            </div>
         </div>
       </div>
       <div className={mainh2b}>
         <div class="text-top">
            <div>
                <span>by focusing on the user first</span>
            </div>
         </div>
       </div>
       <div className="main3button">See our Work</div>;
    </div>
    <div className="maindiv3a">
        <div className={maincircle3}>
        <Lottie
	    options={defaultOptions}
        height={750}
        width={750}
      /></div>
    </div>
  </div>
  );
}

