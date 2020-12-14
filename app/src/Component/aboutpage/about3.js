import React from 'react'
import icon1 from './../../Assets/images/analysis-icon.svg';
import icon2 from './../../Assets/images/ideate-icon.svg';
import icon3 from './../../Assets/images/prototype-icon.svg';
import icon4 from './../../Assets/images/systems-icon.svg';
import icon5 from './../../Assets/images/implement-icon.svg';

function About3() {


  return (
  <div className="about3">
    <div className="aboutcont">
        <div className="abouthead">Our Approach</div>
        <div className="aboutbody">We are guided by a “fail fast” philosophy based on experimentation and continuous improvement. This approach allows us to better understand users and build scalable solutions that work for both you and your users. Our clients love working with us because we help them:</div>
        <div className="aboutinnercont">
                <div className="aboutinnercont1">
                    <img src={icon1} className="aboutimg" alt="icon"/>
                    <div className="abouttext">
                        <div className="abouttexthead">Analyze</div>
                        <div className="abouttextbody">We identify issues fast and test out the feasibility of your design before moving into an expensive development process.</div>
                    </div>
                </div>
                 <div className="aboutinnercont1">
                    <img src={icon2} className="aboutimg" alt="icon"/>
                    <div className="abouttext">
                        <div className="abouttexthead">Ideate</div>
                        <div className="abouttextbody">We learn what your users want and figure out how to apply it to your product.</div>
                    </div>
                </div>
                 <div className="aboutinnercont1">
                    <img src={icon3} className="aboutimg" alt="icon"/>
                    <div className="abouttext">
                        <div className="abouttexthead">Prototype</div>
                        <div className="abouttextbody">We use information from user feedback to come up with ideas for new features and products.</div>
                    </div>
                </div>
                  <div className="aboutinnercont1">
                    <img src={icon4} className="aboutimg" alt="icon"/>
                    <div className="abouttext">
                        <div className="abouttexthead">Systematize</div>
                        <div className="abouttextbody">We use information from user feedback to come up with ideas for new features and products.</div>
                    </div>
                </div>
                  <div className="aboutinnercont1">
                    <img src={icon5} className="aboutimg" alt="icon"/>
                    <div className="abouttext">
                        <div className="abouttexthead">Implement</div>
                        <div className="abouttextbody">We use information from user feedback to come up with ideas for new features and products.</div>
                    </div>
                </div>
        </div>
    </div>
  </div>
  );
}

export default About3;
