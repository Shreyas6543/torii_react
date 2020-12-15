import React, { useState, useEffect } from 'react'
import{
    Link
} from 'react-router-dom';


function Header1() {
const [header, setHeader] = useState("header")

const listenScrollEvent = (event) => {
  if (window.scrollY < 33) {
    return setHeader("header")
  } else if (window.scrollY > 33 && window.scrollY < 840) {
    return setHeader("header8")
  }else if (window.scrollY > 840 && window.scrollY < 1500) {
    return setHeader("header3")
  }else if (window.scrollY > 1500 && window.scrollY < 2700)  {
    return setHeader("header8")
  }else if (window.scrollY > 2700)  {
    return setHeader("header3")
  }
}

useEffect(() => {
  window.addEventListener('scroll', listenScrollEvent);

  return () =>
    window.removeEventListener('scroll', listenScrollEvent);
}, []);

  return (
  <div className="head2">
    <header className={header}>
      <Link to="/" className="logo"/>
      <ul className="links">
        <li className="link-item2">ABOUT</li>
        <li className="link-iteml">GET IN TOUCH</li>
      </ul>
    </header>
    </div>
  );
}

export default Header1;
