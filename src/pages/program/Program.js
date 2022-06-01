import React, { useEffect, useState } from 'react';
import Header from '../../components/header';
import ProgramMenu from './ProgramMenu';
import TopBanner from '../../components/topBanner';
import Schedule from "./Image/schedule.jpg";
import mSchedule from "./Image/mSchedule.jpg";
import BottomBanner from '../../components/bottomBanner';
import eSchedule from "./Image/eSchedule.jpg";
import emSchedule from "./Image/eMSchedule.jpg";
const Program = ({history}) => {
  const [isEng, setIsEng] = useState(false);

  return (
    <div style={{width: "100%", display: "flex", flexDirection: "column", background: "#ECF6FC"}}>
        <Header history={history}></Header>
        <TopBanner></TopBanner>
        <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
          <ProgramMenu history={history}/>
        </div>
        <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
          <div className="notosanskr formContainer" style={{display: "flex", flexDirection: "column", height: "100%"}}>
            <div className="mHeight5" style={{display: "flex", height: "7vh"}}>
              <div className="sSize" style={{background: "white", width: "66.6%", display: isEng ? "none" : "flex", wordBreak: "keep-all", color: "#163875", height: "100%", justifyContent: "center", alignItems: "center", fontWeight: "600"}}>KWMC 제9차 한인세계선교대회 일정표</div>
              <div className="sSize" style={{background: "white", width: "66.6%", display: isEng ? "flex" : "none", wordBreak: "keep-all", color: "#163875", height: "100%", justifyContent: "center", alignItems: "center", fontWeight: "600"}}>Timetable for the 9th KWMC</div>

              <div className="sSize" style={{width: "33.4%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                <div className={`${isEng ? "clickedMenu3" : "clickedMenu4"}`} style={{width: "100%", cursor: "pointer", height: "100%", display: "flex", justifyContent: "center", alignItems: "center"}} onClick={() => {
                  setIsEng(true)}
                  }>ENG</div>
                <div className={`${isEng ? "clickedMenu4" : "clickedMenu3"}`} style={{width: "100%", cursor: "pointer", height: "100%", display: "flex", justifyContent: "center", alignItems: "center"}} onClick={() => {
                  setIsEng(false)
                  }}>한글</div>
              </div>
            </div>
          </div>
        </div>
        {isEng ? <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
          <div className="WebImage" style={{display: "flex", justifyContent: "center", width: "60%", marginBottom: "5vh", marginTop: "0.8vw"}} >
            <img style={{width:"100%"}} src={eSchedule} alt="pictureSchedule"></img>
          </div>
          <div className="MobImage" style={{display: "flex", justifyContent: "center", width: "100%", marginBottom: "5vh"}} >
            <img style={{width:"100%"}} src={emSchedule} alt="pictureSchedule"></img>
          </div>
        </div>
        : <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
        <div className="WebImage" style={{display: "flex", justifyContent: "center", width: "60%", marginBottom: "5vh", marginTop: "0.8vw"}} >
          <img style={{width:"100%"}} src={Schedule} alt="pictureSchedule"></img>
        </div>
        <div className="MobImage" style={{display: "flex", justifyContent: "center", width: "100%", marginBottom: "5vh"}} >
          <img style={{width:"100%"}} src={mSchedule} alt="pictureSchedule"></img>
        </div>
      </div>
        }
        
        <BottomBanner isHome={false}></BottomBanner>
    </div>
  );
}

export default Program;