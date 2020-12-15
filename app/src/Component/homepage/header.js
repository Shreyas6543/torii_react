import React, { useState, useEffect } from 'react'
import{
    Link
} from 'react-router-dom';

function Header() {
const [header, setHeader] = useState("header")
const ele = (document.documentElement.clientHeight * 0.65);
const element1=(ele*0.03)
const element2=(ele*1.4)
const element3=(ele*2.62)
const element4=(ele*4)
const element5=(ele*5.4)
const element6=(ele*6.8)

const listenScrollEvent = (event) => {
  if (window.scrollY < element1) {
    return setHeader("header")
  } else if (window.scrollY >= element1 && window.scrollY < element2) {
    return setHeader("header2")
  }else if (window.scrollY >= element2 && window.scrollY < element3) {
    return setHeader("header3")
  }else if (window.scrollY >= element3 && window.scrollY < element4)  {
    return setHeader("header4")
  }else if (window.scrollY >= element4 && window.scrollY < element5)  {
    return setHeader("header5")
  }else if (window.scrollY >= element5 && window.scrollY < element6)  {
    return setHeader("header6")
  }else if (window.scrollY >= element6)  {
    return setHeader("header3")
  }
}

useEffect(() => {
  window.addEventListener('scroll', listenScrollEvent);

  return () =>
    window.removeEventListener('scroll', listenScrollEvent);
});

  return (
  <div className="head">
    <header className={header}>
      <div className="logo">&nbsp;</div>
      <ul className="links">
        <Link to="/About"><li className="link-item">ABOUT</li></Link>
        <li className="link-iteml">GET IN TOUCH</li>
      </ul>
    </header>
    </div>
  );
}

export default Header;
