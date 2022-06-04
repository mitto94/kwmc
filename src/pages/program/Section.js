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
  const [section, setSection] = useState("디아스포라");
  const makeProfile = (img, name, title, profile, lecture, last = false) => {
    return <div className="mBlock" style={{display: "flex"}}>
    <div className="mFlexContainer" style={{width: "20%", display: "flex", flexDirection: "column"}}>
      <div className="mTextSize" style={{paddingBottom: ".5vw", fontWeight: "700", fontSize: "1.2vw"}}>{name}</div>
      <img style={{maxHeight: "23vw", margin: "1vw"}} className="mImage25 mRightImage" src={img} alt="young"></img>
    </div>
    <div className="mPadding0 mWidth100" style={{width: "80%", paddingLeft: "1.5vw", fontWeight: "500"}}>

      <div className="mTextSize" style={{fontSize: "1.4vw", fontWeight: 700, marginBottom: "1vh", color: "#143674"}}>{title}</div>
      <div className="mTextSize3" style={{display: "block", flexDirection: "column", marginBottom: "2vw", letterSpacing: "-.05vw", lineHeight: "150%"}}>
      <div><b>소개</b></div>
      <span>{profile}</span>
      </div>
      <div className="mTextSize3 mPT3" style={{lineHeight: "160%", wordBreak: "keep-all"}}>
        <div><b>강의 요점</b></div>

        {lecture}
      </div>
      <div className="mWidth100 wBorderBottom2" style={{width: "60%", background: "white", display: "flex", justifyContent: "center", borderRight: "1px solid rgb(226, 226, 226)", borderLeft: "1px solid rgb(226, 226, 226)", marginTop: "2vh", marginBottom: "2vh"}}>
        <div className="mWidth100" style={{width: "52vw", borderTop: "2px solid rgb(226, 226, 226)"}}></div>
      </div>
    </div>
  </div>
  }

  return (
    <div style={{width: "100%",  display: "flex", flexDirection: "column", background: "#ECF6FC"}}>
        <Header history={history}></Header>
        <TopBanner></TopBanner>
        <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
          <ProgramMenu history={history}/>
        </div>
        <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
        <div className="mWidth100 mTextSize3 mdLRBorder" style={{width: "60%", minHeight: "20px", border: "1px solid #E2E2E2", display: "flex", justifyContent: "space-around", alignItems: "center", cursor: "pointer", fontWeight: 500, fontSize: "1.3vw", color: "rgb(128, 127, 127)", flexWrap: "wrap"}}>
          <div className={section === "디아스포라" && "clickedMenu2"} onClick={() => setSection("디아스포라")}
            style={{borderRight: "1px solid #E2E2E2", borderBottom: "1px solid #E2E2E2", textAlign: "center", height: "7vh", wordBreak: "keep-all", width: "16.6666666%", display: "flex", justifyContent: "center", alignItems: "center", background: "white"}}>디아스포라</div>
          <div className={section === "도시선교" && "clickedMenu2"} onClick={() => setSection("도시선교")}
          style={{borderRight: "1px solid #E2E2E2", borderBottom: "1px solid #E2E2E2", textAlign: "center", height: "7vh", wordBreak: "keep-all", width: "16.6666666%", display: "flex", justifyContent: "center", alignItems: "center", background: "white"}}>도시선교</div>
          <div className={section === "문화예술 & 미디어" && "clickedMenu2"} onClick={() => setSection("문화예술 & 미디어")}
          style={{borderRight: "1px solid #E2E2E2", borderBottom: "1px solid #E2E2E2", textAlign: "center", height: "7vh", wordBreak: "keep-all", width: "16.6666666%", display: "flex", justifyContent: "center", alignItems: "center", background: "white"}}>문화예술 & 미디어</div>
          <div className={section === "교육" && "clickedMenu2"} onClick={() => setSection("교육")}
          style={{borderRight: "1px solid #E2E2E2", borderBottom: "1px solid #E2E2E2", textAlign: "center", height: "7vh", wordBreak: "keep-all", width: "16.6666666%", display: "flex", justifyContent: "center", alignItems: "center", background: "white"}}>교육</div>
          <div className={section === "비정부기구" && "clickedMenu2"} onClick={() => setSection("비정부기구")}
            style={{textAlign: "center", height: "7vh", wordBreak: "keep-all", borderBottom: "1px solid #E2E2E2", width: "16.6666666%", display: "flex", justifyContent: "center", alignItems: "center", background: "white"}}>비정부 기구</div>
          <div className={section === "BAM" && "clickedMenu2"} onClick={() => setSection("BAM")}
          style={{borderRight: "1px solid #E2E2E2",  height: "7vh", wordBreak: "keep-all", width: "16.6666666%", textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center", background: "white"}}>BAM</div>
          <div className={section === "선교동원" && "clickedMenu2"} onClick={() => setSection("선교동원")}
          style={{borderRight: "1px solid #E2E2E2",  height: "7vh", wordBreak: "keep-all", width: "16.6666666%", textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center", background: "white"}}>선교동원</div>
          <div className={section === "선교적교회" && "clickedMenu2"} onClick={() => setSection("선교적교회")}
          style={{borderRight: "1px solid #E2E2E2",  height: "7vh", wordBreak: "keep-all", width: "16.6666666%", textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center", background: "white"}}>선교적 교회</div>
          <div className={section === "전방개척선교" && "clickedMenu2"} onClick={() => setSection("전방개척선교")}
          style={{borderRight: "1px solid #E2E2E2",  height: "7vh", wordBreak: "keep-all", width: "16.6666666%", textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center", background: "white"}}>전방개척 선교</div>
          <div className={section === "선교적 공동체성경읽기" && "clickedMenu2"} onClick={() => setSection("선교적 공동체성경읽기")}
          style={{borderRight: "1px solid #E2E2E2",  height: "7vh", wordBreak: "keep-all", width: "16.6666666%", textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center", background: "white"}}>선교적 공동체 성경읽기</div>
          <div className={section === "선교협력" && "clickedMenu2"} onClick={() => setSection("선교협력")}
          style={{borderRight: "1px solid #E2E2E2", borderBottom: "1px solid #E2E2E2", textAlign: "center", height: "7vh", wordBreak: "keep-all", width: "16.6666666%", display: "flex", justifyContent: "center", alignItems: "center", background: "white"}}>선교협력</div>
          
          <div className={section === "MK(선교사자녀)" && "clickedMenu2"} onClick={() => setSection("MK(선교사자녀)")} style={{ height: "7vh", width: "16.6666666%", textAlign: "center", wordBreak: "keep-all", display: "flex", justifyContent: "center", alignItems: "center", background: "white"}}>MK (선교사자녀)</div>
        </div>
        </div>
        <div className="mMargin0" style={{width: "100%", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", marginTop: ".8vw", fontFamily: "Noto Sans KR, sans-serif"}}>
          {first ? 
          <div className="mWidth100 mFlexContainer mContainer4p" style={{width: "60%", display: "flex", padding: "2.5vw", border: "1px solid rgb(226, 226, 226)", fontSize: "1vw", marginBottom: "3.5vw", background: "white", flexDirection: "column"}}>
            
            {makeProfile(yang, "이 다니엘 사무총장", <span>Session 1 BAM & Core - {<span className="MobImage"><br></br></span>} “BAM: 비즈니스 그 자체로서의 선교"</span>, "IBA 사무총장과 KWMA BAM 분과 코디네이터로 사역하고 있다. 연간 120여 건의 사회적 경제 기업과 NPO들의 창업-기업 운영에 관한 상담과 컨설팅을 진행해 왔다. 한동대에서 경영경제학, 에스라성경대학원에서 성경학, 횃불트리니티 신학대학원에서 목회학을 전공했다. 공저로는 <BAM:비즈니스 세계에서 복음을 살다> (2021), <지금 여기, 선교의 시대> (2020), <우리가 교회다> (2016, <교회를 위한 사회적 기업 가이드북> (2015) 등이 있다.",
            "선교를 제한하는 국가가 늘어나고 있다. 코로나-19 이후에도 이 추세는 지속될 것이다. Business As Mission (BAM)이 창의적 접근 지역을 섬기는 주요한 선교방법으로 주목받고 있다. 강의에서는 BAM의 정의, 핵심가치, 나라별 현장 사례, 그리고 이미 다가온 미래 이슈 등을 소개한다. 특히 참석자들은 복음을 직접 전할 수 없는 나라-민족에게 BAM 사역자들이 “일터 환경”조성, 현지인 고용, “복음을 살아냄“을 통해 “선한 영향력”을 끼쳐 온 다양한 이야기를 접할 것이다.")}
              {/* <div className="mWidth100 wBorderBottom" style={{width: "60%", background: "white", display: "flex", justifyContent: "center", borderRight: "1px solid rgb(226, 226, 226)", borderLeft: "1px solid rgb(226, 226, 226)", marginTop: "4vh", marginBottom: "4vh"}}>
                <div className="mWidth100" style={{width: "52vw", borderTop: "2px solid rgb(226, 226, 226)"}}></div>
              </div> */}
            {/*  */}

            <div className="mBlock" style={{display: "flex"}}>
              <div className="mFlexContainer" style={{width: "35%", display: "flex", flexDirection: "column"}}>
                <div className="mTitle" style={{paddingBottom: "3vw", color: "#143674", fontWeight: "700", fontSize: "1.2vw"}}>저녁집회 2  Evening Worship 2</div>
                <img style={{maxHeight: "25vw", margin: "1vw"}} className="mImage35 mRightImage" src={kim} alt="young"></img>
              </div>
              <div className="mPadding0 mWidth100" style={{width: "65%", paddingLeft: "3.5vw", fontWeight: "500"}}>

                <div className="mTextSize2" style={{fontSize: "1.4vw", fontWeight: 700, marginBottom: "1vh"}}>김성국 목사</div>
                <div className="mTextSize3" style={{display: "block", flexDirection: "column", marginBottom: "2vw", letterSpacing: "-.05vw", lineHeight: "200%"}}>

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
                <div className="mTextSize3 mPT5" style={{lineHeight: "160%", wordBreak: "keep-all"}}>김성국 목사는 한국 총신대학교 신학과와 신학대학원을 졸업하고 미국으로 유학을 와 퀸즈장로교회 부목사로 섬기며 고든콘웰대학에서 박사학위를 받았다. 김 목사는 퀸즈장로교회 담임으로 부임 후 “말씀으로 자신과 세상을 변화시키는 교회” 라는 목표를 세우고 예배, 제자훈련, 선교, 다음세대 양육, 문화사역에 집중하고 있다. 특별히 한인 이민교회를 넘어 다민족 교회를 지향하고 있다. 코비드19로 예배가 어려울 때에도 성경적인 예배를 드리기에 흔들리지 않았고, 팬데믹 시대에 모든 선교지와 동시에 다양한 프로그램을 진행하는 “킹덤미션”을 개발하여 사역하고 있다.</div>
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
                <div className="mTextSize3" style={{display: "block", flexDirection: "column", marginBottom: "2vw", letterSpacing: "-.05vw", lineHeight: "200%"}}>
                 
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
                <div className="mTextSize3 mPT5" style={{lineHeight: "160%", wordBreak: "keep-all"}}>류응렬 목사는 중학교 3학년 때 주일학교 교사의 전도로 예수그리스도를 믿기 시작해 대학생 성경읽기 선교회에서 성경공부를 하며 선교사로 살려는 뜻을 품었다. 한국외대(영문학학사/석사) 졸업 후 총신대학원에서 목회학석사, 보스턴 고든콘웰 신학대학원에서 신학석사, 켄터키 루이빌의 남침례신학대학원에서 신학 박사학위를 받았다. 이후 중국 선교사로 섬기다가 학교로 돌아와 설교학 박사학위를 받고, 총신대학원 교수로 재직 중 청빙을 받아 현재 와싱톤중앙장로교회 담임목사로 섬기고 있다. 류목사는 예수님의 관심은 사역이 아니라 사람에 있음을 강조하며 ‘성도를 살리고 훈련해 지역과 세상을 변화시키는 글로컬교회(Glocal Church)’라는 비전으로 말씀, 기도, 전도의 정신으로 한 사람 한 사람을 그리스도의 제자로 세우기 위해 노력하고 교회의 내일인 다음세대를 말씀으로 무장시켜 하나님 앞에 영광 돌리는 제자로 세우기 위해 최선을 다해 섬기고 있다.</div>
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