import React, { useState, useEffect } from 'react'
import Lottie from 'react-lottie';
import Data from './../../Assets/lottie/main6.json';



export default function Main6() {
const [maincircle6, setCircle] = useState("dummy6")

const listenScrollEvent = (event) => {
  if (window.scrollY > 3900) {
    setCircle("maincircle6")
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
 <div className="main6">
    <div className="main6div">
      <Lottie
	    options={defaultOptions}
        height={1000}
        width={1600}
      />
    </div>
    <div className="maindiv6">
        <div className={maincircle6}>
            <div className="mainline1"></div>
            <div className="main6h1">We are Material </div>
            <div className="main6h2">Design experts</div>
            <div className="main6h3">We follow best practices for designing </div>
            <div className="main6h4">human-centered products</div>
        </div>
    </div>

 </div>
  );
}

