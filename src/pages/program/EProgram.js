import React, { useEffect, useState } from 'react';
import Header from '../../components/header';
import ProgramMenu from './ProgramMenu';
import TopBanner from '../../components/topBanner';
import Schedule from "./Image/eSchedule.jpg";
import mSchedule from "./Image/eMSchedule.jpg";
import BottomBanner from '../../components/bottomBanner';

const EProgram = ({history}) => {
  return (
    <div style={{width: "100%", display: "flex", flexDirection: "column", background: "#ECF6FC"}}>
        <Header history={history}></Header>
        <TopBanner></TopBanner>
        <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
          <ProgramMenu history={history}/>
        </div>
        <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
          <div className="WebImage" style={{display: "flex", justifyContent: "center", width: "60%", marginBottom: "5vh", marginTop: "0.8vw"}} >
            <img style={{width:"100%"}} src={Schedule} alt="pictureSchedule"></img>
          </div>
          <div className="MobImage" style={{display: "flex", justifyContent: "center", width: "100%", marginBottom: "5vh"}} >
            <img style={{width:"100%"}} src={mSchedule} alt="pictureSchedule"></img>
          </div>
        </div>
        <BottomBanner isHome={false}></BottomBanner>
    </div>
  );
}

export default EProgram;