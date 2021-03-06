import React, { useEffect, useState } from 'react';
import Header from '../../components/header';
import GuideMenu from './GuideMenu';
import TopBanner from '../../components/topBanner';
import BottomBanner from '../../components/bottomBanner';
const Guide = ({history}) => {
  return (
    <div style={{width: "100%", height: "100%", display: "flex", flexDirection: "column"}}>
        <Header history={history}></Header>
        <TopBanner></TopBanner>
        <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
          <GuideMenu history={history}/>
        </div>
        <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
          <div className="formContainer" style={{wordBreak: "keep-all"}}>
              <div className="mMargin0" style={{width: "100%", border: "1px solid #E2E2E2", marginTop: "1rem", background: "white", marginBottom: "1rem"}}>
                <div className="mTextSize notosanskr" style={{margin: "2rem", lineHeight: "150%", background: "white", fontWeight: "400"}}>
                    <span>
                      <span className="mTextSize2" style={{color: "#143674", fontWeight: "800", lineHeight: "200%"}}>* 숙소(퇴실) - 숙소신청은 마감되었습니다</span>
                      <br></br><br></br>
                      -선교사와 MK 숙소는 대회장 인근 네 곳의 호텔로 배정됩니다.<br></br><br></br>
                      {/* a. Hilton Fairfax<br></br>
                      b. Marriott Courtyard<br></br>
                      c. Wyndham Manassas<br></br>
                      d. Springhill by Marriott Centerville/Chantilly<br></br><br></br> */}
                      (1) Hilton Fairfax<br></br>
                      (2) Courtyard by Marriott Fairfax Fair Oaks<br></br>
                      (3) Springhill Suites by Marriott Centreville Chantilly<br></br>
                      (4) Wyndham Garden Manassas<br></br><br></br>
                      - 14일 출국하시는 분들은 오전에 체크아웃을 하시고 대회 장으로 오셔서 짐을 맡기시고 대회 종료 후 공항으로 셔틀 을 이동하시면 됩니다.
                      <br></br><br></br>
                      <span className="mTextSize2" style={{color: "#143674", fontWeight: "800", lineHeight: "200%"}}>* 식사</span>
                      <br></br><br></br>
                      - 식당은 1층 다목적실 입니다.<br></br>
                      - 10일 석식부터 14일 중식까지 다목적실에서 식사가 제공 됩니다.<br></br>
                      - 조식은 배정된 숙소(호텔)에서 제공되며 새벽기도 참여시 예배후 다목적실에서 조식이 제공됩니다.<br></br>
                      -  Courtyard by Marriott Fairfax Fair Oaks 호텔에 머무시는 분들은 호텔에서 식사가 제공되지 않습니다. 아침식사는 오전일정 시작 전 와싱톤중앙장로교회에 오셔서 하실 수 있도록 계획중입니다.
                      
                      </span> 
                </div>
              </div>
          </div>
          <BottomBanner isHome={false}></BottomBanner>
        </div>
    </div>
  );
}

export default Guide;