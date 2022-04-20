import React, { useEffect, useState, useRef, useLayoutEffect } from 'react';
import Header from '../../components/header';
import TopBanner from '../../components/topBanner';
import SummaryMenu from './SummaryMenu';
import BottomBanner from '../../components/bottomBanner';
import ContentWeb from "./Image/contentWeb.jpg";
import ContentMob from "./Image/contentMob.jpg";

const Character = ({history}) => {
  return (
    <div style={{width: "100%",  display: "flex", flexDirection: "column", background: "#ECF6FC"}}>
        <Header history={history}></Header>
        <TopBanner></TopBanner>
        <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
          <SummaryMenu history={history}/>
        </div>
        <div className="mMargin0" style={{width: "100%", display: "flex", justifyContent: "center", marginTop: "2rem", marginBottom: "1rem"}}>
          {/* <div className="formContainer" style={{height: "100%"}}> */}
            {/* <img style={{width: "100%"}} className="MobImage" src={ContentMob} alt="모바일"></img>
            <img style={{width: "100%"}} className="WebImage" src={ContentWeb} alt="웹"></img> */}
          {/* </div> */}
          <div className="formContainer" style={{wordBreak: "keep-all"}}>
              <div className="mMargin0" style={{width: "100%", border: "1px solid #E2E2E2", marginTop: "1rem", background: "white", marginBottom: "1rem"}}>
              <div className="mTextSize notosanskr" style={{margin: "2rem", lineHeight: "150%", background: "white", fontWeight: "400"}}>
                {/* <span>
                  <span style={{color: "#143674", fontWeight: "700"}}>기독교 한인세계선교협의회(Korean World Mission Council for Christ)는</span> 북미주 한인교회가 하나님의 은총과 축복 가운데 성장과 부흥을 거듭함을 감사드리며 주 예수 그리스도의 2,4지상명령(마 28:19-20)인 세계복음화에 총력을 기울여야 할 시대적 사명을 절감하고 1988년 7월 25일부터 30일까지 빌리 그래함 목사의 적극적 후원을 받아 시카고 윗튼대학 빌리 그래함 센터에서 제1차 <span style={{color: "#143674", fontWeight: "700"}}>한인세계선교대회를</span> 개최하며 한국교회 선교사상 새로운 장을 기록하였다. 대회를 기점으로 하나님께서 북미주 한인교회에 주신 세계복음화의 지상명령을 더욱 효율적으로 수행하고자 기독교 한인세계선교협의회를 창립하기에 이르렀으며 이를 중심으로 세계복음화를 향한 북미주 한인교회의 선교의 뜻과 힘을 집결하여 선교운동을 촉진, 협력, 조정함으로써 복음을 땅끝까지 전파하려는 세계복음화를 향한 하나님의 부르심에 순종하고 있다.
                  <br></br><br></br>
                  한인선교사를 비롯하여 목회자, 신학자, 남녀 평신도, 청년, 신학생, 대학생, 청소년등의 선교동반자들이 한 광장에 집결하는 이 역사적인 선교대회는 비젼의 융합, 기도의 연합, 사랑의 교제, 사명의 재무장, 정보와 전략의 상호교류 그리고 영적, 인적, 재정적, 시간적, 선교역량의 촉진(Catalyzing), 동원(Mobilization), 번식(Multiplying)을 도모하여 한 목표인 세계복음화 미완성과제(Unfinished Task of World Evangelization) 성취를 위한 새 지평을 창출하는 동반자 협력선교의 대광장이다.
                </span> */}
                <span>
                  <span className="mMenuTextSize" style={{color: "#143674", fontWeight: "700"}}>0. 2022년 제9차 한인세계선교대회를 개최합니다.</span>
                  <br></br><br></br>
                    한인세계선교대회는1988년 미국 시카고에서 처음 개최된 이래, 4년마다 수천 명의 선교사와 한인교회 목회자들이 세계 복음화를 위한 한국 선교 과제를 고민하는 연합의 장으로 자리매김해 왔습니다. 2020년 9차 대회는 코로나 팬데믹으로 2년 연기돼 6년 만인 올해 7월 11일부터 14일까지 3박 4일간 미국 워싱턴 D.C. 와싱톤중앙장로교회(류응렬 담임목사)에서 열리게 되었습니다. 
                    <br></br><br></br>
                    대회 주제는 ‘예수, 온 인류의 소망’(Jesus, the Hope of the World)이며, 
                    주제 성구는 ‘열방이 그에게 소망을 두리라’(로마서 15장 12절)입니다. 
                    <br></br><br></br>
                    이번 대회는 4차 산업혁명과 코로나19 이후 급변하는 세상 가운데 지켜야 할 것과 변해야 할 것을 점검하고, 사명을 재무장하는 시간이 될 것입니다.
                    <br></br><br></br><br></br>

                    <span className="mMenuTextSize" style={{color: "#143674", fontWeight: "700"}}>1. 제9차 한인세계선교대회는 선교운동의 세대계승에 중점을 둡니다.</span>
                    <br></br><br></br>
                    선교지에서 왕성하게 사역을 이어가는 50대와 40대 선교사들이 1세대 선교사역을 계승하고, 20-30대로 성장한 MK세대들이 함께 할 것입니다. MK들은 부모와 함께 지내며 자연스럽게 체득한 선교적 유산들이 있기 때문에 MK들이 복음을 통해 회복된다면 차세대 선교 부흥에 리더십으로 서게 될 것입니다. 여기에 미주한인교회와 디아스포라교회의 목회자들과 평신도 지도자들이 함께 하는 장이 될 것입니다. 
                    <br></br><br></br>
                    또한 MK 세대와 네트워크를 이룰 수 있는 MZ 세대 (미주의 20-30대)가 함께하여 한어권과 영어권이 함께 어우러지는 선교운동이 될 것입니다. 20-30대 미주 한인 가운데는 글로벌 리더로 성장할 수 있는 청년자원들이 많이 있습니다. 우리는 이들이 선교적 삶을 살아가도록 적극ﾠ독려하면서 선교사로 발굴해야 합니다. 젊은 20-30대 들의 참여를 전체 참가자의 약 1/3을 기대하고 있습니다. 
                    <br></br><br></br><br></br>

                    <span className="mMenuTextSize" style={{color: "#143674", fontWeight: "700"}}>2. 제9차 한인세계선교대회는 실질적인 네트워크빌딩의 장이 되고자 합니다.</span>
                    <br></br><br></br>
                    세대별, 공통관심사별, 선교사들과 목회자, 평신도지도자들이 참여하여 대회가 끝나고 나면 대회 이후로 이어지는 네트워크가 형성되도록 힘쓸 것입니다. 선교현장에서 팀 선교는 필수이며 팀을 이루면 선교 사역을 지속하고, 더 많은 일들을 효율적으로 할 수 있습니다. 서로 다른 은사, 서로 다른 문화를ﾠ가진 사람들이 같이 모이면 더 좋은 보안의 효과가 나타나기도 합니다. 예컨대 지역 교회들이 연합해서 선교사들을 후원하고, 수요에 따라 각 교회에서 단기 선교사를 파송해 현지 사역을 함께 돕는ﾠ구조가 만들어 진다면 선교는 훨씬 더 건강해질 것입니다. 이번 대회는 대회 이전부터 대회 이후에 이르는 네트워킹이 중요한 열매로 나타나기를 바랍니다. MK들과 MZ세대가 네트워킹이 되는 것을 꿈꾸며 이를 통해 교회-선교사, 선교사-선교사간ﾠ팀 선교 체제를 구축할 수 있을 것으로 기대합니다.
                     
                    <br></br><br></br><br></br>
                    <span className="mMenuTextSize" style={{color: "#143674", fontWeight: "700"}}>3. 제9차 한인세계선교대회는 전문분야별 트랙중심으로 열릴 것입니다. </span>
                    <br></br><br></br>
                    '너희는 가서 모든 족속으로 제자를 삼으라’는 지상명령을 이루고 있는 가운데 다음과 같은 12개의 전문분야를 선정하였습니다. 
                    <br></br><br></br>
                    a.    디아스포라 현상에서 나타난 제자삼기, 도시선교에서 나타나는 제자삼기, 플랫폼선교를 통해서 제자삼기, 교육선교를 통한 제자삼기, 문화선교를 통한 제자삼기, 비정부기구(국제기구)를 통한 제자삼기, BAM을 통한 제자삼기, 선교동원을 통한 제자삼기, 선교적 교회를 통한 제자삼기, 전방개척사역을 통한 제자삼기, 성경약속(공동체성경읽기)를 통한 제자삼기, 선교협력을 통한 제자삼기의 분야에서 각 트랙은 약 3개 이상의 워크숍으로 나뉩니다. 
                    <br></br><br></br>
                    b.   이것은 다른 분야가 없거나 덜 중요하다는 것이 아니라 현재 가장 다루어져야 할 선교전략의 분야에 포커스를 두고자 함입니다. 기존 지역중심의 워크숍은 이번에는 없을 것이나 중심분야별로 각 지역의 특성을 논하는 기회들이 있을 것입니다. 워크숍은 더 확장 되거나 조정될 수 있습니다. 특별히 3명 이상 팀을 이루어 사역을 진행하고 있거나, 계획을 하고 있는 선교사들을 격려하고 권장하기 원합니다.
                    <br></br><br></br><br></br>

                    <span className="mMenuTextSize" style={{color: "#143674", fontWeight: "700"}}>4. 제9차 한인세계선교대회는 팬데믹 상황을 고려하여 규모가 축소되었습니다. </span>
                    <br></br><br></br>
                    팬데믹 기간 동안 개최될 이번 대회의 한계에 대해 설명을 드리려고 합니다. 예전의 한인세계선교대회는 선교사만 1,000 명 이상 참석하는 대형 집회였으나 팬데믹 기간임을 감안하고 교회에서 모임을 가지는 이유로 소규모로 참석인원을 축소하기로 하였습니다. 선교사의 참석 규모는 약 300여명으로 제한하였습니다. 전체 참석은 약 1,200 여명으로 예상합니다.
                    <br></br><br></br><br></br>

                    <span className="mMenuTextSize" style={{color: "#143674", fontWeight: "700"}}>5. 제 9차 한인세계선교대회를 위해 함께 참여, 기도해주시길 바랍니다.</span>
                    <br></br><br></br>
                    KWMC 한인세계선교대회는 미국에서 열리는 선교대회지만, 30년이 넘는 시간 동안 한국 선교사와 한인 교회들이 선교 사명을 재무장하고, 소통하는 데 중요한 역할을 해 왔습니다. 수많은 사람들의 기도와 헌신을 통해 한국은 전 세계에 3만여 선교사를 파송했고, 이제는 전 세계 나라들에 한국이 어떻게 선교를 하고 있는가를 소개할 수 있는 수준까지 이르렀습니다. 코로나19 위기와 급변하는 시대 속에서 한국 선교사와 교회, 청년 세대가 복음 안에서 하나될 수 있도록, 미주 한인교회가 선교에 동원되고 선교운동의 세대 계승이 이루어지도록, 선교지와 함께 지속적인 열매를 맺는 대회가 되도록, 모든 참석자가 주님의 선교명령을 더욱 잘 수행할 힘을 얻는 계기가 되도록 참여와 기도로 함께 해주시길 바랍니다.
                </span>
              </div>
              </div>
            </div>
        </div>
        
        <BottomBanner isHome={false}></BottomBanner>
    </div>
  );
}

export default Character;