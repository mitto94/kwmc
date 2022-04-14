import React, { useEffect, useState, useRef, useLayoutEffect } from 'react';
import Header from '../../components/header';
import TopBanner from '../../components/topBanner';
import SummaryMenu from './SummaryMenu';
import BottomBanner from '../../components/bottomBanner';
import ContentWeb from "./Image/contentWeb.jpg";
import ContentMob from "./Image/contentMob.jpg";

const Character = ({history}) => {
  return (
    <div style={{width: "100%",  display: "flex", flexDirection: "column", background: "#ECF6FC"}}>
        <Header history={history}></Header>
        <TopBanner></TopBanner>
        <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
          <SummaryMenu history={history}/>
        </div>
        <div className="mMargin0" style={{width: "100%", display: "flex", justifyContent: "center", marginTop: "2rem", marginBottom: "1rem"}}>
          <div className="formContainer" style={{height: "100%"}}>
            <img style={{width: "100%"}} className="MobImage" src={ContentMob} alt="모바일"></img>
            <img style={{width: "100%"}} className="WebImage" src={ContentWeb} alt="웹"></img>
          </div>
        </div>
        
        <BottomBanner isHome={false}></BottomBanner>
    </div>
  );
}

export default Character;