import React, { useEffect, useState } from 'react';
import Header from '../../components/header';
import DataMenu from './DataMenu';
import { Button } from 'primereact/button';
import TopBanner from '../../components/topBanner';
import BottomBanner from '../../components/bottomBanner';
import { SelectButton } from 'primereact/selectbutton';
import Gidok from "./image/gidok.png";
import Good from "./image/good.png";
import Gukmin from "./image/gukmin.png";
import Christian from "./image/christian.png";

const Promotion = ({history}) => {
  let isEnglish = false;
  const [isEng, setIsEng] = useState(false);
  const options = ["Eng", "Kor"];
  return (
    <div style={{width: "100%", height: "100%", display: "flex", flexDirection: "column", background: "#ecf6fc"}}>
      <Header history={history}></Header>
      <TopBanner></TopBanner>
      <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
        <DataMenu history={history}/>
      </div>
      <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
        <div className="videoContainer notosanskr" style={{display: "flex", flexDirection: "column", height: "100%"}}>
          <div className="mHeight5" style={{display: "flex", marginTop: "1rem", height: "7vh"}}>
            <div className="sSize" style={{background: "white", width: "66.6%", display: isEng ? "none" : "flex", wordBreak: "keep-all", color: "#163875", height: "100%", justifyContent: "center", alignItems: "center", fontWeight: "600"}}>KWMC 제9차 한인세계선교대회 홍보영상</div>
            <div className="sSize" style={{background: "white", width: "66.6%", display: isEng ? "flex" : "none", wordBreak: "keep-all", color: "#163875", height: "100%", justifyContent: "center", alignItems: "center", fontWeight: "600"}}>Promotion video for the 9th KWMC</div>

            <div className="sSize" style={{width: "33.4%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
              <div className={`${isEng ? "clickedMenu3" : "clickedMenu4"}`} style={{width: "100%", cursor: "pointer", height: "100%", display: "flex", justifyContent: "center", alignItems: "center"}} onClick={() => {
                if (isEng) document.getElementById("promotion1").contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
                else document.getElementById("promotion2").contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
                setIsEng(true)}
                }>ENG</div>
              <div className={`${isEng ? "clickedMenu4" : "clickedMenu3"}`} style={{width: "100%", cursor: "pointer", height: "100%", display: "flex", justifyContent: "center", alignItems: "center"}} onClick={() => {
                if (isEng) document.getElementById("promotion1").contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
                else document.getElementById("promotion2").contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
                setIsEng(false)
                }}>한글</div>
            </div>
          </div>
          <div style={{width: "100%", display: isEng ? "flex" : "none", justifyContent: "center", background: "#ecf6fc", flexDirection: "column", alignItems: "center"}}>
            <iframe id="promotion1" className="videoContainer" src={`https://www.youtube.com/embed/LofCLjT95dw?enablejsapi=1&version=3&playerapiid=ytplayer`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen;" modestbranding="1" rel="0" >
            </iframe>
          </div>
          <div style={{width: "100%", height: "100%", display: isEng ? "none" : "flex", justifyContent: "center", background: "#ecf6fc", flexDirection: "column", alignItems: "center"}}>
            <iframe id="promotion2" className="videoContainer" src={'https://www.youtube.com/embed/sqIKi2SasGM?enablejsapi=1&version=3&playerapiid=ytplayer'} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen;" modestbranding="1" rel="0" >
            </iframe>
          </div>
          <div className="sSize mHeight5" style={{display: "flex", marginTop: "1rem", height: "7vh", background: "white", color: "#163875", fontWeight: "600"}}>
            <div style={{width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>사무총장 인사말</div>
            <div style={{width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>GOOD TV NEWS</div>
          </div>
          <div className="videoContainer3" style={{display: "flex"}}>
            <iframe style={{width: "50%", height: "100%"}} src="https://www.youtube.com/embed/zCn0pSaJfl8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen;" modestbranding="1" rel="0" >
            </iframe>
            <iframe style={{width: "50%", height: "100%"}} src="https://www.youtube.com/embed/Zf70NnhQt7c" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen;" modestbranding="1" rel="0" >
            </iframe>
          </div>
          <div className="sSize" style={{display: "flex", flexDirection: "column", marginTop: "1rem", marginBottom: "1rem"}}>
            <div className="mHeight5"  style={{width: "100%", height: "7vh", background: "#163875", color: "white", display: "flex", justifyContent: "center", alignItems: "center", fontWeight: "500"}}>언론 기사 링크</div>
            <div className="mHeight5" style={{display: "flex", height: "7vh", background: "white", fontWeight: "600", cursor: "pointer", borderBottom: "1px solid #E2E2E2"}} onClick={() => window.open("http://www.christiantoday.us/27495")}>
              <div style={{display: "flex", width: "25%", justifyContent: "center", alignItems: "center"}}><img src={Christian} alt="크리스찬" style={{height: "40%"}}></img></div>
              <div style={{display: "flex", width: "50%", justifyContent: "center", alignItems: "center"}}><span style={{width: "100%", display: "block", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis"}}>제9차 한인세계선교대회 오는 7월 11-14일 와싱톤 중앙장로교회</span></div>
              <div style={{display: "flex", width: "25%", justifyContent: "center", alignItems: "center", fontWeight: "300"}}>2022.04.09</div>
            </div>

            <div className="mHeight5" style={{display: "flex", height: "7vh", background: "white", fontWeight: "600", cursor: "pointer", borderBottom: "1px solid #E2E2E2"}} onClick={() => window.open("https://www.goodnews1.com/news/articleView.html?idxno=406109")}>
              <div style={{display: "flex", width: "25%", justifyContent: "center", alignItems: "center"}}><img src={Good} alt="굿 뉴스" style={{height: "80%"}}></img></div>
              <div style={{display: "flex", width: "50%", justifyContent: "center", alignItems: "center"}}><span style={{width: "100%", display: "block", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis"}}>KWMC 선교대회 7월 개최… 한국선교운동 계승 기대</span></div>
              <div style={{display: "flex", width: "25%", justifyContent: "center", alignItems: "center", fontWeight: "300"}}>2022.03.21</div>
            </div>

            <div className="mHeight5" style={{display: "flex", height: "7vh", background: "white", fontWeight: "600", cursor: "pointer", borderBottom: "1px solid #E2E2E2"}} onClick={() => window.open("https://missionews.co.kr/news/583492")}>
              <div style={{display: "flex", width: "25%", justifyContent: "center", alignItems: "center"}}><img src={Gidok} alt="기독" style={{height: "55%"}}></img></div>
              <div style={{display: "flex", width: "50%", justifyContent: "center", alignItems: "center"}}><span style={{width: "100%", display: "block", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis"}}>7월 워싱턴 DC서 제9차 한인세계선교대회 개최… “예수, 온 인류의 소망”</span></div>
              <div style={{display: "flex", width: "25%", justifyContent: "center", alignItems: "center", fontWeight: "300"}}>2022.02.25</div>
            </div>

            <div className="mHeight5" style={{display: "flex", height: "7vh", background: "white", fontWeight: "600", cursor: "pointer", borderBottom: "1px solid #E2E2E2"}} onClick={() => window.open("http://news.kmib.co.kr/article/view.asp?arcid=0924224963&code=23111111&cp=nv")}>
              <div style={{display: "flex", width: "25%", justifyContent: "center", alignItems: "center"}}><img src={Gukmin} alt="국민" style={{height: "100%"}}></img></div>
              <div style={{display: "flex", width: "50%", justifyContent: "center", alignItems: "center"}}><span style={{width: "100%", display: "block", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis"}}>한인세계선교대회 내년 7월 워싱턴서 열린다</span></div>
              <div style={{display: "flex", width: "25%", justifyContent: "center", alignItems: "center", fontWeight: "300"}}>2021.12.29</div>
            </div>
          </div>
        </div>
      </div>
      
      
      <BottomBanner isHome={false}></BottomBanner>
    </div>
  );
}

export default Promotion;
