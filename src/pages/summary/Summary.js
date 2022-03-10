import React, { useEffect, useState } from 'react';
import Header from '../../components/header';
import TopBanner from '../../components/topBanner';
import SummaryMenu from './SummaryMenu';
import Young from "./Image/young.jpg"
import Seok from "./Image/seok.jpg"
import BottomBanner from '../../components/bottomBanner';

const Summary = ({history}) => {
  const [first, setFirst] = useState(true);
  return (
    <div className="mobBackground" style={{width: "100%", height: "100%", display: "flex", flexDirection: "column"}}>
        <Header history={history}></Header>
        <TopBanner></TopBanner>
        <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
          <SummaryMenu history={history}/>
        </div>
        <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
          <div style={{width: "86%", height: "9vh", minHeight: "20px", border: "1px solid #E2E2E2", display: "flex", justifyContent: "space-around", alignItems: "center", cursor: "pointer", fontWeight: 900, fontSize: "1.5vw"}}>
              <div className={first ? "clickedMenu2" : ""} onClick={() => {setFirst(true)}}
                style={{borderRight: "1px solid #E2E2E2", width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>사무총장 인사말</div>
              <div className={!first ? "clickedMenu2" : ""} onClick={() => setFirst(false)}
                style={{borderRight: "1px solid #E2E2E2", width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>초청사</div>
          </div>
        </div>
        <div style={{display: first ? "flex" : "none", fontFamily: "Noto Sans KR, sans-serif"}}>
          <div style={{width: "100%", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", marginTop: "3.5vw"}}>
            <iframe className="videoContainer2" src="https://www.youtube.com/embed/zCn0pSaJfl8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen;" modestbranding="1" rel="0" >
            </iframe>
            <div style={{width: "86%", display: "flex", padding: "3.5vw", border: "1px solid rgb(226, 226, 226)", fontSize: "1.3vw"}}>
              <div style={{display: "flex", flexDirection : "column", width: "30%"}}>
                <img src={Young} alt="young"></img>
                <div style={{paddingTop: "3vw", fontWeight: "500", lineHeight: "170%"}}>
                  <span style={{color: "#143674", fontWeight: "700", fontSize: "1.4vw"}}>KWMC 사무총장<span style={{color: "black"}}> 조용중 선교사</span></span>
                  <div style={{display: "flex", flexDirection: "column"}}>
                    <span>- KWMC 사무총장</span>
                    <span>- 글로벌호프 대표</span>
                    <span>- GNMS 국제총무</span>
                    <span>- KWMA 사무총장 역임</span>
                    <span>- KWMF 사무총장, 대표회장 역임</span>
                  </div>
                </div>
              </div>
              <div style={{display: "flex", flexDirection: "column"}}>
                <div style={{lineHeight: "170%", letterSpacing: "2px", paddingLeft: "3.5vw", wordBreak: "keep-all"}}>
                KWMC 사무총장 조용중 선교사입니다. 2022년 7월 11일부터 14일까지 제9차 한인세계선교대회가 와싱톤중앙장로교회에서 열립니다. 한인세계선교대회는 1988년부터 지금까지 4년마다 열렸던 대회인데, 이번 제9차 대회는 코로나 팬데믹으로 인하여 6년 만에 열리게 됐습니다. 참으로 세상은 너무나도 빨리 변해가고 있으며 코로나 팬데믹으로 인해 지난 2년 동안 우리는 아무것도 할 수 없는 상황을 마주하게 됐습니다. 

  또한, 지금 우크라이나에서 벌어지고 있는 사태는 우리가 내일을 확신할 수 없는 변화무쌍한 시대를 살아가고 있다는 것을 보게 합니다. 이러한 시기 격변하는 시대에 변치 않는 복음, 예수 그리스도만이 온 인류의 소망이라는 주제를 가지고 열리는 선교대회에 여러분들이 꼭 참석해주시기를 바랍니다.

  이번 선교대회에는 그동안 세계선교를 감당해왔던 1세대 한인 선교사님들과 대를 이어 선교에 헌신해온 4-50대 선교사님들이 주를 이뤄 참여하게 됩니다. 뿐만 아니라 어린아이로 부모의 손에 이끌려 선교지로 갔던 MK들이 이제 2-30대로 장성하여 함께 참여할 것입니다. 이를 통해 세계선교운동을 지속적으로 이어갈 수 있는 선교적 세대 계승이 이뤄지는 대회가 될 것입니다. 

  또한 이들과 함께 글로벌 리더로 성장하고 있는 MZ세대의 젊은이들이 MK세대의 카운터 파트너로 참여하여 네트워크를 이루게 될 것입니다. 미주 목회자들, 평신도 지도자들도 함께 모여 세계선교를 위해 기도하고, 마음을 모아 함께 미래를 향해 나아가는 놀라운 연합의 장이 될 것입니다. 이를 위해서 선교사님들, 목회자들, 평신도 지도자들 그리고 영어권, 한국어권의 모든 선교의 세대가 모일 수 있도록 여러분 모두 꼭 참석하여 주시기를 간절히 바라고 함께 기도해주시길 바랍니다.

                </div>
                <div style={{display: "flex", justifyContent: "end", paddingTop: "3vw", fontSize: "1.5vw", alignItems: "end"}}>
                  KWMC 사무총장 <span style={{fontSize: "1.7vw", fontWeight: "600"}}> &nbsp;조용중 선교사</span>
                </div>
              </div>
              
            </div>
          </div>
        </div>
        <div style={{display: first ? "none" : "flex", fontFamily: "Noto Sans KR, sans-serif"}}>
        <div style={{width: "100%", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", marginTop: "3.5vw"}}>
          <div style={{width: "86%", display: "flex", padding: "3.5vw", border: "1px solid rgb(226, 226, 226)", fontSize: "1.3vw"}}>
            <div style={{display: "flex", flexDirection : "column", width: "30%"}}>
              <img src={Seok} alt="young"></img>
              <div style={{paddingTop: "3vw", fontWeight: "500", lineHeight: "170%"}}>
                <span style={{color: "#143674", fontWeight: "700", fontSize: "1.4vw"}}>KWMC 상임의장 <span style={{color: "black"}}> 고석희 목사</span></span>
                <div style={{display: "flex", flexDirection: "column"}}>
                  <span>- 예수서원 원장</span>
                  <span>- KWMC 상임의장(전 사무총장 30년)</span>
                  <span>- 뉴욕 지구촌 선교교회 담임</span>
                </div>
              </div>
            </div>
            <div style={{display: "flex", flexDirection: "column"}}>
              <div style={{lineHeight: "170%", letterSpacing: "2px", paddingLeft: "3.5vw", wordBreak: "normal"}}>
              {`주 예수 그리스도의 재림을 대망하며 지구촌 복음화의 미완성 과업에 대한 긴박성을 절감하는 범세계 선교운동들이 금세기를 「천국 추수의 최종년대」(The Final Era of the Harvest for the Kingdom of God)로 상정하고 도처에서 총력매진하는 현시점에, 코로나 팬데믹의 한계상황에도 불구하고 강권하시는 성령의 역사로 말미암아 <온 인류의 소망 예수!>의 주제로 열리는 「제 9차 한인세계선교대회」(KWMC2022)는 시대적 소명을 받은 하나님의 사람들, 선교사, 목회자, 평신도, 그리고 차세대 MK, PK, 대학생, 청년 등 불타는 선교동반자들이 한마당에 함께 모여 사랑의 교제, 비젼의 융합, 기도의 연합, 사명의 재헌신, 전인치유, 영적회복, 성령의 재충만, 정보와 전략의 상호교류, 그리고 디아스포라 한인교회 선교역량의 촉진(Catalyzing) 동원(Mobilizing) 번식(Multiplying)을 추구하는 동반자 협력선교의 대광장이 될 것입니다.

한국의 KWMA, 선교현장의 KWMF와 더불어 한인세계선교운동의 삼두마차로, 우리 주 예수 그리스도의 지상명령을 받들어, 질풍노도같은 성령의 권능에 이끌리어 달려온 KWMC, 저 34년의 위대한 역사를 계승하여 금번에 열리는 「제 9차 한인세계선교대회」의 대광장에서, 저 높은 하늘 보좌로부터 들려올 하나님 아버지의 세미한 음성을 기다리며, 삼가 선교동지 여러분을 우리 주 예수 그리스도의 존귀하신 이름으로 초청하는 바입니다.`}
              </div>
              <div style={{display: "flex", justifyContent: "end", paddingTop: "3vw", fontSize: "1.5vw", alignItems: "end"}}>
                KWMC 상임의장 <span style={{fontSize: "1.7vw", fontWeight: "600"}}> &nbsp;고석희 목사</span>
              </div>
            </div>
          </div>
        </div>

        </div>
        <div style={{marginTop: "3.5vw"}}>
          <BottomBanner></BottomBanner>
        </div>
        
    </div>
  );
}

export default Summary;