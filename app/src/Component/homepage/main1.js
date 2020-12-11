
import Lottie from 'react-lottie';
import Data from './../../Assets/lottie/main1.json';

export default function Main1() {
  const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData:Data,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };
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
        <div className="maincircle"><Lottie
	    options={defaultOptions}
        height={700}
        width={1400}
      /></div>
    </div>
  </div>
  );
}

