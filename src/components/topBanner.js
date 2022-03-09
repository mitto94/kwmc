import React, { useEffect, useState } from 'react';
import Vertical1 from "../image/vertical1.png";
import Vertical2 from "../image/vertical2.png";
import Vertical3 from "../image/vertical3.jpg";

import MVertical1 from "../image/mVertical1.png";
import MVertical2 from "../image/mVertical2.png";
import MVertical3 from "../image/mVertical3.jpg";
import MVertical from "../image/mVertical.jpg";
const TopBanner = () => {
  return <div>
      <div className="WebImage" style={{width: "100%", height: "20vh", display: "flex", justifyContent: "center"}}>
        <img style={{width: "100%", minHeight: "20vh", position: "absolute", zIndex: "-1"}} src={Vertical3} alt="Vertical Poster3" />
        <div style={{display: "flex", height: "100%", justifyContent: "space-around", width: "100%"}}>
          <span style={{width: "13%"}}></span>
          <img style={{height: "100%", maxWidth: "60%"}} src={Vertical2} alt="Vertical Poster2" />
          <img style={{height: "50%", marginTop: "5vh"}} src={Vertical1} alt="Vertical Poster1" />
        </div>
      </div>
      <div className="MobImage" style={{width: "100%", height: "9vh", display: "flex", justifyContent: "center"}}>
        <img style={{width: "100%", position: "absolute", zIndex: "-1", height: "9vh"}} src={MVertical3} alt="Mobile Vertical Poster3" />
        <div style={{display: "flex", height: "100%", justifyContent: "space-around", width: "100%"}}>
          <span style={{width: "13%"}}></span>
          <img style={{height: "100%", maxWidth: "60%"}} src={MVertical2} alt="Mobile Vertical Poster2" />
          <img style={{height: "50%", marginTop: "2.2vh"}} src={MVertical1} alt="Mobile Vertical Poster1" />
        </div>
        </div>
    </div>
}

export default TopBanner;