import React, { useEffect, useState } from 'react';
import Header from '../../components/header';
import DataMenu from './DataMenu';
import { Button } from 'primereact/button';
import TopBanner from '../../components/topBanner';
import BottomBanner from '../../components/bottomBanner';
import { SelectButton } from 'primereact/selectbutton';

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
      {/* <img className="WebImage" style={{width: "100%", minHeight: "20vh"}} src={Vertical} alt="Vertical Poster" /> */}
      {/* <img className="MobImage" style={{width: "100%", height: "9vh"}} src={MVertical} alt="Vertical Poster" /> */}
      <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
        <div className="videoContainer notosanskr" style={{height: "10vh", display: "flex", justifyContent: "space-between", alignItems: "center"}}>
          <div style={{visibility: "hidden"}}><SelectButton value={isEng ? "Eng" : "Kor"} options={options} onChange={(e) => setIsEng(!isEng)} /></div>
          <div className="sSize" style={{display: isEng ? "none" : "flex", maxWidth: "37%", wordBreak: "keep-all"}}>KWMC 제9차 한인세계선교대회 홍보영상</div>
          <div className="sSize" style={{display: isEng ? "flex" : "none", maxWidth: "37%", wordBreak: "keep-all"}}>Promotion video for the 9th KWMC Korean World Mission Congress</div>
          {/* <Button style={{fontSize: ".7rem", minWidth: "5rem"}} className="p-button-secondary" onClick={() => setIsEng(!isEng)}>{!isEng ? "To English" : "한국버젼"}</Button> */}
          <SelectButton style={{fontSize: ".7rem", minWidth: "5rem"}} value={isEng ? "Eng" : "Kor"} options={options} onChange={(e) => setIsEng(!isEng)} />
        </div>
      </div>
      <div style={{width: "100%", display: isEng ? "flex" : "none", justifyContent: "center", background: "#ecf6fc", flexDirection: "column", alignItems: "center"}}>
        <iframe className="videoContainer" src="https://www.youtube.com/embed/LofCLjT95dw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen;" modestbranding="1" rel="0" >
        </iframe>
      </div>
      <div style={{width: "100%", display: isEng ? "none" : "flex", justifyContent: "center", background: "#ecf6fc", flexDirection: "column", alignItems: "center"}}>
        <iframe className="videoContainer" src="https://www.youtube.com/embed/sqIKi2SasGM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen;" modestbranding="1" rel="0" >
        </iframe>
      </div>
      <div style={{display:"flex", justifyContent: "center", width: "100%"}}>
        <div className="videoContainer3" style={{display: "flex"}}>
          <iframe style={{width: "50%", height: "100%"}} src="https://www.youtube.com/embed/zCn0pSaJfl8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen;" modestbranding="1" rel="0" >
          </iframe>
          <iframe style={{width: "50%", height: "100%"}} src="https://www.youtube.com/embed/Zf70NnhQt7c" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen;" modestbranding="1" rel="0" >
          </iframe>
        </div>
      </div>
      <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
        <div className="videoContainer notosanskr" style={{height: "100%", display: "flex", justifyContent: "space-between", flexDirection: "column"}}>
          <div style={{margin: "1rem", marginLeft: 0}}>기사 링크</div>

          <div><a href={`http://news.kmib.co.kr/article/view.asp?arcid=0924224963&code=23111111&cp=nv`}>국민일보 - 한인세계선교대회 내년 7월 워싱턴서 열린다</a></div>
          <div><a href={`https://missionews.co.kr/news/583492 `}>기독일보 - 7월 워싱턴 DC서 제9차 한인세계선교대회 개최…</a></div>
          <div><a href={`https://www.goodnews1.com/news/articleView.html?idxno=406109`}>데일리굿 - KWMC 선교대회 7월 개최…한국선교운동 계승 기대</a></div>
          <div style={{margin: "1rem", marginLeft: 0}}></div>

        </div>
      </div>
      
      <BottomBanner isHome={false}></BottomBanner>
    </div>
  );
}

export default Promotion;
