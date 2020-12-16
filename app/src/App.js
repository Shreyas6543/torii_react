import React from 'react';
import{
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import './Assets/css/app.css';
import './Assets/css/small-laptop.css';
import './Assets/css/laptop-with-touch.css';
import './Assets/css/tab-big-vertical.css';
import './Assets/css/tab-small-vertical.css';
import './Assets/css/tab-small-horizontal.css';
import Header from './Component/homepage/header.js'
import Main1 from './Component/homepage/main1.js'
import Main2 from './Component/homepage/main2.js'
import Main3 from './Component/homepage/main3.js'
import Main4 from './Component/homepage/main4.js'
import Main5 from './Component/homepage/main5.js'
import Main7 from './Component/homepage/main7.js'
import Footer from './Component/homepage/footer.js'
import Header1 from './Component/aboutpage/header.js'
import About1 from './Component/aboutpage/about1.js'
import About2 from './Component/aboutpage/about2.js'
import About3 from './Component/aboutpage/about3.js'
import About4 from './Component/aboutpage/about4.js'
import Footer1 from './Component/aboutpage/footer.js'

function App() {
  return (
    <Router>
    <div className="App">
        <Route exact path='/' render={props =>
            <div>
                <Header />
                <Main1 />
                <Main2 />
                <Main3 />
                <Main4 />
                <Main5 />
                <Main7 />
                <Footer />
            </div>
        } />
        <Route exact path='/About' render={props =>
            <div>
                <Header1 />
                <About1 />
                <About2 />
                <About3 />
                <About4 />
                <Footer1 />

            </div>
        } />
   </div>
   </Router>
  );
}

export default App;
