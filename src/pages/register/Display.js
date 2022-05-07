import React, { useEffect, useState } from 'react';
import Header from '../../components/header';
import RegisterMenu from './RegisterMenu';
import TopBanner from '../../components/topBanner';
import { Button } from 'primereact/button';
import BottomBanner from '../../components/bottomBanner';
import DisplayRegister from "../../files/display.doc";

const Display = ({history}) => {
  return (
    // <div className="mobBackground" style={{width: "100%", height: "100%", display: "flex", flexDirection: "column"}}>

    <div style={{width: "100%", height: "100%", display: "flex", flexDirection: "column"}}>
        <Header history={history}></Header>
        <TopBanner></TopBanner>
        <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
          <RegisterMenu history={history}/>
        </div>
        <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
          <div className="formContainer" style={{wordBreak: "keep-all"}}>
              <div className="mMargin0" style={{width: "100%", border: "1px solid #E2E2E2", marginTop: "1rem", background: "white", marginBottom: "1rem"}}>
                <div className="mTextSize notosanskr" style={{margin: "2rem", lineHeight: "150%", background: "white", fontWeight: "400"}}>
                  <div className="titleFont" style={{width: "100%", display: "flex", justifyContent: "center", color: "#163875", fontWeight: "600"}}>전시부스 신청</div>
                      <span>
                      <br></br><br></br>
                      <span style={{color: "#143674", fontWeight: "800", lineHeight: "200%"}}>1. 등록안내</span>
                      <br></br>
                      대회기간 동안 본당외부 로비에 전시부스를 운영합니다. 사용가능한 부스가 제한되어 있어 등록하신 선착순으로 제공됩니다. 아래의 신청서를 다운로드 받으셔서 <span style={{color: "#143674", fontWeight: "700"}}><a style={{textDecoration: "none", color: "#143674", fontWeight: "700"}} href="mailto:kwmc.usa@gmail.com">kwmc.usa@gmail.com</a></span> 으로 신청서를 보내주시 바랍니다.                <br></br><br></br>
                      <span style={{color: "#143674", fontWeight: "800", lineHeight: "200%"}}>2. 전시일정</span>
                      <br></br>
                      7월 11일 오전 10:00시(부스 장식) ~ 7월 14일 오후 14:00(부스철거)
      책상과 의자가 제공되며 단체명이 들어간 현수막(책상에 붙일 수 있는)이 제공 될 예정입니다.(현수막은 추후 다른 물품으로 대체될 수 있습니다)                <br></br><br></br>
                      <span style={{color: "#143674", fontWeight: "800", lineHeight: "200%"}}>3. 등록 및 명찰</span>
                      <br></br>
                      전시부스 등록과 별개로 부스운영자는 선교사/일반 등록 중 해당하는 등록을 해주셔야 합니다. 등록이 완료된 후 당일 부스 설치 전 등록처에서 부스등록확인을 받으신 후 명찰을 받으셔서 지정된 부스에 장식해주시면 됩니다.                  </span>
                  </div>
                  <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
                      <div className="mobColumn" style={{width: "100%", display: "flex", justifyContent: "center"}}>
                          <a download="제9차 KWMC 전시부스 신청" style={{textDecoration: "none", display: "flex", justifyContent: "center", width: "100%", padding: "2rem", paddingTop: "0"}} href={DisplayRegister}><Button label="전시부스 신청" className="p-button-raised p-button-text p-button-plain sSize" style={{height: "3rem", background: "#003685", color: "white", width: "100%"}}/></a>
                      </div>
                  </div>
              </div>
          </div>
          <BottomBanner isHome={false}></BottomBanner>
        </div>
    </div>
  );
}

export default Display;