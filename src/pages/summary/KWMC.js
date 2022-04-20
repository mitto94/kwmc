import React, { useEffect, useState } from 'react';
import Header from '../../components/header';
import SummaryMenu from './SummaryMenu';
import TopBanner from '../../components/topBanner';
import BottomBanner from '../../components/bottomBanner';
const KWMC = ({history}) => {
  const [first, setFirst] = useState(true);
  const [section, setSection] = useState("a");
  return (
    <div style={{width: "100%",  display: "flex", flexDirection: "column", background: "#ECF6FC"}}>
        <Header history={history}></Header>
        <TopBanner></TopBanner>
        <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
          <SummaryMenu history={history}/>
        </div>
        <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
          <div className="mWidth100 mMenuTextSize mdLRBorder" style={{width: "60%", height: "7vh", minHeight: "20px", border: "1px solid #E2E2E2", display: "flex", justifyContent: "space-around", alignItems: "center", cursor: "pointer", fontWeight: 500, fontSize: "1.3vw", color: "rgb(128, 127, 127)", background: "white"}}>
              <div className={first ? "clickedMenu2" : ""} onClick={() => setFirst(true)}
                style={{borderRight: "1px solid #E2E2E2", width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>소개</div>
              <div className={!first ? "clickedMenu2" : ""} onClick={() => setFirst(false)}
                style={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>헌장</div>
          </div>
        </div>
        <div style={{display: "flex", justifyContent: "center"}}>
          {first ?
            <div className="formContainer" style={{wordBreak: "keep-all"}}>
              <div className="mMargin0" style={{width: "100%", border: "1px solid #E2E2E2", marginTop: "1rem", background: "white", marginBottom: "1rem"}}>
              <div className="mTextSize notosanskr" style={{margin: "2rem", lineHeight: "150%", background: "white", fontWeight: "400"}}>
                <span>
                <span style={{color: "#143674", fontWeight: "700"}}>기독교 한인세계선교협의회(Korean World Mission Council for Christ)는</span> 북미주 한인교회가 하나님의 은총과 축복 가운데 성장과 부흥을 거듭함을 감사드리며 주 예수 그리스도의 2,4지상명령(마 28:19-20)인 세계복음화에 총력을 기울여야 할 시대적 사명을 절감하고 1988년 7월 25일부터 30일까지 빌리 그래함 목사의 적극적 후원을 받아 시카고 윗튼대학 빌리 그래함 센터에서 제1차 <span style={{color: "#143674", fontWeight: "700"}}>한인세계선교대회를</span> 개최하며 한국교회 선교사상 새로운 장을 기록하였다. 대회를 기점으로 하나님께서 북미주 한인교회에 주신 세계복음화의 지상명령을 더욱 효율적으로 수행하고자 기독교 한인세계선교협의회를 창립하기에 이르렀으며 이를 중심으로 세계복음화를 향한 북미주 한인교회의 선교의 뜻과 힘을 집결하여 선교운동을 촉진, 협력, 조정함으로써 복음을 땅끝까지 전파하려는 세계복음화를 향한 하나님의 부르심에 순종하고 있다.
                <br></br><br></br>
                한인선교사를 비롯하여 목회자, 신학자, 남녀 평신도, 청년, 신학생, 대학생, 청소년등의 선교동반자들이 한 광장에 집결하는 이 역사적인 선교대회는 비젼의 융합, 기도의 연합, 사랑의 교제, 사명의 재무장, 정보와 전략의 상호교류 그리고 영적, 인적, 재정적, 시간적, 선교역량의 촉진(Catalyzing), 동원(Mobilization), 번식(Multiplying)을 도모하여 한 목표인 세계복음화 미완성과제(Unfinished Task of World Evangelization) 성취를 위한 새 지평을 창출하는 동반자 협력선교의 대광장이다.
              </span>
              </div>
              </div>
            </div>
            : 
            <div className="formContainer" style={{height: "100%"}}> 
              <div className="mMargin0" style={{width: "100%", border: "1px solid #E2E2E2", marginTop: "1rem", background: "white", marginBottom: "1rem"}}>
                <div className="mTextSize mMargin0 mFlexWrap mJuStart mHeight14 dBorder" style={{display: "flex", border: "1px solid #E2E2E2", margin: "2rem", height: "7vh", justifyContent: "space-around", cursor: "pointer"}}>
                  <div onClick={() => setSection("a")} className={`${section === "a" && "sectionClicked"} mWidth25 mBorderRB`} style={{display: "flex", justifyContent: "center", alignItems: "center", height: "7vh", borderRight: "1px solid #E2E2E2", width: "100%"}}>전문</div>
                  <div onClick={() => setSection("b")} className={`${section === "b" && "sectionClicked"} mWidth25 mBorderRB`} style={{display: "flex", justifyContent: "center", alignItems: "center", height: "7vh", borderRight: "1px solid #E2E2E2", width: "100%", textAlign: "center"}}>제 1장<br></br>총칙</div>
                  <div onClick={() => setSection("c")} className={`${section === "c" && "sectionClicked"} mWidth25 mBorderRB`} style={{display: "flex", justifyContent: "center", alignItems: "center", height: "7vh", borderRight: "1px solid #E2E2E2", width: "100%", textAlign: "center"}}>제 2장<br></br> 조직 및 임무</div>
                  <div onClick={() => setSection("d")} className={`${section === "d" && "sectionClicked"} mWidth25 mBorderRB`} style={{display: "flex", justifyContent: "center", alignItems: "center", height: "7vh", borderRight: "1px solid #E2E2E2", width: "100%", textAlign: "center"}}>제 3장<br></br> 회의 및 선거</div>
                  <div onClick={() => setSection("e")} className={`${section === "e" && "sectionClicked"} mWidth25 mBorderRB`} style={{display: "flex", justifyContent: "center", alignItems: "center", height: "7vh", borderRight: "1px solid #E2E2E2", width: "100%", textAlign: "center"}}>제 4장<br></br> 재정</div>
                  <div onClick={() => setSection("f")} className={`${section === "f" && "sectionClicked"} mWidth25 mBorderRB`} style={{display: "flex", justifyContent: "center", alignItems: "center", height: "7vh", borderRight: "1px solid #E2E2E2", width: "100%", textAlign: "center"}}>제 5장<br></br> 개정 및 세칙</div>
                  <div onClick={() => setSection("g")} className={`${section === "g" && "sectionClicked"} mWidth25 mBorderRB`} style={{display: "flex", justifyContent: "center", alignItems: "center", height: "7vh", width: "100%"}}>부칙</div>
                </div>
                <div className="mTextSize notosanskr" style={{margin: "2rem", lineHeight: "150%", wordBreak: "keep-all", background: "white"}}>
                  {section === "a" &&
                    <div>
                      <div className="titleFont" style={{width: "100%", display: "flex", justifyContent: "center", color: "#163875", fontWeight: "600"}}>기독교 한인세계선교협의회 헌장</div>
                      <br></br><br></br>
                      <span>북미주 한인교회는 하나님의 은총과 축복 가운데 성장과 부흥을 거듭하여 오늘에 이르렀음을 감사드린다. 주 예수 그리스도의 지상명령(마 28:19-20)인 세계복음화에 총력을 기울여야 할 시대적 사명을 절감하고 1988년 7월 25일부터 30일 까지 Billy Graham Center(Wheaton, Illinois)제 1차 한인세계선교대회를 개최하여 한인교회 선교사상 새로운 장을 기록하였다. 1,500여명의 참가자들이 '88 한인세계선교대회 선언문을 채택하고 세계복음화를 향한 하나님의 부름심에 순종할 것을 다짐하였다.
            <br></br><br></br>
이에 하나님께서 북미주 한인교회에 주신 세계복음화의 지상명령을 더욱 효율적으로 수행하고자 기독교 한인세계선교협의회를 창립하기에 이르렀으며 이를 중심으로 세계복음화를 향한 북미주 한인교회의 선교의 뜻과 힘을 집결하여 선교운동을 촉진, 협력, 조정함으로써 복음을 땅끝까지 전파하고자 본 헌장을 제정한다.</span>
                    </div>}
                  {section === "b" &&
                    <div>
                      <div className="titleFont" style={{width: "100%", display: "flex", justifyContent: "center", color: "#163875", fontWeight: "600"}}>제1장 총칙</div>
                      <br></br><br></br>
                      <span>
                      <b>제1조 명칭</b> 
                      <br></br>본회의 명칭은 기독교 한인세계선교협의회(The Korean World Mission Council for Christ)라 칭한다.
                      <br></br> <br></br><b>제2조 위치</b><br></br>본회의 위치는 북미주에 둔다.
                      <br></br> <br></br><b>제3조 목적</b><br></br>본회는 북미주 한인교회 선교운동을 촉진, 협력, 조정함으로써 세계복음화에 기여하고, 한인세계선교대회를 매 4년마다 개최하여 선교운동을 확산함을 목적으로 한다.
                      <br></br> <br></br><b>제4조 회원 및 의무</b><br></br>-제1항 회원 : 본회의 회원은 본회의 목적에 찬동하여 후원하는 교회의 교역자와 평신도 및 선교단체의대표 각 1인으로 한다. 신규회원 가입은 의장단에서 심의한다.
                      <br></br>- 제2항 의무 : 본회의 회원은 본회의 헌장과 규칙을 준수하고 회비를 납부한다.
                      </span>
                     </div>}
                  {section === "c" &&
                    <div>
                      <div className="titleFont" style={{width: "100%", display: "flex", justifyContent: "center", color: "#163875", fontWeight: "600"}}>제2장 조직 및 임무</div>
                      <br></br><br></br>
                      <span>
                      <b>제5조 총회</b><br></br>구성과 임무는 아래와 같다.
                      <br></br>- 제1항 구성 : 제 4조 1항의 회원으로 구성한다.
                      <br></br>- 제2항 임무 : 전형 위원 선출, 의장단 인준, 부의장단, 고문, 지도 위원 및 감사에 대한 인준, 예결산 심의, 헌장 개정안 심의
                      <br></br> <br></br><b>제6조 중앙의회 </b><br></br>구성과 임무는 아래와 같다.
                      <br></br>- 제1항 구성 : 제 14조의 임원, 제 8조의 상설 기구의 대표 및 총무, 제 9조의 지역 선교 협의회 회장단, 제 10조와 제 11조의 선교 협력 기구의 대표 및 총무, 기타 의장단이 추천하는 자로 구성한다.
                      <br></br>- 제2항 임무 : 본 회의 정책 및 사업을 계획하고 결의하며 각 기관간의 상호 협력을 도모한다.
                      <br></br> <br></br><b>제7조 실행위원회 </b><br></br>구성과 임무는 아래와 같다.
                      <br></br>- 제1항 구성 : 의장단, 사무총장, 서기, 회계와 상설 기구및 협력기구의 대표로 구성한다.
                      <br></br>- 제2항 임무 : 총회 및 중앙의회의 결의 사항과 위임 사항을 집행하며 매년 예산안과 결산안을 작성하고 중앙의회 심의를 받아 총회에 제출한다.
                      <br></br> <br></br><b>제8조 상설기구 </b><br></br>중앙의회는 본회의 목적을 효과적으로 달성하기 위하여 북미주 각 지역에 선교협의회를 둔다.
                      <br></br> <br></br><b>제9조 지역선교협의회 </b><br></br>본회 목적을 효과적으로 달성하기 위하여 북미주 각 지역에 선교협의회를 둔다. 각 지역 선교는 자치적 운영을 원칙으로 하며 사무총장 및 지역선교활성화본부장과 협력한다.
                      <br></br> <br></br><b>제10조 전문선교협력기구 </b><br></br>중앙의회는 본회의 목적을 효과적으로 달성하기 위하여 필요한 전문 선교협력기구를 두어 상호 협력하게 한다.
                      <br></br> <br></br><b>제11조 지역별선교협력기구 </b><br></br>중앙의회는 본회의 목적을 효과적으로 달성하기 위하여 지역별 선교협력 기구를 두어 각 선교지에서 사역하는 한인선교사들과 북미주 한인교회들 간에 상호 협력하게 한다.
                      <br></br> <br></br><b>제12조 사무국 </b><br></br>사무총장, 상임 간사와 사무 직원으로 구성하며 행정업무 전반을 수행한다.
                      <br></br> <br></br><b>제13조 전형 위원회 </b><br></br>구성과 임무는 아래와 같다.
                      <br></br>- 제1항 구성 : 전형위원은 전직 및 현직 의장단으로 구성한다.
                      <br></br>- 제2항 임무 : 의장단을 전형하여 총회에 추천한다.
                      <br></br> <br></br><b>제14조 임원과 임무</b><br></br>본회의 임무는 아래와 같다.
                      <br></br>- 제1항 중경의장 : 본회의 선교운동 활성화를 위한 적극적인 후원과 자문에 응한다.
                      <br></br>- 제2항 고문 : 본회를 후원하며 자문에 응한다.
                      <br></br>- 제3항 지도 위원 : 본회의 사업을 후원하며 지도한다.
                      <br></br>- 제4항 의장단 : 의장단은 적절한 수효로 구성하며 그 임무는 아래와 같다.
                        1. 연차적으로 1인이 대표 의장이 되어 본회를 대표한다.
                        2. 연차적으로 1인이 중앙의회와 실행위원회의 의장이 된다.
                        3. 의장단은 차기대회의 공동대회장이 되며 대표대회장을 추대할 수 있다.
                        4. 한국 세계 선교 기관과 선교운동 및 사업과 공동 관심사를 협력한다.
                      <br></br>- 제5항 부의장단 : 의장을 보좌하며 본회의 제반 사업을 협력한다.
                      <br></br>- 제6항 중앙의회의장 : 중앙의회 및 실행위원회를 통괄하고 산하기관을 지휘 감독한다. 또한 실행위원회의 의장이 되며 사무총장이 궐위된 때에 보선될 때까지 그 직무를 대행한다.
                      <br></br>- 제7항 실행위원회 의장 : 실행위원회를 통괄하고 사무총장을 지휘 감독한다.
                      <br></br>- 제8항 사무총장 : 총회, 중앙의회, 실행위원회 결의사항과 위임사항 및 제반 업무를 집행하고, 상설기구와 선교협력기구 및 지역선교협의회 업무를 협력 조정, 지도하며 본 조 제 4항 3의 협의에 참여한다.
                      <br></br>- 제9항 서기 및 부서기 : 서기는 총회, 중앙의회 및 실행위원회의 회의를 기록하여 이를 보관하며, 부서기는 서기의 유고시 그 직무를 대행한다.
                      <br></br>- 제10항 회계 및 부회계 : 회계는 수입과 지출을 관장하며 부회계는 회계의 유고시 그 직무를 대행한다.
                      <br></br>- 제11항 감사 : 2인의 감사는 본 회 재정을 감사하여 년 1회 총회에 이를 보고한다.
                      <br></br> <br></br><b>제15조 당연직위원 </b><br></br>의장단과 사무총장은 각 상설기구와 각 선교협력기구의 당연직 위원이 된다.
                      단 의결권은 없다.
                      </span>
                    </div>}
                  {section === "d" &&
                    <div>
                      <div className="titleFont" style={{width: "100%", display: "flex", justifyContent: "center", color: "#163875", fontWeight: "600"}}>제3장 회의 및 선거</div>
                      <br></br><br></br>
                      <span>
                      <br></br><b>제16조 회의 </b><br></br>본 회에는 총회, 년차총회, 중앙의회, 실행위원회를 둔다.
                      <br></br>- 제1항 총회 : 매 4년마다 개최되는 한인세계선교대회 이후 첫 10월 혹은 11월에 대표의장이 소집한다.
                      <br></br>- 제2항 년차총회 : 매년 10월 혹은 11월에 대표의장이 소집한다.
                      <br></br>- 제3항 중앙의회 : 총회 혹은 년차총회 전에 의장이 소집한다.
                      <br></br>- 제4항 실행위원회 : 정기실행위원회는 년 2회 10월 내지 11월(중앙의회 전)과 4월에 개회할 수 있으며 임시실행위원회는 필요시 실행위원회 의장 및사무총장 또는 실행위원 과반수의 요청으로 의장이 소집한다.
                      <br></br> <br></br><b>제17조 정족수 </b><br></br>총회와 년차총회 및 중앙의회는 출석회원으로 개회하며, 기타 모든 회의는 특별한 규정이 없는 한 재적회원 과반수로 개회하고 출석회원 과반수로 의결한다.
                      <br></br> <br></br><b>제18조 선거</b>
                      <br></br>- 제1항 의장단 : 전형위원회의 추천으로 총회에서 인준한다.
                      <br></br>- 제2항 부의장단, 사무총장, 서기 및 회계는 의장단의 추천으로 총회에서 인준한다.
                      <br></br>- 제3항 기타임원 : 고문, 지도위원, 감사는 의장단의 추천으로 총회에서 인준한다.
                      <br></br>- 제4항 지역선교협의 회장 : 각 지역 선교협의회 회장단 및 임원은 각 지역선교협의회에서 선출한다.
                      <br></br> <br></br><b>제19조 보궐선거 </b><br></br>모든 임원에 대한 보궐선거는 본 선거와 동일하다. 단 감사와 서기, 부서기, 및 회계, 부회계가 궐위된 때에는 의장단과 사무총장이 선임한다.
                      <br></br> <br></br><b>제20조 임기 </b><br></br>임원의 임기는 4년으로 하되 연임할 수 있다. 단 보선의 경우에는 전임자의 잔여 기간으로 한다.
                      </span>
                    </div>}
                  {section === "e" &&
                    <div>
                      <div className="titleFont" style={{width: "100%", display: "flex", justifyContent: "center", color: "#163875", fontWeight: "600"}}>제4장 재정</div>
                      <br></br><br></br>
                      <span>
                      <br></br><b>제21조 비영리단체</b><br></br>본회는 미연방정부사세청(IRS) 면세법 Section 501(c)(3) 에 준하여 비영리단체로 운영한다.
                      <br></br> <br></br><b>제22조 재원</b><br></br>본회의 재원은 의장단의 헌금과, 중앙의원의 헌금, 총회원의 회비 및 헌금 기타 보조금으로 충당한다.
                      <br></br> <br></br><b>제23조 재정운영 </b><br></br>총회에서 인준한 예산 가운데 일반경상운영비는 실행위원회 의장의 관할 하에 사무총장이 집행하며, 그 외의 예산 집행에는 실행위원의 승인을 요한다.
                      단 긴급을 요하는 경우에 사무총장은 실행위원회 의장의 동의를 얻어 집행하고 추후 실행위원회의 인준을 받는다.
                      <br></br> <br></br><b>제24조 사례 </b><br></br>사무총장, 상임간사 및 고용된 사무직원 이외의 어떤 임원에게도 실제 경비 이외의 사례를 지불하지 않는다. 단 특별 임무를 맡아 연구 및 근무하는 자에게는 실행위원회의 결의로 사례를 지불할 수 있다.
                      <br></br> <br></br><b>제25조 회계년도 </b><br></br>본회의 회계년도는 11월 1일부터 익년 10월 30일까지로 한다.
                      </span>
                    </div>}
                  {section === "f" &&
                      <div>
                        <div className="titleFont" style={{width: "100%", display: "flex", justifyContent: "center", color: "#163875", fontWeight: "600"}}>제5장 개정 및 세칙</div>
                        <br></br><br></br>
                        <span>
                        <br></br><b>제26조 헌장개정</b><br></br>본 헌장의 개정은 중앙의회의 발의로 제안하여 총회 혹은 연차 총회에서 출석회윈 3 분의 2 이상의 찬성으로 행한다.
                        <br></br> <br></br><b>제27조 세칙제정</b><br></br>본 헌장의 시행에 필요한 세칙은 중앙의회에서 제정한다.
                        </span>
                      </div>
                      }
                  {section === "g" &&
                    <div>
                      <div className="titleFont" style={{width: "100%", display: "flex", justifyContent: "center", color: "#163875", fontWeight: "600"}}>부칙</div>
                        <br></br><br></br>
                        <span>
                        <br></br><b>제1조 통상관례</b><br></br>본 헌장에 규정되지 아니한 사항은 만국회의의 통상관례에 준한다.
                        <br></br> <br></br><b>제2조 발효</b><br></br>본 헌장은 총회 혹은 넌차 총회의 통과 즉시 그 효력을 발생한다.
                        <br></br>- 1988년 10월 10일 제정
                        <br></br>- 1992년 10월 13일 개정
                        <br></br>- 1996년 11월 5일 개정

                        <br></br><br></br>중앙의회는 헌장 제 27조에 의거하여 본 회 헌장 시행에 필요한 세칙을 제정한다.
                        </span>

                    </div>
                    }
                </div>
            </div>
            </div>
      
          }
        </div>
        <BottomBanner isHome={false}></BottomBanner>
    </div>
  );
}

export default KWMC;