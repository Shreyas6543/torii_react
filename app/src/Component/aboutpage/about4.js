import React from 'react'
import founder from './../../Assets/images/founder.jpeg';


function About4() {


  return (
  <div className="about4">
    <div className="aboutcont">
        <div className="abouthead">Meet Our Founder</div>
        <img src={founder} className="founder" alt="icon"/>
        <div className="aboutbody">Cristobal started Torii Studio with one goal in mind: help product teams create world-class experiences by putting the user first.<br/><br/>This design philosophy was instrumental when he worked at Hattery Labs, an incubator in the heart of San Francisco. At Hattery, he helped accelerate growth for startups like Invitae as they raised their Series A and Vessel when they went through an exit. Part of Hattery's creative team was eventually acqui-hired by Google, where Cristobal spent over 6 years as a Senior UX Engineer creating over 200 fully-functional prototypes and developed Google's first color tool, which led to the co-invention of a patent.<br/><br/>Throughout his career, he's collaborated with many product managers, designers, and researchers to ensure that great ideas don't get lost in bad design.</div>
        <div className="team">View our Team</div>
    </div>
  </div>
  );
}

export default About4;
