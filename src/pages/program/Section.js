import React, { useEffect, useState } from 'react';
import Header from '../../components/header';
import ProgramMenu from './ProgramMenu';
import BottomBanner from '../../components/bottomBanner';
import TopBanner from '../../components/topBanner';
import kim from "./Image/김성국.jpg"
import luu from "./Image/류응렬.jpg"
import yang from "./Image/양춘길.jpg"
const Section = ({history}) => {
  const [first, setFirst] = useState(true);
  const [section, setSection] = useState("a");

  return (
    <div style={{width: "100%",  display: "flex", flexDirection: "column", background: "#ECF6FC"}}>
        <Header history={history}></Header>
        <TopBanner></TopBanner>
        <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
          <ProgramMenu history={history}/>
        </div>
        <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
          <div className="mWidth100 mTextSize mdLRBorder" style={{width: "60%", minHeight: "20px", border: "1px solid #E2E2E2", display: "flex", justifyContent: "space-around", alignItems: "center", cursor: "pointer", fontWeight: 500, fontSize: "1.3vw", color: "rgb(128, 127, 127)", flexWrap: "wrap"}}>
              <div className={section === "a" && "clickedMenu2"} onClick={() => setSection("a")}
                style={{borderRight: "1px solid #E2E2E2", borderBottom: "1px solid #E2E2E2", textAlign: "center", height: "7vh", wordBreak: "keep-all", width: "16.6666666%", display: "flex", justifyContent: "center", alignItems: "center", background: "white"}}>영역별 모임ㅁ</div>
              <div className={section === "b" && "clickedMenu2"} onClick={() => setSection("b")}
              style={{borderRight: "1px solid #E2E2E2", borderBottom: "1px solid #E2E2E2", textAlign: "center", height: "7vh", wordBreak: "keep-all", width: "16.6666666%", display: "flex", justifyContent: "center", alignItems: "center", background: "white"}}>영역별 모임ㅁ</div>
              <div className={section === "c" && "clickedMenu2"} onClick={() => setSection("c")}
              style={{borderRight: "1px solid #E2E2E2", borderBottom: "1px solid #E2E2E2", textAlign: "center", height: "7vh", wordBreak: "keep-all", width: "16.6666666%", display: "flex", justifyContent: "center", alignItems: "center", background: "white"}}>영역별 모임ㅁ1</div>
              <div className={section === "d" && "clickedMenu2"} onClick={() => setSection("d")}
              style={{borderRight: "1px solid #E2E2E2", borderBottom: "1px solid #E2E2E2", textAlign: "center", height: "7vh", wordBreak: "keep-all", width: "16.6666666%", display: "flex", justifyContent: "center", alignItems: "center", background: "white"}}>영역별 모임</div>
              <div className={section === "e" && "clickedMenu2"} onClick={() => setSection("e")}
              style={{borderRight: "1px solid #E2E2E2", borderBottom: "1px solid #E2E2E2", textAlign: "center", height: "7vh", wordBreak: "keep-all", width: "16.6666666%", display: "flex", justifyContent: "center", alignItems: "center", background: "white"}}>영역별 모임 1</div>
              <div className={section === "f" && "clickedMenu2"} onClick={() => setSection("f")}
                style={{textAlign: "center", height: "7vh", wordBreak: "keep-all", borderBottom: "1px solid #E2E2E2", width: "16.6666666%", display: "flex", justifyContent: "center", alignItems: "center", background: "white"}}>영역별 모임ㅁa 1a 1</div>
              <div className={section === "g" && "clickedMenu2"} onClick={() => setSection("g")}
              style={{borderRight: "1px solid #E2E2E2",  height: "7vh", wordBreak: "keep-all", width: "16.6666666%", textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center", background: "white"}}>영역별 모임ㅁ</div>
              <div className={section === "h" && "clickedMenu2"} onClick={() => setSection("h")}
              style={{borderRight: "1px solid #E2E2E2",  height: "7vh", wordBreak: "keep-all", width: "16.6666666%", textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center", background: "white"}}>영역별 모임c 1</div>
              <div className={section === "i" && "clickedMenu2"} onClick={() => setSection("i")}
              style={{borderRight: "1px solid #E2E2E2",  height: "7vh", wordBreak: "keep-all", width: "16.6666666%", textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center", background: "white"}}>영역별 모임ㅁ1</div>
              <div className={section === "j" && "clickedMenu2"} onClick={() => setSection("j")}
              style={{borderRight: "1px solid #E2E2E2",  height: "7vh", wordBreak: "keep-all", width: "16.6666666%", textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center", background: "white"}}>영역별 모임ㅁ1</div>
              <div className={section === "k" && "clickedMenu2"} onClick={() => setSection("k")}
              style={{borderRight: "1px solid #E2E2E2",  height: "7vh", wordBreak: "keep-all", width: "16.6666666%", textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center", background: "white"}}>영역별 모임1</div>
              
              <div className={section === "l" && "clickedMenu2"} onClick={() => setSection("l")}
                style={{ height: "7vh", width: "16.6666666%", textAlign: "center", wordBreak: "keep-all", display: "flex", justifyContent: "center", alignItems: "center", background: "white"}}>영역별 모임ㅁ</div>
          </div>
        </div>
        <div className="mMargin0" style={{width: "100%", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", marginTop: ".8vw", fontFamily: "Noto Sans KR, sans-serif"}}>
          {first ? 
          <div className="mWidth100 mFlexContainer mContainer4p" style={{width: "60%", display: "flex", padding: "3.5vw", border: "1px solid rgb(226, 226, 226)", fontSize: "1vw", marginBottom: "3.5vw", background: "white", flexDirection: "column"}}>
            <div className="mBlock" style={{display: "flex"}}>
              <div className="mFlexContainer" style={{width: "35%", display: "flex", flexDirection: "column"}}>
                <div className="mTitle" style={{paddingBottom: "3vw", color: "#143674", fontWeight: "700", fontSize: "1.2vw"}}>저녁집회 1  Evening Worship 1</div>
                <img style={{maxHeight: "25vw", margin: "1vw"}} className="mImage35 mRightImage" src={yang} alt="young"></img>
              </div>
              <div className="mPadding0 mWidth100" style={{width: "65%", paddingLeft: "3.5vw", fontWeight: "500"}}>

                <div className="mTextSize2" style={{fontSize: "1.4vw", fontWeight: 700, marginBottom: "1vh"}}>양춘길 목사</div>
                <div className="mTextSize" style={{display: "block", flexDirection: "column", marginBottom: "2vw", letterSpacing: "-.05vw", lineHeight: "200%"}}>
                  <span>- 일리노이주립대학교(화공학)</span><br></br>
                  <span>- 프린스턴신학대학원, M.Div.</span><br></br>
                  <span>- 칼빈신학대학원(신학석사)</span><br></br>
                  <span>- 뉴욕신학대학원(목회학 박사)</span><br></br>
                  <br></br>
                  <span>- (前) 나성영락교회 부목사</span><br></br>
                  <span>- (前) 오렌지 한인교회 담임목사</span><br></br>
                  <span>- GP 선교회(USA) 이사</span><br></br>
                  <span>- GUM 선교회 대표</span><br></br>
                  <span>- KWMC 공동의장, 제9차 한인세계선교대회 공동대회장</span><br></br>
                  <span>- 뉴저지필그림선교교회 담임</span>
                </div>
                <div className="mTextSize mPT5" style={{lineHeight: "160%", wordBreak: "keep-all"}}>양춘길 목사는 1973년 한국에서 고등학교 1학년을 마치고 도미, 일리노이주립대에서 화공학을 전공하고 아모코 오일(Amoco Oil)의 엔지니어로 근무하다가 목회자의 부르심을 받았다. 나성영락교회 부목사, 오렌지 한인교회 담임목회를 거쳐 1997년 뉴저지에 11가정이 모여 필그림선교교회를 개척했으며, 2017년 12월 동성애 동성혼을 허용한 미국장로교(PCUSA) 교단을 탈퇴하면서 1,200만달러 상당의 교회 건물을 포기했다. 이후 광야 생활 후 교회는 오히려 건강하게 성장해 현재 2000여 명이 출석하는 공동체를 형성했다. 양 목사는 코로나 19 사태를 마주하며 전례 없던 위기상황에서 성도들에게 교회가 이대로는 안 된다는 위기의식을 도전하고, 성도들의 삶이 보내는 선교사에서 그치는 것이 아니라 성도는 하나님의 보내심을 받은 선교사며 삶의 모든 영역이 선교지라는 정체성과 소명감을 가지고 각자의 자리에서 미셔널 처치로 살아가도록 훈련하며 열매 맺도록 헌신하고 있다.</div>
                <div className="mWidth100 wBorderBottom" style={{width: "60%", background: "white", display: "flex", justifyContent: "center", borderRight: "1px solid rgb(226, 226, 226)", borderLeft: "1px solid rgb(226, 226, 226)", marginTop: "4vh", marginBottom: "4vh"}}>
                  <div className="mWidth100" style={{width: "52vw", borderTop: "2px solid rgb(226, 226, 226)"}}></div>
                </div>
              </div>
            </div>

            {/*  */}

            <div className="mBlock" style={{display: "flex"}}>
              <div className="mFlexContainer" style={{width: "35%", display: "flex", flexDirection: "column"}}>
                <div className="mTitle" style={{paddingBottom: "3vw", color: "#143674", fontWeight: "700", fontSize: "1.2vw"}}>저녁집회 2  Evening Worship 2</div>
                <img style={{maxHeight: "25vw", margin: "1vw"}} className="mImage35 mRightImage" src={kim} alt="young"></img>
              </div>
              <div className="mPadding0 mWidth100" style={{width: "65%", paddingLeft: "3.5vw", fontWeight: "500"}}>

                <div className="mTextSize2" style={{fontSize: "1.4vw", fontWeight: 700, marginBottom: "1vh"}}>김성국 목사</div>
                <div className="mTextSize" style={{display: "block", flexDirection: "column", marginBottom: "2vw", letterSpacing: "-.05vw", lineHeight: "200%"}}>

                  <span>- 총신대학교 B.A</span><br></br>
                  <span>- 총신대학교 신학대학원, M.Div.</span><br></br>
                  <span>- Gordon-Conwell Theological Seminary, Th.M.</span><br></br>
                  <span>- Gordon-Conwell Theological Seminary, D.Min.</span><br></br>
                  <br></br>
                  <span>- (前) 창신교회 교육전도사</span><br></br>
                  <span>- (前) 서울남교회 부목사</span><br></br>
                  <span>- (前) 혜천대학교 교수 및 교목실장, 혜천대학교회 담임</span><br></br>
                  <span>- 미국 동부개혁장로회신학교 학장</span><br></br>
                  <span>- 미주크리스천신문사 사장, 단비TV이사장</span><br></br>
                  <span>- 미주한인예수교장로회 부총회장</span><br></br>
                  <span>- KWMC 공동의장, 제9차 한인세계선교대회 공동대회장</span><br></br>
                  <span>- 퀸즈장로교회 담임</span>
                </div>
                <div className="mTextSize mPT5" style={{lineHeight: "160%", wordBreak: "keep-all"}}>김성국 목사는 한국 총신대학교 신학과와 신학대학원을 졸업하고 미국으로 유학을 와 퀸즈장로교회 부목사로 섬기며 고든콘웰대학에서 박사학위를 받았다. 김 목사는 퀸즈장로교회 담임으로 부임 후 “말씀으로 자신과 세상을 변화시키는 교회” 라는 목표를 세우고 예배, 제자훈련, 선교, 다음세대 양육, 문화사역에 집중하고 있다. 특별히 한인 이민교회를 넘어 다민족 교회를 지향하고 있다. 코비드19로 예배가 어려울 때에도 성경적인 예배를 드리기에 흔들리지 않았고, 팬데믹 시대에 모든 선교지와 동시에 다양한 프로그램을 진행하는 “킹덤미션”을 개발하여 사역하고 있다.</div>
                <div className="mWidth100 wBorderBottom" style={{width: "60%", background: "white", display: "flex", justifyContent: "center", borderRight: "1px solid rgb(226, 226, 226)", borderLeft: "1px solid rgb(226, 226, 226)", marginTop: "4vh", marginBottom: "4vh"}}>
                  <div className="mWidth100" style={{width: "52vw", borderTop: "2px solid rgb(226, 226, 226)"}}></div>
                </div>
              </div>
            </div>
            {/*  */}

            <div className="mBlock" style={{display: "flex"}}>
              <div className="mFlexContainer" style={{width: "35%", display: "flex", flexDirection: "column"}}>
                <div className="mTitle" style={{paddingBottom: "3vw", color: "#143674", fontWeight: "700", fontSize: "1.2vw"}}>저녁집회 3  Evening Worship 3</div>
                <img style={{maxHeight: "25vw", margin: "1vw"}} className="mImage35 mRightImage" src={luu} alt="young"></img>
              </div>
              <div className="mPadding0 mWidth100" style={{width: "65%", paddingLeft: "3.5vw", fontWeight: "500"}}>

                <div className="mTextSize2" style={{fontSize: "1.4vw", fontWeight: 700, marginBottom: "1vh"}}>류응렬 목사</div>
                <div className="mTextSize" style={{display: "block", flexDirection: "column", marginBottom: "2vw", letterSpacing: "-.05vw", lineHeight: "200%"}}>
                 
                  <span>- 총신대학교신학대학원, M.Div.</span><br></br>
                  <span>- Gordon-Conwell Theological Seminary, Th.M.</span><br></br>
                  <span>- Southern Baptist Theological Seminary, Ph.D.</span><br></br>
                  <br></br>
                  <span>- 중국선교사 </span>
                  <span>- (前) 총신대학교 신학대학원 교수</span><br></br>
                  <span>- Gordon-Conwell Theological Seminary 객원교수</span><br></br>
                  <span>- KWMC 공동의장,  제9차 한신세계선교대회 공동대회장</span><br></br>
                  <span>- 와싱톤중앙장로교회 담임목사</span><br></br>
                </div>
                <div className="mTextSize mPT5" style={{lineHeight: "160%", wordBreak: "keep-all"}}>류응렬 목사는 중학교 3학년 때 주일학교 교사의 전도로 예수그리스도를 믿기 시작해 대학생 성경읽기 선교회에서 성경공부를 하며 선교사로 살려는 뜻을 품었다. 한국외대(영문학학사/석사) 졸업 후 총신대학원에서 목회학석사, 보스턴 고든콘웰 신학대학원에서 신학석사, 켄터키 루이빌의 남침례신학대학원에서 신학 박사학위를 받았다. 이후 중국 선교사로 섬기다가 학교로 돌아와 설교학 박사학위를 받고, 총신대학원 교수로 재직 중 청빙을 받아 현재 와싱톤중앙장로교회 담임목사로 섬기고 있다. 류목사는 예수님의 관심은 사역이 아니라 사람에 있음을 강조하며 ‘성도를 살리고 훈련해 지역과 세상을 변화시키는 글로컬교회(Glocal Church)’라는 비전으로 말씀, 기도, 전도의 정신으로 한 사람 한 사람을 그리스도의 제자로 세우기 위해 노력하고 교회의 내일인 다음세대를 말씀으로 무장시켜 하나님 앞에 영광 돌리는 제자로 세우기 위해 최선을 다해 섬기고 있다.</div>
                {/* <div className="mWidth100 wBorderBottom" style={{width: "60%", background: "white", display: "flex", justifyContent: "center", borderRight: "1px solid rgb(226, 226, 226)", borderLeft: "1px solid rgb(226, 226, 226)", marginTop: "4vh", marginBottom: "4vh"}}>
                  <div className="mWidth100" style={{width: "52vw", borderTop: "2px solid rgb(226, 226, 226)"}}></div>
                </div> */}
              </div>
            </div>
            
          </div>
          : "Day3"
          }

        </div>
        
        <BottomBanner isHome={false}></BottomBanner>
    </div>
  );
}

export default Section;