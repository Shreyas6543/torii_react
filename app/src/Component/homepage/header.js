import React, { useState, useEffect } from 'react'
import{
    Link
} from 'react-router-dom';

function Header() {
const [header, setHeader] = useState("header")

const listenScrollEvent = (event) => {
  if (window.scrollY < 33) {
    return setHeader("header")
  } else if (window.scrollY >= 33 && window.scrollY < 860) {
    return setHeader("header2")
  }else if (window.scrollY >= 860 && window.scrollY < 1700) {
    return setHeader("header3")
  }else if (window.scrollY >= 1700 && window.scrollY < 2540)  {
    return setHeader("header4")
  }else if (window.scrollY >= 2540 && window.scrollY < 3380)  {
    return setHeader("header5")
  }else if (window.scrollY >= 3380 && window.scrollY < 4200)  {
    return setHeader("header6")
  }else if (window.scrollY >= 4200)  {
    return setHeader("header3")
  }
}

useEffect(() => {
  window.addEventListener('scroll', listenScrollEvent);

  return () =>
    window.removeEventListener('scroll', listenScrollEvent);
}, []);

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
