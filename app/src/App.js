import React from 'react';
import './Assets/css/app.css';
import Header from './Component/homepage/header.js'
import Main1 from './Component/homepage/main1.js'
import Main2 from './Component/homepage/main2.js'
import Main3 from './Component/homepage/main3.js'
import Main4 from './Component/homepage/main4.js'
import Main5 from './Component/homepage/main5.js'
import Main6 from './Component/homepage/main6.js'
import Main7 from './Component/homepage/main7.js'
import Footer from './Component/homepage/footer.js'

function App() {
  return (
    <div className="App">
        <Header />
        <Main1 />
        <Main2 />
        <Main3 />
        <Main4 />
        <Main5 />
        <Main6 />
        <Main7 />
        <Footer />

    </div>
  );
}

export default App;
