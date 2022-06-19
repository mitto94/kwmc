import React, { useEffect, useState } from 'react';
import Header from '../../components/header';
import GuideMenu from './GuideMenu';
import TopBanner from '../../components/topBanner';
import BottomBanner from '../../components/bottomBanner';
import 대회장안내 from "./Image/대회장안내.jpg"
import m대회장안내 from "./Image/m대회장안내.jpg"

const Around = ({history}) => {
  return (
    <div style={{width: "100%", height: "100%", display: "flex", flexDirection: "column"}}>
        <Header history={history}></Header>
        <TopBanner></TopBanner>
        <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
          <GuideMenu history={history}/>
        </div>
        <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
          <div className="formContainer" style={{wordBreak: "keep-all"}}>
              {/* <div className="mMargin0" style={{width: "100%", border: "1px solid #E2E2E2", marginTop: "1rem", background: "white", marginBottom: "1rem"}}> */}
                  
              <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
                <div className="WebImage" style={{display: "flex", justifyContent: "center", width: "100%", marginBottom: "5vh", marginTop: "0.8vw"}} >
                  <img style={{width:"100%"}} src={대회장안내} alt="대회장안내"></img>
                </div>
                <div className="MobImage" style={{display: "flex", justifyContent: "center", width: "100%", marginBottom: "5vh"}} >
                  <img style={{width:"100%"}} src={m대회장안내} alt="m대회장안내"></img>
                </div>
              </div>

              {/* </div> */}
          </div>
          <BottomBanner isHome={false}></BottomBanner>
        </div>
    </div>
  );
}

export default Around;