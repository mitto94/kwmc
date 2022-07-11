import React, { useEffect, useState } from 'react';
import Header from '../../components/header';
import ProgramMenu from './ProgramMenu';
import BottomBanner from '../../components/bottomBanner';
import TopBanner from '../../components/topBanner';
import 조용중 from "./Image/조용중.jpg"
import 백신종 from "./Image/백신종.jpg"

const Presentation = ({history}) => {
  return (
    <div style={{width: "100%",  display: "flex", flexDirection: "column", background: "#ECF6FC"}}>
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
                <div className="mTitle" style={{paddingBottom: "3vw", color: "#143674", fontWeight: "700", fontSize: "1.2vw"}}>주제발표 Keynote Speech</div>
                <img style={{maxHeight: "25vw", margin: "1vw"}} className="mImage35 mRightImage" src={조용중} alt="young"></img>
              </div>
              <div className="mPadding0 mWidth100" style={{width: "65%", paddingLeft: "3.5vw", fontWeight: "500"}}>

                <div className="mTextSize2" style={{fontSize: "1.4vw", fontWeight: 700, marginBottom: "1vh"}}>조용중 선교사</div>
                <div className="mTextSize" style={{display: "block", flexDirection: "column", marginBottom: "2vw", letterSpacing: "-.05vw", lineHeight: "200%", wordBreak: "keep-all"}}>

                  <span>- 고려대학교 수학</span><br></br>
                  <span>- Trinity Evangelical Divinity School, M.Div.,Th.M., Ph.D.</span><br></br>
                  <br></br>
                  <span>- KWMC 사무총장</span><br></br>
                  <span>- Missional NGO 글로벌호프 대표</span><br></br>
                  <span>- (前) KWMA 사무총장</span><br></br>
                  <span>- (前) KWMF 사무총장, 대표회장</span>
                </div>
                <div className="mTextSize mPT5" style={{lineHeight: "160%", wordBreak: "keep-all"}}>조용중선교사는 1987년 미주한인교회 출신 선교사로 태국으로 파송받았으나 하나님의 특별한 인도하심으로 필리핀에서 사역을 하였다. 그후 1997년 남가주 지역에서 GP 선교회의 미주본부를 만들고 선교사 발굴, 훈련, 파송과 지원을 하는 선교개발 사역을 감당하였다. 2005년부터 한국에서 GP 선교회 대표로 섬기고, 창의적 선교를 위해 글로벌호프를 만들고 12개국에서 창의적 사역을 감당하다 KWMA 사무총장으로 부름 받아 한국교회의 선교운동 전반을 섬겼다. 2010년에는 랄프 윈터 박사와 함께 설립한 GNMS 를 통해 동경세계선교전략회의를 개최하고 비서구권교회의 선교운동을 섬겼다. 2021년부터 KWMC 사무총장으로 취임하여 현장의 선교사, 한국교회, 미주한인교회와 강한 연합을 통해 전 세계 한인 디아스포라 선교운동 활성화와 다음 세대로 이어가는 선교운동 계승을 위해 힘쓰고 있으며, 제9차 한인세계선교대회를 통해 팬데믹 이후 시대의 선교운동의 새로운 기폭제가 될 수 있도록 섬기고 있다. </div>
                <div className="mWidth100 wBorderBottom" style={{width: "60%", background: "white", display: "flex", justifyContent: "center", borderRight: "1px solid rgb(226, 226, 226)", borderLeft: "1px solid rgb(226, 226, 226)", marginTop: "4vh", marginBottom: "4vh"}}>
                  <div className="mWidth100" style={{width: "52vw", borderTop: "2px solid rgb(226, 226, 226)"}}></div>
                </div>
              </div>
            </div>
            
            {/*  */}
            <div className="mBlock" style={{display: "flex"}}>
              <div className="mFlexContainer" style={{width: "35%", display: "flex", flexDirection: "column"}}>
                <div className="mTitle" style={{paddingBottom: "3vw", color: "#143674", fontWeight: "700", fontSize: "1.2vw"}}>주제발표 Keynote Speech</div>
                <img style={{maxHeight: "25vw", margin: "1vw"}} className="mImage35 mRightImage" src={백신종} alt="young"></img>
              </div>
              <div className="mPadding0 mWidth100" style={{width: "65%", paddingLeft: "3.5vw", fontWeight: "500"}}>

                <div className="mTextSize2" style={{fontSize: "1.4vw", fontWeight: 700, marginBottom: "1vh"}}>백신종 목사</div>
                <div className="mTextSize" style={{display: "block", flexDirection: "column", marginBottom: "2vw", letterSpacing: "-.05vw", lineHeight: "200%", wordBreak: "keep-all"}}>

                  <span>- 중앙대학교, B.A.</span><br></br>
                  <span>- 총신대학교 신학대학원, M.Div.</span><br></br>
                  <span>- Fuller Theological Seminary, Th.M.</span><br></br>
                  <span>- Trinity International University, Ph.D(수학중)</span><br></br>
                  <br></br>
                  <span>- (前) 캄보디아 선교사(SEED 선교회, KAFHI 공동파송)</span><br></br>
                  <span>- (前) Hibert Global Center(히버트 선교연구소), Director</span><br></br>
                  <span>- SEED 선교회 이사, KAFHI 이사</span><br></br>
                  <span>- KWMC 공동의장</span><br></br>
                  <span>- Denver Seminary, 겸임교수</span><br></br>
                  <span>- 볼티모어 벧엘교회 담임</span>
                </div>
                <div className="mTextSize mPT5" style={{lineHeight: "160%", wordBreak: "keep-all"}}>백신종 목사는 어린 시절 목사의 소망을 품었으나 중학교 1학년 여름 수련회를 통해 선교사로 헌신했다. 중고등학교 시절 여러 학생선교단체 활동을 거쳐 대학시절에도 OM, OMF, 두란노, 선교한국 등 선교단체를 통해 선교훈련을 받았다. 졸업 후 예장합동총회 해외선교국의 선교훈련원 간사로 섬기면서 총신대 신학대학원을 졸업, 1998년 도미 후 Fuller Theological Seminary에서 선교학 석사를 마쳤다. 지역교회 사역을 늘 병행해왔으며 캄보디아 선교사로 11년간 현지인을 대상으로 목회사역을 하다 2015년 봄, 벧엘교회 목회에 부르심을 놓고 기도하던 중 하나님의 부르심을 확인하고 그간 감당해온 선교사역과 선교학자의 길을 내려놓고 담임목회 사역으로 순종했다. 빌립보서 2:5-8의 말씀과 사도행전 20:22-24을 약속의 말씀으로 붙잡고 1) 십자가를 지고 낮아지는 섬김의 목회, 2) 자기를 비워 하나님의 말씀과 성령의 능력으로 채우는 목회, 3) 주님의 양떼를 위하여 목숨을 내어 드리는 목회를 감당하기 위해 섬기고 있다.</div>
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

export default Presentation;