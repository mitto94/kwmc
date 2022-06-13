import React, { useEffect, useState } from 'react';
import Header from '../../components/header';
import ProgramMenu from './ProgramMenu';
import BottomBanner from '../../components/bottomBanner';
import TopBanner from '../../components/topBanner';
// BAM
import 구본성 from "./Image/BAM/강사 프로필_구본성 박사.jpg";
import 김동건 from "./Image/BAM/강사 프로필_김동건 선교사.jpg";
import 안창호 from "./Image/BAM/강사 프로필_안창호 박사.jpg";
import 오선일 from "./Image/BAM/강사 프로필_오선일 목사.jpg";
import 이다니엘 from "./Image/BAM/강사 프로필_이다니엘 사무총장.jpg";
import 이영진 from "./Image/BAM/강사 프로필_이영진 대표.jpg";
import 임도마 from "./Image/BAM/강사 프로필_임도마 선교사.jpg";
import 조차희 from "./Image/BAM/강사 프로필_조차희 박사.jpg";

// 교육
import 홍화옥 from "./Image/교육/강사 프로필_01 홍화옥 선교사.jpg";
import 정금태 from "./Image/교육/강사 프로필_02 정금태 선교사.jpg";
import 박진수 from "./Image/교육/강사 프로필_03 박진수 선교사.jpg";
import 공혜미 from "./Image/교육/강사 프로필_04 공혜미 선생님.jpg";
import 공다윗 from "./Image/교육/강사 프로필_05 공다윗 선생님.jpg";
import 김치남 from "./Image/교육/강사 프로필_06 김치남 목사.jpg";
import Ron from "./Image/교육/강사 프로필_07 Dr. Ron Hunter Jr..jpg";
import 피승호 from "./Image/교육/강사 프로필_08 피승호 교수.jpg";
import 이영아 from "./Image/교육/강사 프로필_09 이영아 집사.jpg";
import Elly from "./Image/교육/강사 프로필_10 Elly Kang.jpg";

// 디아스포라
import 지용주 from "./Image/디아스포라/강사 프로필_01 지용주 목사.jpg";
import 백신종 from "./Image/디아스포라/강사 프로필_02 백신종 목사.jpeg";
import 박성현 from "./Image/디아스포라/강사 프로필_03 박성현 교수.jpg";
import 백운영 from "./Image/디아스포라/강사 프로필_04 백운영 목사.jpg";
import 최남용 from "./Image/디아스포라/강사 프로필_05 최남용 선교사.jpg";
import 노규석 from "./Image/디아스포라/강사 프로필_06 노규선 목사.jpg";
import 홍광표 from "./Image/디아스포라/강사 프로필_07 홍광표 목사.jpg";

// 도시선교
import 이상훈 from "./Image/도시선교/01 이상훈 교수 사진.jpg";
import 김호성 from "./Image/도시선교/02 김호성 선교사 사진.jpg";
import 오영섭 from "./Image/도시선교/03 오영섭 목사 사진.jpg";
import 박현욱 from "./Image/도시선교/04 박현옥 선교사.jpg";
import Stephen from "./Image/도시선교/05 Missionary Stephen Kim 사진.jpg";
import 주상현 from "./Image/도시선교/06 주상현 목사 사진.jpg";
import 양준 from "./Image/도시선교/07 양준 집사 사진.jpg";

// 비정부기구
import 김휴성 from "./Image/비정부기구/01 김휴성 선교사 사진.jpg";
import 신혜경 from "./Image/비정부기구/02 신혜경 팀장 사진.jpg";
import 박상은 from "./Image/비정부기구/03 박상은 대표 사진.jpg";
import Thir from "./Image/비정부기구/04 Thir+Koirala 사진.jpg";

// MK
import 탁영준 from "./Image/MK/01 탁영준 선교사 (Hilltop) 사진.jpg";
import 최승업 from "./Image/MK/02 Kojo Choi(최승업) 선교사 사진.jpg";
import 최예문 from "./Image/MK/03 Helen Choi(최예문) 선교사 사진.jpg";
// import 신혜경 from "./Image/MK/.jpg";
import 이선민 from "./Image/MK/05 Mi Casa Tu Casa 이선민, 이준일 사진.jpg";
import 이훈 from "./Image/MK/06 이훈 선교사 (TCK Wave) 사진.jpg";
import Esther from "./Image/MK/07 Esther Im (MosaiK) 사진.jpg";
import 오규원 from "./Image/MK/08 오규원 박사(Dr. Kyoo-Won Oh) 사진.jpg";

// 문화예술
import 이유정 from "./Image/문화예술/01 이유정 목사 사진.jpg";
import 심도성 from "./Image/문화예술/02 심도성 선교사 사진.jpg";
import 박종암 from "./Image/문화예술/03 박종암 선교사 사진.jpg";
import 성보영 from "./Image/문화예술/04 성보영 목사 사진.jpg";
import 이창진 from "./Image/문화예술/05 이창진 선교사 사진.jpg";
import 김인호 from "./Image/문화예술/06 김인호 선교사 사진.jpg";
import 이규성 from "./Image/문화예술/07 이규성 선교사 사진.jpg";

// 선교적교회
import 김대영 from "./Image/선교적교회/01 김대영 목사 사진.jpg";
import 이문홍 from "./Image/선교적교회/02 이문홍 사무총장(장로) 사진.jpg";
import 이홍기 from "./Image/선교적교회/03 이홍기 집사 사진.jpg";
import 황영송 from "./Image/선교적교회/04 황영송 목사 사진.jpg";
import 지용주2 from "./Image/선교적교회/05 지용주 목사 사진.jpg";
import 김성국 from "./Image/선교적교회/06 김성국 목사 사진.jpg";
import 양춘길 from "./Image/선교적교회/07 양춘길 목사 사진.jpg";

// 전방개척사역
import 정보애 from "./Image/전방개척사역/01 정보애 선교사 사진.jpg";
import David from "./Image/전방개척사역/02 David Bogosian 사진.jpg";
import 양병순 from "./Image/전방개척사역/03 양병순 선교사 사진.jpg";
import James from "./Image/전방개척사역/04 James Cha 부부 사진.jpg";
import 문열린 from "./Image/전방개척사역/05 문열린 선교사 사진.jpg";

// 전방개척사역
import 김응식 from "./Image/선교적공동체성경읽기/김응식 대표 사진.jpg";
import Charles from "./Image/선교적공동체성경읽기/Charles Kim 목사 사진.jpg";

// 선교동원
import 박정곤 from "./Image/선교동원/강사 프로필_박정곤.jpg";
import 안성원 from "./Image/선교동원/강사 프로필-03 안성원 선교사.jpg";
import 김정한 from "./Image/선교동원/강사 프로필-04 김정한 선교사.jpg";
import 김장생 from "./Image/선교동원/강사 프로필01 김장생 선교사.jpg";
import 강대흥 from "./Image/선교동원/강사 프로필02 강대흥 사무총장.jpg";

