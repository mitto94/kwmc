import React, { useEffect, useState } from 'react';
import Header from '../../components/header';
import Poster from "../../image/poster1.png";
// import Video from "../../image/video.jpg"

const Mainpage = ({history}) => {
  return (
    <div style={{width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center"}}>
        <Header history={history}></Header>
        <div style={{display: "flex", justifyContent: "center", width: "100%"}} >
            <img style={{width: "100%", height: "100%"}} src={Poster} alt="poster1" />
        </div>
        <div style={{display: "flex", justifyContent: "center", width: "100%", background: "#002951", padding: "10%", color: "white", flexDirection: "column", alignItems: "center"}} >
            {/* <img style={{width: "100%", height: "100%"}} src={Intro} alt="Intro" /> */}
            <div className="titleFont">초청의 글</div>
            <br></br>
            <div className="introFont">
              <p>우리 주 예수 그리스도의 재림을 대망하며, 지구촌 복음화의 미완성과업(Unfinished Task of Global Evangelization)에 대한 긴박성을 절감하는 범세계 교회들과 선교운동들이 강권하시는 성령으로 말미암아 금세기를 『천국추수의 최종년대』(The Final Era of the Harvest for the Kingdom of God)로 상정하고 도처에서 총력매진하는 현시점에 열리는 제8차 한인세계선교대회(KWMC2016)는 지구촌 완전복음화를 위한 위대한 비젼과 열망, 그리고 선교적 대각성과 총동원을 다시 한번 우리 한국교회에 명령하시는 『하나님의 비젼성명』(The Vision Statement of God)이라고 확신합니다.</p>
              <p>『너희는 가서 모든 족속으로 제자를 삼으라!』(마 28:19)는 세계선교의 대사명(Great Commission)과『네 이웃을 네 몸같이 사랑하라!』(마 22:39)는 인류애의 대계명(Great Commandment)을 분부하신 우리 주님의 말씀에 순종하여 2015년말 현재 무려 170개국에 27,700명에 이르는 위대한 한인선교사들이 오대양 육대주에 달려나가 생명과 생애를 그 땅에 관유처럼 쏟아붓고 있으며, 선교사 자녀도 무려 18,442명이 세계 도처의 땅에서 자라고 있습니다. 한인선교사 파송현황의 역사를 돌이켜 보면 1979년 93명, 1982년 323명, 1986년 511명, 1989년 1,178명, 1990년 1,645명, 1996년 4,402명, 2002년 10,422명, 2004년 12,159명, 2005년 13,318명, 2006년 14,896명, 2007년 17,697명, 2008년 19,413명, 2009년 20,445명, 2010년 22,041명, 2011년 23,331명, 2012년 24,742명, 2013년 25,745명, 2014년 26,677명, 2015년말 27,700여명으로 비약적 성장을 이루어 세계 제2위의 선교사 파송국가로 부상하는 하나님 아버지의 놀라운 축복을 받았습니다.</p>
              <p>이 얼마나 장엄한 행렬입니까! 이 얼마나 위대한 성령의 역사입니까! 오대양 육대주, 열풍이 몰아치는 사하라사막에서 북풍한설이 몰아치는 시베리아설원까지, 산악과 평야, 도시와 촌락, 오지와 섬들 그리고 감옥과 유형지에서, 혹은 백척간두의 두만강변에서 험악한 세월을 가슴으로 헤치며 구령의 열정으로 그 심장을 불태우며, 사탄의 왕국을 무너뜨리며, 생명을 포기하며, 고난을 찬미하며, 『매를 맞으며 자지 못하고 주리고 목마르고 굶고 춥고 헐벗으며』(고후 11:23-27) 오직 하나님의 나라 그 권세와 영광의 확장을 위해 승리의 십자가를 높이 들고 성령에 이끌리어 달려가는 저 위대한 복음의 전령들! 저 고독한 믿음의 영웅들! 오늘도 불멸의 선교행전을 하나님의 책과 박동하는 자기 심장에 기록하며 주 예수 그리스도의 지상명령 곧 지구촌완전복음화 그 위대한 역사창조의 새벽을 응시하는 저 불타는 여명의 눈동자들이여!
오! 그대들은 어찌 이다지도 멋지게 휘몰아치며 소용돌이치며 도도히 흘러갈 수 있단 말인가! 천고(千古)의 강물처럼, 천년을 굽이쳐 흘러가는 저 유장한 강물처럼 그렇게!
</p>
              <p>제8차 한인세계선교대회(KWMC2016)는 정녕 이렇게 빛나는 하나님의 사람들, 1천2백명의 선교사, 4백명의 선교사 자녀를 비롯하여, 목회자, 신학자, 평신도 그리고 차세대 대학생, 청소년 등 5천여명의 선교동반자들이 한마당에 모여 만남의 감격, 사랑의 교제, 비젼의 융합, 기도의 연합, 사명의 재무장, 전인치유, 영적회복, 성령의 재충만, 정보와 전략의 상호교류 그리고 한국교회 선교역량의 촉진(Catalyzing), 동원(Mobilizing), 번식(Multiplying)을 도모하는 역사적인 동반자협력선교의 대광장이 될 것입니다.</p>
              <p>그리고 우리들의 생명이신 주 예수 그리스도를 향한 경건한 사랑의 고백과 또한 상실된 영혼들을 향한 구령의 열정이 불길처럼 타오를 오순절적 성령폭발의 현장, 그 위대한 선교축제의 대광장에서 저 높은하늘 보좌로부터 들려올 하나님 아버지의 세미한 음성을 우리모두 기다리며 삼가 선교동지 여러분을우리 주 예수 그리스도의 귀하신 이름으로 초청하는바입니다.</p>
            </div>
            <br></br>

            <div className="titleFont">홍 길 동 목사</div>
        </div>
        {/* <img style={{width: "100%", height: "100%"}} src={Video} alt="Intro" /> */}

      <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "30%"}}>
        {/* Footer */}
      </div>
    </div>
  );
}

export default Mainpage;