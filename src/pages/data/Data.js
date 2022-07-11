import React, { useEffect, useState } from 'react';
import Header from '../../components/header';
import DataMenu from './DataMenu';
import TopBanner from '../../components/topBanner';
import BottomBanner from '../../components/bottomBanner';
// import 김정숙 from "/files/권종승_선교사(물_한_그릇_선교회)"

const Data = ({history}) => {
  const [section, setSection] = useState("전체");

  return (
    <div style={{width: "100%", height: "100%", display: "flex", flexDirection: "column", background: "#ecf6fc"}}>
      <Header history={history}></Header>
      <TopBanner></TopBanner>
      <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
        <DataMenu history={history}/>
      </div>
      <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
        <div className="mWidth100 mTextSize3 mdLRBorder" style={{width: "60%", minHeight: "20px", border: "1px solid #E2E2E2", display: "flex", justifyContent: "space-around", alignItems: "center", cursor: "pointer", fontWeight: 500, fontSize: "1.3vw", color: "rgb(128, 127, 127)", flexWrap: "wrap"}}>
          <div className={section === "디아스포라" && "clickedMenu2"} onClick={() => setSection("디아스포라")}
            style={{borderRight: "1px solid #E2E2E2", borderBottom: "1px solid #E2E2E2", textAlign: "center", height: "9vh", wordBreak: "keep-all", width: "16.6666666%", display: "flex", justifyContent: "center", alignItems: "center", background: "white"}}>디아스포라<br></br>(Diaspora)</div>
          <div className={section === "도시선교" && "clickedMenu2"} onClick={() => setSection("도시선교")}
          style={{borderRight: "1px solid #E2E2E2", borderBottom: "1px solid #E2E2E2", textAlign: "center", height: "9vh", wordBreak: "keep-all", width: "16.6666666%", display: "flex", justifyContent: "center", alignItems: "center", background: "white"}}>도시선교<br></br>(City Mission)</div>
          <div className={section === "플랫폼선교" && "clickedMenu2"} onClick={() => setSection("플랫폼선교")}
          style={{borderRight: "1px solid #E2E2E2", borderBottom: "1px solid #E2E2E2", textAlign: "center", height: "9vh", wordBreak: "keep-all", width: "16.6666666%", display: "flex", justifyContent: "center", alignItems: "center", background: "white"}}>플랫폼선교<br></br>(Platform Mission)</div>
          <div className={section === "교육" && "clickedMenu2"} onClick={() => setSection("교육")}
          style={{borderRight: "1px solid #E2E2E2", borderBottom: "1px solid #E2E2E2", textAlign: "center", height: "9vh", wordBreak: "keep-all", width: "16.6666666%", display: "flex", justifyContent: "center", alignItems: "center", background: "white"}}>교육<br></br>(Education)</div>
          <div className={section === "문화선교" && "clickedMenu2"} onClick={() => setSection("문화선교")}
          style={{borderRight: "1px solid #E2E2E2", borderBottom: "1px solid #E2E2E2", textAlign: "center", height: "9vh", wordBreak: "keep-all", width: "16.6666666%", display: "flex", justifyContent: "center", alignItems: "center", background: "white"}}>문화선교<br></br>(Culture Mission)</div>
          <div className={section === "NGO와 국제기구" && "clickedMenu2"} onClick={() => setSection("NGO와 국제기구")}
            style={{textAlign: "center", height: "9vh", wordBreak: "keep-all", borderBottom: "1px solid #E2E2E2", width: "16.6666666%", display: "flex", justifyContent: "center", alignItems: "center", background: "white"}}>NGO와 국제기구 (NGO & International Organization)</div>
          <div className={section === "BAM" && "clickedMenu2"} onClick={() => setSection("BAM")}
          style={{borderRight: "1px solid #E2E2E2",  height: "9vh", wordBreak: "keep-all", width: "16.6666666%", textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center", background: "white"}}>BAM<br></br>(Business As Mission)</div>
          <div className={section === "선교동원" && "clickedMenu2"} onClick={() => setSection("선교동원")}
          style={{borderRight: "1px solid #E2E2E2",  height: "9vh", wordBreak: "keep-all", width: "16.6666666%", textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center", background: "white"}}>선교동원 (Mission Mobilization)</div>
          <div className={section === "선교적교회" && "clickedMenu2"} onClick={() => setSection("선교적교회")}
          style={{borderRight: "1px solid #E2E2E2",  height: "9vh", wordBreak: "keep-all", width: "16.6666666%", textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center", background: "white"}}>선교적 교회<br></br>(Missional Church)</div>
          <div className={section === "전방개척사역" && "clickedMenu2"} onClick={() => setSection("전방개척사역")}
          style={{borderRight: "1px solid #E2E2E2",  height: "9vh", wordBreak: "keep-all", width: "16.6666666%", textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center", background: "white"}}>전방개척 사역 (Frontier Ministry)</div>
          <div className={section === "기타" && "clickedMenu2"} onClick={() => setSection("기타")}
          style={{borderRight: "1px solid #E2E2E2",  height: "9vh", wordBreak: "keep-all", width: "16.6666666%", textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center", background: "white"}}>기타<br></br>(Etc.)</div>
          <div className={section === "전체" && "clickedMenu2"} onClick={() => setSection("전체")} style={{ height: "9vh", width: "16.6666666%", textAlign: "center", wordBreak: "keep-all", display: "flex", justifyContent: "center", alignItems: "center", background: "white"}}>전체<br></br>(All)</div>
        </div>
      </div>
      <div className="mMargin0" style={{width: "100%", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", marginTop: ".8vw", fontFamily: "Noto Sans KR, sans-serif"}}>
        <div className="mWidth100 mFlexContainer mMenuTextSize" style={{width: "60%", display: "flex", padding: "1rem", border: "1px solid rgb(226, 226, 226)", fontSize: "1vw", marginBottom: "3.5vw", background: "white", flexDirection: "column"}}>
          <div className="titleFont" style={{width: "100%", display: "flex", justifyContent: "center", color: "#163875", fontWeight: "600"}}>{section}</div>
          
          <div style={{margin: "1rem", wordBreak: "keep-all"}}>** 대회가 진행되는 동안 일반참가자 및 교회와 현장선교사들의 원활한 네트워킹이 이뤄지기 위해 대회에 참여하는 선교사의 레포트를 공유합니다. 작성하신 각 선교사들의 사역에 대한 소개와 자료로 대회 참가자 누구나 열람이 가능합니다. 대회 전에 관심사역 분야에서 사역하는 선교사들의 정보를 열람하시고 미리 대회를 준비하시면 풍성한 교제의 장이 될 것입니다.</div>
          <div style={{margin: "1rem", wordBreak: "keep-all"}}>** 보안관련 이슈로 누구나 열람이 아닌 대회참여자중에 관심자들에게만 공유하길 원하는 선교사는 따로 요청해주시기 바랍니다. <span style={{color: "#143674", fontWeight: "700"}}><a style={{textDecoration: "none", color: "#143674", fontWeight: "700"}} href="mailto:kwmc.report@gmail.com">kwmc.report@gmail.com</a></span></div>

          <div style={{marginTop: ".5vh"}}>
            {section === "디아스포라" &&
            <ol style={{display: "inline-flex", flexWrap: "wrap", width: "100%"}}>
               <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="http://kwmc2022.org/files/노규석 목사(온누리교회)-디아스포라.docx">노규석 목사(국내이주민/중동)</a></li>
               <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="http://kwmc2022.org/files/오인열 선교사(GMS)-디아스포라.docx">오인열 선교사(미국/중국)</a></li>

              <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="http://kwmc2022.org/files/이광윤, 이영분 선교사 바울선교회)-디아스포라.hwp">이광윤-이영분 선교사(국내이주민/나이지리아)</a></li>
              <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="http://kwmc2022.org/files/진심-진정 선교사(중국대학선교회(CUM))-디아스포라.docx">진심-진정 선교사(중국/체코)</a></li>
              <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="http://kwmc2022.org/files/최명란 선교사(GMS(총회세계선교회))-디아스포라.hwp">최명란 선교사(미국)</a></li>

            </ol>
            }
            {section === "도시선교" &&
            <ol style={{display: "inline-flex", flexWrap: "wrap", width: "100%"}}>
              <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="http://kwmc2022.org/files/이리사 선교사(국제도시선교회(ICM))-도시선교.pdf">이리사 선교사(한국)</a></li>
            </ol>
            }
            {section === "플랫폼선교" &&
            <ol style={{display: "inline-flex", flexWrap: "wrap", width: "100%"}}>
            </ol>
            }
            {section === "교육" &&
            <ol style={{display: "inline-flex", flexWrap: "wrap", width: "100%"}}>
              <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%"}}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href={"http://kwmc2022.org/files/김동조 선교사(중국-말레이시아)-교육.docx"}>김동조 선교사(중국-말레이시아)</a></li>
              <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="http://kwmc2022.org/files/문성환-배선종 선교사(IMV)-교육.hwp">문성환-배선종 선교사(피지)</a></li>
              <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="https://drive.google.com/file/d/15km5V0-3I2T5Qa327Vw6pyXy4QUYH_0q/view?usp=sharing">민윤기 선교사(태국)</a></li>

              <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="http://kwmc2022.org/files/박에스더 선교사(GP USA)-교육.docx">박에스더 선교사(미국)</a></li>

              <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="http://kwmc2022.org/files/박진수 선교사(케냐국제학교교사)-교육.docx">박진수 선교사(북아프리카)</a></li>
              <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="http://kwmc2022.org/files/박찬수-정은영 선교사(한국 어린이 교육 선교회(꽃동산 교회))-교육.pdf">박찬수-정은영 선교사(케냐)</a></li>

              <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="http://kwmc2022.org/files/박태준-김미정 선교사(미주성결교회)-교육.docx">박태준-김미정 선교사(브라질/아마존)</a></li>

              <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="http://kwmc2022.org/files/신영선-신봉순 선교사(Seed International _W.M.P)-교육.doc">신영선-신봉순 선교사(태국)</a></li>
              <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="http://kwmc2022.org/files/이진호-장효빈 선교사(GMP 해외개척선교회)-교육.pdf">이진호-장효빈 선교사(에콰도르)</a></li>
              <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="http://kwmc2022.org/files/장종학 선교사(소래선교회)-교육.docx">장종학 선교사(중국(현재본부))</a></li>
              <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="http://kwmc2022.org/files/최남용-최형미 선교사(GP USA)-교육.docx">최남용-최형미 선교사(과테말라)</a></li>
              <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="http://kwmc2022.org/files/최윤수-서미경 선교사(기독교대한감리회)-교육.pdf">최윤수-서미경 선교사(필리핀)</a></li>

              <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="http://kwmc2022.org/files/하혜자 선교사(Seed International)-교육.docx">하혜자 선교사(캄보디아)</a></li>
            </ol>
            }
            {section === "문화선교" &&
            <ol style={{display: "inline-flex", flexWrap: "wrap", width: "100%"}}>
                <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="http://kwmc2022.org/files/박종희 목사(코이노니아 선교회)-문화사역.pdf">박종희 목사(미국(L.A))</a></li>
                <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="http://kwmc2022.org/files/최영주선교사(부산용산교회) - 문화선교.pdf">최영주 선교사(세네갈)</a></li>

            </ol>
            }
            {section === "NGO와 국제기구" &&
            <ol style={{display: "inline-flex", flexWrap: "wrap", width: "100%"}}>
              <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="http://kwmc2022.org/files/김해영 선교사(밀알 복지재단_예장(백석)총회세계선교회원회)-비정부기구.hwp">김해영 선교사(케냐)</a></li>
              <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="http://kwmc2022.org/files/조성덕 선교사((Handicap Initiative Support And Network)-비정부기구.docx">조성덕 선교사(소말리아)</a></li>

            </ol>
            }
            {section === "BAM" &&
            <ol style={{display: "inline-flex", flexWrap: "wrap", width: "100%"}}>
              <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="http://kwmc2022.org/files/임도마 선교사(GP선교회)-BAM.pdf">임도마 선교사(베트남)</a></li>
              <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none", pointerEvents: "none"}} href="http://kwmc2022.org/files/정일리오-박무하밧 선교사(기독교한국침례회).docx">정일리오-박무하밧 선교사(우즈베키스탄)_핸드북 QR 통해서만 다운로드 가능합니다</a></li>

            </ol>
            }
            {section === "선교동원" &&
            <ol style={{display: "inline-flex", flexWrap: "wrap", width: "100%"}}>
              <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="http://kwmc2022.org/files/안성원-조은숙 선교사(GP선교회)-선교동원.docx">안성원-조은숙 선교사(인도네시아)</a></li>
              <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="http://kwmc2022.org/files/이민우 선교사(Korean Baptist Convention mission board)-선교동원.docx">이민우 선교사(싱가폴/중국/대만)</a></li>
              <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="http://kwmc2022.org/files/정한길 선교사 (인터서브)-선교동원.docx">정한길 선교사(알바니아/코소보/중국(현재미국))</a></li>
            </ol>
            }
            {section === "선교적교회" &&
            <ol style={{display: "inline-flex", flexWrap: "wrap", width: "100%"}}>
              <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="http://kwmc2022.org/files/박영완 선교사(GP USA)-선교적교회.pdf">박영완 선교사(칠레/볼리비아/멕시코)</a></li>
                <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="http://kwmc2022.org/files/유한진-조경숙 선교사(예장 통합)-선교적교회.hwp">유한진-조경숙 선교사(태국)</a></li>

            </ol>
            }
            {section === "전방개척사역" &&
            <ol style={{display: "inline-flex", flexWrap: "wrap", width: "100%"}}>
              <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="http://kwmc2022.org/files/김요셉-이다경 선교사(한국대학생선교회)-수정-전방개척선교.hwpx">김요셉-이다경 선교사(파키스탄)</a></li>
              {/* <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="http://kwmc2022.org/files/김요엘 선교사((사)그린코리아네트워크)-전방개척선교.hwp">김요엘 선교사((사)그린코리아네트워크)</a></li> */}
              <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="http://kwmc2022.org/files/김종현-이흥란 선교사(미주한인예수교장로회)-전방개척선교.docx">김종현-이흥란 선교사(남아프리카공화국)</a></li>
              <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="http://kwmc2022.org/files/노금석 선교사(GMS) - 전방개척선교.pdf">노금석 선교사(세네갈)</a></li>

              <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none", pointerEvents: "none"}} href="http://kwmc2022.org/files/문열린 선교사, 이수현 선교사(FMB(기독교한국침레회 해외선교회))_(핸드북 QR 통해서만 다운로드 가능합니다)-전방개척선교.pdf">문열린-이수현 선교사(튀르키예)_핸드북 QR 통해서만 다운로드 가능합니다</a></li>
              <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="http://kwmc2022.org/files/박광하-김미선 선교사(GMS)-전방개척선교.docx">박광하-김미선 선교사(중국/필리핀)</a></li>
              <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="http://kwmc2022.org/files/박상배 선교사(GP선교회)-전방개척선교.pdf">박상배 선교사(인도네시아/말레이시아)</a></li>

              <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="http://kwmc2022.org/files/손광배(이경희) 선교사(GBT)-전방개척선교.docx">손광배(이경희) 선교사(미얀마)</a></li>
              <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="http://kwmc2022.org/files/수남 라트나-정유선 선교사-전방개척선교.pdf">수남 라트나-정유선 선교사(인도)</a></li>
              <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="http://kwmc2022.org/files/이경승 정다운 선교사(GP USA)-전방개척선교.docx">이경승-정다운 선교사(브라질)</a></li>
              <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="http://kwmc2022.org/files/이경희 선교사(GBT)-전방개척선교.docx">이경희 선교사(미얀마)</a></li>
              <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="http://kwmc2022.org/files/이준섭-주희경 선교사(GP선교회)-기타(MK).hwp">이준섭-주희경 선교사(이스라엘(현재본부))</a></li>

              <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none", pointerEvents: "none"}} href="http://kwmc2022.org/files/정경석 선교사(미주한인침례회 해외선교부)-전방개척선교.pdf">정경석 선교사(쿠바/베네수엘라)_핸드북 QR 통해서만 다운로드 가능합니다</a></li>
              <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="http://kwmc2022.org/files/황인미 선교사(GMS)-전방개척선교.docx">황인미 선교사(페루)</a></li>
            </ol>
            }
            {section === "기타" &&
            <ol style={{display: "inline-flex", flexWrap: "wrap", width: "100%"}}>
              <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%"}}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href={"http://kwmc2022.org/files/권종승 선교사(물 한 그릇 선교회)-기타(Wholistic Mission).pdf"}>권종승 선교사(솔로몬 아일랜드)-Wholistic Mission</a></li>
              <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%"}}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href={"http://kwmc2022.org/files/김광전-배성미 선교사(총회세계선교회(GMS)-기타(종족선교 빈민선교).pdf"}>김광전-배성미 선교사(필리핀(민다나오))-종족선교 빈민선교</a></li>

              <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%"}}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href={"http://kwmc2022.org/files/김동건-배영혜 선교사(GP선교회) - 기타(본부사역).pdf"}>김동건-배영혜 선교사(태국(현재본부))-본부사역</a></li>
              <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="http://kwmc2022.org/files/김윤식 선교사(기독교대한감리회)-기타(케냐감리교회본부사역).pdf">김윤식 선교사(케냐)-케냐감리교회본부사역</a></li>
              <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="http://kwmc2022.org/files/김은하 선교사(연합감리교(애틀란타))-기타(교단 세계선교부 본부사역)docx.docx">김은하 선교사(필리핀)-교단 세계선교부 본부사역</a></li>

              <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="http://kwmc2022.org/files/김혜한 선교사(비빌언덕 사모의 집)-기타(사모들의 쉼과 위로).docx">김혜한 선교사(캐나다(밴쿠버))-사모들의 쉼과 위로</a></li>
              <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="http://kwmc2022.org/files/배선호 선교사(GP USA)-기타(GP USA 대표 사역).docx">배선호 선교사(미국/동아시아)-GP USA 대표 사역</a></li>
              <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="http://kwmc2022.org/files/이순례 선교사(하나목양교회)-기타(북한사역).docx">이순례 선교사(한국)-북한사역</a></li>
              <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="http://kwmc2022.org/files/탁영준-탁정원 선교사(CMF 선교원)-기타(MK사역).pdf">탁영준-탁정원 선교사(페루)-MK사역</a></li>


            </ol>
            }
            {section === "전체" &&
            <ol style={{display: "inline-flex", flexWrap: "wrap", width: "100%"}}>
              <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%"}}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href={"http://kwmc2022.org/files/권종승 선교사(물 한 그릇 선교회)-기타(Wholistic Mission).pdf"}>권종승 선교사(솔로몬 아일랜드)</a></li>
              <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%"}}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href={"http://kwmc2022.org/files/김광전-배성미 선교사(총회세계선교회(GMS)-기타(종족선교 빈민선교).pdf"}>김광전-배성미 선교사(필리핀(민다나오))</a></li>
              <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%"}}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href={"http://kwmc2022.org/files/김동건-배영혜 선교사(GP선교회) - 기타(본부사역).pdf"}>김동건-배영혜 선교사(태국(현재본부))</a></li>
              <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%"}}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href={"http://kwmc2022.org/files/김동조 선교사(중국-말레이시아)-교육.docx"}>김동조 선교사(중국-말레이시아)</a></li>
              <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="http://kwmc2022.org/files/김요셉-이다경 선교사(한국대학생선교회)-수정-전방개척선교.hwpx">김요셉-이다경 선교사(파키스탄)</a></li>
              {/* <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="http://kwmc2022.org/files/김요엘 선교사((사)그린코리아네트워크)-전방개척선교.hwp">김요엘 선교사((사)그린코리아네트워크)</a></li> */}
              <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="http://kwmc2022.org/files/김윤식 선교사(기독교대한감리회)-기타(케냐감리교회본부사역).pdf">김윤식 선교사(케냐)</a></li>
              <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="http://kwmc2022.org/files/김은하 선교사(연합감리교(애틀란타))-기타(교단 세계선교부 본부사역)docx.docx">김은하 선교사(필리핀)</a></li>
              <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="http://kwmc2022.org/files/김종현-이흥란 선교사(미주한인예수교장로회)-전방개척선교.docx">김종현-이흥란 선교사(남아프리카공화국)</a></li>

              <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="http://kwmc2022.org/files/김해영 선교사(밀알 복지재단_예장(백석)총회세계선교회원회)-비정부기구.hwp">김해영 선교사(케냐)</a></li>
              <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="http://kwmc2022.org/files/김혜한 선교사(비빌언덕 사모의 집)-기타(사모들의 쉼과 위로).docx">김혜한 선교사(캐나다(밴쿠버))</a></li>
              <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="http://kwmc2022.org/files/노규석 목사(온누리교회)-디아스포라.docx">노규석 목사(국내이주민/중동)</a></li>
              {/* check */}
              <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="http://kwmc2022.org/files/노금석 선교사(GMS) - 전방개척선교.pdf">노금석 선교사(세네갈)</a></li>
              <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="http://kwmc2022.org/files/문성환-배선종 선교사(IMV)-교육.hwp">문성환-배선종 선교사(피지)</a></li>
              <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none", pointerEvents: "none"}} href="http://kwmc2022.org/files/문열린 선교사, 이수현 선교사(FMB(기독교한국침레회 해외선교회))_(핸드북 QR 통해서만 다운로드 가능합니다)-전방개척선교.pdf">문열린-이수현 선교사(튀르키예)_핸드북 QR 통해서만 다운로드 가능합니다</a></li>

              <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="https://drive.google.com/file/d/15km5V0-3I2T5Qa327Vw6pyXy4QUYH_0q/view?usp=sharing">민윤기 선교사(태국)</a></li>
              <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="http://kwmc2022.org/files/박광하-김미선 선교사(GMS)-전방개척선교.docx">박광하-김미선 선교사(중국/필리핀)</a></li>

              <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="http://kwmc2022.org/files/박상배 선교사(GP선교회)-전방개척선교.pdf">박상배 선교사(인도네시아/말레이시아)</a></li>
              <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="http://kwmc2022.org/files/박에스더 선교사(GP USA)-교육.docx">박에스더 선교사(미국)</a></li>
              <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="http://kwmc2022.org/files/박영완 선교사(GP USA)-선교적교회.pdf">박영완 선교사(칠레/볼리비아/멕시코)</a></li>
              <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="http://kwmc2022.org/files/박종희 목사(코이노니아 선교회)-문화사역.pdf">박종희 목사(미국(L.A))</a></li>
              <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="http://kwmc2022.org/files/박진수 선교사(케냐국제학교교사)-교육.docx">박진수 선교사(북아프리카)</a></li>
              <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="http://kwmc2022.org/files/박찬수-정은영 선교사(한국 어린이 교육 선교회(꽃동산 교회))-교육.pdf">박찬수-정은영 선교사(케냐)</a></li>
              <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="http://kwmc2022.org/files/박태준-김미정 선교사(미주성결교회)-교육.docx">박태준-김미정 선교사(브라질/아마존)</a></li>
              <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="http://kwmc2022.org/files/배선호 선교사(GP USA)-기타(GP USA 대표 사역).docx">배선호 선교사(미국/동아시아)</a></li>
              <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="http://kwmc2022.org/files/손광배(이경희) 선교사(GBT)-전방개척선교.docx">손광배(이경희) 선교사(미얀마)</a></li>
              <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="http://kwmc2022.org/files/수남 라트나-정유선 선교사-전방개척선교.pdf">수남 라트나-정유선 선교사(인도)</a></li>
              <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="http://kwmc2022.org/files/안성원-조은숙 선교사(GP선교회)-선교동원.docx">안성원-조은숙 선교사(인도네시아)</a></li>
              <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="http://kwmc2022.org/files/신영선-신봉순 선교사(Seed International _W.M.P)-교육.doc">신영선-신봉순 선교사(태국)</a></li>
              <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="http://kwmc2022.org/files/오인열 선교사(GMS)-디아스포라.docx">오인열 선교사(미국/중국)</a></li>
              <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="http://kwmc2022.org/files/유한진-조경숙 선교사(예장 통합)-선교적교회.hwp">유한진-조경숙 선교사(태국)</a></li>
              <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="http://kwmc2022.org/files/이경승 정다운 선교사(GP USA)-전방개척선교.docx">이경승-정다운 선교사(브라질)</a></li>
              <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="http://kwmc2022.org/files/이경희 선교사(GBT)-전방개척선교.docx">이경희 선교사(미얀마)</a></li>
              <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="http://kwmc2022.org/files/이광윤, 이영분 선교사 바울선교회)-디아스포라.hwp">이광윤-이영분 선교사(국내이주민/나이지리아)</a></li>
              <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="http://kwmc2022.org/files/이리사 선교사(국제도시선교회(ICM))-도시선교.pdf">이리사 선교사(한국)</a></li>
              <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="http://kwmc2022.org/files/이민우 선교사(Korean Baptist Convention mission board)-선교동원.docx">이민우 선교사(싱가폴/중국/대만)</a></li>
              <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="http://kwmc2022.org/files/이순례 선교사(하나목양교회)-기타(북한사역).docx">이순례 선교사(한국)</a></li>
              <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="http://kwmc2022.org/files/이준섭-주희경 선교사(GP선교회)-기타(MK).hwp">이준섭-주희경 선교사(이스라엘(현재본부))</a></li>
              <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="http://kwmc2022.org/files/이진호-장효빈 선교사(GMP 해외개척선교회)-교육.pdf">이진호-장효빈 선교사(에콰도르)</a></li>
              <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="http://kwmc2022.org/files/임도마 선교사(GP선교회)-BAM.pdf">임도마 선교사(베트남)</a></li>
              <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="http://kwmc2022.org/files/장종학 선교사(소래선교회)-교육.docx">장종학 선교사(중국(현재본부))</a></li>
              <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none", pointerEvents: "none"}} href="http://kwmc2022.org/files/정경석 선교사(미주한인침례회 해외선교부)-전방개척선교.pdf">정경석 선교사(쿠바/베네수엘라)_핸드북 QR 통해서만 다운로드 가능합니다</a></li>
              <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none", pointerEvents: "none"}} href="http://kwmc2022.org/files/정일리오-박무하밧 선교사(기독교한국침례회).docx">정일리오-박무하밧 선교사(우즈베키스탄)_핸드북 QR 통해서만 다운로드 가능합니다</a></li>
              <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="http://kwmc2022.org/files/정한길 선교사 (인터서브)-선교동원.docx">정한길 선교사(알바니아/코소보/중국(현재미국))</a></li>
              <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="http://kwmc2022.org/files/조성덕 선교사((Handicap Initiative Support And Network)-비정부기구.docx">조성덕 선교사(소말리아)</a></li>
              <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="http://kwmc2022.org/files/진심-진정 선교사(중국대학선교회(CUM))-디아스포라.docx">진심-진정 선교사(중국/체코)</a></li>
              <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="http://kwmc2022.org/files/최남용-최형미 선교사(GP USA)-교육.docx">최남용-최형미 선교사(과테말라)</a></li>
              <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="http://kwmc2022.org/files/최명란 선교사(GMS(총회세계선교회))-디아스포라.hwp">최명란 선교사(미국)</a></li>
              {/* check */}
              <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="http://kwmc2022.org/files/최영주선교사(부산용산교회) - 문화선교.pdf">최영주 선교사(세네갈)</a></li>
              <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="http://kwmc2022.org/files/최윤수-서미경 선교사(기독교대한감리회)-교육.pdf">최윤수-서미경 선교사(필리핀)</a></li>
              <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="http://kwmc2022.org/files/탁영준-탁정원 선교사(CMF 선교원)-기타(MK사역).pdf">탁영준-탁정원 선교사(페루)</a></li>
              <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="http://kwmc2022.org/files/하혜자 선교사(Seed International)-교육.docx">하혜자 선교사(캄보디아)</a></li>
              <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="http://kwmc2022.org/files/황인미 선교사(GMS)-전방개척선교.docx">황인미 선교사(페루)</a></li>
            </ol>
            }
          </div>
        
        </div>
      </div>

        
      <BottomBanner isHome={false}></BottomBanner>
    </div>
  );
}

export default Data;