const Section = ({history}) => {
  const [first, setFirst] = useState(true); 
  const [section, setSection] = useState("디아스포라");
  const makeProfile = (img, name, mainTitle = "", title, profile = "", lecture = "", last = false) => {
    return <div>
        <div className="mBlock" style={{display: "flex", wordBreak: "keep-all"}}>
      <div className="mFlexContainer" style={{width: "20%", display: "flex", flexDirection: "column"}}>
        <div className="mTextSize" style={{paddingBottom: ".5vw", fontWeight: "700", fontSize: "1.2vw", width: "100%", maxWidth: "60vw"}}>{name}</div>
        <img style={{maxHeight: "14vw", margin: "1vw", marginLeft: 0}} className="mImage25 mRightImage mMleft" src={img} alt="No Image"></img>
      </div>
      <div className="mPadding0 mWidth100" style={{width: "80%", paddingLeft: "1.5vw", fontWeight: "500"}}>

        <div className="mTextSize" style={{fontSize: "1.4vw", fontWeight: 700, marginBottom: "1vh", color: "#143674", width: "100%", maxWidth: "60vw"}}>{title}</div>
        {mainTitle !==  "" && <div className="mTextSize" style={{marginBottom: "1vh"}}><b>{mainTitle}</b></div>}

        <div className="mTextSize3" style={{display: "block", flexDirection: "column", marginBottom: "1.5vw", letterSpacing: "-.05vw", lineHeight: "150%"}}>
        {profile !==  "" && <div style={{marginBottom: ".5vh"}}><b>소개</b></div>}
        <span>{profile}</span>
        </div>
        <div className="mTextSize3 mPT3" style={{lineHeight: "160%", wordBreak: "keep-all", minHeight: "3%"}}>
          {lecture !== "" && <div><b>강의 요약</b></div>}

          {lecture}
        </div>
      </div>
    </div>
    {!last && <div className="mWidth100 wBorderBottom2" style={{width: "100%", background: "white", display: "flex", justifyContent: "center", borderRight: "1px solid rgb(226, 226, 226)", borderLeft: "1px solid rgb(226, 226, 226)", marginTop: "1rem", marginBottom: "1rem"}}>
          <div className="mWidth100" style={{width: "52vw", borderTop: "2px solid rgb(226, 226, 226)"}}></div>
        </div>}
  </div>
  }

  return (
    <div style={{width: "100%",  display: "flex", flexDirection: "column", background: "#ECF6FC"}}>
        <Header history={history}></Header>
        <TopBanner></TopBanner>
        <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
          <ProgramMenu history={history}/>
        </div>
        <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
        <div className="mWidth100 mTextSize3 mdLRBorder" style={{width: "60%", minHeight: "20px", border: "1px solid #E2E2E2", display: "flex", justifyContent: "space-around", alignItems: "center", cursor: "pointer", fontWeight: 500, fontSize: "1.3vw", color: "rgb(128, 127, 127)", flexWrap: "wrap"}}>
          <div className={section === "디아스포라" && "clickedMenu2"} onClick={() => setSection("디아스포라")}
            style={{borderRight: "1px solid #E2E2E2", borderBottom: "1px solid #E2E2E2", textAlign: "center", height: "7vh", wordBreak: "keep-all", width: "16.6666666%", display: "flex", justifyContent: "center", alignItems: "center", background: "white"}}>디아스포라</div>
          <div className={section === "도시선교" && "clickedMenu2"} onClick={() => setSection("도시선교")}
          style={{borderRight: "1px solid #E2E2E2", borderBottom: "1px solid #E2E2E2", textAlign: "center", height: "7vh", wordBreak: "keep-all", width: "16.6666666%", display: "flex", justifyContent: "center", alignItems: "center", background: "white"}}>도시선교</div>
          <div className={section === "문화예술 & 미디어" && "clickedMenu2"} onClick={() => setSection("문화예술 & 미디어")}
          style={{borderRight: "1px solid #E2E2E2", borderBottom: "1px solid #E2E2E2", textAlign: "center", height: "7vh", wordBreak: "keep-all", width: "16.6666666%", display: "flex", justifyContent: "center", alignItems: "center", background: "white"}}>문화예술 & 미디어</div>
          <div className={section === "교육" && "clickedMenu2"} onClick={() => setSection("교육")}
          style={{borderRight: "1px solid #E2E2E2", borderBottom: "1px solid #E2E2E2", textAlign: "center", height: "7vh", wordBreak: "keep-all", width: "16.6666666%", display: "flex", justifyContent: "center", alignItems: "center", background: "white"}}>교육</div>
          <div className={section === "비정부기구" && "clickedMenu2"} onClick={() => setSection("비정부기구")}
            style={{borderRight: "1px solid #E2E2E2", borderBottom: "1px solid #E2E2E2", textAlign: "center", height: "7vh", wordBreak: "keep-all", borderBottom: "1px solid #E2E2E2", width: "16.6666666%", display: "flex", justifyContent: "center", alignItems: "center", background: "white"}}>비정부 기구</div>
          <div className={section === "BAM" && "clickedMenu2"} onClick={() => setSection("BAM")}
          style={{height: "7vh", wordBreak: "keep-all", borderBottom: "1px solid #E2E2E2", width: "16.6666666%", textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center", background: "white"}}>BAM</div>
          <div className={section === "선교동원" && "clickedMenu2"} onClick={() => setSection("선교동원")}
          style={{borderRight: "1px solid #E2E2E2",  height: "7vh", wordBreak: "keep-all", width: "16.6666666%", textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center", background: "white"}}>선교동원</div>
          <div className={section === "선교적교회" && "clickedMenu2"} onClick={() => setSection("선교적교회")}
          style={{borderRight: "1px solid #E2E2E2",  height: "7vh", wordBreak: "keep-all", width: "16.6666666%", textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center", background: "white"}}>선교적 교회</div>
          <div className={section === "전방개척선교" && "clickedMenu2"} onClick={() => setSection("전방개척선교")}
          style={{borderRight: "1px solid #E2E2E2",  height: "7vh", wordBreak: "keep-all", width: "16.6666666%", textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center", background: "white"}}>전방개척 사역</div>
          <div className={section === "선교적 공동체성경읽기" && "clickedMenu2"} onClick={() => setSection("선교적 공동체성경읽기")}
          style={{borderRight: "1px solid #E2E2E2",  height: "7vh", wordBreak: "keep-all", width: "16.6666666%", textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center", background: "white"}}>선교적 공동체 성경읽기</div>
          <div className={section === "선교협력" && "clickedMenu2"} onClick={() => setSection("선교협력")}
          style={{borderRight: "1px solid #E2E2E2", textAlign: "center", height: "7vh", wordBreak: "keep-all", width: "16.6666666%", display: "flex", justifyContent: "center", alignItems: "center", background: "white"}}>선교협력</div>
          
          <div className={section === "MK(선교사자녀)" && "clickedMenu2"} onClick={() => setSection("MK(선교사자녀)")} style={{ height: "7vh", width: "16.6666666%", textAlign: "center", wordBreak: "keep-all", display: "flex", justifyContent: "center", alignItems: "center", background: "white"}}>MK (선교사자녀)</div>
        </div>
        </div>
        <div className="mMargin0" style={{width: "100%", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", marginTop: ".8vw", fontFamily: "Noto Sans KR, sans-serif"}}>
          {/* {makeProfile(김동건, "이 다니엘 사무총장", <span>Session 1 BAM & Core - {<span className="MobImage"><br></br></span>} “BAM: 비즈니스 그 자체로서의 선교"</span>, "",
            "")} */}
          {section === "선교협력" && "추후 업데이트 예정입니다"}

          {section === "교육" && <div className="mWidth100 mFlexContainer mContainer4p" style={{width: "60%", display: "flex", padding: "2.5vw", border: "1px solid rgb(226, 226, 226)", fontSize: "1vw", marginBottom: "3.5vw", background: "white", flexDirection: "column"}}>
            {makeProfile(홍화옥, "홍화옥 선교사\n(Missionary Hong Hwa-Ock) (한국어) ", "주제: “Why Education?", <span>Session 1 - {<span className="MobImage"><br></br></span>} “1st Gen Missionaries and Education”</span>, <span>
            1981년 예장통합 선교사로서 동 아프리카 케냐 파송된 후 현재까지 41년 째 사역 중이다. 교육을 통한 선교로 케냐의 수도 나이로비에 1991 년, 학생 3명으로 국제 기독교 유치원(International Christian Kindergarten- ICK) 설립, 2005 년,  열방학교(School of the Nations  -SON)를 설립, 현재 운영하고 있다. 특별히 SON은 영국 케임브리지 대학교에서 인준한 교육 시스템을 제휴하는 국제 학교로서 설립자/ 디렉터의 책임을 맡아서 48개국 350여명의 학생들을 위하여 교육 사역을 감당하고 있다. 한국 외국어 대학 (불어과) 을 졸업하고, 미국 Biola 대학교에서 타문화 교육학 (Intercultural Education) 석사와  철학박사(PhD) 학위를 취득하고 현재  한동 대학교 겸임교수로 섬기고 있다.  
            <br></br><br></br>
            지상명령의 범위가 개인의 구원을 넘어 우리 사회의 다양한 영역에 성경적 변화를 가져오는 것까지도 포함된다면,  이것은 우리의 세계관이 성경적세계관으로 변화되어 감으로서 가능하다.  따라서 이 세미나에서는  '교육'이 왜 지상명령을 수행하는 데 중요한지 살펴보고자 한다. 
            <br></br><br></br>
            If the scope of the Great Commission includes bringing biblical changes into the various areas in our society, beyond personal salvation, it is possible by transforming the worldviews. In this regard, this seminar will explore why “education” matters for fulfilling the Great Commission.
            <br></br><br></br>
            In March 1981, Missionary Hong Hwa-ock was sent as a missionary to Kenya, in East Africa with her husband, Pastor Jongpyo Im. In response to the call on missions through education, November 1991, she founded the International Christian Kindergarten with 3 students, and in September 2005, School of the Nations, an international British school affiliated with Cambridge University.
            She is currently serving as a principal in this school for 350 students from 48 countries.
            <br></br><br></br>
            Upon graduating from Korea University of Foreign Studies (French Department), she received a master’s degree and a PhD degree in Intercultural Education from Biola University in the United States. Currently, she is serving as an adjunct professor at Handong Global University and she has also translated “Ordering your Private World” by Gordon Macdonald into Korean.

            </span>,
            "")}
            {makeProfile(정금태, "정금태 선교사\n(Missionary Nathaniel Jeong) (한국어)", "", <span>Session 1 - {<span className="MobImage"><br></br></span>} “1st Gen Missionaries and Education”</span>, <span>
            한국목회로 23년 섬기고 파라과이 선교로 30년 섬기고 Midwest 교육학 박사이다. 부산 고신대와 서울 총신대원의 배경이 있고 신학대학을 통하여 문교부 학사와 석사를 취득했다. 파라과이에서 기독교예술학교를 설립하여 현지인 유초중고등학생들을 교육하며 현지인목회자 연장교육을 통하여 교육 사역을 했다. 1.5세 2세 선교사 발굴 운동 이랑 선교사 자녀 2세교육사역도 도우며 하나님의 형상을 사람에게 심는 교육선교를 목표로 하여 사역하고 있다. 
            <br></br><br></br>
            Missionary Geum Tae Jeong served as a pastor in Korea for 23 years and as a missionary to Paraguay for 30 years. Currently, he holds a Ph.D degree in Education in Midwest. He graduated from Goshin Theological Seminary in Busan and also from Chongshin Theological Seminary. 
            <br></br><br></br>
            Missionary Jeong is a founder of Colegio Cristiano Arte, an educational institution consisting of pre-school, elementary, middle, and high school in Paraguay. He will be talking about challenges and benefits of doing educational missions in Paraguay.

            </span>,
            "")}
            {makeProfile(박진수, "Missionary Jin Soo Park\n(박진수 선교사) (English) ", "", <span>Session 2 - {<span className="MobImage"><br></br></span>} “2nd Gen, MK, and Education”</span>, <span>
            선교사인 부모님의 발걸음을 따라 아프리카 케냐로 갔던 MK 박진수 선교사는 대학을 마치자 북아프리카에 조금한 기독교 학교에 교사로 갔다. Calvin College 에서 Social Studies 와 역사에 중점을 둔 secondary 교육 학사 학위를 받아 북아프리카에서는 7-12학년 학생들에게 세계사, 미국사, 지리, 정부, 경제학과 같은 다양한 사회 과목을 가르쳤다. 그곳에서 학생들에게는 교사이자 친구, 멘토,  카운슬러로 불리고 있다.
            <br></br><br></br>
            MK 사역에 대한 간증과 소명을 나누고  MK 교육자들의 중요성이랑 MK BEAM 이라는 MK 선교 조직을 소개할것이다. MK Beam은 MK 학교에서 봉사하는 MK 교사를 지원하고 MK 교사를 파견하며 재정적 지원을 제공하기 위해 만들어졌다.
            <br></br><br></br>
            Missionary Jin Soo will share his testimony and his calling in MK ministry. He will share the importance of having MK educators go and serve the younger generation of MKs and introduce an MK mission organization called MK Beam. MK Beam is created to support MK teachers who serve in MK schools, send out MK teachers, and provide financial support.

            </span> ,
            "")}
            {makeProfile(공혜미, `Hemi Kong\n공혜미 교사 (English)`, "", <span>Session 2 - {<span className="MobImage"><br></br></span>} “2nd Gen, MK, and Education”</span>, <span>
            1998년도에 부모님이 섬기시는 탄자니아 아프리카에서 태어난 MK 공혜미 선생은 현재 언어 병리학자 (Speech-Language Pathologist)로 초등학교에서 일하고 있다. Calvin University 에서 Speech Language Pathology 학사와 석사를 받아 교육을 통하여 택사스 휴스턴 아이들을 공립학교에서 가르치고 있다. 미국 공립학교 환경에서 아이들을 가르치는 경험과 간증을 나눌 것이다.
            <br></br><br></br>
            Hemi Kong is an MK from Tanzania and Kenya. She is currently working as a Speech Language Pathologist in a public school setting in Houston, Texas. She was born in Tanzania and grew up attending a boarding school for missionary kids in Kenya. Upon graduation, she moved to the United States to attend college. She graduated from Calvin University with her bachelor’s degree in 2020 and her master’s degree in 2021.
            <br></br><br></br>
            She will share her testimony and experience working as a Speech Language Pathologist in a public-school setting in the United States.  

            </span>,
            "")}
            {makeProfile(공다윗, "David Kong\n\공다윗 교사 (English)", "", <span>Session 2 - {<span className="MobImage"><br></br></span>} “2nd Gen, MK, and Education”</span>, <span>
            1996년 선교사인 부모님을 따라 9개월의 나이로 아프리카 탄자니아로 갔던 MK 공다웟 선생은 secondary education 과학에 중점으로 대학교를 졸업하고 현재 Potter’s House 에서 가르치고 있다.  Potter 's House는 다양한 사회 경제적 수준을 가진 커뮤니티를 가르치는 데 전념하는 기부자 자금 지원 사립 학교이다. 
            <br></br><br></br>
            공다윗 선생은 처음에 대학에서 의학 분야를 추구하는 데 관심이 있었다. 그러나 경제적 사정으로 학업을 중단하고 한국 군대에 입대하기로 결정해야됬다. 군 복무를 마치고 곧바로 대학에 복귀하지 않고 1년 동안 한국 학원에서 가르치는 경험을 통하여 선생으로써의 부름심을 받았다. 고품질 교육을 제공하는 동아프리카의 학교 시스템을 구축하기 위한 그의 간증과 소명/비전이있다. 
            <br></br><br></br>

            David Kong is an MK who grew up in Tanzania/Kenya. David graduated with education degree with a focus on high school science and is currently teaching at The Potter’s House in Grand Rapids, Michigan. The Potter’s House is a donor-funded private school dedicated to teaching diverse communities with varying socioeconomic levels. David was initially interested in pursuing a medical field in college. However, due to financial circumstances, he made the decision to pause his studies and serve in the Korean army. After his service, he did not return to college right away but took a year off to teach at a Korean academy. During that year, David found his joy in teaching. His love for science and teaching were the perfect combination.
            <br></br><br></br>
            David will be sharing about his testimony and his calling/vision to build a school system in East Africa that provides high quality education. He will explain the licensure pathway of becoming a teacher in the United States. 

            </span>,
            "")}
            {makeProfile(김치남, "Rev. Paul Kim\n(김치남 목사) (한국어)", "주제: 코로나 팬데믹으로 추락한 신앙, 가정예배로 리셋하라", <span>Session 3 - {<span className="MobImage"><br></br></span>} “Family and Education”</span>, <span>
            2002년부터 지금까지 캐나다 토론토 예수촌 교회를 담임으로 목양하고 있으며, 2017년부터 D6 코리아 대표를 역임하고 있다. 한국 교회와 디아스포라 이민 교회의 교회 교육을 위해 미국의 랜달하우스 D6 컨퍼런스와 매해 정기적으로 한국에서 D6 컨퍼런스를 개최하고 있다.
            <br></br><br></br>
            그는 전통 교회가 D6 교회로 전환하도록 컨설팅 및 강의 그리고 미국의 랜달하우스에서 출판되는 가정사역 도서들과 11연령대의 D6 커리큘럼(D6Books.com)을 번역 출간하며 활발한 지원을 하고 있다. 가정과 교회의 현장을 실제적으로 돕기 위해 두 권의 책(가정 설계도, 교회 설계도)을 출판했다. 아내 이수영과 하나님의 기업 1남(민) 4녀(진,현,윤,솔)를 둔 일곱 색깔 무지개의 가족이 있다.
            <br></br><br></br>
            Rev. Paul Kim has been a senior pastor of Jesus Village Church in Toronto Canada since 2002 and also serves as a representative of D6 Korea since 2016. He translated various curriculums of D6 Ministry (D6Books.com) and also published two books about the family ministry. He has a beautiful wife, Soo Young Lee, and one son (Min) and four daughters (Jin, Hyun, Yoon, Sol).
            <br></br><br></br>
            He will be talking about the importance of restoring the faith through the family worship. 

            </span>,
            "")}
            {makeProfile(Ron, "Ron Hunter Jr., Ph.D. (English)", "주제: 작은 제자 키우기: 세대적 제자도 접근", <span>Session 3 - {<span className="MobImage"><br></br></span>} “Family and Education”</span>, <span>
            Raising Tiny Disciples: A Generational Discipleship Approach (English)
            <br></br><br></br>

            2002년부터 Dr. Hunter는 D6 Curriculum의 발행인인 Randall House의 전무이사 겸 CEO, D6의 설립자, D6 Conference의 이사를 역임했습니다. 그는 정기적으로 국제적으로 연설하고 사역 및 비즈니스 조직을 위해 컨설팅을 하고 계십니다. 그는 콜로라도 대학교에서 MPA를 취득하시고. 박사 학위를 Dallas Baptist University에서 받으시고 현재는 겸임교수로 가르치고 있습니다. 다양한 잡지에 80개 이상의 기사를 썼으며. Toy Box Leadership, D6의 DNA, Recalibration: A New Measure for Family Ministry와 그의 최신 책인 About Me, About You: Generational Legacy Journal 등 5권의 책을 저술했습니다. Ron이 가장 자랑스러워하는 칭호는 남편, 아버지, 할아버지입니다. 그는 대학 시절 연인인 파멜라와 결혼하고 두 명의 자녀와 두 손녀가 있습니다.
            <br></br><br></br>
            Your family legacy matters. Likewise, every parent and grandparent wants to instill value in the next generation. Your church can help. Discover how D6 (Deuteronomy 6) Family Ministry principles and practices can make a difference. In the first 10 minutes of the session, we will identify the common problems every church is trying to solve, then lay a biblical foundation to map the way. And for the last half, we will share easy ways to intentionally make a difference at church and in the home. Come hear up to 25 practical ways to connect families. Don’t worry; we will not overlook the kids who do not have Christian parents.
            <br></br><br></br>
            가족 유산이 중요합니다. 마찬가지로 모든 부모와 조부모는 다음 세대에 가치를 심어주고 싶어합니다. 당신의 교회가 도울 수 있습니다. D6 (Deuteronomy 6) 가족 봉사의 원칙과 관행이 어떻게 변화를 가져올 수 있는지 알아보는 시간이 있습니다. 세션의 처음 10분 동안 우리는 모든 교회가 해결하려고 하는 일반적인 문제를 식별한 다음 그 방법을 지도하기 위한 성경적 기초를 놓을 것입니다. 그리고 후반부에는 교회와 가정에서 의도적으로 변화를 일으킬 수 있는 쉬운 방법을 공유할 것입니다. 가족을 연결하는 최대 25가지 실용적인 방법을 들을수 있습니다. 또 한, 기독교 부모님이 없는 아이들도 잊지않을것 입니다. 

            </span>,
            "")}
            {makeProfile(피승호, "피승호 교수 (Dr. Pi Seung-Ho) (한국어)", "주제: 다음세대를 이끄러갈 교육선교 더이상 미룰수 없다", <span>Session 4 - {<span className="MobImage"><br></br></span>} “Strategy and Platform for Education Mission”</span>, <span>
            UCiC Schools 의 대표로, 또 한국, 중국, 싱가폴, 인도네시아들 여러 선교지에서 국제 학교를 운영하고 있다. 세계의 학교들, 특히 국제학교들의 인가와 운영을 컨설팅 해오고 있으며 세계 선교지 학교의 설립을 돕고 있다. 기독교 학교를 통해 예수님의 지상명령을 현실화 하고자 노력하고 있다.

            <br></br><br></br>
            여러 나라에서 기독교 국제학교를 운영하며 예수님께서 주신 지상명령을 따르는 기쁨을 가졌다. “너희는 가서 모든 족속으로 제자를 삼아 아버지와 아들과 성령의 이름으로 세례를 주고 내가 너희에게 분부한 모든 것을 가르쳐 지키게 하라 (마 18:20)” 그 나라의 지역학교나 오지 선교를 방문 하며 축복을 통로의 역할을 감당하며 지역 주민들을 섬기며 복음을 전했던 행복의 기억이 많다. 기독교 학교는 교회의 역할로 다음세대들에게 하나님 교육을 전수할수 있는 가장 효과적인 기관이자 선교의 원동력이 될수 있는 단체라 경험하고 있다. 
            <br></br><br></br>
            Dr. Seung-Ho Pi is a head master of UCiC School in Seattle, Washington, and helps with the planting of several international schools in Korea, China, Singapore, Indonesia, and other mission field. He provides consulting for permit and management of international schools. 
            He will be sharing about his vision of utilizing the international schools in the mission field as an effective tool for missions.

            </span>,
            "")}
            {makeProfile(이영아, "YoungAh Gloria Lee (이영아 집사) (한국어)", "주제: American Assimilation Helpline – 새로운 교육선교 플랫폼", <span>Session 4 - {<span className="MobImage"><br></br></span>} “Strategy and Platform for Education Mission”</span>, <span>
            가족과 함께 보스턴에서 이민생활을 시작으로 UMass(University of Massachusetts) Boston에서 흩어져있는 대학교를 묶어 주었던 선교단체 (밀알모임)와 보스턴 늘푸른교회를 섬겼다. 2005년 아프리카, 에리트리아에 선교를 다녀왔다. MassArt (Massachusetts College of Art and Design)에서 패션디자인을 공부를 통하여, 장애인을 위한 바지 만드는 일을 했다. 2016년부터 마리에타 루터란 미국교회(Lutheran Church of the Incarnation, Marietta, GA), 행정비서로 일하면서 동네 아이들에게 1대1 공부를 가르쳐주는  American Assimilation Helpline (AAH)를 동역했다. 올해 2022년 부터  Global Department Advocacy Director (Global Department), Developing Director (US Department) and Doraville Georgia Local Chapter Head at AAH 로 섬기고 아틀란타 새교회에서 한글학교 총무랑 도서관을 만들어서 아이들이 서로 책을 빌려주는 사역도 하고 있다.  
            <br></br><br></br>
            American Assimilation Helpline이 어떻게 시작되었으며 이 새로운 교육플랫폼을 통하여 미국학생들이 선교지학생들과 연결이 되어 선교의 도구로 사용되어지고 있는지에 대해 설명한다.
            <br></br><br></br>
            Youngah Lee will be speaking about how American Assimilation Helpline, a non-profit organization devoted for connecting one on one study with the students around the world, and how this education platform can be used in the mission field.
            <br></br><br></br>
            ●	www.americanassimilationhelpline.org

            </span>,
            "")}
            {makeProfile(Elly, "Elly Kang (English)", "주제: American Assimilation Helpline – 새로운 교육선교 플랫폼", <span>Session 4 - {<span className="MobImage"><br></br></span>} “Strategy and Platform for Education Mission”</span>, <span>
            조지아주 애틀랜타에 있는 Marist School의 고등학교 3학년으로 데이터 과학에 열정을 가지고 있다. 그 열정으로 501(c)(3) 글로벌 비영리 조직인 American Assimilation Helpline이 만들었다. nc.(AAH!)는 교육을 거의 또는 전혀 받지 못하는 저소득, 이민자, 난민 및 노숙자 학생에게 개인 교습 및 자원을 제공하고 또한 수십 대의 기기와 학용품을 기부하고 미국 Red Cross 와 함께 헌혈 행사를 주최하는 등의 이니셔티브와 노숙자를 지원하는 등 프로젝트를 진행하고 있다. 2021년 여름, AAH! 한국, 일본, 인도에서 온 약 200명의 저소득층 학생들에게 봉사하기 위해 국제적으로 지역 학생 자원 봉사자를 모집했다. 2017년부터 이 비영리 단체는 13개 지역 지부와 2개의 학습 연구소를 포함하여 10개국과 17개 주로 역량을 확장했으며 650명의 학생 교사와 함께 전 세계적으로 1,000명 이상의 학생들을 가르쳤다. 
            <br></br><br></br>
            비영리단체의 사명, 지금까지의 진행 상황, 그리고 앞으로 구상하고 있는 작업에 대해 이야기할 것이다. 그들은 전 세계적으로 평등한 교육적 접근 계획을 추진하는 데 도움이 되도록 고등학생 연령의 어린이들에게 훌륭한 리더십 기회를 제공하고자 한다. 또한 모든 회원이 영어를 배울 수 있도록 교육 지원을 제공하고 있다.
            <br></br><br></br>
            Elly will be speaking about her nonprofit’s mission, the progress so far, and the work they are envisioning for the future. They would like to provide great leadership opportunities for high school-aged children to help drive the charge for equal educational access initiatives across the world. They are also offering educational support for all members to learn English.

            </span>,
            "", true)}
          </div>
          }
          {section === "도시선교" && <div className="mWidth100 mFlexContainer mContainer4p" style={{width: "60%", display: "flex", padding: "2.5vw", border: "1px solid rgb(226, 226, 226)", fontSize: "1vw", marginBottom: "3.5vw", background: "white", flexDirection: "column"}}>
            {makeProfile(이상훈, "이상훈 교수 (PhD)", "주제: 도시선교 현황과 미래전망 1, 2", "", "현, America Evangelical University 총장, Fuller Theological Seminary겸임교수, Missional Church Alliance(MiCA) 대표 디렉터로 섬기고 있다. 서울신학대학교(BA & MDiv)에서 신학을 Fuller Seminary(ThM & PhD)에서 선교학을 전공했다. 그는 목사, 교수, 리서처, 작가, 설교자, 강연가, 모티베이터, 촉매자, 운동가로서 교회 갱신과 선교적 교회 운동의 최전선에서 사역하고 있다.  주요 저서로는 리폼처치(Re_Form Church), 리뉴처치(Re_New Church), 처치 시프트(Church Shift), 리싱크처치(Re_Think Church),  뉴노멀시대 교회의 위대한 모험, 온라인 사역혁명, 리프레시처치(Re_Fresh Church) 등이 있다.",
              "도시는 현대 선교의 중심지이며 새로운 선교 전략과 갱신의 교두보이다. 본 강의는 급격한 시대 변화의 흐름 속에 부상하는 도시선교의 새로운 패러다임을 이해하고, 팬데믹 이후 교회의 도시선교 전망과 전략을 고찰하는 시간이 될 것이다. ")}

            {makeProfile(김호성, "김호성 선교사", "주제: 도시선교의 중요성과 도시선교의 실제와 전략 1, 2", "", <span>
            국제도시선교회(ICM) 대표, 미국 재부흥 운동 대표, 750만 연합 111부흥기도운동 대표, 뉴욕 미동부 성시화 운동 대표, 로잔 세계복음화 운동의 전도 제자화 훈련(NLTC)  국제강사, 전 CCC 미주 선임선교사 역임,
            <br></br>
            국제도시선교회(ICM) 사역 대표로 세계의 주요 도시에 심겨진 언어와 문화가 능통한 한인 디아스포라 차세대들을 선교자원으로 일으켜 뉴욕을 중심으로 세계의 주요 도시선교를 전개하고 있고, 이민역사 대규모 도시선교 부흥운동인 ‘미국 재부흥 운동’을 미 동부 뉴욕을 중심으로 각계 각층에 영향력을 끼치고 있는 지성인들과 다민족들에게 도시선교운동으로 복음을 전개하고 있다. 
            한편, 어두움이 깊어 가는 세상 유일한 해결책인 기도하는 750만 한인들의 기도를 깨워 하나님의 얼굴을 구하는 ‘750만 111 부흥기도운동’을 전세계 연합으로 전개하고 있다. 
            </span>,
            <span>
              1. 그동안의 세계선교는 수 많은 선교사들의 희생으로 제 3세계 중심으로 전개해왔으나 세계인구의 절반 이상이 집중되어 있는 빌딩의 정글 도시는 그 안에는 다민족, 타종교와 인본주의의 강력한 영향력을 끼치고 있는 지성적 미종족이 발원하고 있는 영향력 있는 선교지로 변모하여 세계에 영향을 미치는 도시의 복음화와 변혁은 중차대한 선교 전략이며 제 3세계 선교와 함께 도시선교는 완수해야 할 중요한 선교지로 변모하게 되었다.
              <br></br>
              2. 한편, 전세계 인구의 10%에 해당하는 인구는 국경을 넘어 세계 각국으로 이동하거나 방문하고 있다.  세계의 주요도시는 다민족으로 사회로 변모하고 있다. 스스로 오고 있는 이들에게 가지 않고도 우리가 사는 도시에서 세계 선교를 할 수 있는 시대로 변모하였고, 모든 성도들은 자신이 살고 있는 도시에서 도시선교사로 세계 선교를 헌신할 수 있으며 그간의 실천적인 사역의 실제와 결과들을 브리핑을 통해 나누고자 한다.
              <br></br>
              3. 전세계 750만의 한인 디아스포라 중 50%에 해당하는 한인 차세대들은 언어와 문화에 능통하며 예수 까지 믿고 있는 선교자원으로 이들을 선교자원으로 일으켜 자신들이 살고 있는 국가와 도시에서 복음을 전하게 하는 것은 선교 헌신자원이 줄어가고 있고 기독교가 쇠퇴하고 있는 이 시대 미래 선교의 최선의 효율적인 전략으로 앞으로의 세계 선교에 이들의 선교동원 여부는 결정적인 역할을 하게 될 것이며 그간의 이들을 동력화 하여 대규모 도시선교 운동의 실제를 나누는 시간도 갖고자 한다.
            </span>)}
          
            {makeProfile(오영섭, "오영섭 목사", "주제: 유학생 선교를 위한 도시선교 플랫폼 1, 2", "", "오영섭목사는 열방의 도시 세대에 초점을 두고, 모든 민족 모든 세대 모든 영역에 복음을 전하기위해 '랜드마커 미니스트리(2005)' 설립, 다민족, 다문화, 다언어 사역을 위한 선교적 국제교회 '생수가흐르는숲교회(2014)' 서울의 캠퍼스타운에 개척, 다민족을 위한 '다문화선교협의회(2015)' 공동 설립, 전세계 러시아어권 공동체를 위한  'RUSTA(2016)'를 공동 설립하며, ‘아릴락 도시선교연구소’소장으로 도시 선교’에 집중하고 있다.",
            "인류 역사상 최초로 등장한 이 시대의 도시세대(Urban Generation)에게 있어서, 또한 교회에게 있어서 도시 속 복음이 의미하는 바는 무엇인가? 복음의 본질을 온전히 경험하기 위해 교회가 이해하고 실천해야 하는 도시를 향한 하나님의 계획은 무엇인가? 이 강의에서는 오늘날 이주민 선교 시대를 이끌어가는 도시선교에 대해 정의하고, 특별히 외국인유학생들을 중심으로, 한국에서 일어나고 있는 도시선교의 흐름을 읽어볼 것이다. 외국인유학생을 위한 도시선교 플랫폼인 랜드마커 미니스트리의 사례를 기반으로 한, 다섯 가지 도시선교 전략을 소개하여 동일한 꿈을 꾸는 동역자들을 돕고자 한다.")}

            {makeProfile(박현욱, "박현욱 선교사 (John Park)", "주제: 남미 도시선교의 사례발표", "", <span>
            - LPG 대표( leaders for the next generation for God, Mexico y America Latina)<br></br>
            예장 ( 통합) 목사로 한국에서 남대문교회,방주교회와 신암젊은교회를 섬겼으며, 전국기독교직장선교회 (예장통합영락교회 파송)간사로 활동하면서, 청년목회자연합과 학원복음화협회 교회실행위원장과 위원으로 섬기며 청년연합운동을 위해 섬겼고 2008년 멕시코 선교사로 파송되어 현재 멕시코 시티에서 LPG ( 2011창립)를 통해서 대학생과 젊은 기독직장인( 멕시코시티 우남대학, 우암대학 등의 모임과 과달라하라 시의 과달라하라 대학과 달리 기독전문모임- 변호사, 상담사 모임을 섬기며 콜롬비아 ,보고타와 온두라스 테구시갈파의 대학생과 젊은이들을 귀납적  말씀사역을 통해 기독리더들을 훈련하며 섬기고 있다. 2018 년부터 멕시코 시티에서 주이레선교적 교회를 개척하여 함께 섬기며 귀납적 말씀사역을 통해 중남미 하나님나라의 차세대 리더쉽에 집중해서 하나님나라의 제자들을 양육하며 섬기고 있다. 장로회신대학과 신학대학원, 연세대연합신학원(신약), 숭실대사회복지 대학원( 사회복지정책), 아세아연합신학 대학원 ( 선교학 )에서 공부했다.

            </span>,
            <span>
              저의 사역의 핵심은” 말씀이 왕되는 하나님나라의 리더를 세우는 것”입니다. <br></br>
              표어: 말씀이 왕되는 젊은이를 주옵소서 ( 잠29장18절)<br></br>
              사역의 핵심은 예수님의 하나님나라의 제자도에 기반을 두고 있습니다 <br></br>
              1) 하나님을 알기 2) 제자공동체 세우기 3) 세상에 대학 성경적 섬김 을 중심으로 사역하고 있으며, 사역의 전략은 도시와 도시의 얼굴을 보여주는 대학생,젊은이들을 통해 현재와 미래세대의 위한 중남미의 하나님나라를 위한 복음주의적 다음세대의 리더를 세움을  귀납적 말씀사역과 소그룹제자 훈련과 현지교회 젊은목회자들을 섬김의 경험을 함께 나누면서 멕시코와 콜롬비아와 온두라스 모임을 통해 젊은이 제자사역의 구체적방법을 나누며 강의하려합니다
            </span>)}

            {makeProfile(Stephen, "Missionary Stephen Kim(김세반)", "주제:  A Case Study of a Korean American Urban Mission Mindful of Ecclesial Primacy, Multicultural and Intergenerational Character, and Missional Dimension and Intention in the Context of Diverse Multiethnic Urban Ministry Setting", "", "Stephen is bilingual and served Korean American and multiethnic congregations in urban settings, including New York City and Chicago over 15 years. His experience partly includes college ministries and church planting as well. He served in International City Ministry since 2010 to assist indigenous and diaspora churches in urban missional ministries. He holds M.Div. with Cross-Cultural Ministry emphasis from Trinity Evangelical Divinity School and currently working on Ph.D. degree in Intercultural Studies at the same institution.",
            "The theological and sociological case study will include: (1) the peculiar purpose that led to the founding of our diaspora urban mission agency, (2) the nature of the urban mission field context, and (3) immediate biblical principles that shape and form our urban ministries and practices. Then, the talk will present (4) several forms of its current missional ministries before concluding with (5) future urban ministry challenges and opportunities that seem to be emerging in the horizon for many parts of the world. The short talk will brim with reflections on the ecclesial primacy of mission and the socio contextual issues of migration.")}
            
            {makeProfile(주상현, "주상현 목사", "주제: 노스캐롤라이나 도시선교 사례발표", "", "미국 노스캐롤라이나 침례교 주총회 아시안 선교 사역 담당, 포인트 국제 교회 담임목사, 21세기 모세 사역 단 체 대표를 맡으며 미국에 있는 이민자들, 국제 학생 및 난민들을 대상으로 복음을 전하며 21세기 모세로 훈련 하여 파송하는 사역을 하고 있다. 한동대에서 국제 어문학을 싸우스이스턴 신학교에서 설교학을 전공하였다.",
            "하나님께서 모세를 광야에서 만나 애굽에 보내신 것처럼 21세기 모세를 디아스포라의 광야에서 만나서 파송하 시는 비전을 나누고 하나님께서 어떻게 실재적으로 21세기 모세들을 사용하시는 지에 대한 사례들을 듣는 시 간이 될 것이다.")}
            
            {makeProfile(양준, "양준 집사", "주제: 하와이 도시정책의 사례발표", "", <span>
            My name is Jun Yang. I am a husband to Seunghee Han, dad to Abigail, and a member of Aiea Korean United Methodist Church on the island of Oahu. I have been a VBS teacher, youth group leader, played on the praise team, Bible study teacher, young adult coordinator, and member of administrative committees for my church. I currently hold two leadership positions for the Hawaii District of the California-Pacific Annual Conference of the United Methodist Church: President of United Methodist Men, and the chair of the Disaster Preparedness and Response Task Force.
            <br></br>I was born in Reno, Nevada and attended the University of California, Berkeley. Jun worked as a community organizer for the grassroots community organization People Organized for Westside Renewal (POWER) in Santa Monica, California. In 2008, I moved to Honolulu and worked as the lead organizer for Faith Action for Community Equity (FACE). In February 2013, I was appointed by Mayor Kirk Caldwell to be Executive Director of the Office of Housing where I worked on homeless and affordable housing policies. In 2017, I began a new position at the Hawaii State Department of Transportation as their Homeless Coordinator. Currently, I work on the issue of homelessness across the state of Hawaii and across state departments.
            </span>,
            <span>
              Did you know that You are a community organizer? <br></br>
              What I learned as a Community Organizer.<br></br>
              How to have a bigger impact on homelessness in your areas.

            </span>, true)}
          </div>
          }
          {section === "문화예술 & 미디어" && <div className="mWidth100 mFlexContainer mContainer4p" style={{width: "60%", display: "flex", padding: "2.5vw", border: "1px solid rgb(226, 226, 226)", fontSize: "1vw", marginBottom: "3.5vw", background: "white", flexDirection: "column"}}>
            {makeProfile(이유정, "이유정 목사", "주제: 예배와 문화운동의 예술적 이해와 그 선교적 가능성", "문화예술 미디어 영역 강의1", "대학생 시절, “오직 주 만이”, “아침에 주의 인자하심을”을 탄생케 한 학생선교단체 IVF 활동과 선교한국의 도전으로 음악선교에 헌신했고, 그 이후 선교적 음악사역(컨티넨탈싱어즈)과 문화적 음악사역(좋은씨앗)을 고루 경험했다. 1999년 도미하여 예배학 공부 후 지역교회 예배사역을 거쳐, 예배사역연구소 소장, 리버티대학 외 몇몇 신학교 겸임교수로 섬기며 교회와 디아스포라, 선교지를 위한 예배와 문화의 르네상스를 꿈꾸고 있다. ",
              "1987년을 기점으로 한반도에 일어난 찬양운동의 물결이 왜 그 이전과 이후를 가르는 예배회복운동인지 살피고, 그 결과로 일어난 음악사역과 문화예술선교의 가치와 현주소를 돌아본다. 나아가 예배와 문화, 예술과 선교의 융합과 동역이 가져다 줄 통전적이고 창의적인 선교의 가능성, 그리고 창의성의 산실이 될 수직적 선교의 시급성을 제언한다.")}
            
            {makeProfile(심도성, "심도성 대표", "주제: 한국 기독교 음악산업 현장과 선교적 가능성", "문화예술 미디어 영역 강의2", "부산 기독교 문화 연합사역의 기획자로서 하나님 문화와 세상문화를 융합한 콘서트와 콘텐츠개발사업에 참여하고 있다. 크리스마스 트리 문화 축제 1,2,3, 10회 연출, 부산CBS60주년 기념 콘서트 연출, Awesome K-CCM 영상 연출 및 제작등의 왕성한 활동을 통해 부산의 문화선교사로 살아가고 있다. 현재, 부산 소리나무미디어 회사의 대표이며, 한국 K-CCM 발대 준비 위원장으로 활동하고 있다.",
              "한국 교회의 부흥 선봉장이었던 한국 기독교 음악의 현재의 모습을 설명하고 부정적인 부분과 긍정적인 부분을 제기하면서 기독교 문화의 장르, 무대, 산업, 컨텐츠 제작, 송출등 다양한 관점의 진행 상황들을 나누고자 한다. 특히, 타 문화 속으로 접근하는 선교적 방향과 가치를 제안하면서 하나님 나라의 선교를 위한 인적 물적 환경을 어떻게 만들어 갈 지 대화 하는 시간이 될 것이다. ")}

            {makeProfile(박종암, "박종암 선교사", "주제: 타문화권의 문화예술&미디어 선교 현장 이야기", "문화예술 미디어 영역 강의3", <span>
            청년기부터 작은 도시의 문화사역자로 출발하여 1997년부터 한국 다리놓는사람들에서 한국교회 예배운동에 참여하면서 예배와 부흥운동이 선교운동으로 이어지길 소망하여 2009년부터 창의적 접근지역인 베트남에 파송되어 뮤직브릿지 음악학원과 남부지역 세종학당 그리고 원더풀스토리&미디어원키즈클럽 공동프로젝트에 참여하고 있다. 현재, 베트남 다리놓는사람들 공동대표, KWMA 문화예술선교실행위원회 해외 코디네이터로 섬기고 있다. </span>,
            <span>
              타문화권 선교현장에서 문화예술&미디어 선교의 가치는 무엇이며, 어떤 유형의 전략들이 있는지 살펴보고, 코로나 펜데믹 이후 뉴 노멀 시대 속에서 문화예술의 콘텐츠와 미디어 간의 융합 그리고 플랫폼을 결합한 새로운 선교모델을 소개하려고 한다. 특히, KWMA 문화예술실행위원원에서 추진하고 있는 거점미디어 센터의 전략을 통해 한국교회와 미주한인교회 그리고 타문화권 선교지 간의 실행 가능한 협력방안을 모색해 보고자 한다.
            </span>)}
          
            {makeProfile(성보영, "성보영 목사", "주제: 교회가 바라봐야 할 문화/예술 영역의 선교적 기대", "문화예술 미디어 영역 강의4", "총신대학교에서 교회음악을 공부했으며, 고든콘웰신학교 MDiv 졸업 후 풀러신학교 선교학 박사과정에 재학 중이며, 청년 시절부터 한국, 캐나다, 미국 등에서 예배사역, 청년운동에 헌신해 왔다. 현재, 와싱톤중앙장로교회 부목사, Deep & Wide Foundation 대표로 섬기고 있다.  예배 2.0은 선교라는 마음을 품고 Deep & Wide Foundation을 설립하였으며 교회 울타리를 넘어 선교현장의 실제적 필요를 돕는 사역을 진행하고 있다.",
            "시대의 급격한 변화를 지나며 한인 교회의 획일적 선교 전략은 그 한계를 드러내게 되었다. 모든 선교가 멈추고 지원이 그치는 것을 대책 없이 바라보며 우리는 선교의 위기를 떠올리게 되었다.  그러는 위기는 기회이기도 하기에 바로 지금이 위기의 그림자를 걷어내고 변화의 기회를 만들어 내야 하는 때이기도 하다. 미디어를 포함한 문화/예술 영역은 바로 이 시점에 두드러지게 나타난 새로운 선교적 기회(opportunity)이다. 새로운 기회를 앞에 두고 모달리티(교회)와 소달리티(선교지)는 어떤 변화를 어떻게 준비를 해야 하는가? 우리 앞에 열려진 길을 함께 걸을 실천적 제안을 나눠보자.")}

            {makeProfile(이창진, "이창진 선교사", "주제: 청년미디어 인턴십을 통한 거점미디어센터 파트너십", "문화예술 미디어 사례 발표1", <span>
            한국 액츠뮤지컬 선교단에서 20여년 동안 기획과 대표로 섬겨오던 중 선교뮤지컬 콘텐츠를 20여 언어권 타문화권에 이양하는 사역을 하게 되면서 문화예술의 타문화선교의 역할과 필요성을 보게 되었다. 문화예술타문화선교네트워크 C-TentMaker선교회를 만들고 KWMA, GP선교회, 글로벌호프 등의 미디어팀장 역할을 하며 문화예술, 미디어를 통한 로컬선교단체와의 파트너십을 만들어 가고 있다. 현재 KWMA 문화예술선교실행위원회의 국내코디를 맡고 있다.</span>,
            <span>
              펜데믹을 지나면서 미디어는 선교의 중요한 도구이자 선교의 영역이 되었다. 선교의 도구로서 현장의 로컬선교사와 전문인선교사와의 파트너십과 선교의 영역으로서 차세대 주역이 되어야 할 청년미디어 전문가와의 파트너십을 이루기 위한 거점미디어선교센터 구축과 교육훈련 프로그램을 실행하고 있다.
            </span>)}

            {makeProfile(김인호, "김인호 선교사", "주제: 거점 미디어선교센터 태국 운영", "문화예술 미디어 사례 발표2", "2017년 감리교단에서 태국 선교사로 파송 받고 언어 훈련을 마친 후, 코로나 펜데믹 현상에 따른 선교 패러다임의 전환을 통해 노엘 스튜디오를 설립하고 태국 기독교 연합회 EFT 등록 기관「노엘」로 사역하고 있다. 유튜브 채널을 통한 기독 콘텐츠 배포, 온라인 송출 세미나 강의 등 각종 온라인 행사를 지원하면서 미디어 사역을 하고 있다. 현재, 감리교 세계 선교사회 정보통신위원회 기술지원 부장과 KWMA 거점 미디어 센터장으로 사역하고 있다. ",
            "코로나 펜데믹으로 인해 선교는 기존 방법에서 머물 수 없게 되었다. 펜데믹 이전에 하나의 도구로 여겨지고 사용되었던 미디어는 이제 필수 요소가 되었다. 태국 노엘 스튜디오의 설립과 사역이 확장되어가고 있는 과정들을 소개하며, 선교적 미디어가 아닌 미디어 선교라는 정의에 대한 생각을 서로 나누고 펜데믹 이후에도 시간과 공간의 제약을 넘어 진행될 미디어 선교에 대한 구체적인 비전을 나눠보려고 한다.")}
            
            {makeProfile(이규성, "이규성 선교사", "주제: 온라인을 활용한 선교사와 자원사역자 네트워킹", "문화예술 미디어 사례발표 3", "교수가 되려는 꿈을 가지고 미국 USC에서 Computer Science 석사를 마치고 박사를 준비하다가 하나님의 일에 헌신하여 IT 분야에서 사역하고 있다. 15년 동안 모퉁이돌 선교회에서 선교관련 IT 프로젝트를 진행했으며, 그 과정에서 자원 사역자와 선교사를 연결했을 때 일어나는 시너지를 보았다. 그를 위한 마음을 품어오다가 Godsends Ministry라는 선교단체를 미국에서 설립하고 선교사들과 자원사역자들을 효과적으로 연결하는 사역에 집중하고 있다.",
            "Godsends.org라는 선교 네트워킹 플랫폼을 이용해서 선교사들에게는 어떻게 하면 필요한 자원사역자들을 찾을 수 있는지, 또 자원 사역자들에게는 어떻게 자기들을 필요로 하는 선교 프로젝트들을 찾아서 사역에 참가할 수 있을지에 대하여 알아본다. 또한 어떻게 수많은 선교 프로젝트들과 다양한 자원 사역자들의 필요를 충족할 수 있는 조합을 찾아 낼 수 있는지, 프로젝트 팀이 구성된 후에 온라인을 통해 어떻게 사역을 진행할 수 있는지에 대한 실제적인 방법을 소개한다. ", 
            true)}
            
          </div>
          }
          {section === "선교적교회" && <div className="mWidth100 mFlexContainer mContainer4p" style={{width: "60%", display: "flex", padding: "2.5vw", border: "1px solid rgb(226, 226, 226)", fontSize: "1vw", marginBottom: "3.5vw", background: "white", flexDirection: "column"}}>
            {makeProfile(김대영, "김대영 목사", "주제: 21세기 선교환경의 변화와 선교적 목회", "", <span>
              - 휠로우쉽교회 담임<br></br><br></br>
              1990년대 후반 선교사로 중국의 영혼들을 섬기다 파송한 교회의 담임목사로 부름받아 서울 송파에서 목회했다. 현재는 워싱턴 휄로쉽교회 담임목사로 부름받아 현재까지 섬기고 있다. 선교사로, 한국교회 목회자로, 또 이민교회의 목회자로섬기는 흔치 않은 사역의 경험들이 미셔널처치에 대한 꿈을 이루어가는데 귀하게 사용되어지고 있다.
            </span>,"21세기 포스트모던시대에 선교적 교회가 어떤 변화를 시도해야하는지 나누고자 한다. 동호회 같은 소그룹 사역을 통해 어떻게 공동체적인 복음전도가 가능할 것인지, 교회 바깥을 향한 사역 뿐 아니라, 교회내에서 진행되는 사역들도 어떻게 지역 사회와 연결되어 복음의 통로 역할을 할 수 있을 지를 살펴보려고 한다. 마지막으로 선교현장에 체류조차 하기 힘든 상황에서 해외선교를 교육선교나 난민선교 중심으로 어떻게 이끌어갈 것인지도 살펴볼 것이다.")}

            {makeProfile(이문홍, "뉴저지실버선교회 (이문홍 사무총장 외)", "주제: 100세 시대를 살아가는 실버들의 선교적 삶 : 올해로 설립 20주년을 맞이하는 뉴저지실버선교회의 선교 훈련 및 선교사 사역 소개. 은퇴 후의 삶을 “모든 족속을 예수께”, “내 생명 다하기까지”, “새로운 삶을 위한 새로운 도전”으로 선교적 삶을 사는 실버들의 이야기.", ""
            , "현 뉴저지 실버선교회 사무총장, 1968년에 IT분야에 종사, 1970년에 미국에 건너와 같은 분야에서 정년 퇴직했다.  50대부터 많은 단기선교를 다니면서 선교지에 필요한 사역이 무엇인지 터득하고 개발해 왔다.   2006년에 실버선교 교육을 받고 지금까지 뉴저지 실버선교회의 발전을 위해헌신하고 있다.",
            `“뉴저지실버선교회”는 20년전에 은퇴를 바라보는 또는 이미 은퇴한 주의 자녀들을 위해 세워졌으며 이들에 의해 초 교파적으로 운영되어지고 있다. 각 교회마다 비율적으로 노년층이 점점 불어나가고 있어 “실버”들을 위한 프로그램을 개발하는 와중에, “실버선교”는 마지막 생에까지 “선교적 삶”을 이끌어 주는 좋은 해답이 됨을 의심할 여지가 없겠다. 이 강의를 통해서 은퇴자들이 어떻게 선교적 삶을 살아가며 주안에서 기쁨을 누릴 수 있는지를 소개하려고 한다.`)}
          
            {makeProfile(이홍기, "이홍기 집사", "주제: 지역사회에서 미셔널 라이프를 사는 사람들을 위한 미션센터. 초교파적 미션 허브의 다양한 선교적 플랫폼 소개", "",
            <span>
              - Neighbor + 사무총장 <br></br><br></br>
              네이버플러스 재단 사무총장으로 Serving Community and Beyond의 자세로 선한 이웃이 되어드리는 미셔널 라이프 현장을 섬기고 있다. 20여년의 한.미 기업경력과 경영 마감 후, 10여년의 섬김 돌봄 나눔 현장 생존 훈련을 거쳤다.
            </span>,
            "움직이지 않으면 아름다움과 사랑스러움의 느낌이 제한된다. 하나님이 예비하신 파노라믹 뷰를 놓칠 위험성이 높다. 움직이면 혼자할 수 없는 귀한 일들이 많다는 안타까움이 더해진다. 지역사회엔 미셔널라이프를 사는 이들이 적지않다. 자신들이 할 수 있는 작은 움직임을 통해 역사 속에서 각자를 발견한다. 그래소 소통은 필수이다. 미션센터의 역할과 초교파적 미션허브의 플랫폼이 필요하다. 현장 경험을 나누겠다")}
            
            {makeProfile(황영송, "황영송 목사", "주제: 우리 이웃이 된 refugees, Dayton Ohio 의 난민들을 섬기는 선교적 교회, 선교적 삶", "", 
            <span>
              - 뉴욕수정교회 담임<br></br><br></br>
              한인 1.5세 사역자로 뉴욕수정교회를 담임하며, 다음세대를 위한 사역 및 난민선교에 헌신해 오고 있다. 2018년 미국 내 오하이오주 데이튼에 정착해 살고 있는 난민들을 섬기기 위해 선교센터를 건립하고, 현지 평신도 사역자들과 함께 난민자녀들과 가정들을 돕기위한 평신도선교훈련 및 지역교회 동원을 위해 노력하고 있다. 미주성결신학대학교에서 강의하고 있으며, 뉴저지실버미션, Global United Mission 등 여러 단체에서 난민사역에 대해 강의하며 소개해왔다
            </span>, "과거에 선교의 경계선이 우리가 익숙하지 않은 땅을 넘어 가는 것이었다면, 이제는 선교의 대상들이 우리에게 다가오고 있는데, 그들이 바로 미국에서 피난민 신청을 하고 살아가고 있는 난민들이다. 본 강의는 “우리 곁에 다가온 이웃”이라는 주제로, 달라진 선교의 패러다임과 난민선교의 의미에 대해 나누고, 지역교회를 통한 난민선교의 방법들에 대해 뉴욕수정교회와 데이튼현지 비영리단체 No Longer Strangers의 사역을 실제사례로 소개하는 시간이 될 것이다.")}

            {makeProfile(지용주, "지용주 목사", "주제: 또 다른 이민자인 난민들을 위한 “보아스 프로젝트”(미국정착교육 훈련과정) 및 “로다이 썸머캠프”(난민 어린이 사역) 소개. 선교적 삶을 사는 성도들의 공동체인 선교적 교회의 롤 모델", "", <span>
            - KWMC 공동의장<br></br>
            - Boaz Foundation 대표<br></br>
            - 시라큐스 한인교회 담임 목사<br></br><br></br>
            현재 시라큐스 한인교회 담임목사이며, KWMC 공동의장을 맡고 있다. 미국이 선교지라는 비전을 가지고 난민 사역 비영리단체인 Boaz Foundation 대표 및 Global Mission & IT (GMIT) 공동설립자로 섬기고 있으며, 미국에 와 있는 열방들을 위한 말씀 사역 및 선교적 교회로서의 사역들을 펼쳐가고 있다.
            </span>,
            "북한 난민들과의 만남을 시작으로 지난 2008 년부터 이 땅에 와 있는 난민들을 섬기고 있다. 지금까지 40 여개국에서 온 1600 여명의 난민 및 이주민들을 섬기면서 미국은 열방이 우리의 이웃에 와 있는 선교지임을 다시 한번 경험했다. 선교적 교회는 우리가 세상으로 ‘파송받은’ 하나님의 공동체임을 기억하고 이웃에 와 있는 열방에게 나아가는 교회이며, 선교적 교회를 통해 말씀으로 훈련받은 성도들은 선교적 삶을 살아가게 된다. 선교적 교회의 참 의미와 실제로 이루어진 사역의 모습들, 그리고 선교적 삶을 살아가는 성도들의 실제 이야기를 함께 나누고자 한다. ")}
          
            {makeProfile(김성국, "김성국 목사 (뉴욕퀸즈장로교회)", "주제: 타민족을 품고 섬기는 선교적 교회", "", <span>
            퀸즈장로교회담임, 동부개혁장로회신학교학장, 미주크리스천신문사 사장, 단비TV이사장,  미주한인예수교장로회 부총회장으로 섬기며 전통적인 미주한인이민자를 위한 목회를 넘어 모든 이민자를 포함한  다민족교회를 지향하는 목회를 한다. 총신대학교, 총신신학대학원(M.Div), 고든콘웰신학교(Th.M/D.Min)에서 공부했다. 저서로는 "천성에 가는 길 험하여도" "그 많던 예배자는 어디로 갔을까" 가 있다.
              </span>,
            "뉴욕에서 오래동안 한인이민자들이 모여 성장해가던 보수적인 장로교회가 어떻게 다민족교회로 그 정체성을 바꾸게 되었는지, 그 과정에서 겪은 아픔과 환희는 무엇인지, 다음 세대와는 어떻게 어울리는지 등의 이야기를 다양한 방식으로 들려줄 것이다. 그리고 이 시대의 모든 지역의 모든교회가 다민족교회를 어떻게 적용할 것인가를 제시하게 된다.")}

            
            {makeProfile(양춘길, "양춘길 목사 (필그림선교교회 담임)", "주제: 선교적 교회로의 변화 (Pathway to Missional Church)", "", <span>
            - GP 선교회 미주이사장 역임<br></br>
            - GUM 선교회 대표<br></br>
            - 뉴저지 실버선교회 대표 <br></br>
            - KWMC 공동대표의장<br></br>
            - 저서 “미셔널 처치를 꿈꾸라”<br></br><br></br>
            1987년 신학교 졸업과 함께 나성영락교회 부목사로 부임하여 KM & EM 성인목회 시작한 1.5세 목사. 그 후 만 4년 동안의 오렌지한인교회(Fullerton, CA) 담임목회 경험을 쌓고 1997년 뉴저지에 필그림교회를 개척하여 25년을 담임목사로 섬기고 있다. 2017년 PCUSA 교단탈퇴와 함께 필그림선교교회로 교회이름을 바꾸고 미셔널처치로 적극 변화되어 가고 있다. 
            </span>,
            "위기에 처한 오늘날의 교회가 하나님의 나라를 위해 재활성화 되기 위해서는 교회의 패러다임이 미셔널처치로 변화되어야 한다. 전통적인 교회가 미셔널처치로 변화되는데 실제적인 도움을 주는 The Missional Pathway 를 소개하고, 교인 각자가 미셔널 라이프를 살며 교회가 미셔널처치로 변화되는 4단계의 웍샾과 실제 변화의 열매를 나눈다.", true)}

            </div>
          }
          {section === "MK(선교사자녀)" && <div className="mWidth100 mFlexContainer mContainer4p" style={{width: "60%", display: "flex", padding: "2.5vw", border: "1px solid rgb(226, 226, 226)", fontSize: "1vw", marginBottom: "3.5vw", background: "white", flexDirection: "column"}}>
            {makeProfile(탁영준, "탁영준, 탁정원 선교사", "", "", <span>
            - 페루 Hilltop Christian Academy<br></br>
            - 미국 CMF 선교원 파송 선교사<br></br><br></br>
            탁선교사님 부부가 MK사역의 콜링을 받은 것은 쉽지않았습니다. 집안 어른들께서 부부 내외가 보기에는 지나치리만큼 넉넉하게 선교사님들을 섬기시는 그 헌신이 감동적이기도 했지만 마냥 편하지만은 않았습니다. 그러는 동안 2010년 자원 봉사자로 동유럽 선교사대회에서 MK 수련회 사역을 섬기던 중, 강권적인 주님의 은혜가 부부에게 임하셔서, “너희가 저 아이들 (MK) 의 눈물을 보느냐? 저들이 울부짖는 기도를 듣느냐?” 라고 말씀하셨습니다. 그날밤  주님은 부부를 부르셨습니다. 그날 밤 두분은 부모님에 대한 맺힌 응어리들이 풀어지고 용서의 영으로 덮어주시고, 선교사님들 섬기시는 부모님의 그 헌신, 충성, 그리고 희생의 모습이 투영되어 부끄러운 모습을 주님께 드리고 MK 사역에 헌신하여 오늘 여기까지 오시게 되었습니다.
            </span>,<span>
            강의 제목 :  1 [MK 사역은 100% 가정사역]  <br></br>
            MK 는 하나님의 용사, 특별히 ‘복음의 특전사’로 훈련을 받고 있다고 믿습니다. 성경의 가장 큰 계명은 ‘사랑’입니다. 하나님을 사랑하는 사람은, 아버지 하나님의 말씀에 순종하여 이웃을 네 몸과 같이 사랑해야 합니다. ‘복음의 일꾼’ 선교사 가정은 이 사랑을 나누기 위해, 한 영혼이라도 더 주님 앞으로 인도하기 위해 많은 희생을 감내해야 합니다. 그런데, 선교사 자녀들이 자라면 자랄수록 현지인을 사랑하는 마음이 거꾸로 미워하고 증오하는 마음으로 뿌리가 자라고 있습니다. 바로 쓴뿌리 입니다. 선교사 부모님이 원하고 기대하고 바라던 모양으로 MK 가 자라지 못할 때도 있습니다. 부르심에 자녀를 향한 미안한 마음에 때론 바른 길이 아님에도 불구하고 ‘경험’을 쌓게 하기 위해 회초리를 놓을 때도 있습니다. 선교사 자녀(MK) 양육의 A 부터 Z 까지 하나님의 은혜와 복음의 열정이 아니면 이것이 열매를 맺게 해줄 수 있는 방법은 없습니다. 
            <br></br><br></br>
            강의 제목 : 2 [MK 1:1 사역: 멘토링]  <br></br>
            하나님께서는 사랑하는 당신의 자녀가 험난한 인생길을 걸어 가실 때는, 중요한 사람을 예비해 놓으시고, 만나게 인도 해주십니다. 
            특별히 신앙 안에서 걸어갈 수 있도록 해주시는 분을 만나는 것만큼 큰 축복은 없습니다. 인생의 중요한 일 (유학, 결혼, 비전 등) 결단 할 때, 나눌 수 있는 분, 고충을 들어 주시는 분, 지혜를 나눠 주시는 분, 하나님 앞에 갈 수 있도록 인도해주시는 분은 바로 ‘하나님을 경험하는 삶’을 보여주시기에 귀한 사역입니다. 
            <br></br><br></br>
            강의 제목 3 : Hilltop Christian Academy MK 소개
            </span>)}

            {makeProfile(최승업, "Kojo Choi (최승업) 선교사 (Ghana MK)", "주제: 소명 Calling", "", <span>
            14세 때 선교사인 부모를 따라 아프리카 가나로 와 현지 중학교, 고등학교 과정을 마치고 국립가나대에 경영학과를 마쳤다. 1999년 시작한 사업은 가나의 특성상 자본과 신뢰의 부족, 수 많은 사기 등으로 다양한 어려움을 겪었지만 신뢰할 수 있는 현지인 동료 Nathan과 아프리카 최대 통신사인 MTN 가나 매출의 20프로를 담당하는 나나텔이라는 기업을 키워냈다. 사업을 통해 수십년간 몸으로 겪어왔던 아프리카 사회의 부정부패 이슈의 핵심인 “신뢰부족” 문제를 해결하기 위해 2016년 가나 최초의 핀테크 개인금융결제원인 페이스위치(온오프라인 결제중계플랫폼)를 창업했다. 사랑하는 아내와 아이 다섯을 둔 아빠이자 부모님선교사님을 둔 아들로써 부모님의 선교지에 남아 3대가 함께하는 선교를 이어가고 있다. 2018 평창동계올림픽에 최초이자 유일한 가나의 스켈레톤 선수 프림퐁의 출전을 후원해 화제가 되었다. 2019년 아프리카 가나에서 영향력있는 핀테크 리더로 선정되었고 가나 산업계에 대한 기여와 실적을 인정받아 2021년 가나 명예의 전당에 이름을 올렸다.</span>,
            `Mission 은 선교라는 크리스쳔적인 뜻을 갖고있지만 사명이라는 뜻도 갖고있다.
            언뜻보기엔 선교사님과 MK 들에게 너무나도 친숙하고 당연한 단어, "미션". 
            하나님으로 받은 숙명적인 명령으로 소명적 Mission 을 이해하시는 부모님 선교사님과 
            부모님의 선교적 삶으로 선택권 없이 받아드려져야했던 MK 들의 포지션을 조명하려한다.
            `)}
          
            {makeProfile(최예문, "Helen Choi (최예문) 선교사 (Philippines MK)", "주제: 나의 부르심은 무엇인가?", "", <span>
            초등학교 4학년 때 선교사인 부모님을 따라 필리핀으로 와서 필리핀 한국 아카데미 그리고 후에 Faith Academy에서  중학교, 고등학교 과정을 마치고 미국 시카고에 있는 Moody Bible Institute 에서 Communications를 전공하였다. 대학교 졸업 후 MK Korea에서 간사로서 MK 사역을 하였고 R45 예배사역팀에서 보컬로 활동하였다. 횃불 트리니티 신학대학원에M.div를 졸업하고 2017년 기독교 한국 침례회 해외 선교사로 유럽/중동 지역으로 해외 선교사로 파송 되어 사역하다가  현재는 필리핀 민다나오에서  부모님과 남편과 함께 사역하고 있다. 2021년도에는 CCM아티스트로서 첫 EP인 언약의 봄을 발매하였고, 현재 민다나오 다바오에 위치한  MK학교인 Faith International Academy에서 고등학교 교목으로 섬기고 있으며 다바오침례신학교에서 Academic Dean으로 섬기고 있다.
              </span>,
            "나를 진짜 선교사로 부르셨는가? 2세대 선교사가 된다는 것은 어떤 것들을 의미하는가? 내가 어떻게 준비되어야 할 것인가? 다음세대를 이끄는 선교사는 어떤 고민들을 갖고 있어야 할까?선교와 결혼은 어떻게 해야하나? 이러한 다음세대의 여러 실제적인 고민들을 나의 여정을 통해 역사하신 하나님에 대해 이야기하며 진솔하게 나누길 소망한다.")}

            
          

          {makeProfile(이선민, "이선민 (Russia MK), 이준일 (Romania MK)", "주제: Mi Casa Tu Casa MK Ministry Presentation", "", <span>
          이선민MK는 러시아에 이준일MK는 루마니아에 1992년도에 나갔습니다. 중학교때 한국 MK NEST 둥지캠프에서 만나 친구관계를 계속 유지하고 미국 대학 생활하면서 더 깊은 관계를 맺고 결혼하게 되었습니다. 이선민MK는 오랜시간 사회생활을 하다 지쳐 기도가운데 MK를 위한 community home이란 꿈을 다시 생각나게 하시고 2017년도에 Mi Casa Tu Casa Community (미까뚜까) 를 비영리 단체로 새우고 지금까지 운영하고 있습니다. 이준일MK는 평생 음악을 전공하여 지금은 교회 찬양인도뿐만 아니라 K-Pop 프로듀서로서 많은 곡을 내고 2022에는 Umsic Music이라는 음악온라인스쿨, 커뮤니티, 그리고 프로덕션팀을 만들었습니다. 미까뚜까 사역을 위해서 김희찬 (캄보디아), 윤주혜 (중국), 함한미 (중국) MK들이 동역하여 리더십팀을 이루고 있습니다. 
            </span>,
            <span>
              www.mctccommunity.org
              <br></br>1. 대학, 청년 MK들 커뮤니티 홈: Orange County, CA에 아름다운 집에서 많은 transition가운데 있는 MK들과 함께 동거동락하며 주님의 임재를 누리며 생활하고 있다.
              <br></br>2. 고등학생 MK들 홈스테이: 방치되고 고립되어 선교지에 있는 고등학생 MK들을 위해 보호자가 되어 미국에 F-1 visa를 받아 홈스테이 하는 프로그램. 고등학교 과정을 잘 마치고 미국대학 진입을 위한 준비를 도와준다.
              <br></br>3. 남가주 MK 커뮤니티: 남가주 미까뚜까 커뮤니티에 속한 MK들만 80명이 넘는다. 이들을 위한 다양한 커뮤니티 이밴트 (예배, 리트릿, 바닷가, holiday) 를 준비하고 MK들이 주님의 나라를 위한 비전을 갖고 구하는 것이 목적이다. 
              <br></br>4. 대학캠퍼스 MK 아웃리치: 남가주 크리스천 대학으로 유학 오는 MK들을 위해서 매달 집밥을 재공하고 커뮤니티를 만들어주고 다양한 도움을 주고 있다. MK들이 많이 다니는 Biola & Azusa 대학을 주로 섬기고 있고 만날때는 MK가 지내는 아파트에서 만나 함께 교제하고 예배를 드리고 있다.

          </span>)}

          {makeProfile(이훈, "TCK Wave: Gary Lee (이훈) 선교사", "", "", <span>
          중국선교사를 꿈꾸던 시절 군입대 한달 전 선교 동원 컨퍼런스인 ‘선교한국(1996)’에서 강렬한 하나님의 MK사역으로의 부르심을 경험한 후 2001년 한국 최초의 선교사자녀사역기관인 MK NEST에서 전임사역자를 시작하여 모국초청 MK Camp를 통해 수많은 1세대 한인MK들을 만나며 한국에서 MK에 대한 존재와 MK사역에 대한 홍보/동원/교육/훈련 사역을 감당했습니다. 
          <br></br><br></br>
          2006년 필리핀으로 부르심 받아 Faith Academy(국제형MK학교)와 마닐라 한국 아카데미(한국형MK학교)에서 교사 선교사로 섬기며 2세대 한인MK들을 만났습니다. PH-OMF 5년간 조인해 서구MK 이슈와 Mission force를 배우고 경험하게 되었고, 한국교회 지원으로 MK P.F.O 가이드북, On-field 가이드북, Re-entry 가이드 어플 개발하여 보급했습니다. 
          <br></br><br></br>
          2017년 3월, 급속도로 세속화된 한국 필드에서 청년/대학생Mk들 위한 전략적 정체성/진로 코칭 및 초문화적 제자 1:1과 소그룹 집중하는 TCK WAVE 사역하며 2G2M(2nd Generation Missionary Movement:차세대 선교사 운동)에 헌신하고 있습니다.
          <br></br><br></br>
          ‘코필리칸(Kophilican) 종족’인 아내 Joy Lee(오지영)와 3명의 늘푸른 MK들(대1, 고3, 중3)과 ’T-Life 홈스쿨링’하며, ‘D.M.P(Disciple Maker as Parent:자녀를 제자삼는 부모 선교사 네트워크) 운동사역’을 섬겨오고 있습니다. 
            </span>,
            <span>
              강의제목 1 : TCK Wave MK 사역 소개
              <br></br>
              강의제목 2 : Third Culture Kid (제3문화 존재) vs Trans-Cultural Kid (초문화적 존재) 
              <br></br><br></br>
              선교사자녀(MK)들의 정체성 문제는 늘 이슈가 되기도 하고, 쉽게 말하기 어려운 주제입니다.. 
              MK들은 TCK적인 속성과 사역자 자녀 이슈를 함께 가지고 있기에 정체성 혼돈이나 정체성 위기 등의 문제에 어려움이 있을 수 있고 삶에 도전이 있습니다. 문화인류학적이나 보안문제로 TCK 불리고 있기에 Third Culture Kid(제3문화 존재)의 정의와 특징, 강점과 도전들을 살펴보고, KWMA 1993년에 한인MK 교육의 3가지 방향성(한국인, 기독인, 국제인)을 리뷰합니다. 또한, 3대째 MK출신이면서 문화인류학자인 폴 히버트 박사가 말한 TCK 적응모델을 살펴보고, 정체성의 특성을 깊이 생각해 보고자 합니다. 
              성경속 TCK 모델들을 리서치해보며, 예수님도 TCK셨다!?는 관점에서 정체성의 문제를 접근하여, 오늘날 TCK들이 처한 독특한 문화상황 분석을 함께 해 볼 예정입니다. 결국, TCK를 바라보는 통합된 정체성의 필요를 이야기하며 ‘한국인의 뿌리의식을 가진 세계를 품은 그리스도인’ 또는 ‘코필리칸!?’의 예를 통해 자신만의 정체성을 형성해가기를 응원할 것입니다.
          </span>)}
          {makeProfile(Esther, "MosaiK:  임에스더선생님 (Kenya MK)", "주제: Mosaik MK Ministry Presentation", "", <span>
          Esther Im is an MK from Kenya who came to the United States for college, after attending boarding school in Kenya.  While attending college at the University of Illinois at Urbana-Champaign (U of I), Esther went through a time of depression, struggling with her identity and with grief at losing the only life she had ever known since the age of two.  It was through this time of trial that she met Jesus in a transformational way.  Through the sermons at her campus church, she learned that she was a sinner and that Christ had died for her sins as well as her infirmities.  This truth, along with the powerful preaching of her senior pastor, started a journey of renewal in her heart and mind.  During her junior year in college, God began planting within her a desire to serve MKs and by the end of her senior year, He met her through prayer and confirmed this calling.  A few years later, in 2010, Esther and some MKs from the U of I started a non-profit MK organization, MosaiK, based in the midwest and serving MKs in college and beyond.  MosaiK has encouraged MKs to pursue their relationships with Christ through retreats, yearly gatherings during Thanksgiving and ongoing online Bible studies.  They have expanded their MK community network across the United States, as MKs have graduated from college and gone on to work in various locations. 
          <br></br><br></br>
          임 에스더는 케냐에 있는 선교사 자녀 기숙사 학교인  RVA 를 마치고 대학때 미국으로 온 MK 다. University of Illinois at Urbana Champaign에 있는 동안, 에스더는 자신의 정체성이 흔들리고, 두살 부터 살아왔던  케냐에서의 삶과 자신의 인생을 송두리째 잃어버린 것같은 상실감으로  깊은 슬픔을 경험하며 그것과 싸우는 과정을 지나게 되고, 바로 이런 시련의 기간 중에 자신을 변화시키시는 주님을 새롭게 만나게 됐다.  또한 campus 교회로 부터 능력있는 메시지를 받으면서, 주님이 자신의  죄와  약함을 위해 죽으심을 깨닫게 되고,  자신의 마음과  영의 회복을 향한 여정을 시작하게 된다. 대학 3학년때, 주님은 그의 마음에 MK들을 섬기고 싶은 열망을 주시기 시작하시고  졸업할 무렵쯤, 기도를 통해 이 calling을 확신시켜 주셨다.  몇년 후인 2010년, 에스더와  U of I  에 있던 몇명의 MK 들과 비영리 단체인 MosaiK 를 설립해,  Midwest 를 중심으로  Mk 대학생들을 섬기고 있다. MosaiK은  Retreats, 추수감사절 모임, 또한 성경공부 모임등을 통해 MK들이 주님과의 관계를 회복하도록 격려하고 있다.
          </span>, "")}

          {makeProfile(오규원, "오규원 (Dr. Kyoo-Won Oh)", "주제: 일터, 비지니스, 영성, 그리고 선교 (Workplace, business, spirituality, and mission)", "", <span>
          사랑하는 아내의 남편으로 대학생 두아들의 아빠로 버지니아주 맥클린의 거주하고 있다. 서울대학교와 University of California at Davis 대학원을 졸업하였으며, 한국수출입은행을 거쳐 지금은 세계은행그룹 (World Bank Group)에서 16년째 근무하고 있다. 서울 충현교회에서 유아세례를 받고 주일학교에서 대학부에 이르기까지 신앙교육을 받았다. ‘신앙과 삶의 통합’을 실천 할려고 노력하고 있으며, 직장생활을 하면서 ‘일터에서의 영성’을 살아가기 위해 노력하는 많은 이들과 하나님의 나라에 대해서 토론하고 교제하기를 즐겨하고 있다. 현재 버지니아 열린문교회를 출석하고 있으며, Center for Business As Mission (CBAM)의 실행이사로서 해외 BAM 창업 교육학교 Jubilee Entrepreneurship School (JES)에서도 활동하고 있다.
          </span>,
            <span>
             비즈니스는 다양한 민족과 문화들이 함께 소통하는 21세기의  선교적 통로입니다. 세계 곳곳의 많은 젊은이들은 전에 없는 글로벌 문화 가운데 자라나며 자국에서 혹은 세계로 나아가 창업으로, 그리고 직장에서 다양한 비즈니스 기회 등을 모색하고 있습니다. 생산, 소비, 투자의 활동을 통하여 우리의 모든 삶이 밀접하게 비즈니스와 연결되어 있습니다. 일터와 비즈니스 그리고 우리가 서 있는 바로 지금 이곳의 삶이 선교와 예배의 현장입니다. 
              <br></br><br></br>Business is an essential missional channel in the 21st century, through which diverse peoples and cultures communicate together. Many young people worldwide are growing up in an unprecedented global culture, exploring a variety of business opportunities in their home countries or around the world, as a start-up or at work. Through the activities of production, consumption, and investment, all our lives are closely interconnected with business. Workplaces, businesses, and life, where we stand here and now, are the sacred places of our spiritual worship and mission.  
            </span>)}

            {makeProfile("", "Stephen Cho ", "Faith and Money", "", "",
            "", true)}

            </div>
          }
          {section === "비정부기구" && <div className="mWidth100 mFlexContainer mContainer4p" style={{width: "60%", display: "flex", padding: "2.5vw", border: "1px solid rgb(226, 226, 226)", fontSize: "1vw", marginBottom: "3.5vw", background: "white", flexDirection: "column"}}>
            {makeProfile(김휴성, "김휴성 선교사", "", "Session 비정부기구(NGO)", <span>
            필리핀 선교사로 1994년 파송을 받아 신학교, 기술학교, NGO 및 교회 개척 사역등 다양한 분야에서 사역을 하던 중 2018년부터 KWMA(한국세계선교협의회) 본부 총무, 코로나 긴급대응 본부장을 수행했다. 현재 사단법인 글로벌 호프의 부대표로 전임사역을 하고 있다.
            </span>,"선교의 플렛폼으로서의 NGO의 역할과 창의적 접근이 필요한 선교지에 어떻게 적용될 수 있는지에 대한 구체적인 내용과 사례. 젊은이들에게 막연한 선교사 또는 선교지에 대한 생각이 NGO 활동을 통하여 해외 봉사 및 참여의 기회를 제공함으로써 주께서 어떻게 자신을 사용하실지에 기대하는 시간이 될 것이다.")}

            {makeProfile(신혜경, "신혜경 팀장", "", "Session 비정부기구(NGO)", <span>
            - 복음의전함 대외협력본부 팀장<br></br>
            -	수원화산교회 집사<br></br><br></br>

            사단법인)복음의전함 대외협력본부 팀장으로 사역하고 있으며 수원화산교회에서 집사로 섬기고 있습니다. 대학에서 산업디자인을 전공해 약 15년 동안 일반기업에서 삼성전자, 엘지전자, 현대모비스와 협력하여 다양한 제품의 수출향 매뉴얼의 디자이너로, PM으로 근무했습니다. 2021년부터 복음의전함 대외협력본부에서 팀장으로 사역하며 교회와, 기독교단체 등 복음을전하는 콘텐츠를 소개하고 활용할 수 있도록 지원하고 있으며 대한민국을 넘어 세계의 많은 교회들에 전도의 새로운 방법을 적용할 수 있도록 협력하며 적극적으로 지원하고 있습니다.
            </span>,
            "세대와 시대가 변해감에 따른 전도방법, 콘텐츠 등이 변화해야하는 이유를 설명하고, 광고의 효과를 복음에 접목하여 개발된 다양한 콘텐츠 들을 소개하며 추후 계획을 공유합니다. 복음의전함에서 제작한 콘텐츠의 활용방법을 알리고, 어떠한 상황에서도 전도 할 수 있다는 전도, 쉬운 전도, 마음을 움직이는 전도 방법을 현장에서 활용할 수 있도록 다양한 콘텐츠를 제공하며 적극적으로 지원하여 전도와 선교 사역에 실질적인 적용으로 이어질 수 있도록 방법을 제시합니다.")}
          
            {makeProfile(박상은, "박상은 대표", "주제: 새로운 선교 패러다임, NGO선교", "Session 비정부기구(NGO)", <span>
            - 샘병원 미션원장<br></br>
            - 아프리카리매재단 대표<br></br>
            - 국제보건의료학회장
              </span>,
            "최근 많은 나라들이 더 이상 선교사비자를 허락하지 않으면서도 NGO문호는 활짝 열고 있다. 회교권과 공산권의 경우 선교단체는 들어갈 수 없지만 NGO는 오히려 환영받는다. 아울러 한국정부는 매년 6조원을 국제개발협력에 사용해야 함에도 마땅히 믿고맡길 NGO가 많지 않다. 지난 20여년간 경험한 NGO선교를 함께돌아보며 향후 무한한 가능성을 지닌 NGO선교의 전략을 생각해보고자 한다.")}

            {makeProfile(Thir, "Thir Koirala", "", "Session 비정부기구(NGO)", <span>
            Email: thirkc@gmail.com <br></br>
            Nepal: +977-9851100125 USA: +1-6156747790 <br></br>
            Pr. Thir Koirala has been serving in Nepal for more than 2 decades in different roles. He was born in a Hindu family in Nepal and received Christ as a personal savior in his student life through correspondence. He served as a missionary and pastor in east Nepal from 2000-to 2008. Also, he established NGOs in Nepal to serve the community.
            <br></br>Pr. Koirala worked as the national coordinator of Micah Nepal from 2009- to 2021. He is also serving as national coordinator for Global Hope Korea in Nepal. He has well experience in Integral Mission and community transformation through mobilizing the local church and community. He has been working as an Asia Regional Coordinator for WEA peace and reconciliation Network. He is a well-trained and experienced pastor, trainer, facilitator, and writer on the national and international levels. 

            </span>,
            <span>
              Presentation outline on Integral Mission in KMWC Conference 2022 
              <br></br>- Integral Mission Concept and Biblical Mandate 
              <br></br>- Integral Mission and role of the Church as the agent of transformation 
              <br></br>- Justice, Mercy, and walk humbly 
              <br></br>- Integral Mission in practice- Challenges and opportunity 
              <br></br>- Integral Mission in the local context and culture 
              <br></br>- Summary 
          </span>, true)}

            </div>
          }
          {section === "BAM" && <div className="mWidth100 mFlexContainer mContainer4p" style={{width: "60%", display: "flex", padding: "2.5vw", border: "1px solid rgb(226, 226, 226)", fontSize: "1vw", marginBottom: "3.5vw", background: "white", flexDirection: "column"}}>
            {makeProfile(김동건, "김동건 선교사", "주제: BAM의 역사와 도전들", <span>Session 1 BAM & Core</span>, "GP 한국 선교회 대표, IBA 공동대표, KWMA 선교한국 실행 위원으로 선교 연합 운동을 위해 사역하고 있다. 고려대 경영학을 공부했고, 합신교단에서 목사 안수를 받았다. 2004년부터 태국 선교사로 사역해 오며, 카페, 한국어 교육, 직거래 장터, 엔터테인먼트 등 다양한 비즈니스 영역에 도전해 오고 있다.",
              "BAM의 성경적 근거와 배경 및 관련된 성경 인물들을  살펴보고, 교회사 속에 나타난 BAM 사역자들을 발굴 소개한다. 성경과 역사에 기초한 BAM이해는 BAM사역자들이 현재와 미래 선교 특히 BAM이 직면하고 있는 도전들을 분석하고 사역의 돌파구를 찾는데 매우 유익할 것이다.")}

            {makeProfile(이다니엘, "이 다니엘 사무총장", "주제: BAM: 비즈니스 그 자체로서의 선교", <span>Session 1 BAM & Core"</span>, "IBA 사무총장과 KWMA BAM 분과 코디네이터로 사역하고 있다. 연간 120여 건의 사회적 경제 기업과 NPO들의 창업-기업 운영에 관한 상담과 컨설팅을 진행해 왔다. 한동대에서 경영경제학, 에스라성경대학원에서 성경학, 횃불트리니티 신학대학원에서 목회학을 전공했다. 공저로는 <BAM:비즈니스 세계에서 복음을 살다> (2021), <지금 여기, 선교의 시대> (2020), <우리가 교회다> (2016, <교회를 위한 사회적 기업 가이드북> (2015) 등이 있다.",
            "선교를 제한하는 국가가 늘어나고 있다. 코로나-19 이후에도 이 추세는 지속될 것이다. Business As Mission (BAM)이 창의적 접근 지역을 섬기는 주요한 선교방법으로 주목받고 있다. 강의에서는 BAM의 정의, 핵심가치, 나라별 현장 사례, 그리고 이미 다가온 미래 이슈 등을 소개한다. 특히 참석자들은 복음을 직접 전할 수 없는 나라-민족에게 BAM 사역자들이 “일터 환경”조성, 현지인 고용, “복음을 살아냄“을 통해 “선한 영향력”을 끼쳐 온 다양한 이야기를 접할 것이다.")}
          
            {makeProfile(구본성, "구본성 박사", "주제: Building Successful ET Business", <span>Session 2 BAM Training</span>, "IT 전문 Pishon Technologies 를 창업하여 경영하고 있고, 30년 이상 벤처 기업 창업에서 기업 상장에 이르는 과정에 성공과 실패의 경험이 풍부한 경영컨설팅 전문가이다. 세계적인 경영 컨설팅 회사PwC 에서 Managing Partner와 Managing Director로 일한 바 있다. BAM 사역자 훈련을 위한 ET Forum에서 ET Global Faculty로 섬기고 있다.",
            "ET (Entrepreneurial Transformation)는 선교와 the Kingdom Business를 위한 부르심에 대한 응답으로  현지인들의 영적 변화, 고용을 통한 경제적 안정과 사회적 지위향상을 목표로 한다.  본 강의는 선교지 창업을 통해 성공적인 선교 사역을 수행할 수 있도록 ET BAM 기업 창업에 필요한 기본적인 지식과 기량을 위한 창업 아이디어 발굴, 창업과 경영 노하우, 자금조달 및 운영 노하우 등의 훈련 프로그램을 소개한다.")}

            {makeProfile(오선일, "오선일 목사", "주제: 일터 사역 길라잡이", <span>Session 2 BAM Training</span>, "The Business Redeemers Corp의 대표로서 고신교단 수도노회 파송 전도목사로 뉴욕 맨하탄, 퀸즈, 뉴저지 포트리 지역에서 초교파 지역교회 성도들을 Missional Life로 살아가도록 양육, 훈련, 지원 & Network하는 역동적인 사역을 감당하고 있다. 고신대학에서 M.Div, Liberty Theological Seminary에서 “교회성장학”으로 Th.M 을 받았다. 지난 22년간 미국 이민 교회 목회사역 (샬롯츠빌 빛과 소금교회 담임목사)과 버지니아 및 메릴랜드 청년사역과 일터 사역을 헌신적으로 이끌었다.",
            "지역 교회 목회자들이 어떻게 성도들이 평일과 주일과 통합된 삶을 살 수 있도록 훈련할 수 있는지, 성도들의 삶의 현장인 비즈니스 현장에서 어떻게 직접 성도들을 만나고 양육 교제하며 그들을 복음전도자와 비즈니스 현장 선교사로 훈련할 수 있는지, 비즈니스 현장에서 어떻게 선교사를 직접 지원하며 지역교회 목회자들과 교회들이 동역할 수 있는지에 대한 구체적인 사례들, 지역교회와 선교단체와 파송 선교사들이 비즈니스 현장에서 복음을 증거하며 다양한 동역 구도를 형성하여 실제 협력할 수 있는지에 대한 구체적인 사례들으로 통해 소개할 것이다.")}

            {makeProfile(조차희, "조차희 (Peter Cho) 박사", "주제: ET Forum Leadership Core", <span>Session 2 BAM Training</span>, "전기 공학 박사와 MBA로서 미국 국방부 해군성에서 지난 26년간 기술개발 리더와 리더쉽 강사로 역할 해왔다. 현재는Virginia Tech과 George Mason University에서 리더쉽,  프로젝트 관리법, 첨단 기술을 탑재한 자동차에 대해 가르치고 있다. 그는 사람들은 누구나가 리더라는 신념을 갖고 있고. 특히 Lead Like Jesus Christ 와 Servant Leadership에 초점을 맞추고 있다. BAM 사역자 훈련을 위한ET Forum에서 ET Global Faculty 로 섬기고 있다.",
            "존 맥스웰은 “리더쉽은 더도 말고 덜도 말고 오로지 영향력이다” 라고 했다. 리더쉽은 종합적인 예술과 같다. 마치 어떤 부품들이 합쳐져서 하나의 유용한 도구를 만들어 내는 것과 같다고 할 수 있다.  이와 같이, 이번 강의를 통해 “우리 모두는 리더다”는 관점에서 리더쉽의 예와 함께 공동체적인 목적과 가치, 의사결정, 의사소통, 팀워크,  전망, 관계개선과  갈등 해소,  delegation, 섬김 등의 중요성을 함께 나누게 될 것이다.")}
            
            {makeProfile(안창호, "안창호 박사", "주제: GP Cases and Funding", <span>Session 3 BAM Cases & Funding</span>, "ET Forum Founder 로서 ET BAM 사역자들이 선교 현장에서 Missional Entrepreneur, Entrepreneurial Missionary의 역할을 효과적으로 수행할 수 있도록 돕는 사역을 하고 있다. GP 선교회 이사와 BAM 사역을 총괄하는 COET 의장으로서 ET 선교사 훈련과 파송, Funding 등을 돕고 있다. 연방정부 National Cancer Institute와 FDA등에서 암연구와  수석심의관을 역임한 암전문가이고, 제약회사를 설립하여 CEO와 회장으로서 회사를 New Stock Exchange에 상장시킨 경영자이기도 하다.",
            "GP 선교회에서 후원하는 ET BAM 사역인 베트남 영어 학원 사역과 네팔 한식당 및 Meal kit 사업을 소개한다. 이들 사역을 통해 일자리 제공, 현지인 리더 계발, 창업 기회 제공, 팀 사역 등이 어떻게 이루어지는가를 실제적인 측면에서 배우게 된다. 또한 BAM 사역에서 핵심 역할을 하는 자금 조달과  관련하여, 자금 제공자의 입장에서 본 사역 타당성분석과 사업성 분석 등에 대해 함께 살펴 볼 것이다. ")}
            
            {makeProfile(이영진, "이영진 대표", "주제: Hope & Wonders Cases", <span>Session 3 BAM Cases & Funding</span>, "Hope & Wonders Ministry 대표로서 중동난민과 중남미 빈민들을 위한 사역을 하고 있고, Director of International Students 로서 Maryland and Virginia 주의 사립학교에 유학오는 중.고.대학생들을 관리하는 교육자로 헌신하고 있다. 개인 사업을 하는 여성 사업가이고, 지역 사회 봉사자로서 메릴랜드 주지사 상을 수상했다. 목사 사모들과 여성들을 위한Loving You Program의 초대 미주 운영위원장으로 봉사했다.",
            "Hope & Wonder Ministry가 진행하고 있는 BAM 사역 Cases를 소개한다. 교회가 BAM 사역 훈련을 통해 어떻게 선교사들의 동역자로서 함께 사역에 참여할 수 있는지에 대한 좋은 예가 될 것이다. 강의에서는 시리아 난민들을 대상으로 한Lebanon에서의 K Beauty-Cosmetics 사업, 청소년 직업학교 사업, 터키의 Mosaic Art 사업 등을 소개할 예정이다. ")}
            
            {makeProfile(임도마, "임도마 선교사", "주제: BAM Impacts- 사역현장", <span>Session 4 BAM Future</span>, "워싱턴국제신학대학원의 아시아지역 책임자로 신학교 학위 네트워크를, 또 GP선교회의 국제행정총무, 한국본부총무로 본부 행정사역을 하였고, 베트남 선교사로서 신학교 설립, 선교사훈련, ET-BAM훈련, 글로벌 리더십훈련 등의 사역을 하고 있으며, 선교행정연구소를 설립하여 선교단체 및 기관에 선교행정 정보를 제공에 힘쓰고 있다.",
            "창업(Startup) 훈련을 통해 예수 그리스도를 전하고, 그의 사명에 순종하여 하나님 나라를 확장하는 것과, 하나님 자녀들의 영적, 경제적, 사회·문화적 지위 향상을 목표로 사역자를 훈련하는 ET Forum을 통해 베트남 지역에서 이런 변화가 일어나도록 베트남인 비즈니스 지도자들을 훈련하여 BAM 사역자로 전환시킨 일과 그 파급효과의 실제 사례를 강의합니다.", true)}
          </div>
          }
          {section === "디아스포라" && <div className="mWidth100 mFlexContainer mContainer4p" style={{width: "60%", display: "flex", padding: "2.5vw", border: "1px solid rgb(226, 226, 226)", fontSize: "1vw", marginBottom: "3.5vw", background: "white", flexDirection: "column"}}>
            {makeProfile(지용주, "지용주 목사", "주제: 이웃에 와 있는 열방, “난민” - 미주 난민 사역의 선교적 모델", "", <span>
            - KWMC 공동의장<br></br>
            - Boaz Foundation 대표<br></br>
            - 시라큐스 한인교회 담임 목사<br></br><br></br>
            미국은 열방이 들어와 있는 선교지입니다. 특별히 직접 복음을 전할 수 없는 나라로부터 많은 난민들이 미국에 와 있으며, 시라큐스는 난민들이 미국에 들어와 정착하는 대표적인 도시 중 하나입니다. 
            보아즈 프로젝트(Boaz Project)는 모압 여인 룻이 난민으로 베들레헴으로 왔을 때 그녀를 영접하고 먹이고 돌보았던 보아스처럼 미국으로 들어와 또다른 소외된 계층으로 살아가는 난민들에게 복음을 전하는 시라큐스 한인교회의 난민 사역입니다. 나라를 잃고, 아무런 소망이나 기대없이 이 땅에 오게된 난민 친구들에게 컴퓨터와 Tutoring, 그리고 난민 어린이들을 위한 Summer Camp 를 통해 복음을 전하고, 가장 절실하게 도움이 필요한 그들에게 하나님의 사랑을 전함으로써 우리는 그들과 친구가 되었습니다. 
            이 보아즈 사역을 통해 40 여개의 나라에서 온 1600 여명의 난민들에게 복음을 전할 수 있었습니다. 이제 더 나아가 난민 어린이들과 그 부모들에게 편안하고 따뜻한 쉼터를 제공하고, 그들이 복음을 더 가까이에서 자연스럽게 접할 수 있도록 “꿈동이 도서관” 프로젝트를 준비하고 있습니다. 
            우리의 이웃에 “난민”이라는 열방이 와 있습니다. 특히 최근 아프가니스탄에서 많은 난민들이 미국에 들어오고 있습니다. 이들처럼 난민들은 대부분 복음이 들어가기 힘든 나라에서 왔기 때문에 우리는 그 땅에서 온 난민들을 이 땅에서 만나 그들에게 직접 복음을 전할 수 있습니다. 한인 디아스포라로서의 미주 한인교회가 이 땅에 온 또다른 디아스포라, 난민들에게 어떻게 효과적이고 전략적으로 복음을 전할 수 있는 지를 지난 2007 년부터 이루어왔던 난민선교의 현장을 소개함으로써 여러분과 함께 나누고자 합니다. 

            </span>,"")}

            {makeProfile(백신종, "백신종 목사", "주제: 미주 한인 디아스포라 교회의 선교적 역할", "", <span>
            - 현) 벧엘교회 담임목사<br></br>
            - 전) 캄보디아 선교사 / Hibert Global Center Director<br></br><br></br>
            캄보디아 주재 선교사 (2004-12)와 본부선교사(2012-15)로 사역하며 트리니티 신학교 내 Hiebert Global Center를 설립하여 선교학 연구를 수행했으며, 그간 20여편 이상의 선교학 논문과 단기선교 퍼스펙티브 (2008), 고엘 교회에 말걸다 (공저, 2017), Prophets in the Qur’an and the Bible (편저, 2022) 등을 출간하였다.  현재는 메릴랜드주 엘리콧 시티에 소재한 벧엘교회를 담임하고 있으며, 덴버신학교 겸임교수로 가르치며, SEED선교회와 미주한인기아대책(KAFHI) 이사로 섬기고 있다. 
            </span>,
            "미주한인교회는 다양한 역사적 맥락속에 디아스포라로 살아가는 한인공동체를 형성해 왔다.  기독교 역사에 흩어진 유대인 디아스포라와 마찬가지로 미주한인교회는 선교적인 사명을 재발견하고 성경적, 신앙적, 선교적 사명을 감당해야 한다. 이 강의는 선교적 교회에 대한 이해를 바탕으로 한인교회의 선교적 사명을 역사적, 신학적, 사회적, 선교적 관점에서 살펴보고 한인교회의 선교사역에 대한 실제 사례들을 바탕으로 선교적 역할을 모색해 볼 것이다.  특히 한인교회 모든 세대의 선교동원과 선교참여의 방안을 모색 할 것이다.")}
          
            {makeProfile(박성현, "박성현 교수", "주제: ‘조용한’ 부흥, 보스톤의 이민자 주체 부흥 사례", "", <span>
            - 현) 미국 Gordon-Conwell Theological Seminary 구약학 교수<br></br>
            - 전) 미국 Gordon-Conwell Theological Seminary 보스톤 캠퍼스 학장<br></br>
            - 전) 미국 Harvard University 아쉬켈론 고고학 랩(Lab) 디렉터<br></br>
            - 전) 팔레스타인 Bethlehem Bible College 성경고고학 교수<br></br><br></br>
            박성현 교수는 파라과이 이민 1.5세로서 이스라엘 예루살렘 히브리대학교(B.A.), 이스라엘 텔아빕대학교(M.A.), 미국 하버드대학교(Ph.D.)를 졸업했다. 이스라엘 IFES를 시작으로 자비량 선교사, 두란노해외선교회(TIM) 파송선교사로 활동했다. 하버드대학교 산하 아쉬켈론 고고학 랩(Lab) 디렉터를 거쳐 고든콘웰신학대학원의 도시사역자양성센터(CUME)로 알려진 보스톤 캠퍼스 학장을 역임했다. 현재는 고든콘웰의 해밀턴 캠퍼스 구약학 교수로 있으며 라티노-글로벌 프로그램의 영성형성 프로젝트를 책임지고 있다. 히브리어, 히브리성경, 성경과 문화, 도시사역, 영성형성이 관심분야다.
            </span>,
            "미국교회는 흔히 뉴잉글랜드 지역을 목회자들의 매장지라 부른다. 그 이유는 수많은 노력에도 불구하고 지속적으로 감지되는 이 지역 교회 및 기독교 인구의 감소 추세 때문이다. 그러나 과연 그럴까? 1976년, 미국의 도시사역자 양성을 위해 세워진 고든콘웰신학대학원의 보스톤 캠퍼스는 ‘도심지역사역학’ 과목을 개설하고 임매뉴얼가스펄센터로 하여금 수강생들을 동원해 보스톤 광역시의 실제적 교회현황을 주기적으로 조사할 수 있게 했다. 그 결과 예상을 뒤 엎고 지난 반 세기동안 교회는 보스톤 지역에서 계속 증가하고 있었음을 관찰할 수 있었다. 도대체 이러한 증가 추세가 왜 그동안 일반 통계상으로는 관찰되지 않고 있었을까? 그 이유는 1969년 이후 보스톤 인근 지역의 부흥을 주도한 주체가 새로운 이민자들이고, 이들이 형성하는 교회, 사역들은 일반 통계 리서치 망에 닿아 있지 않아 집계에서 누락되었기 때문일 것이다. 본 강의는 이렇게 통계상으로는 보이지도, 들리지도 않았던 부흥 – 보스톤의 새 이민자들이 주체가 된 ‘조용한’ 부흥의 사례를 다각적 측면에서 살펴 볼 것이다.")}

            {makeProfile(백운영, "백운영 목사", "주제: 복음의 주체로서의 디아스포라를 통해 진행되는 사역들", "", <span>
            - 현) 필라델피아 영생 장로교회 담임목사<br></br>
            - 현) 제9차 한인세계선교대회 공동 대회장<br></br>
            - 전) GP 선교회 국제대표
            </span>,
            <span>
              로잔 디아스포라 사역팀은 디아스포라의 사역을 세가지로 구분하고 있다. 첫째는 For Diaspora 즉 디아스포라 다양한 집단을 타겟으로 하는 사역이며 접근 전략도 광범위하다. 둘째는 Through Diaspora 이며 친척, 아비집을 떠나서 예수님을 영접한 사람들이 이제 복음의 주역으로 쓰임받는것을 뜻한다. 셋째는 Beyond Diaspora 이며 디아스포라의 사역 구성원들의 여러 국제적인 넷워크를 통해 시너지를 형성하고 더 큰 그림으로 접근하는 현재와 미래적인 사역을 말한다. 
              <br></br><br></br>
              저는 이번 디아스포라 트랙에서 Through Diaspora 의 여러가지 예를 들면서 디아스포라가 가진 복음의 수용성, 그것을 사역적인  특성으로 활용할수 있는 탁월성을 전개해 나가려고 한다. 디아스포라들은 새로운 환경 적응에 겁을 내지 않으며 도전을 오히려 즐긴다. 그런 일군들을 세계 전역에서 배출하여 사용하시는 하나님의 섭리를 보면서 함께 참여하기 원한다. 특히, 디아스포라 사역자들이 세계 각처에서 특별한 사역들을 전개하고 있는데 그중에 몇개의 사역 모델을 소개하며 함께 도전과 미래를 펼쳐 나가기 바란다.
            </span>)}

            {makeProfile(최남용, "최남용 선교사", "주제: 미주와 중남미 한인 디아스포라의 라틴 아메리카와 세계선교적 역할", "", <span>
            - Central American Theological Seminary (SETECA) 교회사 및 선교학 교수<br></br>
            - GP (Global Partners) 선교사<br></br>
            - 라틴 아메리카 한인 디아스포라 차세대 리더쉽 섬김이
            </span>,
            "20세기 후반 라틴 아메리카 개신교 교회들의 폭발적인 성장, 즉 1970 년대까지 인구 5%를 넘지 못하던 중남미의 개신교회들, 특별히 복음주의 교회들이 놀라운 교회성장을 이루었고,  특별히 과테말라, 엘살바도르, 혼두라스, 니카라과, 즉 중미의 교회들인 경우 오늘날 40%의 이상으로 성장했지만, 가장 가난하고 치안이 불안한  이 지역에서 그들의 교회 성장 발전이 어떻게  이루져왔는지  또 그들에겐  어떤 필요가 있는지를 살펴보기를 원한다.   또한 하나님께서 약 120년 전 한인 디아스포라를 이 라틴아메리카에 보내셔서 그들이 직면했던 어둡고 힘들었던 이민의 현실을  어떻게 극복하였고 그들의 디아스포라 교회들이 어떻게 이민의 삶에서  단지 survival (생존)의 형태로서만이 아닌, 중남미 선교의 agent로 사용받아왔는지를 잠시 살펴 보면서, 특별히 많은 것들이 급변하는 21세기 오늘, 중남미 한인 디아스포라가, 그리고 가까운  곳에 존재하는 북미 한인 디아스포라 교회들이 하나님 나라의 글로벌 선교에 어떤 일을 할 수 있는지를 연구하며 적용할 수 있는 방법들을 찾는데 이 발표의 의미가 있을 것이다.")}
            
            {makeProfile(노규석, "노규석 목사", "주제: 온누리교회의 다문화 선교 30년 사례", "", <span>
            - 현) 온누리M센터 센터장<br></br>
            - 현) 아신대 (ACTS) 아랍문화 연구원장<br></br>
            - 전) 아랍권 선교사(두란노 해외선교회), 아부다비 온누리교회 개척 및 담당목사<br></br><br></br>
            노규석 목사는 2003-2008년 온누리교회와 두란노해외선교회(TIM) 파송 선교사로 이라크와 요르단에서 사역하였고, 2009-2010년은 Fuller 신학교에서 이슬람 선교학을 공부하였다. 2010-2014년 기간에 U.A.E 아부다비 온누리교회를 개척하였고, 원전 바라카 교회와 건설현장 교회들을 섬겼다. 2014년에 귀국하여 현재까지, 안산 온누리M센터 센터장으로 이주민들을 섬기고 있으며, 아세아연합신학대학교(ACTS)에서 아랍연구원장으로 섬기며 선교학 박사 과정 중이다. 
            </span>,
            "1985년에 개척된 온누리교회는 해외 타문화권 선교와 더불어, 1993년부터는 국내 외국인 근로자들을 향한 이주민 선교를 시작하였다. 2005년에는 외국인들이 집중적으로 거주하는 경기도 안산시에 온누리M센터를 설립하고 전문적인 다문화 선교단체로 발전시킨다. 2011년 (고) 하용조 목사의 소천 이후, 2기 온누리교회를 섬기고 있는 이재훈 목사는 다문화 사회로 변화하는 대한민국에서 온누리교회를 ‘모자이크 교회’로 발전시킨다는 비전을 선포하며 국내 거주 외국인들을 향한 다문화 선교에 더욱 힘쓰고 있다. 지난 30여년의 다문화 선교를 통해 약 1만명 이상의 외국인 이주민 성도들이 신앙생활을 하였고, 700여명이 세례를 받았으며, 30명이 역파송 선교사로 파송되었으며, 안산 이외에도, 김포, 화성, 평택, 남양주, 군산에 온누리M센터들이 설립되어 다문화 선교를 담당하고 있다. ")}
            
            {makeProfile(홍광표, "홍광표 목사", "주제: 디아스포라 선교의 성경적 역파송 사례- 새생명태국인교회의 재한 태국인 디아스포라 근로자 선교 역파송을 중심으로", "", <span>
            - 새생명 태국인 교회 담임목사<br></br>
            - Art Korea 문화예술 전문인 선교회 대표<br></br>
            - 태국 새생명비전교회연합 교단 설립자<br></br><br></br>
            홍광표목사는 2004년부터 2005년까지 한국에서 장로교 통합 교회 안에서 태국인 근로자 예배를 담당하였다가 2006년에 새생명태국인교회를 개척하여 지금까지 70여명의 신학생들을 양성하여 역파송하여 교회를 개척하였으며, 이들 교회들을 연합시켜 태국 복음주의연맹 산하에 새생명비전교회연합 교단을 설립하였다. 더불어 Art Korea 문화예술전문인 선교회 대표로서 태국에 교육·문화선교사역과 BAM사역을 접목시키고 있다. 
            </span>,
            "디아스포라 선교의 성경적 역파송은 단순히 본국으로 파송하는 개념이 아니라 제3국, 제4국으로, 세계 열방으로 파송하는 ‘열방의 제사장, 열방의 레위인(이사야 66장 18절~20절)’을 세우는 사역이다. ‘재한 태국인 디아스포라 근로자 사역’을 감당하는 새생명태국인교회는 실제 이러한 성경적 역파송을 하는 교회이다. 그리고 그 열매로 재한 태국인 디아스포라들에 의해 태국 본국에 선교적 교회들이 세워졌으며, 그 교회들이 연합하여 태국 복음주의연맹 산하에 교단을 세웠고, BAM선교도 실행하고 있다. 이로써 지속 가능한 타문화 선교 파송이 가능해진 것이다. 이번 강의는 자립, 자치, 자전, 그리고 자신학화와 자선교신학화에 도전하는 새생명태국인교회의 사례를 중심으로 성경적 역파송의 실제를 다루어보도록 할 것이다.", true)}
          </div>
          }
          {section === "전방개척선교" && <div className="mWidth100 mFlexContainer mContainer4p" style={{width: "60%", display: "flex", padding: "2.5vw", border: "1px solid rgb(226, 226, 226)", fontSize: "1vw", marginBottom: "3.5vw", background: "white", flexDirection: "column"}}>
            {makeProfile(정보애, "정보애선교사 (UPMA: 미전도종족선교연대)", "주제: 10/40창 안의 전방개척선교권역과 사역 소개(12개 전방개척권역)", "", <span>
            업마선교회(UPMA: Unreached People Missions Alliance, 미전도종족선교연대)대표, KWMA(한국세계선교협의회)전방개척 실행위원회 코디네이터, 한국전방개척선교저널(KJFM) 편집위원으로 사역하고 있다. 한국 외국어대학교에서 중국어를 전공했고, ACTS에서 중국 티벳지역학(M.A), 북경 중앙민족대 티베트 불교 박사과정을 수료하였다. 1988년부터 조국 대한민국에서 재한중국인교회 화교들과 함께 중국 복음화와 선교사 훈련, 양성을 위해 연구간사, 훈련원 교수로 섬기며 비거주 중국사역을 해오다, 2002년 중국에 들어가서 사역하였다. 다시 선교사의 여정중 본국에서 업마선교회 내 ‘종족과 도시선교연구소(IMPAC) 총무, 선교회 대표로 섬기면서 동시에 고신교단 지역교회(부천 참빛교회)에서 10년간 선교담당 사역을 해왔다. 현재 주파송교회는 행복한교회이다. PSP, MP 강사이다(남은 과업).
            </span>,"한국의 미전도종족 및 전방개척선교가 2023년이면 30년이 된다. 이러한 중요한 때에 미주 한인교회와 보다 더 협력을 활성화하기 위해, 이 강의는 지난 30년 동안 한국교회와 선교사들의 전방개척선교 현장에서의 사역 현황을 살피고, 미래 과제와 협력 네트워크에 필요한 처음 시작을 여는 의미가 있다. 특별히 90년대 한국에 소개된 10/40창과 그 안의 무슬림권역/힌두권역/소승불교(테라바다불교)권역/공산주의권역/정령숭배권역 등으로 단기사역 및 장기선교사로 헌신하여 사역한 사례를 전방개척선교 12권역+@로 현장 중심적으로 알리고, 각 현장에서의 사역 사례를 소개하는데 강의의 중점을 둔다.")}

            {makeProfile(David, "David Bogosian (데이비드 보고시안)", "주제: 마지막 남은 미전도종족에 복음을 전하기 위해 토착 사역과 협력", "", <span>
            Bio: David served for ten years as a missionary in the Philippines with the Frontier Mission Fellowship. He is the author of Eternal Vision and senior editor of the Global Mission Database. He serves as president of Christian Aid Mission and chairman of COSIM (Coalition on the Support of Indigenous Ministries)
            <br></br>
            Workshop Title : Partnering with Indigenous Ministries to Reach the Last Frontiers
            <br></br>
            How to work effectively with the persecuted church to reach the last remaining unreached people groups with the gospel. Case studies and present efforts will be examined with practical recommendations and appropriate cautions to avoid common mistakes.
            <br></br><br></br>
            약력: David는 Frontier Mission Fellowship과 함께 필리핀에서 10년 동안 선교사로 사역. 
            Eternal Vision의 저자이고 Global Mission Database의 수석 편집자. <br></br>
            Christian Aid Mission의 회장 <br></br>
            COSIM (Coalition on the Support of Indigenous Ministries) 회장
            </span>,
            "핍박받는 교회와 효과적으로 협력하여 마지막 남은 미전도 종족 그룹에게 복음을 전하는 법. 사례 연구와 현재 진행되는 사역을 점검하여 실제적인 권장 사항들과 일반적인 실수를 피하기 위한 주의사항들.")}
          
            {makeProfile(양병순, "양병순 선교사", "주제: 중앙아시아 카자흐스탄에서의 교회개척사례", "", <span>
            한국침례신학대학교 신학과 졸업 후 동대학원에서 선교학 석사, 미드웨서튼 침례신학교에서 교육목회학을 공부했다. 1996년 침례교해외선교회(FMB)소속으로 카자흐스탄 단기 선교사로 사역을 하면서 우스까메나골스크 도시에 라드닉교회 개척 사역을 도왔고, 2001년부터는 카자흐스탄 장기 선교사로 파송을 받아 카라간다 도시에 카라간다 라드닉교회, 찌미르타우 라드닉교회, 그리고 알마티 도시에 알마티 라드닉교회를 세워 현지인에게 사역을 이양했다. 그리고 2021년 10월에 카자흐스탄 사역을 마무리하고 조지아로 이동해 현재 조지아 라드닉교회를 개척하여 트빌리시에서 사역하고 있다. 가족으로는 아내 오주영 선교사와 양근원, 양다원 두 자녀가 있다.
            <br></br><br></br>저서: "까레이스키" 2009년, 가이스포스트 출판사<br></br>
            </span>,
            "중앙아시아에서 사역하고 있는 침례교해외선교회(FMB) 소속 선교사들은 2001년부터 현재까지 카자흐스탄에 73개, 키르기즈스탄에 27개, 우즈벡키스탄에 8개, 총 108개의 교회를 세웠다. 그런 결과를 얻게 된 비결은 무엇인지 분석하고, 강사도 카자흐스탄에 3개의 교회를 개척하면서 경험한 성공과 실패를 나눔으로써 전방 교회 개척에 대한 노하우를 살펴 본다. 더불어 각자 지역의 전방개척에 대한 방안을 모색해 볼 것이다.")}

            {makeProfile(James, "Rev. James Cha 부부", "Workshop Title - Sharing the Gospel Across Different Worldviews", "", <span>
            Pastor James & Faith Cha served 10 years in Central Asia as church planting missionaries with Pioneers. Since 2010, they have been back in the US, reaching out to the immigrants and refugees in their community. They both serve as the Washington DC area coordinators for Crescent Project. Faith is also the director of ESL ministry in Leesburg, VA.
            </span>,
            <span>
              There are 3 predominant worldviews that form the basis of every culture: shame & honor, guilt & innocence, and fear & power. Each culture has varying degrees of each worldview shaping or influencing it. There is not one correct or “biblical” worldview. All 3 are present in the world from the time of its creation (Gen 3).  While cultures in the West are heavily influenced by the guilt & innocence worldview, Muslims, Hindus and Buddhists (and Chinese atheists) come from cultures that are heavily influenced by the shame & honor worldview. Cross-cultural evangelists need to be aware of the different worldviews and learn how to leverage “open doors” that are present in each culture to introduce the Gospel in effective and fruitful ways.
            </span>)}

            {makeProfile(문열린, "문열린 선교사 ", "주제: 튀르키예 무슬림 대상 전방개척 선교에서 한인 사역자의 역할", "", <span>
            - 남아프리카공화국 선교사(1992 ~ 1995) +90 (536) 812 21 95<br></br>
            - 튀르키예 선교사(1995 ~ 현재)<br></br>
            - 침례교해외선교회(FMB) 국제사역디렉터(2022 ~ 현재) <br></br>
            - 국제다문화(이슬람)포럼 국제코디(2012~ 현재)
            </span>,
            "주님의 지상위임명령의 남은 과제 중에 하나는 이슬람권 선교이다. 이슬람권 중에서 튀르크(Turk)계는 중앙아시아를 중심으로 실크로드 상에 거주하며 큰 민족 그룹을 형성하고 있다. 그 중에서 튀르키예(Turkiye)는 지정학적으로 중요한 위치에 놓여 있으며 이슬람권 선교를 위한 교두보 역할을 하고 있다. 튀르크와 한민족은 오랜 역사적 관계성을 갖고 있으며 언어와 문화적으로 많은 유사성을 갖고 있다. 이로 인해 한인 선교사들은 튀르크계 민족들 가운데에서 풍성한 사역적인 열매들을 맺고 있다. 본 강의에서는 필자가 지난 20여 년간 튀르키예 지방 도시에서 수행해온 교회개척사역 경험을 바탕으로 전방개척선교사역에서 한인 사역자의 역할과 장점을 살펴보고자 한다. 이와 함께, 변화된 선교환경 가운데 하나님의 선교 방식과 한인 교회가 하나님의 선교에 동역할 수 있는 길들을 모색하고 제안하고자 한다."
            )}

            {makeProfile("", "이민교 감독", "주제: 장애인 스포츠(농아축구)를 통한 사례", "", <span>
            GP소속, 1993년 파송, GB(글로벌블레싱) 대표, 우즈베키스탄 농아축구팀 감독(1997-2004) 카자흐스탄 농아축구팀 감독(2005-2015) 조선롱인축구단 감독(2013- )               </span>,
            <span>
            장애인 사역은 하나님나라 본질사역임을 선포하며 "서로 사랑하라" 하신 말씀이 삶으로 풀어지도록 "사라지면 살아진다"라는 삶을 [사람 = 삶 = 사랑]으로 함께 풀어본다.            </span>)}

            {makeProfile("", "김요엘 선교사", "주제: 북한현지 사역의 정착과 성장을 위한 사례및 과제들에 대해", "", <span>
            총신대학교 신학대학원에서 공부하고 합동교단에서 목사 안수.  뉴질랜드로 이주하여 뉴질랜드세계선교교회를 개척하여 담임목사로 재직하던 중에 북한 어린이들을 위해 우리아이 인터내셔널을 설립하였다. 북한의 인도적 지원사역을 위해 첫 방문을 이룬 후 지금은 그린코리아네트워크 사역자로 북한 현지방문을 반복하며 나무심기등 기후위기대책. 인도적 지원사업. 의료지원협력. 각종학교들 교육환경개선및 지원협력. 농축산협력등 다양한 영역에서 사역하고 있다.             </span>,
            <span>
            북한 사역을 하게 된 계기와 사역의 정착과 성장 발전을 이루기 위해 갖추어야할 덕목들 제시와 
            지난 15년 기간동안  120여차례 북을 방문하며 사역하였던 현장을 소개하며 함께 사역할 수 있는 길 제시 하고 북의 영혼들을 위해 공유해야 할 기도제목 제시와 궁금증에 대한 Q.A.
            </span>, true)}
          </div>
          }
          {section === "선교적 공동체성경읽기" && <div className="mWidth100 mFlexContainer mContainer4p" style={{width: "60%", display: "flex", padding: "2.5vw", border: "1px solid rgb(226, 226, 226)", fontSize: "1vw", marginBottom: "3.5vw", background: "white", flexDirection: "column"}}>
            {makeProfile(김응식, "김응식 대표", "", "", <span>
            - Grace and Mercy Foundation 의 북•중남미 한국 교회사역 대표 <br></br><br></br>
            2017년 부터 The Grace and Mercy 재단에서 근무하고 있으며 북•중남미의 한국교회를 대상으로 재단의 resource를 지원하며 돕는 업무를 해 오고 있다.
            홍익대 경영학과 학사, Cass Business school in London MBA. 28년간 투자은행 업무와 투자자문 분야에 종사하였고 현대증권 홍콩법인과 뉴욕법인의 CEO, Global Vision Capital에서 CEO를 역임했다
            </span>,"",
            true)}

            {makeProfile(Charles, "찰스김 목사", "", "", <span>
            - The Grace and Mercy Foundation, Training & Engagement Managing Director <br></br><br></br>
            The Grace and Mercy 재단에서 북미주, 중남미권의 교단 및 신학교, 사역단체와의 협력활동과 훈련에 주력하고 있으며, 각 기관에서 공동체 성경읽기와 JSU 북클럽을 원활히 실행하도록 돕고 있다. 2013년부터 미국 북미주개혁교회교단 (CRC) 에서 다민족 담당자로 섬김과 동시에 다민족 교회를 개척하였고, 텐트메이커(tentmaker)로 Biofuel, Biotech 회사의 부사장을 역임했다. Biola University (BA), Talbot Theological Seminary(M.Div), Peter Drucker School of Management, Claremont Graduate School 에서 MBA를 취득했다.
            </span>,
            "오디오 드라마 바이블을 활용한 Public Reading of Scripture (공동체 성경읽기) 가 무엇인지 (What), 왜 (Why) 실행해야하는지 Biblical (성경적), Historical (역사적), Missional(선교학적) 관점에서의 설명 및 경험하는 시간과 해당 컨텐츠 설명, 제공. 오디오북을 들으며 함께 책을 읽는 모임인 Just Show Up 북클럽 설명 및 경험하는 시간과 해당 컨텐츠 설명, 제공. 선교사님들과 다양한 선교지역 과 사역환경(context) 에서 이를 효과적으로 활용, 적용시킬 수 있는 사례들을 설명, 논의”"
            , true)}
          </div>
          }
          {section === "선교동원" && <div className="mWidth100 mFlexContainer mContainer4p" style={{width: "60%", display: "flex", padding: "2.5vw", border: "1px solid rgb(226, 226, 226)", fontSize: "1vw", marginBottom: "3.5vw", background: "white", flexDirection: "column"}}>
            {makeProfile(김장생, "김장생 선교사", "주제 : 선교동원은 현지 선교사의 활동보다 중요합니다.", "", <span>
            김장생 목사는 1993년부터 30년간 CCC 간사로 예배사역, 캠퍼스 사역, 선교사역 등 다양한 사역들을 감당해 왔다. 특별히 2011년부터 해외 캠퍼스 개척을 위해 A6 프로젝트를 진행하여 25개국에서 380개의 새로운 사역을 개척하였고 2019년 부터는 한국형 기초선교훈련인 ‘커넥션스쿨’을 런칭하여 확산 중에 있다. 2012년에는 선교한국대회 준비위원장으로 섬겼고 현재 CCC동아시아 본부 선교 책임자로 KWMA 정책위원, 선교한국 조직위원 등으로 국내외에서 연합하여 선교운동을 세워가고 있다.
            </span>,<span>
            강의1: 선교동원은 현지 선교사의 활동보다 중요합니다.<br></br>
            1)	선교동원의 개념<br></br>
            2)	선교동원가의 역할 <br></br>
            3)	선교사는 태어나지 않는다. 훈련으로 만들어진다.<br></br>
            4)	선교사 동원의 로드맵
            <br></br><br></br>
            사례발표 : K-Internship<br></br><br></br>


            강의2: 선교훈련 100프로 활용하기<br></br>
            1)	한국에서 진행되고 있는 다양한 선교훈련 소개<br></br>
            2)	적합한 훈련을 선택하는 방법<br></br>
            3)	커넥션스쿨의 특징과 전략<br></br>
            4)	커넥션스쿨의 내용과 활용방법

            </span>)}

          
            {makeProfile(강대흥, "강대흥 사무총장", "", "", 
            "",
            "")}

            
          

            {makeProfile(안성원, "안성원 선교사", "주제: 현지인 선교사 파송의 중요성", "", <span>
            1984년 인도네시아로 파송되어 보르네오 섬과 자카르타에 40여개 교회를 개척하고 안디옥기독고등학교를 설립하여 운영하고 있으며 안중안신학교 교회사교수로 협력 사역을 했다. 최근에는 현지인목사님과 함께 World Partners 선교회를 설립하여 80여명의 인도네시아 선교사를 훈련하여 현재 30여명을 파송 하였다. GP 선교회와 합신교단 선교부 파송이며 경력은 서울공대와 합동신학교를 졸업하고 2002년 GP 선교회 국제대표,  2012년에는 KWMF 사무총장을 역임하였다.             </span>,
            <span>
            한국교회 선교 역사가 1913년 중국에 3분의 선교사를 파송한지 100년이 넘었다. 그 동안 교회개척(Church Planting) 중심으로 사역을 해왔는데 이제는 현지교회를 선교에 동원하는 Church Planting 사역을 함께해야 할 시대가 되었다 한국교회에서는 젊은 선교사가 잘 나오지 않는다 그러나 선교지에는 많은 신학교를 통해 많은 선교자원이 있고 재정적으로도 선교할 충분한 재정이 있다. 그러므로 이제는 선교사들이 현지교회에 격려를 해서 선교운동에 참여하도록 해야 한다  </span>)}

          

            {makeProfile(김정한, "Dr. 김정한 선교사", "주제: 코로나 시대의 변화되고 있는 선교동원의 특성-미주한인교회 범위안에서 (The changing characteristics of mission mobilization in the era of Corona- Within the scope of the Korean American Church)", "", <span>
            SON Ministires/GMAN 대표, KWMO 대표, 전KWMF 사무총장, 현 KWMC 단기선교분과 위원장, IGMAN Radio 대표, 현 미주선교단체협의회 임시회장, 황금시선교사(은퇴한 전문인들)동원운동 대표, 1985년 11월 한국 기독교대한감리회 케냐 마사이부족 선교사로 파송받음,  96년  남가주 풀러선대학원 유학 중 2세 단기선교전문선교회 SON Ministries 창립,  2014년 고 최찬영 선교사님 을 총재로 모시고  GMAN 미주지역 황금기선교사동원운동 시작, IGMAN Radio 선교전문 방송으로 전세계 선교사네트웍 사역, 전문인 선교사동원과 파송을 하고 있다. 그동안 남가주지역의 200여 한인교회 들 의  2세들을  동원하여 단기선교훈련과 파송을 44개국에 해왔다.           
          </span>,
            <span>
             성경에 나타난 하나님의 선교동원에 대한 원리를 성경적, 선교학적 관찰을 통해 해석하고 코로나 이후 시대적 특성에 맞는 전략들을 논의 한다. 코로나 이후의 변화되는 선교동원 패라다임을 제안한다. 코로나 시대의 변화되고 있는 선교동원의 특성-미주한인교회 범위안에서 (The changing characteristics of mission mobilization in the era of Corona- Within the scope of the Korean American Church) 
            <br></br>1. 선교동원의 변화된 정의<br></br> 2. 선교동원의 변화된 우선목표 - 사람인가? 재정인가? <br></br>
            3. 선교동원의 변화된 주체 - 선교사? 지역교회? 선교단체? <br></br>4. 선교동원의 변화된 대상세대 – 황금기선교사<br></br> 5. 선교동원의 확대된 사역특성 - 재택선교, 온라인 가상공간에서의 현장사역<br></br> 6. 선교동원의 변화된 기술영역 - 디지털 활용
            </span>)}

            {makeProfile(박정곤, "박정곤 목사, Park Jeong Gon", "주제: 韓民族(한민족)의 시대적 使命(사명)", ""
            , `박정곤 목사는 UPMA(미전도종족선교연대)이사장, 한국OM중앙이사, 해군해병명예군목(1호),(사)더조은세상 이사장,거제 고현교회 담임목사로 사역하면서 500명 이상의 선교사님을 후원 협력하는 선교지향적인 목회를 하며 선교동원부흥전도자로서 지금까지 5천명 이상을 선교동원했다.
            특별히 경남기독교총연합회 주관 2021년 8.15대성회에서 "韓民族(한민족)의 시대적 使命(사명)" 에대해서 증거하였는데, 너무 큰 은혜와 비전이 있는 메시지에 "신의 한수"라는 책으로 발간되어 한민족과 한국교회를 깨우는 일에 크게 쓰임받고 있다.
            `,
            "인류의 역사와 나라의 흥망성쇠와 인간의 생사화복을 주관하시는 하나님의 관심은 영혼 구원, 세계선교이다. 하나님은 그 일을 위해서 시대마다 사용하신 나라가 있는데 그 나라들에게는 다섯가지 분명한 복을 주셨다. 하나님은 21세기에 세계선교를 위해서 우리 한민족을 사용하시려고 5천년간 준비시키셨다가 이제 사용하고 계시고, 앞으로 더 크게 사용하실 것이다. 이 강의는 우리나라에 역사하신 하나님의 섭리와 21세기의 비전과 사명에 대해서 가슴 뜨겁게 증거할 것이다.", true)}

            </div>
          }
        </div>
        
        <BottomBanner isHome={false}></BottomBanner>
    </div>
  );
}

export default Section;