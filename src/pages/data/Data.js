import React, { useEffect, useState } from 'react';
import Header from '../../components/header';
import DataMenu from './DataMenu';
import TopBanner from '../../components/topBanner';
import BottomBanner from '../../components/bottomBanner';
// import 김정숙 from "/files/권종승_선교사(물_한_그릇_선교회)"

const Data = ({history}) => {
  const [section, setSection] = useState("a");

  return (
    <div style={{width: "100%", height: "100%", display: "flex", flexDirection: "column", background: "#ecf6fc"}}>
      <Header history={history}></Header>
      <TopBanner></TopBanner>
      <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
        <DataMenu history={history}/>
      </div>
      <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
        <div className="mWidth100 mTextSize mdLRBorder" style={{width: "60%", minHeight: "20px", border: "1px solid #E2E2E2", display: "flex", justifyContent: "space-around", alignItems: "center", cursor: "pointer", fontWeight: 500, fontSize: "1.3vw", color: "rgb(128, 127, 127)", flexWrap: "wrap"}}>
          <div className={section === "디아스포라" && "clickedMenu2"} onClick={() => setSection("디아스포라")}
            style={{borderRight: "1px solid #E2E2E2", borderBottom: "1px solid #E2E2E2", textAlign: "center", height: "7vh", wordBreak: "keep-all", width: "16.6666666%", display: "flex", justifyContent: "center", alignItems: "center", background: "white"}}>디아스포라</div>
          <div className={section === "도시선교" && "clickedMenu2"} onClick={() => setSection("도시선교")}
          style={{borderRight: "1px solid #E2E2E2", borderBottom: "1px solid #E2E2E2", textAlign: "center", height: "7vh", wordBreak: "keep-all", width: "16.6666666%", display: "flex", justifyContent: "center", alignItems: "center", background: "white"}}>도시선교</div>
          <div className={section === "플랫폼선교" && "clickedMenu2"} onClick={() => setSection("플랫폼선교")}
          style={{borderRight: "1px solid #E2E2E2", borderBottom: "1px solid #E2E2E2", textAlign: "center", height: "7vh", wordBreak: "keep-all", width: "16.6666666%", display: "flex", justifyContent: "center", alignItems: "center", background: "white"}}>플랫폼선교</div>
          <div className={section === "교육" && "clickedMenu2"} onClick={() => setSection("교육")}
          style={{borderRight: "1px solid #E2E2E2", borderBottom: "1px solid #E2E2E2", textAlign: "center", height: "7vh", wordBreak: "keep-all", width: "16.6666666%", display: "flex", justifyContent: "center", alignItems: "center", background: "white"}}>교육</div>
          <div className={section === "문화선교" && "clickedMenu2"} onClick={() => setSection("문화선교")}
          style={{borderRight: "1px solid #E2E2E2", borderBottom: "1px solid #E2E2E2", textAlign: "center", height: "7vh", wordBreak: "keep-all", width: "16.6666666%", display: "flex", justifyContent: "center", alignItems: "center", background: "white"}}>문화선교</div>
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
          <div className={section === "기타" && "clickedMenu2"} onClick={() => setSection("기타")}
          style={{borderRight: "1px solid #E2E2E2",  height: "7vh", wordBreak: "keep-all", width: "16.6666666%", textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center", background: "white"}}>기타</div>
          <div style={{ height: "7vh", width: "16.6666666%", textAlign: "center", wordBreak: "keep-all", display: "flex", justifyContent: "center", alignItems: "center", background: "white"}}></div>
        </div>
      </div>
      <div className="mMargin0" style={{width: "100%", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", marginTop: ".8vw", fontFamily: "Noto Sans KR, sans-serif"}}>
        <div className="mWidth100 mFlexContainer mTextSize" style={{width: "60%", display: "flex", padding: "3.5vw", border: "1px solid rgb(226, 226, 226)", fontSize: "1vw", marginBottom: "3.5vw", background: "white", flexDirection: "column"}}>
          <div style={{margin: "2vw", wordBreak: "keep-all"}}>** 대회가 진행되는 동안 일반참가자 및 교회와 현장선교사들의 원활한 네트워킹이 이뤄지기 위해 대회에 참여하는 선교사의 레포트를 공유합니다. 작성하신 각 선교사들의 사역에 대한 소개와 자료로 대회 참가자 누구나 열람이 가능합니다. 대회 전에 관심사역 분야에서 사역하는 선교사들의 정보를 열람하시고 미리 대회를 준비하시면 풍성한 교제의 장이 될 것입니다.</div>
          <div style={{marginTop: "3vh"}}>
            <ol style={{display: "inline-flex", flexWrap: "wrap"}}>
              <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%"}}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href={"http://kwmc2022.org/files/권종승 선교사(물 한 그릇 선교회)-기타(Wholistic Mission).pdf"}>권종승 선교사(물 한그릇 선교회)</a></li>
              <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="http://kwmc2022.org/files/김요셉-이다경 선교사(한국대학생선교회)-전방개척선교.hwpx">김요셉-이다경 선교사(한국대학생선교회)</a></li>
              <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="http://kwmc2022.org/files/김요엘 선교사((사)그린코리아네트워크)-전방개척선교.hwp">김요엘 선교사((사)그린코리아네트워크)</a></li>
              <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="http://kwmc2022.org/files/김윤식 선교사(기독교대한감리회)-기타(케냐감리교회본부사역).pdf">김윤식 선교사(기독교대한감리회)</a></li>

              <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="http://kwmc2022.org/files/김해영 선교사(밀알 복지재단_예장(백석)총회세계선교회원회)-비정부기구.hwp">김해영 선교사(밀알 복지재단_예장(백석)총회세계선교회원회)</a></li>
              <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="http://kwmc2022.org/files/노규석 목사(온누리교회)-디아스포라.docx">노규석 목사(온누리교회)</a></li>
              <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="http://kwmc2022.org/files/박진수 선교사(케냐국제학교교사)-교육.docx">박진수 선교사(케냐국제학교교사)</a></li>
              <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="http://kwmc2022.org/files/손광배(이경희) 선교사(GBT)-전방개척선교.docx">손광배(이경희) 선교사(GBT)</a></li>
              <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="http://kwmc2022.org/files/신영선-신봉순 선교사(Seed International _W.M.P)-교육.doc">신영선-신봉순 선교사(Seed International _W.M.P)</a></li>
              <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="http://kwmc2022.org/files/이경희 선교사(GBT)-전방개척선교.docx">이경희 선교사(GBT)</a></li>
              <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="http://kwmc2022.org/files/이광윤, 이영분 선교사 바울선교회)-디아스포라.hwp">이광윤, 이영분 선교사 (바울선교회)</a></li>
              <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="http://kwmc2022.org/files/이리사 선교사(국제도시선교회(ICM))-도시선교.docx">이리사 선교사(국제도시선교회(ICM))</a></li>
              <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="http://kwmc2022.org/files/이진호-장효빈 선교사(GMP 해외개척선교회)-교육.pdf">이진호-장효빈 선교사(GMP 해외개척선교회)</a></li>
              <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="http://kwmc2022.org/files/임도마 선교사(GP선교회)-BAM.docx">임도마 선교사(GP선교회)</a></li>
              <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="http://kwmc2022.org/files/장종학 선교사(소래선교회)-교육.docx">장종학 선교사(소래선교회)</a></li>
              <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="http://kwmc2022.org/files/정한길 선교사 (인터서브)-선교동원.docx">정한길 선교사 (인터서브)</a></li>
              <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="http://kwmc2022.org/files/진심-진정 선교사(중국대학선교회(CUM))-디아스포라.docx">진심-진정 선교사(중국대학선교회(CUM))</a></li>
              <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="http://kwmc2022.org/files/최남용-최형미 선교사(GP선교회)-교육.docx">최남용-최형미 선교사(GP선교회)</a></li>
              <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="http://kwmc2022.org/files/하혜자 선교사(Seed International)-교육.docx">하혜자 선교사(Seed International)</a></li>
              <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="http://kwmc2022.org/files/황인미 선교사(GMS)-전방개척선교.docx">황인미 선교사(GMS)-전방개척선교</a></li>
            </ol>
          </div>
        
        </div>
      </div>

        
      <BottomBanner isHome={false}></BottomBanner>
    </div>
  );
}

export default Data;
