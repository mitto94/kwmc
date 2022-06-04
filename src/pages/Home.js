import React, { useEffect, useState } from 'react';
import Header from '../components/header';


import Poster from "../files/poster.jpg";
import { Button } from 'primereact/button';
import TopBanner from '../components/topBanner';
import BottomBanner from '../components/bottomBanner';

const Home = ({history}) => {
  return (
    <div className="mobBackground" style={{width: "100%", height: "100%", display: "flex", flexDirection: "column"}}>
      <Header history={history}></Header>
      {/* <div style={{display: "flex", flexDirection: "column", width: "100%", minHeight: "9vh", justifyContent: "center", background: "white"}}>
        <img style={{width: "20rem", maxWidth: "50vw", cursor: "pointer", marginLeft: "4.6vw"}} src={Logo} alt="KWMC Logo"></img>
      </div> */}
      <TopBanner></TopBanner>
      {/* <img className="WebImage" style={{width: "100%", minHeight: "20vh"}} src={Vertical} alt="Vertical Poster" /> */}
      {/* <img className="MobImage" style={{width: "100%", height: "9vh"}} src={MVertical} alt="Vertical Poster" /> */}

      <div className="mDateContainer notosanskr" style={{display: "flex", width: "100%", background: "#202A45", fontSize: "1.5vw", paddingLeft: "4vw", paddingRight: "6vw", boxShadow: "0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%)", fontWeight: "600"}}>
        <span className="bBorder" style={{display: "flex", width: "100%"}}>
          <div className="dBorder mMenuTextSize fStart lPadding" style={{width: "50%", height: "9vh", display: "flex", alignItems: "center", justifyContent: "center", borderRight: "1px solid rgb(107, 112, 145)"}}>
            <span style={{color: "#ECE843"}}>일시 &nbsp;&nbsp;&nbsp;</span><span style={{color: "white", fontFamily: "Oswald, sans-serif"}}>7월 11<span className="ssSize" style={{position: "relative", bottom: "1.25vh"}}>월</span> - 14<span className="ssSize" style={{position: "relative", bottom: "1.25vh"}}>목</span> 일</span>
          </div>
          <div className="dBorder mMenuTextSize fStart" style={{width: "50%", height: "9vh", display: "flex", alignItems: "center", justifyContent: "center", borderRight: "1px solid rgb(107, 112, 145)"}}>
            <span style={{color: "#ECE843"}}>장소 &nbsp;&nbsp;&nbsp;</span><span style={{color: "white"}}>와싱톤중앙장로교회&nbsp;</span>
          </div>
        </span>
        
        <div className="mMenuTextSize fStart lPadding" style={{width: "100%", height: "9vh", display: "flex", alignItems: "center", justifyContent: "center"}}>
          <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
            <span style={{color: "#ECE843"}}>문의 &nbsp;&nbsp;&nbsp;</span>
            <div className="sSize" style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
              <span style={{color: "white", fontFamily: "Oswald, sans-serif"}}><span className="ssSize">한국 &nbsp;</span >070-4610-1346</span>
              <span style={{color: "white", fontFamily: "Oswald, sans-serif"}}><span className="ssSize">미국 &nbsp;</span>1-714-603-7192</span>
            </div>
          </div>
          <div className="sSize" style={{color: "white", display: "flex", alignItems: "center", marginLeft: "2vw", marginRight: "2vw", fontFamily: "Oswald, sans-serif"}}>&nbsp;&nbsp;kwmc.usa@gmail.com&nbsp;&nbsp;</div>
          <div className="sSize" style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
            <span style={{color: "white", fontFamily: "Oswald, sans-serif"}}>www.kwmc.com</span>
            <span style={{color: "white", fontFamily: "Oswald, sans-serif"}}>kwmc2022.org</span>
          </div>
        </div>

      </div>
      <div style={{width: "100%", display: "flex", justifyContent: "center", background: "#ecf6fc", flexDirection: "column", alignItems: "center"}}>
        <iframe className="videoContainer" src="https://www.youtube.com/embed/sqIKi2SasGM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen;" modestbranding="1" rel="0" >
        </iframe>
        {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/sqIKi2SasGM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
          </iframe> */}
        <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
          <div className="mobColumn" style={{width: "60vw", display: "flex", justifyContent: "center"}}>
            <Button style={{borderRight: "1px solid #787878", position: "relative", zIndex: "1000", boxShadow: "none"}} onClick={() => window.open("https://forms.gle/nVCRY7tRWsxS4HGN7")} label="대회신청하기 (선교사)" className="p-button-raised p-button-text p-button-plain registerButton" />
            <Button label="대회신청하기 (일반참가자/교회/MK/MZ)" style={{width: "30vw", height: "9vh", boxShadow: "none", border: "1px solid lightgray", background: "#E2EBEE", wordBreak: "keep-all"}} className="p-button-raised p-button-text p-button-plain registerButton2" onClick={() => window.open("https://form.jotform.com/221007600697148")} />
            {/* <Button label="교회/MK/MZ 신청" className="p-button-raised p-button-text p-button-plain sSize" style={{height: "3rem", background: "#E2EBEE", color: "#003685", width: "100%", boxShadow: "none", border: "1px solid lightgray", margin: ".5rem"}} onClick={() => window.open("https://form.jotform.com/221007600697148")} /> */}
            {/* <a style={{textDecoration: "none"}} href={Poster} download><Button label="포스터 다운로드" className="p-button-raised p-button-text p-button-plain registerButton" /></a> */}
          </div>
        </div>
      </div>
      
      {/* <div className="mobBanner">
        <img className="WebImage" style={{height: "100%", maxWidth: "100%"}} src={Bottom} alt="Bottom Poster" />
        <img className="MobImage" style={{height: "100%", maxWidth: "100%"}} src={MBottom} alt="Bottom Poster" />
      </div> */}
      <BottomBanner></BottomBanner>
    </div>
  );
}

export default Home;
