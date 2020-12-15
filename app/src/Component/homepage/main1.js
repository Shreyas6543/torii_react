import logo from './../../Assets/images/logo.gif';


export default function Main1() {

  return (
  <div className="main1">
    <div className="maindiv">
       <div className="mainline"></div>
       <div className="mainh1">
         <div class="text-top">
            <div>
                <span>Build the product</span>
            </div>
         </div>
       </div>
       <div className="mainh1b">
         <div class="text-top">
            <div>
                <span>of your dreams</span>
            </div>
         </div>
       </div>
       <div className="mainh2">
         <div class="text-top">
            <div>
                <span>We build high-quality digital</span>
            </div>
         </div>
       </div>
       <div className="mainh2b">
         <div class="text-top">
            <div>
                <span>products and experiences</span>
            </div>
         </div>
       </div>
    </div>
    <div className="maindiv1">
        <div className="maincircle">
            <img src={logo} alt="ppl1"/>
        </div>
    </div>
  </div>
  );
}

