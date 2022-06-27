import React, { useEffect, useState } from 'react';
import Header from '../../components/header';
import SummaryMenu from './SummaryMenu';
import TopBanner from '../../components/topBanner';
import BottomBanner from '../../components/bottomBanner';

const Organization = ({history}) => {
  return (
    <div style={{width: "100%",  display: "flex", flexDirection: "column", background: "#ECF6FC"}}>
        <Header history={history}></Header>
        <TopBanner></TopBanner>
        <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
          <SummaryMenu history={history}/>
        </div>
        <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
          <div className="formContainer" style={{wordBreak: "keep-all"}}>
              <div className="mMargin0" style={{width: "100%", border: "1px solid #E2E2E2", marginTop: "1rem", background: "white", marginBottom: "1rem"}}>
                <div className="mTextSize notosanskr" style={{margin: "2rem", lineHeight: "150%", background: "white", fontWeight: "400"}}>
                <div className="titleFont" style={{width: "100%", display: "flex", justifyContent: "center", color: "#163875", fontWeight: "600", textAlign: "center"}}>{"2022년 KWMC 제9차 한인세계선교대회 공동대회장"}</div>
                 <div style={{display: "flex", justifyContent: "center", width: "100%"}}>
                 
                  <ul className="mTextSize" style={{listStyle: "none", margin: "1vw", fontWeight: "600", marginTop: "5vh"}}>
                    {/* <li style={{margin: ".6vw"}}>상임의장 고석희</li>
                    <li style={{margin: ".6vw"}}>대표의장 이승종</li>
                    <li style={{margin: ".6vw"}}>사무총장 조용중</li>
                    <br></br>
                    <br></br> */}
                    <li style={{margin: ".6vw"}}>김대영(MD휄로십교회)</li>
                    <li style={{margin: ".6vw"}}>김동선(템플한인침례교회)</li>
                    <li style={{margin: ".6vw"}}>김성국(퀸즈장로교회)</li>
                    <li style={{margin: ".6vw"}}>김학진(뉴욕장로교회)</li>
                    <li style={{margin: ".6vw"}}>나광삼(큰무리교회)</li>
                    <li style={{margin: ".6vw"}}>노창수(남가주사랑의교회)</li>
                    <li style={{margin: ".6vw"}}>류응렬(와싱톤중앙장로교회)</li>
                    <li style={{margin: ".6vw"}}>박성일(필라델피아기쁨의교회)</li>
                    <li style={{margin: ".6vw"}}>박신일(그레이스교회)</li>
                    {/* <li style={{margin: ".6vw"}}>박형은(초대교회)</li> */}
                    <li style={{margin: ".6vw"}}>백신종(볼티모어벧엘교회)</li>
                    <li style={{margin: ".6vw"}}>백운영(필라델피아영생장로교회)</li>
                    <li style={{margin: ".6vw"}}>송성자(순복음사랑교회)</li>
                    <li style={{margin: ".6vw"}}>James Song(Midwest University 총장)</li>
                    <li style={{margin: ".6vw"}}>안영섭(내쉬빌주님의교회)</li>
                    <li style={{margin: ".6vw"}}>양성일(십자가의교회)</li>
                    <li style={{margin: ".6vw"}}>양춘길(필그림선교교회)</li>
                    <li style={{margin: ".6vw"}}>윤덕곤(케이티장로교회)</li>
                    <li style={{margin: ".6vw"}}>윤형복(십자가의교회)</li>
                    <li style={{margin: ".6vw"}}>이상진(시애틀복음방송)</li>
                    <li style={{margin: ".6vw"}}>제석호(국제휄로쉽교회)</li>
                    <li style={{margin: ".6vw"}}>지용주(시라큐스한인교회)</li>
                    <li style={{margin: ".6vw"}}>한태일(가든교회)</li>
                    <li style={{margin: ".6vw"}}>홍인석(하늘문교회)</li>
                    <br></br>
                    <br></br>
                    <li style={{margin: ".6vw"}}><span className="mTextSize3">상임의장 </span>고석희</li>
                    <li style={{margin: ".6vw"}}><span className="mTextSize3">대표의장 </span>이승종</li>
                    <li style={{margin: ".6vw"}}><span className="mTextSize3">사무총장 </span>조용중</li>
                  </ul>
                  </div>
              </div>
              </div>
          </div>
        </div>

        <BottomBanner isHome={false}></BottomBanner>

    </div>
  );
}

export default Organization;