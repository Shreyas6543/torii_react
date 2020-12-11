import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import ppl3 from './../../Assets/images/ppl3.jpeg';
import ppl1 from './../../Assets/images/ppl1.jpeg';
import ppl4 from './../../Assets/images/ppl4.jpeg';
import ppl2 from './../../Assets/images/ppl2.jpeg';


export default function Main7() {


  return (
  <div className="main7">
    <div className="main7head">Testimonials</div>
    <div className="main7body">
    <div className="slide-container">
      <Slide>
        <div className="each-fade">
          <div className="image-container">
            <img src={ppl3} className="main7img"/>
            <div className="main7text">“Torii was incredible at developing full end-to-end experiences for sophisticated and difficult tools and componentry systems.<br/><br/>Torii’s ability to rapidly prototype, learn from the goods and bads, augment the work and continuously improve, was fantastic and foundational to making a great product."</div>
            <div className="main7text1">Rachel Been / Creative Director / Google, Material Design</div>
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={ppl1} className="main7img"/>
            <div className="main7text">“Torii brings a mix of practical and creative engineering that helped us create a uniquely branded UX.</div>
            <div className="main7text1">Mike Hoefflinger / CPO / Stealth</div>
        </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={ppl4} className="main7img"/>
            <div className="main7text">“Torii excels creating top-notch interactions and experiences that users love."</div>
            <div className="main7text1">Pablo Sanchez / VP / Total Brain</div>
        </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={ppl2} className="main7img"/>
            <div className="main7text">“Working with Torii was the first time I've seen that engineering was ahead of design and product."</div>
            <div className="main7text1">Rami Bitar / CEO / Skillhire</div>
        </div>
        </div>

      </Slide>
    </div>
    </div>
  </div>
  );
}
