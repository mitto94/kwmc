import Bottom from "../image/bottom_banner.jpg";
import MBottom from "../image/mBottom_banner.jpg"

const BottomBanner = () => {
    return <div className="mobBanner">
    <img className="WebImage" style={{height: "100%", maxWidth: "100%"}} src={Bottom} alt="Bottom Poster" />
    <img className="MobImage" style={{height: "100%", maxWidth: "100%"}} src={MBottom} alt="Bottom Poster" />
  </div>
  }
  
  export default BottomBanner;