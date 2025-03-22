import React, { useEffect, useState } from 'react';
import Header from '../../components/header';
import DataMenu from './DataMenu';
import TopBanner from '../../components/topBanner';
import BottomBanner from '../../components/bottomBanner';

const Update = ({history}) => {
  const [section, setSection] = useState("디아스포라");
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
            <div className={section === "문화예술" && "clickedMenu2"} onClick={() => setSection("문화예술")}
            style={{borderRight: "1px solid #E2E2E2", borderBottom: "1px solid #E2E2E2", textAlign: "center", height: "9vh", wordBreak: "keep-all", width: "16.6666666%", display: "flex", justifyContent: "center", alignItems: "center", background: "white"}}>문화예술 & 미디어 (Culture,Art &Media)</div>
            <div className={section === "교육" && "clickedMenu2"} onClick={() => setSection("교육")}
            style={{borderRight: "1px solid #E2E2E2", borderBottom: "1px solid #E2E2E2", textAlign: "center", height: "9vh", wordBreak: "keep-all", width: "16.6666666%", display: "flex", justifyContent: "center", alignItems: "center", background: "white"}}>교육<br></br>(Education)</div>
            <div className={section === "NGO와 국제기구" && "clickedMenu2"} onClick={() => setSection("NGO와 국제기구")}
              style={{borderRight: "1px solid #E2E2E2", borderBottom: "1px solid #E2E2E2", textAlign: "center", height: "9vh", wordBreak: "keep-all", width: "16.6666666%", display: "flex", justifyContent: "center", alignItems: "center", background: "white"}}>NGO와 국제기구 (NGO & International Organization)</div>
            <div className={section === "BAM" && "clickedMenu2"} onClick={() => setSection("BAM")}
            style={{height: "9vh", wordBreak: "keep-all", borderBottom: "1px solid #E2E2E2", width: "16.6666666%", textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center", background: "white"}}>BAM<br></br>(Business As Mission)</div>
            <div className={section === "선교동원" && "clickedMenu2"} onClick={() => setSection("선교동원")}
            style={{borderRight: "1px solid #E2E2E2",  height: "9vh", wordBreak: "keep-all", width: "16.6666666%", textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center", background: "white"}}>선교동원<br></br>(Mission Mobilzation)</div>
            <div className={section === "선교적교회" && "clickedMenu2"} onClick={() => setSection("선교적교회")}
            style={{borderRight: "1px solid #E2E2E2",  height: "9vh", wordBreak: "keep-all", width: "16.6666666%", textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center", background: "white"}}>선교적 교회<br></br>(Missional Church)</div>
            <div className={section === "전방개척선교" && "clickedMenu2"} onClick={() => setSection("전방개척선교")}
            style={{borderRight: "1px solid #E2E2E2",  height: "9vh", wordBreak: "keep-all", width: "16.6666666%", textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center", background: "white"}}>전방개척 사역<br></br>(Frontier Ministry)</div>
            <div className={section === "선교적공동체성경읽기" && "clickedMenu2"} onClick={() => setSection("선교적공동체성경읽기")}
            style={{borderRight: "1px solid #E2E2E2",  height: "9vh", wordBreak: "keep-all", width: "16.6666666%", textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center", background: "white"}}>선교적 공동체 성경읽기 (Bible Engagement)</div>
            <div className={section === "선교협력" && "clickedMenu2"} onClick={() => setSection("선교협력")}
            style={{borderRight: "1px solid #E2E2E2", textAlign: "center", height: "9vh", wordBreak: "keep-all", width: "16.6666666%", display: "flex", justifyContent: "center", alignItems: "center", background: "white"}}>선교협력<br></br>(Mission Cooperation)</div>
            
            <div className={section === "MK" && "clickedMenu2"} onClick={() => setSection("MK")} style={{ height: "9vh", width: "16.6666666%", textAlign: "center", wordBreak: "keep-all", display: "flex", justifyContent: "center", alignItems: "center", background: "white"}}>선교사자녀<br></br>(Missionary Kids)</div>
          </div>
        </div>

        <div className="mMargin0" style={{width: "100%", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", marginTop: ".8vw", fontFamily: "Noto Sans KR, sans-serif"}}>
          <div className="mWidth100 mFlexContainer mMenuTextSize" style={{width: "60%", display: "flex", padding: "1rem", border: "1px solid rgb(226, 226, 226)", fontSize: "1vw", marginBottom: "3.5vw", background: "white", flexDirection: "column"}}>
                    
            {section === "디아스포라" &&
              <ol style={{display: "inline-flex", flexWrap: "wrap", width: "100%"}}>
                  <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="/kwmc/files/영역별모임/디아스포라/01 지용주 목사 - 이웃에 와 있는 열방, “난민” - 미주 난민 사역의 선교적 모델.pdf">지용주 목사</a></li>
                  <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="/kwmc/files/영역별모임/디아스포라/02 백신종 목사 - 미주한인디아스포라 교회의 선교적 역할.docx">백신종 목사</a></li>
                  <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="/kwmc/files/영역별모임/디아스포라/03 박성현 목사 - ‘조용한’ 부흥, 보스톤의 이민자 주체 부흥 사례.docx">박성현 목사</a></li>
                  <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="/kwmc/files/영역별모임/디아스포라/04 백운영 목사 - 복음의 주체로서의 디아스포라 역할.docx">백운영 목사</a></li>
                  <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="/kwmc/files/영역별모임/디아스포라/05 최남용 목사 - 미주와 중남미 한인 디아스포라의 라틴 아메리카와 세계 선교적 역활.docx">최남용 목사</a></li>
                  <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="/kwmc/files/영역별모임/디아스포라/06 노규석 목사 - 온누리교회의 다문화 선교 역사와 사역 (2022 kwmc 발표 자료)-1.docx">노규석 목사</a></li>
                  <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="/kwmc/files/영역별모임/디아스포라/07 홍광표 목사 -2022 제9차 KWMC 한인세계선교대회 _ 재한 디아스포라 선교의 성경적 역파송__Reverse Mission_ 사례 연구.hwp">홍광표 목사</a></li>
              </ol>
            }
            {section === "교육" &&
              <ol style={{display: "inline-flex", flexWrap: "wrap", width: "100%"}}>
                  <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="/kwmc/files/영역별모임/교육/01 홍화옥 선교사 - Why Education_.docx">홍화옥 선교사</a></li>
                  <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="/kwmc/files/영역별모임/교육/02 정금태(Nathanael Jeong) 선교사 - 교육선교의 중요성과 사회에 미칠 영향.doc">정금태(Nathanael Jeong) 선교사</a></li>
                  <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="/kwmc/files/영역별모임/교육/03 Jinsoo Park(박진수 선교사) - MK Ministry and Importance of MK Education.docx">Jinsoo Park(박진수 선교사)</a></li>
                  <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="/kwmc/files/영역별모임/교육/04 Hemi Kong - KWMC Testimony.docx">Hemi Kong</a></li>
                  <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="/kwmc/files/영역별모임/교육/05 David Kong - Education to change lives.docx">David Kong</a></li>
                  <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="/kwmc/files/영역별모임/교육/06 김치남 목사 - 코로나펜데믹으로 추락한 교육과 선교, 가정예배로 리셋하라.hwp">김치남 목사</a></li>
                  <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="/kwmc/files/영역별모임/교육/07 Dr. Ron Hunter - Raising Tiny Disciples 25 FUN WAYS Final.pdf">Dr. Ron Hunter</a></li>
                  <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="/kwmc/files/영역별모임/교육/08 피승호 박사 - 다음세대를 이끌어갈 교육선교 더이상 미룰수 없다.docx">피승호 박사</a></li>
                  <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="/kwmc/files/영역별모임/교육/09 Elly Kang - AAH!.docx">Elly Kang</a></li>
                  <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="/kwmc/files/영역별모임/교육/10 Young Ah Lee - New Mission in New Normal.docx">Young Ah Lee</a></li>
              </ol>
            }
            {section === "BAM" &&
              <ol style={{display: "inline-flex", flexWrap: "wrap", width: "100%"}}>
                  <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="/kwmc/files/영역별모임/BAM/01 KWMC BAM Track - 김동건 선교사 - 성경과 역사에 기초한 BAM 이해.docx">김동건 선교사</a></li>
                  <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="/kwmc/files/영역별모임/BAM/02 KWMC BAM Track - 이다니엘 사무총장 - 비즈니스 그 자체로서의 선교.docx">이다니엘 사무총장</a></li>
                  <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="/kwmc/files/영역별모임/BAM/03KWMC BAM Tract - 오선일 목사 - 일터사역 길라잡이.docx">오선일 목사</a></li>
                  <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="/kwmc/files/영역별모임/BAM/04 KWMC BAM Track - 조차희 박사 - Model-based Leadership Summary.docx">조차희 박사</a></li>
                  <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="/kwmc/files/영역별모임/BAM/05 KWMC BAM Track - 구본성 박사 - Building Successful ET Business.docx">구본성 박사</a></li>
                  <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="/kwmc/files/영역별모임/BAM/06 KWMC BAM Track - 안창호 박사 - GP Cases & Funding 평가.docx">안창호 박사</a></li>
                  <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="/kwmc/files/영역별모임/BAM/07 KWMC BAM Track - 이영진 대표 - Hope & Wonders Cases.docx">이영진 대표</a></li>
                  <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="/kwmc/files/영역별모임/BAM/08 KWMC BAM Track - 임도마 선교사 - BAM Impacts- 사역현장.docx">임도마 선교사</a></li>
              </ol>
            }
            {section === "전방개척선교" &&
              <ol style={{display: "inline-flex", flexWrap: "wrap", width: "100%"}}>
                  <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="/kwmc/files/영역별모임/전방개척사역/01 전방개척사역 - 정보애 선교사(한국의 전방개척선교 사역 30년).hwp">정보애 선교사</a></li>
                  <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="/kwmc/files/영역별모임/전방개척사역/02 전방개척사역 - David Taylor(Role of Indigenous Missions in Reaching UPGs).docx">David Taylor</a></li>
                  <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="/kwmc/files/영역별모임/전방개척사역/03 전방개척사역 - James Cha(Sharing the Gospel Across Different Worldviews).docx">James Cha</a></li>
                  <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="/kwmc/files/영역별모임/전방개척사역/04 전방개척사역 - 양병순 선교사(중앙아시아 카자흐스탄에서의 교회개척사례).docx">양병순 선교사</a></li>
                  <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="/kwmc/files/영역별모임/전방개척사역/05 전방개척사역 - 문열린. 선교사(튀르키예 무슬림 대상 전방개척 선교에서 한인 사역자의 역할).docx">문열린 선교사</a></li>
                  <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="/kwmc/files/영역별모임/전방개척사역/06 전방개척사역 - 이민교 선교사(장애인 스포츠(농아축구)를 통한 사례.hwp">이민교 선교사</a></li>
                  <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="/kwmc/files/영역별모임/전방개척사역/07 전방개척사역 - 김요엘 선교사(북사역의 시작과 정착 성장사례및 과제에 대해).hwp">김요엘 선교사</a></li>
              </ol>
            }
            {section === "선교동원" &&
              <ol style={{display: "inline-flex", flexWrap: "wrap", width: "100%"}}>
                  <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="/kwmc/files/영역별모임/선교동원/02 선교동원 - 강대흥 사무총장(다음 세대 동원).hwp">강대흥 사무총장</a></li>
                  <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="/kwmc/files/영역별모임/선교동원/03 선교동원 - 김정한 선교사(코로나 시대의 변화되고 있는 선교동원의 특성).docx">김정한 선교사</a></li>
                  <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="/kwmc/files/영역별모임/선교동원/05 선교동원 - 안성원 선교사(현지교회 선교운동).docx">안성원 선교사</a></li>
                  <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="/kwmc/files/영역별모임/선교동원/06 선교동원 사례발표 - 김장생 선교사(거꾸로 선교).docx">김장생 선교사</a></li>
                  <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="/kwmc/files/영역별모임/선교동원/07 선교동원 - 박정곤 목사(한민족의 시대적 사명).hwp">박정곤 목사</a></li>
              </ol>
            }
            {section === "선교적교회" &&
              <ol style={{display: "inline-flex", flexWrap: "wrap", width: "100%"}}>
                  <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="/kwmc/files/영역별모임/선교적교회/02 김성국 목사 - 다민족을 품고 섬기는 선교적 교회.pdf">김성국 목사</a></li>
                  <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="/kwmc/files/영역별모임/선교적교회/03 이홍기 사무총장 - 선교적 삶을 사는 사람들의 네이버 플러스.docx">이홍기 사무총장</a></li>
                  <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="/kwmc/files/영역별모임/선교적교회/04 황영송 목사 - 난민 선교 - 우리 곁에 다가온 이웃.docx">황영송 목사</a></li>
                  <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="/kwmc/files/영역별모임/선교적교회/05 지용주 목사 - 미국은 선교지입니다 (자료집용).pdf">지용주 목사</a></li>
                  <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="/kwmc/files/영역별모임/선교적교회/06 이문홍 장로_100세 시대를 사는 실버들의 선교적 삶.docx">이문홍 장로</a></li>
              </ol>
            }
            {section === "NGO와 국제기구" &&
              <ol style={{display: "inline-flex", flexWrap: "wrap", width: "100%"}}>
                  <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="/kwmc/files/영역별모임/문화예술/01 김휴성 선교사 - 글로벌호프 기관소개.pdf">김휴성 선교사</a></li>
                  <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="/kwmc/files/영역별모임/비정부기구/박상은대표/02 박상은(샘병원 미션원장) - NGO와 의료선교.hwp">박상은(샘병원 미션원장)</a></li>
                  {/* <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="//#/박상은대표">박상은(샘병원 미션원장)</a></li> */}
                  {/* <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="//#/박상은대표">박상은(아프리카미래재단 대표)</a></li> */}
                  <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="/kwmc/files/영역별모임/비정부기구/박상은대표/06 박상은(아프리카미래재단 대표) - NGO와 아프리카.hwp">박상은(아프리카미래재단 대표)</a></li>
                  <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="/kwmc/files/영역별모임/비정부기구/03 신혜경 팀장 - 사역사례 발표.docx">신혜경 팀장</a></li>
                  
              </ol>
            }
            {section === "문화예술" &&
              <ol style={{display: "inline-flex", flexWrap: "wrap", width: "100%"}}>
                  {/* <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="/kwmc/files/영역별모임/문화예술/01 김휴성 선교사 - 글로벌호프 기관소개.pdf">김휴성 선교사</a></li> */}
                  <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="/kwmc/files/영역별모임/문화예술/01 문화예술&미디어 - 이유정 목사(예배와 문화운동의 예술적 이해와 선교적 제언).docx">이유정 목사</a></li>
                  <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="/kwmc/files/영역별모임/문화예술/02 문화예술&미디어 - 강중현 전도사(한국 찬양사역자들의 사역 현장 이야기).hwp">강중현 전도사</a></li>
                  <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="/kwmc/files/영역별모임/문화예술/03 문화예술&미디어 - 심도성 대표(한국 기독교 음악 현장과 선교적 가능성).pdf">심도성 대표</a></li>
                  <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="/kwmc/files/영역별모임/문화예술/05 문화예술&미디어 - 박종암 선교사 (베트남 문화예술선교).hwp">박종암 선교사</a></li>
                  <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="/kwmc/files/영역별모임/문화예술/06 문화예술&미디어 - 이창진 선교사(청년미디어 인턴십을 통한 거점미디어센터 파트너십).pdf">이창진 선교사</a></li>
                  <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="/kwmc/files/영역별모임/문화예술/07 문화예술&미디어 - 김인호 선교사(거점 미디어선교센터 태국 운영).pdf">김인호 선교사</a></li>
                  <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="/kwmc/files/영역별모임/문화예술/09 문화예술&미디어 - 이규성 선교사(Godsends_Presentation).docx">이규성 선교사</a></li>
              </ol>
            }
            {section === "도시선교" &&
              <ol style={{display: "inline-flex", flexWrap: "wrap", width: "100%"}}>
                  <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="/kwmc/files/영역별모임/도시선교/Stephen Kim 김세반 선교사 2022 KWMC Urban City Track Presentation - Size Reduced.pdf">김세반 선교사</a></li>
                  <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="/kwmc/files/영역별모임/도시선교/오영섭 목사 - 외국인유학생을 위한 도시선교 플랫폼(최종).hwp">오영섭 목사</a></li>
                  <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="/kwmc/files/영역별모임/도시선교/주상현 목사 워크샵(21세기 모세 이야기).pdf">주상현 목사</a></li>
              </ol>
            }
            {section === "MK" &&
              <ol style={{display: "inline-flex", flexWrap: "wrap", width: "100%"}}>
                  <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="/kwmc/files/영역별모임/MK/03 이훈 선교사_TCKWAVE동역가이드.pdf">이훈 선교사</a></li>
                  <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="/kwmc/files/영역별모임/MK/05 오규원_2022.07.13_MK Track.pdf">오규원</a></li>
                  <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="/kwmc/files/영역별모임/MK/04 탁영준 선교사_MK.zip">탁영준 선교사</a></li>
              </ol>
            }
            {section === "선교적공동체성경읽기" &&
              <ol style={{display: "inline-flex", flexWrap: "wrap", width: "100%"}}>
                  <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="/kwmc/files/영역별모임/선교적공동체성경읽기/선교적공동체성경읽기(Charles Kim 목사 & 김응식 대표).pptx">Charles Kim 목사 & 김응식 대표</a></li>
              </ol>
            }
          </div>
      </div>
      <BottomBanner isHome={false}></BottomBanner>
    </div>
  );
}

export default Update;
