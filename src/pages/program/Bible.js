import React, { useEffect, useState } from 'react';
import Header from '../../components/header';
import ProgramMenu from './ProgramMenu';
import TopBanner from '../../components/topBanner';
import BottomBanner from '../../components/bottomBanner';
import 월터김 from "./Image/월터김.jpg"
import 김양재 from "./Image/김양재.jpg"

const Bible = ({history}) => {
  return (
    <div style={{width: "100%", display: "flex", flexDirection: "column", background: "#ECF6FC"}}>
        <Header history={history}></Header>
        <TopBanner></TopBanner>
        <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
          <ProgramMenu history={history}/>
        </div>
        <div className="mMargin0" style={{width: "100%", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", marginTop: ".8vw", fontFamily: "Noto Sans KR, sans-serif"}}>
          <div className="mWidth100 mFlexContainer mContainer4p" style={{width: "60%", display: "flex", padding: "3.5vw", border: "1px solid rgb(226, 226, 226)", fontSize: "1vw", marginBottom: "3.5vw", background: "white", flexDirection: "column"}}>
            {/*  */}
            <div className="mBlock" style={{display: "flex"}}>
              <div className="mFlexContainer" style={{width: "35%", display: "flex", flexDirection: "column"}}>
                <div className="mTitle" style={{paddingBottom: "3vw", color: "#143674", fontWeight: "700", fontSize: "1.2vw"}}>성경 1 Bilble Exposition 1</div>
                <img style={{maxHeight: "25vw", margin: "1vw"}} className="mImage35 mRightImage" src={월터김} alt="young"></img>
              </div>
              <div className="mPadding0 mWidth100" style={{width: "65%", paddingLeft: "3.5vw", fontWeight: "500"}}>

                <div className="mTextSize2" style={{fontSize: "1.4vw", fontWeight: 700, marginBottom: "1vh"}}>Dr. Walter Kim</div>
                <div className="mTextSize" style={{display: "block", flexDirection: "column", marginBottom: "2vw", letterSpacing: "-.05vw", lineHeight: "200%", wordBreak: "keep-all"}}>

                  <span>- NorthWestern University, B.A</span><br></br>
                  <span>- Regent College(Vancouver), M.Div.</span><br></br>
                  <span>- Harvard University, Ph.D.</span><br></br>
                  <br></br>
                  <span>- (前) 파크 스트리트 교회(보스턴) 담임</span><br></br>
                  <span>- Christian Today, World Relief 이사</span><br></br>
                  <span>- Gordon College 자문위원회 이사</span><br></br>
                  <span>- 전미복음주의연맹(NAE) 대표</span><br></br>
                  <span>- 트리니티 장로교회 담임</span>
                </div>
                <div className="mTextSize mPT5" style={{lineHeight: "160%", wordBreak: "keep-all"}}>월터 킴 목사는 뉴욕시의 한국 이민자 가정에서 태어났으며 펜실베니아 서부, 시카고, 밴쿠버 등 여러 곳에 거주했다. 보스턴에 지내며 파크스트리트교회를 섬기다 현재는 버지니아 샬로츠빌 소재 트리니티 장로교회 담임으로 섬기고 있다. 신학자이자 목회자인 월터 킴 목사는 비백인 최초로 전미복음주의연맹(NAE)의 대표로 2020년 취임했다. NAE 이사회 Roy Taylor의장은 김 목사에 대해 “미국을 비롯한 전 세계 복음주의를 위해 그의 냉철한 사고와 관용의 정신이 필요하며, 그는 검증된 목회자이자 신학자, 리더로서 향후 NAE의 10년을 이끌 것이다.”고 말했다. 미국 복음주의를 대표하는 단체인 NAE는 40개 교단을 비롯해 다양한 조직과 학교 등의 연합체로 지난 1942년 설립됐으며 현재 워싱턴D.C.에 본부를 두고 4만5천여 개 교회가 속해있다. 김 목사는 복음주의는 사회운동이 아니라 영적운동임을 강조하며 대표로서 정치적으로 양극화된 사회 안에 그리스도인들의 ‘영적 갱신’과 ‘화해’를 목표로 NAE를 이끌고 있다.</div>
                <div className="mWidth100 wBorderBottom" style={{width: "60%", background: "white", display: "flex", justifyContent: "center", borderRight: "1px solid rgb(226, 226, 226)", borderLeft: "1px solid rgb(226, 226, 226)", marginTop: "4vh", marginBottom: "4vh"}}>
                  <div className="mWidth100" style={{width: "52vw", borderTop: "2px solid rgb(226, 226, 226)"}}></div>
                </div>
              </div>
            </div>
            
            {/*  */}
            <div className="mBlock" style={{display: "flex"}}>
              <div className="mFlexContainer" style={{width: "35%", display: "flex", flexDirection: "column"}}>
                <div className="mTitle" style={{paddingBottom: "3vw", color: "#143674", fontWeight: "700", fontSize: "1.2vw"}}>성경 3 Bilble Exposition 3</div>
                <img style={{maxHeight: "25vw", margin: "1vw"}} className="mImage35 mRightImage" src={김양재} alt="young"></img>
              </div>
              <div className="mPadding0 mWidth100" style={{width: "65%", paddingLeft: "3.5vw", fontWeight: "500"}}>

                <div className="mTextSize2" style={{fontSize: "1.4vw", fontWeight: 700, marginBottom: "1vh"}}>김양재 목사</div>
                <div className="mTextSize" style={{display: "block", flexDirection: "column", marginBottom: "2vw", letterSpacing: "-.05vw", lineHeight: "200%", wordBreak: "keep-all"}}>

                  <span>- 서울대학교 음악대학 피아노 전공</span><br></br>
                  <span>- 백석대학교 신학대학원(M.Div.)</span><br></br>
                  <span>- 웨스트민스터신학대학원대학교 명예박사</span><br></br>
                  <span>- (前) 서울예술고등학교 강사</span><br></br>
                  <span>- (前) 총신대학교 강사</span><br></br>
                  <br></br>
                  <span>- 우리들교회 담임목사</span><br></br>
                  <span>- 큐티선교회 이사장</span><br></br>
                  <span>- KOSTA 국제이사</span>
                </div>
                <div className="mTextSize mPT5" style={{lineHeight: "160%", wordBreak: "keep-all"}}>김양재 목사는 많은 사람들에게 고난이 축복임을 역설하며 실제적이고 단순한 가르침을 통해 십자가의 도를 전하고, 삶에서 부딪히는 모든 문제를 말씀으로 조명하는 '큐티'를 전파하는 일에 헌신해왔다. 큐티선교회와 우리들교회를 개척하여 섬기고 있으며 CTS, CBS등 방송과 '날마다 큐티하는 여자'등의 다수의 저서 등을 통해서 가정회복과 말씀대로 믿고 살고 누리는 운동에 헌신하고 있다.</div>
                {/* <div className="mWidth100 wBorderBottom" style={{width: "60%", background: "white", display: "flex", justifyContent: "center", borderRight: "1px solid rgb(226, 226, 226)", borderLeft: "1px solid rgb(226, 226, 226)", marginTop: "4vh", marginBottom: "4vh"}}>
                  <div className="mWidth100" style={{width: "52vw", borderTop: "2px solid rgb(226, 226, 226)"}}></div>
                </div> */}
              </div>
            </div>

            
            
          </div>
        </div>
        <BottomBanner isHome={false}></BottomBanner>
    </div>
  );
}

export default Bible;