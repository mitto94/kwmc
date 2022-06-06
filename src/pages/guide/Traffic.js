import React, { useEffect, useState } from 'react';
import Header from '../../components/header';
import GuideMenu from './GuideMenu';
import TopBanner from '../../components/topBanner';
import BottomBanner from '../../components/bottomBanner';

{/* <GuideMenu history={history}/> */}

const Traffic = ({history}) => {
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
                  <div className="titleFont" style={{width: "100%", display: "flex", justifyContent: "center", color: "#163875", fontWeight: "600"}}>셔틀서비스 안내</div>
                      <span>
                        <br></br>
                        <span style={{color: "#143674", fontWeight: "800", lineHeight: "200%"}}>1. 공항에서 숙소/대회장</span>
                        <br></br>
                        - 워싱턴 덜레스 국제공항(Dulles Airport)으로 입국하시면 숙소(호텔), 대회장까지 셔틀서비스가 제공됩니다.(공항코드 : IAD)
                        <br></br>
                        - 자세한 셔틀운영 시간과 장소는 추후에 공지될 예정입니다.
                        <br></br><br></br>
                        <span style={{color: "#143674", fontWeight: "800", lineHeight: "200%"}}>2. 숙소(호텔) 에서 대회장</span>
                        <br></br>
                        {"- 매일 오전 새벽기도회 전과 아침예배(9시 시작)전, 모든 일정이 끝나는 저녁집회 후에 숙소 <-> 대회장 간에 셔틀이 운영될 예정입니다."}
                        <br></br>
                        ** 새벽기도회를 위한 셔틀은 지정된 2개의 호텔에서만 제공됩니다.
                        <br></br><br></br>
                        <span style={{color: "#143674", fontWeight: "800", lineHeight: "200%"}}>3. 개인차량</span>
                        <br></br>
                        - 선교대회중 개인차량 사용이 가능하며 주차는 와싱톤중앙장로교회 주차장과 호텔 주차장을 이용하시면 됩니다. 
                      </span> 
                  </div>
                  
              </div>
          </div>
          <BottomBanner isHome={false}></BottomBanner>
        </div>
    </div>
  );
}

export default Traffic;