import React, { useEffect, useState } from 'react';
import Header from '../../components/header';
import ProgramMenu from './ProgramMenu';
import BottomBanner from '../../components/bottomBanner';
import TopBanner from '../../components/topBanner';
import 돈덴트 from "./Image/돈덴트.jpg"
import 최승업 from "./Image/최승업.jpg"
import 백운영 from "./Image/백운영.jpg"
import 데이비드창 from "./Image/데이비드창.jpg"

const Lecture = ({history}) => {
  const [first, setFirst] = useState(true);

  return (
    <div style={{width: "100%",  display: "flex", flexDirection: "column", background: "#ECF6FC"}}>
        <Header history={history}></Header>
        <TopBanner></TopBanner>
        <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
          <ProgramMenu history={history}/>
        </div>
        <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
          <div className="mWidth100 mMenuTextSize mdLRBorder" style={{width: "60%", height: "7vh", minHeight: "20px", border: "1px solid #E2E2E2", display: "flex", justifyContent: "space-around", alignItems: "center", cursor: "pointer", fontWeight: 500, fontSize: "1.3vw", color: "rgb(128, 127, 127)", background: "white"}}>
              <div className={first ? "clickedMenu2" : ""} onClick={() => setFirst(true)}
                style={{borderRight: "1px solid #E2E2E2", width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>Day 2</div>
              <div className={!first ? "clickedMenu2" : ""} onClick={() => setFirst(false)}
                style={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>Day 3</div>
          </div>
        </div>
        <div className="mMargin0" style={{width: "100%", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", marginTop: ".8vw", fontFamily: "Noto Sans KR, sans-serif"}}>
          {first ? 
          <div className="mWidth100 mFlexContainer mContainer4p" style={{width: "60%", display: "flex", padding: "3.5vw", border: "1px solid rgb(226, 226, 226)", fontSize: "1vw", marginBottom: "3.5vw", background: "white", flexDirection: "column"}}>
            <div className="mBlock" style={{display: "flex"}}>
              <div className="mFlexContainer" style={{width: "35%", display: "flex", flexDirection: "column"}}>
                <div className="mTitle" style={{paddingBottom: "3vw", color: "#143674", fontWeight: "700", fontSize: "1.2vw"}}>주제강의 1  Plenary 1</div>
                <img style={{maxHeight: "25vw", margin: "1vw"}} className="mImage35 mRightImage" src={돈덴트} alt="young"></img>
              </div>
              <div className="mPadding0 mWidth100" style={{width: "65%", paddingLeft: "3.5vw", fontWeight: "500"}}>

                <div className="mTextSize2" style={{fontSize: "1.4vw", fontWeight: 700, marginBottom: "1vh"}}>Dr. Donald T. (Don) Dent</div>
                <div className="mTextSize" style={{display: "block", flexDirection: "column", marginBottom: "2vw", letterSpacing: "-.05vw", lineHeight: "200%", wordBreak: "keep-all"}}>
                  

                  <span> -Baker James Cauthen Professor of World Missions, Gateway Seminary, from 2012~</span><br></br>
                  <span> -Director, Kim School of Global Missions, Gateway Seminary, 2012~2021</span><br></br>
                  <span> -International Mission Board, South Asia Apprentice Program Director, Personnel Training Team, 2010~2012</span><br></br>
                  <span> -IMB, Missionary-In-Residence and Visiting Professor, Southeastern Baptist Theological Seminary, 2009</span><br></br>
                  <span> -IMB Regional Leader, Pacific Rim, 2004~2008(approx. 850 missionaries)</span><br></br>
                  <span> -IMB Regional Leader, Southeast Asia and Oceania, 1998~2004(from 275~550 missionaries)</span>

                </div>
                <div className="mTextSize mPT5" style={{lineHeight: "160%", wordBreak: "keep-all"}}>Don Dent 박사는 Gateway 신학교에서 가르치며 베이커 제임스 카우첸 세계선교 교수로 재직하고 있다. 미시시피 태생인 그는 29살인 1975년 하나님께 선교로 부르심을 받고 30년 동안 아시아의 대도시들에서 미국남침례교단 국제선교위원회(IMB)와 국제 기업에서 일을 했으며, 다양한 문화와 환경에서의 경험을 통해 고층 건물이 밀집한 대도시에서 공동체를 개척하고, 새로운 시장을 개척하기 위해 전략들을 세웠다. 또한 100개 이상의 해외 선교 팀의 리더십으로 섬길 뿐 아니라 다음세대 리더들을 세웠고, 선교팀 멤버들을 훈련시키며 새로운 환경에 잘 적응하는 과정을 이끄는 등 다양한 환경에서 많은 사람들과 사역을 해왔다.</div>
                <div className="mWidth100 wBorderBottom" style={{width: "60%", background: "white", display: "flex", justifyContent: "center", borderRight: "1px solid rgb(226, 226, 226)", borderLeft: "1px solid rgb(226, 226, 226)", marginTop: "4vh", marginBottom: "4vh"}}>
                  <div className="mWidth100" style={{width: "52vw", borderTop: "2px solid rgb(226, 226, 226)"}}></div>
                </div>
              </div>
            </div>

            {/*  */}
            <div className="mBlock" style={{display: "flex"}}>
              <div className="mFlexContainer" style={{width: "35%", display: "flex", flexDirection: "column"}}>
                <div className="mTitle" style={{paddingBottom: "3vw", color: "#143674", fontWeight: "700", fontSize: "1.2vw"}}>주제강의 2  Plenary 2</div>
                <img style={{maxHeight: "25vw", margin: "1vw"}} className="mImage35 mRightImage" src={최승업} alt="young"></img>
              </div>
              <div className="mPadding0 mWidth100" style={{width: "65%", paddingLeft: "3.5vw", fontWeight: "500"}}>

                <div className="mTextSize2" style={{fontSize: "1.4vw", fontWeight: 700, marginBottom: "1vh"}}>Kojo Choi(최승업) 선교사(Ghana MK)</div>
                <div className="mTextSize" style={{display: "block", flexDirection: "column", marginBottom: "2vw", letterSpacing: "-.05vw", lineHeight: "200%", wordBreak: "keep-all"}}>
                 <br></br>
                </div>
                <div className="mTextSize mPT5" style={{lineHeight: "160%", wordBreak: "keep-all"}}>14세 때 선교사인 부모를 따라 아프리카 가나로 와 현지 중학교, 고등학교 과정을 마치고 국립가나대에 경영학과를 마쳤다. 1999년 시작한 사업은 가나의 특성상 자본과 신뢰의 부족, 수 많은 사기 등으로 다양한 어려움을 겪었지만 신뢰할 수 있는 현지인 동료 Nathan과 아프리카 최대 통신사인 MTN 가나 매출의 20프로를 담당하는 나나텔이라는 기업을 키워냈다. 사업을 통해 수십년간 몸으로 겪어왔던 아프리카 사회의 부정부패 이슈의 핵심인 "신뢰부족" 문제를 해결하기 위해 2016년 가나 최초의 핀테크 개인금융결제원인 페이스위치(온오프라인 결제중계플랫폼)를 창업했다. 사랑하는 아내와 아이 다섯을 둔 아빠이자 부모님선교사님을 둔 아들로써 부모님의 선교지에 남아 3대가 함께하는 선교를 이어가고 있다. 2018 평창동계올림픽에 최초이자 유일한 가나의 스켈레톤 선수 프림퐁의 출전을 후원해 화제가 되었다. 2019년 아프리카 가나에서 영향력있는 핀테크 리더로 선정되었고 가나 산업계에 대한 기여와 실적을 인정받아 2021년 가나 명예의 전당에 이름을 올렸다. </div>
                {/* <div className="mWidth100 wBorderBottom" style={{width: "60%", background: "white", display: "flex", justifyContent: "center", borderRight: "1px solid rgb(226, 226, 226)", borderLeft: "1px solid rgb(226, 226, 226)", marginTop: "4vh", marginBottom: "4vh"}}>
                  <div className="mWidth100" style={{width: "52vw", borderTop: "2px solid rgb(226, 226, 226)"}}></div>
                </div> */}
              </div>
            </div>
            


          </div>
          : <div className="mWidth100 mFlexContainer mContainer4p" style={{width: "60%", display: "flex", padding: "3.5vw", border: "1px solid rgb(226, 226, 226)", fontSize: "1vw", marginBottom: "3.5vw", background: "white", flexDirection: "column"}}>
          <div className="mBlock" style={{display: "flex"}}>
            <div className="mFlexContainer" style={{width: "35%", display: "flex", flexDirection: "column"}}>
              <div className="mTitle" style={{paddingBottom: "3vw", color: "#143674", fontWeight: "700", fontSize: "1.2vw"}}>주제강의 3  Plenary 3</div>
              <img style={{maxHeight: "25vw", margin: "1vw"}} className="mImage35 mRightImage" src={백운영} alt="young"></img>
            </div>
            <div className="mPadding0 mWidth100" style={{width: "65%", paddingLeft: "3.5vw", fontWeight: "500"}}>

              <div className="mTextSize2" style={{fontSize: "1.4vw", fontWeight: 700, marginBottom: "1vh"}}>백운영 목사  Dr. Greg Paek</div>
              <div className="mTextSize" style={{display: "block", flexDirection: "column", marginBottom: "2vw", letterSpacing: "-.05vw", lineHeight: "200%", wordBreak: "keep-all"}}>
                
                <span>- Westminster Theological Seminary, M.Div.(1986)</span><br></br>
                <span>- Fuller Theological Seminary, Th.M.(1988)</span><br></br>
                <span>- Fuller Theoligical Semianry, D.Miss(1996)</span><br></br>
                <br></br>
                <span>- 필라델피아 영생장로교회 파송선교사 및 GP소속 선교사(필리핀/인도네시아) 1990~201</span><br></br>6
                <span>- GP선교회 국제대표(말레이시아) 2012~2016</span><br></br>
                <span>- 로잔디아스포라 분과 위원 2005~2014</span><br></br>
                <span>- 풀러신학교 선교학 객원교수 2011~2015</span><br></br>
                <span>- KWMC 공동의장, 제9차 한인세계선교대회 공동대회장</span><br></br>
                <span>- 필라델피아 영생장로교회 담임</span>
              </div>
              <div className="mTextSize mPT5" style={{lineHeight: "160%", wordBreak: "keep-all"}}>백운영 목사는 필라델피아 영생장로교회 선교사 출신 목회자로 청년시절 얼바나선교대회 참가하며 선교사로 헌신, 미국 웨스트민스터 신학교에 진학했다. 1990년 영생장로교회에서 GP선교회 선교사로 파송받아 필리핀, 인도네시아, 말레이시아에서 25년간 사역했으며 무슬림 사역 경험을 토대로 풀러신학교에서 무슬림선교를 주제로 선교학박사 학위를 받았다. 2012년부터 GP선교회 국제대표로 세계선교와 한국선교의 가교역할을 하던 중 2015년 영생장로교회 공동의회를 통해 청빙을 받고 기도가운데 미국사회에 거주하는 다민족을 향한 선교와 다음세대 교육이 하나님의 뜻이라는 응답을 받아 현재 담임목회로 섬기고 있다. 교회는 영생한국학교, 영생선교훈련원, 영생장학회 등을 운영하고 있으며 미국 선교단체와 함께 도시구제 사역을 펼치고 있다</div>
              <div className="mWidth100 wBorderBottom" style={{width: "60%", background: "white", display: "flex", justifyContent: "center", borderRight: "1px solid rgb(226, 226, 226)", borderLeft: "1px solid rgb(226, 226, 226)", marginTop: "4vh", marginBottom: "4vh"}}>
                <div className="mWidth100" style={{width: "52vw", borderTop: "2px solid rgb(226, 226, 226)"}}></div>
              </div>
            </div>
          </div>

          {/*  */}
          <div className="mBlock" style={{display: "flex"}}>
            <div className="mFlexContainer" style={{width: "35%", display: "flex", flexDirection: "column"}}>
              <div className="mTitle" style={{paddingBottom: "3vw", color: "#143674", fontWeight: "700", fontSize: "1.2vw"}}>주제강의 4  Plenary 4</div>
              <img style={{maxHeight: "25vw", margin: "1vw"}} className="mImage35 mRightImage" src={데이비드창} alt="young"></img>
            </div>
            <div className="mPadding0 mWidth100" style={{width: "65%", paddingLeft: "3.5vw", fontWeight: "500"}}>

              <div className="mTextSize2" style={{fontSize: "1.4vw", fontWeight: 700, marginBottom: "1vh"}}>Rev. David Chang</div>
              <div className="mTextSize" style={{display: "block", flexDirection: "column", marginBottom: "2vw", letterSpacing: "-.05vw", lineHeight: "200%", wordBreak: "keep-all"}}>
               
                <span>- Lead Pastor, Open Door Presbyterian Church - Herndon, VA </span><br></br>
                
              </div>
              <div className="mTextSize mPT5" style={{lineHeight: "160%", wordBreak: "keep-all"}}>"Born to missionary parents in Bangladesh, David spent most of his childhood with the local boys of Dhaka and his many pets (including monkeys and many, many dogs). As he entered 6th grade, he attended Kodaikanal International Boarding School in India due to the lack of proper education in Dhaka. Then in the summer of 1998, David's family moved from India/Bangladesh to Chicago, IL in order for him and his siblings to prepare for college. After graduating from the University of Illinois with a BS in Psychology, David spent time working at a local psychiatric institution as a group therapist at a residential unit serving teenage patients. In 2006, he moved to Washington, DC to attend seminary and earned his Masters in Divinity. Passionate about serving the youth, David began his ministry in Northern Virginia at First Korean UMC as the Youth Pastor then joined Lighthouse Christian Fellowship Church as the Lead Pastor in 2009. In the summer of 2012, David and his family moved to San Diego to serve as the Education/Missions Pastor of Abundant Life Community. Then in the summer of 2016, he and his family moved back to Northern Virginia, and is humbled to be serving as the Lead Pastor at Open Door Presbyterian Church.</div>
              {/* <div className="mWidth100 wBorderBottom" style={{width: "60%", background: "white", display: "flex", justifyContent: "center", borderRight: "1px solid rgb(226, 226, 226)", borderLeft: "1px solid rgb(226, 226, 226)", marginTop: "4vh", marginBottom: "4vh"}}>
                <div className="mWidth100" style={{width: "52vw", borderTop: "2px solid rgb(226, 226, 226)"}}></div>
              </div> */}
            </div>
          </div>
          
        </div>
          }

        </div>
        
        <BottomBanner isHome={false}></BottomBanner>
    </div>
  );
}

export default Lecture;