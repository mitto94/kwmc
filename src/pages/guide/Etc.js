import React, { useEffect, useState } from 'react';
import Header from '../../components/header';
import GuideMenu from './GuideMenu';
import TopBanner from '../../components/topBanner';
import BottomBanner from '../../components/bottomBanner';
const Etc = ({history}) => {
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
                      <span className="mTextSize2" style={{color: "#143674", fontWeight: "800", lineHeight: "200%"}}>1. 통역</span>
                      <br></br>
                      대회중 통역서비스가 제공될 예정입니다. 통역서비스 받기위해 이어폰이 필요합니다. 통역 서비스가 필요하신 분들은 반드시 개인 이어폰을 지참해주시기 바랍니다.                       <br></br><br></br>
                      <span className="mTextSize2" style={{color: "#143674", fontWeight: "800", lineHeight: "200%"}}>2. 명찰</span>
                      <br></br>
                      등록하시고 받으신 명찰은 대회 기간중 항상 소지해주시기 바랍니다. 명찰을 소지하신 분들만 대회장, 식당 및 영역별 모임 장소에 출입이 가능합니다.
                      <br></br><br></br>
                      {/* <span style={{color: "#143674", fontWeight: "800", lineHeight: "200%"}}>3. Sim Card</span>
                      <br></br>
                      미국 입국시 $50 Prepaid SIM 카드를 구입하시면 미국 번호로 한달동안 통화와 data를 무제한으로 이용하실 수 있습니다. 필요하신 분들은 입국시 구입하시길 바랍니다.
                      <br></br><br></br> */}
                      <span className="mTextSize2" style={{color: "#143674", fontWeight: "800", lineHeight: "200%"}}>3. 날씨</span>
                      <br></br>
                      7월 워싱턴의 기후는 무더운 여름철이라고 생각하시면 됩니다. 수영장을 갈 시간이 없으실 수 있지만 수영복을 준비하셔도 좋습니다.
                    </span> 
                </div>
              </div>
          </div>
          <BottomBanner isHome={false}></BottomBanner>
        </div>
    </div>
  );
}

export default Etc;