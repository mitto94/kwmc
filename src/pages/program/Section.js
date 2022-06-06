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

// import 조차희 from "./Image/교육/.jpg";
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

const Section = ({history}) => {
  const [first, setFirst] = useState(true); 
  const [section, setSection] = useState("디아스포라");
  const makeProfile = (img, name, title, profile = "", lecture = "", last = false) => {
    return <div>
        <div className="mBlock" style={{display: "flex", wordBreak: "keep-all"}}>
      <div className="mFlexContainer" style={{width: "20%", display: "flex", flexDirection: "column"}}>
        <div className="mTextSize" style={{paddingBottom: ".5vw", fontWeight: "700", fontSize: "1.2vw", width: "100%", maxWidth: "60vw"}}>{name}</div>
        <img style={{maxHeight: "14vw", margin: "1vw", marginLeft: 0}} className="mImage25 mRightImage" src={img} alt="young"></img>
      </div>
      <div className="mPadding0 mWidth100" style={{width: "80%", paddingLeft: "1.5vw", fontWeight: "500"}}>

        <div className="mTextSize" style={{fontSize: "1.4vw", fontWeight: 700, marginBottom: "1vh", color: "#143674", width: "100%", maxWidth: "60vw"}}>{title}</div>
        <div className="mTextSize3" style={{display: "block", flexDirection: "column", marginBottom: "2vw", letterSpacing: "-.05vw", lineHeight: "150%"}}>
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
          style={{borderRight: "1px solid #E2E2E2",  height: "7vh", wordBreak: "keep-all", width: "16.6666666%", textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center", background: "white"}}>전방개척 선교</div>
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
            {section !== "교육" && section !== "BAM" && "추후 업데이트 예정입니다"}
          {section === "교육" && <div className="mWidth100 mFlexContainer mContainer4p" style={{width: "60%", display: "flex", padding: "2.5vw", border: "1px solid rgb(226, 226, 226)", fontSize: "1vw", marginBottom: "3.5vw", background: "white", flexDirection: "column"}}>
            {makeProfile(홍화옥, "홍화옥 선교사 (Missionary Hong Hwa-Ock) (한국어) ", <span>Session 1 - {<span className="MobImage"><br></br></span>} “1st Gen Missionaries and Education”</span>, <span>
            주제: “Why Education?”
            <br></br><br></br>
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
            {makeProfile(정금태, "정금태 선교사 (Missionary Nathaniel Jeong) (한국어) ", <span>Session 1 - {<span className="MobImage"><br></br></span>} “1st Gen Missionaries and Education”</span>, <span>
            한국목회로 23년 섬기고 파라과이 선교로 30년 섬기고 Midwest 교육학 박사이다. 부산 고신대와 서울 총신대원의 배경이 있고 신학대학을 통하여 문교부 학사와 석사를 취득했다. 파라과이에서 기독교예술학교를 설립하여 현지인 유초중고등학생들을 교육하며 현지인목회자 연장교육을 통하여 교육 사역을 했다. 1.5세 2세 선교사 발굴 운동 이랑 선교사 자녀 2세교육사역도 도우며 하나님의 형상을 사람에게 심는 교육선교를 목표로 하여 사역하고 있다. 
            <br></br><br></br>
            Missionary Geum Tae Jeong served as a pastor in Korea for 23 years and as a missionary to Paraguay for 30 years. Currently, he holds a Ph.D degree in Education in Midwest. He graduated from Goshin Theological Seminary in Busan and also from Chongshin Theological Seminary. 
            <br></br><br></br>
            Missionary Jeong is a founder of Colegio Cristiano Arte, an educational institution consisting of pre-school, elementary, middle, and high school in Paraguay. He will be talking about challenges and benefits of doing educational missions in Paraguay.

            </span>,
            "")}
            {makeProfile(박진수, "Missionary Jin Soo Park (박진수 선교사) (English) ", <span>Session 2 - {<span className="MobImage"><br></br></span>} “2nd Gen, MK, and Education”</span>, <span>
            선교사인 부모님의 발걸음을 따라 아프리카 케냐로 갔던 MK 박진수 선교사는 대학을 마치자 북아프리카에 조금한 기독교 학교에 교사로 갔다. Calvin College 에서 Social Studies 와 역사에 중점을 둔 secondary 교육 학사 학위를 받아 북아프리카에서는 7-12학년 학생들에게 세계사, 미국사, 지리, 정부, 경제학과 같은 다양한 사회 과목을 가르쳤다. 그곳에서 학생들에게는 교사이자 친구, 멘토,  카운슬러로 불리고 있다.
            <br></br><br></br>
            MK 사역에 대한 간증과 소명을 나누고  MK 교육자들의 중요성이랑 MK BEAM 이라는 MK 선교 조직을 소개할것이다. MK Beam은 MK 학교에서 봉사하는 MK 교사를 지원하고 MK 교사를 파견하며 재정적 지원을 제공하기 위해 만들어졌다.
            <br></br><br></br>
            Missionary Jin Soo will share his testimony and his calling in MK ministry. He will share the importance of having MK educators go and serve the younger generation of MKs and introduce an MK mission organization called MK Beam. MK Beam is created to support MK teachers who serve in MK schools, send out MK teachers, and provide financial support.

            </span> ,
            "")}
            {makeProfile(공혜미, "Hemi Kong 공혜미 교사 (English)", <span>Session 2 - {<span className="MobImage"><br></br></span>} “2nd Gen, MK, and Education”</span>, <span>
            1998년도에 부모님이 섬기시는 탄자니아 아프리카에서 태어난 MK 공혜미 선생은 현재 언어 병리학자 (Speech-Language Pathologist)로 초등학교에서 일하고 있다. Calvin University 에서 Speech Language Pathology 학사와 석사를 받아 교육을 통하여 택사스 휴스턴 아이들을 공립학교에서 가르치고 있다. 미국 공립학교 환경에서 아이들을 가르치는 경험과 간증을 나눌 것이다.
            <br></br><br></br>
            Hemi Kong is an MK from Tanzania and Kenya. She is currently working as a Speech Language Pathologist in a public school setting in Houston, Texas. She was born in Tanzania and grew up attending a boarding school for missionary kids in Kenya. Upon graduation, she moved to the United States to attend college. She graduated from Calvin University with her bachelor’s degree in 2020 and her master’s degree in 2021.
            <br></br><br></br>
            She will share her testimony and experience working as a Speech Language Pathologist in a public-school setting in the United States.  

            </span>,
            "")}
            {makeProfile(공다윗, "David Kong 공다윗 교사 (English)", <span>Session 2 - {<span className="MobImage"><br></br></span>} “2nd Gen, MK, and Education”</span>, <span>
            1996년 선교사인 부모님을 따라 9개월의 나이로 아프리카 탄자니아로 갔던 MK 공다웟 선생은 secondary education 과학에 중점으로 대학교를 졸업하고 현재 Potter’s House 에서 가르치고 있다.  Potter 's House는 다양한 사회 경제적 수준을 가진 커뮤니티를 가르치는 데 전념하는 기부자 자금 지원 사립 학교이다. 
            <br></br><br></br>
            공다윗 선생은 처음에 대학에서 의학 분야를 추구하는 데 관심이 있었다. 그러나 경제적 사정으로 학업을 중단하고 한국 군대에 입대하기로 결정해야됬다. 군 복무를 마치고 곧바로 대학에 복귀하지 않고 1년 동안 한국 학원에서 가르치는 경험을 통하여 선생으로써의 부름심을 받았다. 고품질 교육을 제공하는 동아프리카의 학교 시스템을 구축하기 위한 그의 간증과 소명/비전이있다. 
            <br></br><br></br>

            David Kong is an MK who grew up in Tanzania/Kenya. David graduated with education degree with a focus on high school science and is currently teaching at The Potter’s House in Grand Rapids, Michigan. The Potter’s House is a donor-funded private school dedicated to teaching diverse communities with varying socioeconomic levels. David was initially interested in pursuing a medical field in college. However, due to financial circumstances, he made the decision to pause his studies and serve in the Korean army. After his service, he did not return to college right away but took a year off to teach at a Korean academy. During that year, David found his joy in teaching. His love for science and teaching were the perfect combination.
            <br></br><br></br>
            David will be sharing about his testimony and his calling/vision to build a school system in East Africa that provides high quality education. He will explain the licensure pathway of becoming a teacher in the United States. 

            </span>,
            "")}
            {makeProfile(김치남, "Rev. Paul Kim (김치남 목사) (한국어)", <span>Session 3 - {<span className="MobImage"><br></br></span>} “Family and Education”</span>, <span>
            주제 : 코로나 팬데믹으로 추락한 신앙, 가정예배로 리셋하라 
            <br></br><br></br>
            2002년부터 지금까지 캐나다 토론토 예수촌 교회를 담임으로 목양하고 있으며, 2017년부터 D6 코리아 대표를 역임하고 있다. 한국 교회와 디아스포라 이민 교회의 교회 교육을 위해 미국의 랜달하우스 D6 컨퍼런스와 매해 정기적으로 한국에서 D6 컨퍼런스를 개최하고 있다.
            <br></br><br></br>
            그는 전통 교회가 D6 교회로 전환하도록 컨설팅 및 강의 그리고 미국의 랜달하우스에서 출판되는 가정사역 도서들과 11연령대의 D6 커리큘럼(D6Books.com)을 번역 출간하며 활발한 지원을 하고 있다. 가정과 교회의 현장을 실제적으로 돕기 위해 두 권의 책(가정 설계도, 교회 설계도)을 출판했다. 아내 이수영과 하나님의 기업 1남(민) 4녀(진,현,윤,솔)를 둔 일곱 색깔 무지개의 가족이 있다.
            <br></br><br></br>
            Rev. Paul Kim has been a senior pastor of Jesus Village Church in Toronto Canada since 2002 and also serves as a representative of D6 Korea since 2016. He translated various curriculums of D6 Ministry (D6Books.com) and also published two books about the family ministry. He has a beautiful wife, Soo Young Lee, and one son (Min) and four daughters (Jin, Hyun, Yoon, Sol).
            <br></br><br></br>
            He will be talking about the importance of restoring the faith through the family worship. 

            </span>,
            "")}
            {makeProfile(Ron, "Ron Hunter Jr., Ph.D. (English)", <span>Session 3 - {<span className="MobImage"><br></br></span>} “Family and Education”</span>, <span>
            주제: 작은 제자 키우기: 세대적 제자도 접근
            <br></br><br></br>
            Raising Tiny Disciples: A Generational Discipleship Approach (English)
            <br></br><br></br>

            2002년부터 Dr. Hunter는 D6 Curriculum의 발행인인 Randall House의 전무이사 겸 CEO, D6의 설립자, D6 Conference의 이사를 역임했습니다. 그는 정기적으로 국제적으로 연설하고 사역 및 비즈니스 조직을 위해 컨설팅을 하고 계십니다. 그는 콜로라도 대학교에서 MPA를 취득하시고. 박사 학위를 Dallas Baptist University에서 받으시고 현재는 겸임교수로 가르치고 있습니다. 다양한 잡지에 80개 이상의 기사를 썼으며. Toy Box Leadership, D6의 DNA, Recalibration: A New Measure for Family Ministry와 그의 최신 책인 About Me, About You: Generational Legacy Journal 등 5권의 책을 저술했습니다. Ron이 가장 자랑스러워하는 칭호는 남편, 아버지, 할아버지입니다. 그는 대학 시절 연인인 파멜라와 결혼하고 두 명의 자녀와 두 손녀가 있습니다.
            <br></br><br></br>
            Your family legacy matters. Likewise, every parent and grandparent wants to instill value in the next generation. Your church can help. Discover how D6 (Deuteronomy 6) Family Ministry principles and practices can make a difference. In the first 10 minutes of the session, we will identify the common problems every church is trying to solve, then lay a biblical foundation to map the way. And for the last half, we will share easy ways to intentionally make a difference at church and in the home. Come hear up to 25 practical ways to connect families. Don’t worry; we will not overlook the kids who do not have Christian parents.
            <br></br><br></br>
            가족 유산이 중요합니다. 마찬가지로 모든 부모와 조부모는 다음 세대에 가치를 심어주고 싶어합니다. 당신의 교회가 도울 수 있습니다. D6 (Deuteronomy 6) 가족 봉사의 원칙과 관행이 어떻게 변화를 가져올 수 있는지 알아보는 시간이 있습니다. 세션의 처음 10분 동안 우리는 모든 교회가 해결하려고 하는 일반적인 문제를 식별한 다음 그 방법을 지도하기 위한 성경적 기초를 놓을 것입니다. 그리고 후반부에는 교회와 가정에서 의도적으로 변화를 일으킬 수 있는 쉬운 방법을 공유할 것입니다. 가족을 연결하는 최대 25가지 실용적인 방법을 들을수 있습니다. 또 한, 기독교 부모님이 없는 아이들도 잊지않을것 입니다. 

            </span>,
            "")}
            {makeProfile(피승호, "피승호 교수 (Dr. Pi Seung-Ho) (한국어)", <span>Session 4 - {<span className="MobImage"><br></br></span>} “Strategy and Platform for Education Mission”</span>, <span>
            주제: “다음세대를 이끄러갈 교육선교 더이상 미룰수 없다”- UCiC Schools 대표 
            <br></br><br></br>
            UCiC Schools 의 대표로, 또 한국, 중국, 싱가폴, 인도네시아들 여러 선교지에서 국제 학교를 운영하고 있다. 세계의 학교들, 특히 국제학교들의 인가와 운영을 컨설팅 해오고 있으며 세계 선교지 학교의 설립을 돕고 있다. 기독교 학교를 통해 예수님의 지상명령을 현실화 하고자 노력하고 있다.

            <br></br><br></br>
            여러 나라에서 기독교 국제학교를 운영하며 예수님께서 주신 지상명령을 따르는 기쁨을 가졌다. “너희는 가서 모든 족속으로 제자를 삼아 아버지와 아들과 성령의 이름으로 세례를 주고 내가 너희에게 분부한 모든 것을 가르쳐 지키게 하라 (마 18:20)” 그 나라의 지역학교나 오지 선교를 방문 하며 축복을 통로의 역할을 감당하며 지역 주민들을 섬기며 복음을 전했던 행복의 기억이 많다. 기독교 학교는 교회의 역할로 다음세대들에게 하나님 교육을 전수할수 있는 가장 효과적인 기관이자 선교의 원동력이 될수 있는 단체라 경험하고 있다. 
            <br></br><br></br>
            Dr. Seung-Ho Pi is a head master of UCiC School in Seattle, Washington, and helps with the planting of several international schools in Korea, China, Singapore, Indonesia, and other mission field. He provides consulting for permit and management of international schools. 
            He will be sharing about his vision of utilizing the international schools in the mission field as an effective tool for missions.

            </span>,
            "")}
            {makeProfile(이영아, "YoungAh Gloria Lee (이영아 집사) (한국어)", <span>Session 4 - {<span className="MobImage"><br></br></span>} “Strategy and Platform for Education Mission”</span>, <span>
            주제: American Assimilation Helpline – 새로운 교육선교 플랫폼
            <br></br><br></br>
            가족과 함께 보스턴에서 이민생활을 시작으로 UMass(University of Massachusetts) Boston에서 흩어져있는 대학교를 묶어 주었던 선교단체 (밀알모임)와 보스턴 늘푸른교회를 섬겼다. 2005년 아프리카, 에리트리아에 선교를 다녀왔다. MassArt (Massachusetts College of Art and Design)에서 패션디자인을 공부를 통하여, 장애인을 위한 바지 만드는 일을 했다. 2016년부터 마리에타 루터란 미국교회(Lutheran Church of the Incarnation, Marietta, GA), 행정비서로 일하면서 동네 아이들에게 1대1 공부를 가르쳐주는  American Assimilation Helpline (AAH)를 동역했다. 올해 2022년 부터  Global Department Advocacy Director (Global Department), Developing Director (US Department) and Doraville Georgia Local Chapter Head at AAH 로 섬기고 아틀란타 새교회에서 한글학교 총무랑 도서관을 만들어서 아이들이 서로 책을 빌려주는 사역도 하고 있다.  
            <br></br><br></br>
            American Assimilation Helpline이 어떻게 시작되었으며 이 새로운 교육플랫폼을 통하여 미국학생들이 선교지학생들과 연결이 되어 선교의 도구로 사용되어지고 있는지에 대해 설명한다.
            <br></br><br></br>
            Youngah Lee will be speaking about how American Assimilation Helpline, a non-profit organization devoted for connecting one on one study with the students around the world, and how this education platform can be used in the mission field.
            <br></br><br></br>
            ●	www.americanassimilationhelpline.org

            </span>,
            "")}
            {makeProfile(Elly, "Elly Kang (English)", <span>Session 4 - {<span className="MobImage"><br></br></span>} “Strategy and Platform for Education Mission”</span>, <span>
            주제: American Assimilation Helpline – 새로운 교육선교 플랫폼
            <br></br><br></br>
            조지아주 애틀랜타에 있는 Marist School의 고등학교 3학년으로 데이터 과학에 열정을 가지고 있다. 그 열정으로 501(c)(3) 글로벌 비영리 조직인 American Assimilation Helpline이 만들었다. nc.(AAH!)는 교육을 거의 또는 전혀 받지 못하는 저소득, 이민자, 난민 및 노숙자 학생에게 개인 교습 및 자원을 제공하고 또한 수십 대의 기기와 학용품을 기부하고 미국 Red Cross 와 함께 헌혈 행사를 주최하는 등의 이니셔티브와 노숙자를 지원하는 등 프로젝트를 진행하고 있다. 2021년 여름, AAH! 한국, 일본, 인도에서 온 약 200명의 저소득층 학생들에게 봉사하기 위해 국제적으로 지역 학생 자원 봉사자를 모집했다. 2017년부터 이 비영리 단체는 13개 지역 지부와 2개의 학습 연구소를 포함하여 10개국과 17개 주로 역량을 확장했으며 650명의 학생 교사와 함께 전 세계적으로 1,000명 이상의 학생들을 가르쳤다. 
            <br></br><br></br>
            비영리단체의 사명, 지금까지의 진행 상황, 그리고 앞으로 구상하고 있는 작업에 대해 이야기할 것이다. 그들은 전 세계적으로 평등한 교육적 접근 계획을 추진하는 데 도움이 되도록 고등학생 연령의 어린이들에게 훌륭한 리더십 기회를 제공하고자 한다. 또한 모든 회원이 영어를 배울 수 있도록 교육 지원을 제공하고 있다.
            <br></br><br></br>
            Elly will be speaking about her nonprofit’s mission, the progress so far, and the work they are envisioning for the future. They would like to provide great leadership opportunities for high school-aged children to help drive the charge for equal educational access initiatives across the world. They are also offering educational support for all members to learn English.

            </span>,
            "", true)}
          </div>
          }
          {section === "BAM" && <div className="mWidth100 mFlexContainer mContainer4p" style={{width: "60%", display: "flex", padding: "2.5vw", border: "1px solid rgb(226, 226, 226)", fontSize: "1vw", marginBottom: "3.5vw", background: "white", flexDirection: "column"}}>
            {makeProfile(김동건, "김동건 선교사", <span>Session 1 BAM & Core - {<span className="MobImage"><br></br></span>} “BAM의 역사와 도전들"</span>, "GP 한국 선교회 대표, IBA 공동대표, KWMA 선교한국 실행 위원으로 선교 연합 운동을 위해 사역하고 있다. 고려대 경영학을 공부했고, 합신교단에서 목사 안수를 받았다. 2004년부터 태국 선교사로 사역해 오며, 카페, 한국어 교육, 직거래 장터, 엔터테인먼트 등 다양한 비즈니스 영역에 도전해 오고 있다.",
              "BAM의 성경적 근거와 배경 및 관련된 성경 인물들을  살펴보고, 교회사 속에 나타난 BAM 사역자들을 발굴 소개한다. 성경과 역사에 기초한 BAM이해는 BAM사역자들이 현재와 미래 선교 특히 BAM이 직면하고 있는 도전들을 분석하고 사역의 돌파구를 찾는데 매우 유익할 것이다.")}

            {makeProfile(이다니엘, "이 다니엘 사무총장", <span>Session 1 BAM & Core - {<span className="MobImage"><br></br></span>} “BAM: 비즈니스 그 자체로서의 선교"</span>, "IBA 사무총장과 KWMA BAM 분과 코디네이터로 사역하고 있다. 연간 120여 건의 사회적 경제 기업과 NPO들의 창업-기업 운영에 관한 상담과 컨설팅을 진행해 왔다. 한동대에서 경영경제학, 에스라성경대학원에서 성경학, 횃불트리니티 신학대학원에서 목회학을 전공했다. 공저로는 <BAM:비즈니스 세계에서 복음을 살다> (2021), <지금 여기, 선교의 시대> (2020), <우리가 교회다> (2016, <교회를 위한 사회적 기업 가이드북> (2015) 등이 있다.",
            "선교를 제한하는 국가가 늘어나고 있다. 코로나-19 이후에도 이 추세는 지속될 것이다. Business As Mission (BAM)이 창의적 접근 지역을 섬기는 주요한 선교방법으로 주목받고 있다. 강의에서는 BAM의 정의, 핵심가치, 나라별 현장 사례, 그리고 이미 다가온 미래 이슈 등을 소개한다. 특히 참석자들은 복음을 직접 전할 수 없는 나라-민족에게 BAM 사역자들이 “일터 환경”조성, 현지인 고용, “복음을 살아냄“을 통해 “선한 영향력”을 끼쳐 온 다양한 이야기를 접할 것이다.")}
          
            {makeProfile(구본성, "구본성 박사", <span>Session 2 BAM Training - {<span className="MobImage"><br></br></span>} “Building Successful ET Business"</span>, "IT 전문 Pishon Technologies 를 창업하여 경영하고 있고, 30년 이상 벤처 기업 창업에서 기업 상장에 이르는 과정에 성공과 실패의 경험이 풍부한 경영컨설팅 전문가이다. 세계적인 경영 컨설팅 회사PwC 에서 Managing Partner와 Managing Director로 일한 바 있다. BAM 사역자 훈련을 위한 ET Forum에서 ET Global Faculty로 섬기고 있다.",
            "ET (Entrepreneurial Transformation)는 선교와 the Kingdom Business를 위한 부르심에 대한 응답으로  현지인들의 영적 변화, 고용을 통한 경제적 안정과 사회적 지위향상을 목표로 한다.  본 강의는 선교지 창업을 통해 성공적인 선교 사역을 수행할 수 있도록 ET BAM 기업 창업에 필요한 기본적인 지식과 기량을 위한 창업 아이디어 발굴, 창업과 경영 노하우, 자금조달 및 운영 노하우 등의 훈련 프로그램을 소개한다.")}

            {makeProfile(오선일, "오선일 목사", <span>Session 2 BAM Training - {<span className="MobImage"><br></br></span>} “일터 사역 길라잡이"</span>, "The Business Redeemers Corp의 대표로서 고신교단 수도노회 파송 전도목사로 뉴욕 맨하탄, 퀸즈, 뉴저지 포트리 지역에서 초교파 지역교회 성도들을 Missional Life로 살아가도록 양육, 훈련, 지원 & Network하는 역동적인 사역을 감당하고 있다. 고신대학에서 M.Div, Liberty Theological Seminary에서 “교회성장학”으로 Th.M 을 받았다. 지난 22년간 미국 이민 교회 목회사역 (샬롯츠빌 빛과 소금교회 담임목사)과 버지니아 및 메릴랜드 청년사역과 일터 사역을 헌신적으로 이끌었다.",
            "지역 교회 목회자들이 어떻게 성도들이 평일과 주일과 통합된 삶을 살 수 있도록 훈련할 수 있는지, 성도들의 삶의 현장인 비즈니스 현장에서 어떻게 직접 성도들을 만나고 양육 교제하며 그들을 복음전도자와 비즈니스 현장 선교사로 훈련할 수 있는지, 비즈니스 현장에서 어떻게 선교사를 직접 지원하며 지역교회 목회자들과 교회들이 동역할 수 있는지에 대한 구체적인 사례들, 지역교회와 선교단체와 파송 선교사들이 비즈니스 현장에서 복음을 증거하며 다양한 동역 구도를 형성하여 실제 협력할 수 있는지에 대한 구체적인 사례들으로 통해 소개할 것이다.")}

            {makeProfile(조차희, "조차희 (Peter Cho) 박사", <span>Session 2 BAM Training - {<span className="MobImage"><br></br></span>} “ET Forum Leadership Core"</span>, "전기 공학 박사와 MBA로서 미국 국방부 해군성에서 지난 26년간 기술개발 리더와 리더쉽 강사로 역할 해왔다. 현재는Virginia Tech과 George Mason University에서 리더쉽,  프로젝트 관리법, 첨단 기술을 탑재한 자동차에 대해 가르치고 있다. 그는 사람들은 누구나가 리더라는 신념을 갖고 있고. 특히 Lead Like Jesus Christ 와 Servant Leadership에 초점을 맞추고 있다. BAM 사역자 훈련을 위한ET Forum에서 ET Global Faculty 로 섬기고 있다.",
            "존 맥스웰은 “리더쉽은 더도 말고 덜도 말고 오로지 영향력이다” 라고 했다. 리더쉽은 종합적인 예술과 같다. 마치 어떤 부품들이 합쳐져서 하나의 유용한 도구를 만들어 내는 것과 같다고 할 수 있다.  이와 같이, 이번 강의를 통해 “우리 모두는 리더다”는 관점에서 리더쉽의 예와 함께 공동체적인 목적과 가치, 의사결정, 의사소통, 팀워크,  전망, 관계개선과  갈등 해소,  delegation, 섬김 등의 중요성을 함께 나누게 될 것이다.")}
            
            {makeProfile(안창호, "안창호 박사", <span>Session 3 BAM Cases & Funding - {<span className="MobImage"><br></br></span>} “GP Cases and Funding"</span>, "ET Forum Founder 로서 ET BAM 사역자들이 선교 현장에서 Missional Entrepreneur, Entrepreneurial Missionary의 역할을 효과적으로 수행할 수 있도록 돕는 사역을 하고 있다. GP 선교회 이사와 BAM 사역을 총괄하는 COET 의장으로서 ET 선교사 훈련과 파송, Funding 등을 돕고 있다. 연방정부 National Cancer Institute와 FDA등에서 암연구와  수석심의관을 역임한 암전문가이고, 제약회사를 설립하여 CEO와 회장으로서 회사를 New Stock Exchange에 상장시킨 경영자이기도 하다.",
            "GP 선교회에서 후원하는 ET BAM 사역인 베트남 영어 학원 사역과 네팔 한식당 및 Meal kit 사업을 소개한다. 이들 사역을 통해 일자리 제공, 현지인 리더 계발, 창업 기회 제공, 팀 사역 등이 어떻게 이루어지는가를 실제적인 측면에서 배우게 된다. 또한 BAM 사역에서 핵심 역할을 하는 자금 조달과  관련하여, 자금 제공자의 입장에서 본 사역 타당성분석과 사업성 분석 등에 대해 함께 살펴 볼 것이다. ")}
            
            {makeProfile(이영진, "이영진 대표", <span>Session 3 BAM Cases & Funding - {<span className="MobImage"><br></br></span>} “Hope & Wonders Cases"</span>, "Hope & Wonders Ministry 대표로서 중동난민과 중남미 빈민들을 위한 사역을 하고 있고, Director of International Students 로서 Maryland and Virginia 주의 사립학교에 유학오는 중.고.대학생들을 관리하는 교육자로 헌신하고 있다. 개인 사업을 하는 여성 사업가이고, 지역 사회 봉사자로서 메릴랜드 주지사 상을 수상했다. 목사 사모들과 여성들을 위한Loving You Program의 초대 미주 운영위원장으로 봉사했다.",
            "Hope & Wonder Ministry가 진행하고 있는 BAM 사역 Cases를 소개한다. 교회가 BAM 사역 훈련을 통해 어떻게 선교사들의 동역자로서 함께 사역에 참여할 수 있는지에 대한 좋은 예가 될 것이다. 강의에서는 시리아 난민들을 대상으로 한Lebanon에서의 K Beauty-Cosmetics 사업, 청소년 직업학교 사업, 터키의 Mosaic Art 사업 등을 소개할 예정이다. ")}
            
            {makeProfile(임도마, "임도마 선교사", <span>Session 4 BAM Future - {<span className="MobImage"><br></br></span>} “BAM Impacts- 사역현장"</span>, "워싱턴국제신학대학원의 아시아지역 책임자로 신학교 학위 네트워크를, 또 GP선교회의 국제행정총무, 한국본부총무로 본부 행정사역을 하였고, 베트남 선교사로서 신학교 설립, 선교사훈련, ET-BAM훈련, 글로벌 리더십훈련 등의 사역을 하고 있으며, 선교행정연구소를 설립하여 선교단체 및 기관에 선교행정 정보를 제공에 힘쓰고 있다.",
            "창업(Startup) 훈련을 통해 예수 그리스도를 전하고, 그의 사명에 순종하여 하나님 나라를 확장하는 것과, 하나님 자녀들의 영적, 경제적, 사회·문화적 지위 향상을 목표로 사역자를 훈련하는 ET Forum을 통해 베트남 지역에서 이런 변화가 일어나도록 베트남인 비즈니스 지도자들을 훈련하여 BAM 사역자로 전환시킨 일과 그 파급효과의 실제 사례를 강의합니다.", true)}
          </div>
          }
        </div>
        
        <BottomBanner isHome={false}></BottomBanner>
    </div>
  );
}

export default Section;