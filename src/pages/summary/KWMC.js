import React, { useEffect, useState } from 'react';
import Header from '../../components/header';
import SummaryMenu from './SummaryMenu';
import TopBanner from '../../components/topBanner';
import BottomBanner from '../../components/bottomBanner';
const KWMC = ({history}) => {
  const [first, setFirst] = useState(true);
  const [section, setSection] = useState("a");
  return (
    <div style={{width: "100%",  display: "flex", flexDirection: "column", background: "#ECF6FC"}}>
        <Header history={history}></Header>
        <TopBanner></TopBanner>
        <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
          <SummaryMenu history={history}/>
        </div>
        <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
          <div className="mWidth100 mTextSize mdLRBorder" style={{width: "60%", height: "7vh", minHeight: "20px", border: "1px solid #E2E2E2", display: "flex", justifyContent: "space-around", alignItems: "center", cursor: "pointer", fontWeight: 500, fontSize: "1.3vw", color: "rgb(128, 127, 127)", background: "white"}}>
              <div className={first ? "clickedMenu2" : ""} onClick={() => setFirst(true)}
                style={{borderRight: "1px solid #E2E2E2", width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>소개</div>
              <div className={!first ? "clickedMenu2" : ""} onClick={() => setFirst(false)}
                style={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>헌장</div>
          </div>
        </div>
        <div style={{display: "flex", justifyContent: "center"}}>
          {first ?
            <div className="formContainer">
              소개
            </div>
            : 
            <div className="formContainer" style={{height: "100%"}}> 
              <div className="mMargin0" style={{width: "100%", border: "1px solid #E2E2E2", marginTop: "2rem", height: "100%", background: "white"}}>
                <div className="sSize mMargin0 mFlexWrap mJuStart mHeight14 dBorder" style={{display: "flex", border: "1px solid #E2E2E2", margin: "2rem", height: "7vh", justifyContent: "space-around", cursor: "pointer"}}>
                  <div onClick={() => setSection("a")} className={`${section === "a" && "sectionClicked"} mWidth25 mBorderRB`} style={{display: "flex", justifyContent: "center", alignItems: "center", height: "7vh", borderRight: "1px solid #E2E2E2", width: "100%"}}>전문</div>
                  <div onClick={() => setSection("b")} className={`${section === "b" && "sectionClicked"} mWidth25 mBorderRB`} style={{display: "flex", justifyContent: "center", alignItems: "center", height: "7vh", borderRight: "1px solid #E2E2E2", width: "100%", textAlign: "center"}}>제 1장<br></br>총칙</div>
                  <div onClick={() => setSection("c")} className={`${section === "c" && "sectionClicked"} mWidth25 mBorderRB`} style={{display: "flex", justifyContent: "center", alignItems: "center", height: "7vh", borderRight: "1px solid #E2E2E2", width: "100%", textAlign: "center"}}>제 2장<br></br> 조직 및 임무</div>
                  <div onClick={() => setSection("d")} className={`${section === "d" && "sectionClicked"} mWidth25 mBorderRB`} style={{display: "flex", justifyContent: "center", alignItems: "center", height: "7vh", borderRight: "1px solid #E2E2E2", width: "100%", textAlign: "center"}}>제 3장<br></br> 회의 및 선거</div>
                  <div onClick={() => setSection("e")} className={`${section === "e" && "sectionClicked"} mWidth25 mBorderRB`} style={{display: "flex", justifyContent: "center", alignItems: "center", height: "7vh", borderRight: "1px solid #E2E2E2", width: "100%", textAlign: "center"}}>제 4장<br></br> 재정</div>
                  <div onClick={() => setSection("f")} className={`${section === "f" && "sectionClicked"} mWidth25 mBorderRB`} style={{display: "flex", justifyContent: "center", alignItems: "center", height: "7vh", borderRight: "1px solid #E2E2E2", width: "100%", textAlign: "center"}}>제 5장<br></br> 개정 및 세칙</div>
                  <div onClick={() => setSection("g")} className={`${section === "g" && "sectionClicked"} mWidth25 mBorderRB`} style={{display: "flex", justifyContent: "center", alignItems: "center", height: "7vh", width: "100%"}}>부칙</div>
                </div>
                <div className="sSize notosanskr" style={{margin: "2rem", lineHeight: "150%", wordBreak: "keep-all"}}>
                  {section === "a" &&
                    <div>
                      <div className="titleFont" style={{width: "100%", display: "flex", justifyContent: "center", color: "#163875", fontWeight: "600"}}>기독교 한인세계선교협의회 헌장</div>
                      <br></br><br></br>
                      <span>북미주 한인교회는 하나님의 은총과 축복 가운데 성장과 부흥을 거듭하여 오늘에 이르렀음을 감사드린다. 주 예수 그리스도의 지상명령(마 28:19-20)인 세계복음화에 총력을 기울여야 할 시대적 사명을 절감하고 1988년 7월 25일부터 30일 까지 Billy Graham Center(Wheaton, Illinois)제 1차 한인세계선교대회를 개최하여 한인교회 선교사상 새로운 장을 기록하였다. 1,500여명의 참가자들이 '88 한인세계선교대회 선언문을 채택하고 세계복음화를 향한 하나님의 부름심에 순종할 것을 다짐하였다.
            <br></br><br></br>
이에 하나님께서 북미주 한인교회에 주신 세계복음화의 지상명령을 더욱 효율적으로 수행하고자 기독교 한인세계선교협의회를 창립하기에 이르렀으며 이를 중심으로 세계복음화를 향한 북미주 한인교회의 선교의 뜻과 힘을 집결하여 선교운동을 촉진, 협력, 조정함으로써 복음을 땅끝까지 전파하고자 본 헌장을 제정한다.</span>
                    </div>}
                  {section === "b" &&
                    <div>
                      <div className="titleFont" style={{width: "100%", display: "flex", justifyContent: "center", color: "#163875", fontWeight: "600"}}>제1장 총칙</div>
                      <br></br><br></br>
                      <span>
                      <b>제1조 명칭</b> 
                      <br></br>본회의 명칭은 기독교 한인세계선교협의회(The Korean World Mission Council for Christ)라 칭한다.
                      <br></br> <br></br><b>제2조 위치</b><br></br>본회의 위치는 북미주에 둔다.
                      <br></br> <br></br><b>제3조 목적</b><br></br>본회는 북미주 한인교회 선교운동을 촉진, 협력, 조정함으로써 세계복음화에 기여하고, 한인세계선교대회를 매 4년마다 개최하여 선교운동을 확산함을 목적으로 한다.
                      <br></br> <br></br><b>제4조 회원 및 의무</b><br></br>-제1항 회원 : 본회의 회원은 본회의 목적에 찬동하여 후원하는 교회의 교역자와 평신도 및 선교단체의대표 각 1인으로 한다. 신규회원 가입은 의장단에서 심의한다.
                      <br></br>- 제2항 의무 : 본회의 회원은 본회의 헌장과 규칙을 준수하고 회비를 납부한다.
                      </span>
                     </div>}
                  {section === "c" && <div>3</div>}
                  {section === "d" && <div>4</div>}
                  {section === "e" && <div>5</div>}
                  {section === "f" && <div>6</div>}
                  {section === "g" && <div>7</div>}
                </div>
                
              </div>
            </div>
          }
        </div>
        <BottomBanner isHome={false}></BottomBanner>
    </div>
  );
}

export default KWMC;