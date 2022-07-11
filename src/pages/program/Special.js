import React, { useEffect, useState } from 'react';
import Header from '../../components/header';
import ProgramMenu from './ProgramMenu';
import TopBanner from '../../components/topBanner';
import BottomBanner from '../../components/bottomBanner';
import 월터김 from "./Image/월터김.jpg"
import 김양재 from "./Image/김양재.jpg"
import 이여백 from "./Image/이여백.jpg"
import 임흥섭 from "./Image/임홍섭.jpg"
import 스페셜세션 from "./Image/시간표/스페셜세션.jpg"
import 돈덴트 from "./Image/돈덴트.jpg"

const Special = ({history}) => {
  const [first, setFirst] = useState(true);
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
          <div className="mWidth100 mMenuTextSize mdLRBorder" style={{width: "60%", height: "7vh", minHeight: "20px", border: "1px solid #E2E2E2", display: "flex", justifyContent: "space-around", alignItems: "center", cursor: "pointer", fontWeight: 500, fontSize: "1.3vw", color: "rgb(128, 127, 127)", background: "white"}}>
              <div className={first ? "clickedMenu2" : ""} onClick={() => setFirst(true)}
                style={{borderRight: "1px solid #E2E2E2", width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>12일</div>
              <div className={!first ? "clickedMenu2" : ""} onClick={() => setFirst(false)}
                style={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>13일</div>
          </div>
        </div>
        <div className="mMargin0" style={{width: "100%", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", marginTop: ".8vw", fontFamily: "Noto Sans KR, sans-serif"}}>
          
          {first ? 
            <div className="mWidth100 mFlexContainer mContainer4p" style={{width: "60%", display: "flex", padding: "2.5vw", border: "1px solid rgb(226, 226, 226)", fontSize: "1vw", marginBottom: "3.5vw", background: "white", flexDirection: "column"}}>
            <iframe className="videoContainer4" src="https://stream.streamingchurch.tv/stream.php?churchid=church11053" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen;" modestbranding="1" rel="0" >
            </iframe>
            <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
              <div className="WebImage" style={{display: "flex", justifyContent: "center", width: "100%", marginTop: "0.8vw"}} >
                <img style={{width:"100%"}} src={스페셜세션} alt="스페셜세션"></img>
              </div>
              <div className="MobImage" style={{display: "flex", justifyContent: "center", width: "100%"}} >
                <img style={{width:"100%"}} src={스페셜세션} alt="스페셜세션"></img>
              </div>
            </div>
            <span className='mTextSize'>

            ** 12~13일 영역별모임 시간에 교회와선교사 케어를 주제로 강의와 상담, QnA 시간이 있습니다. 
            <br></br><br></br>
            진행 및 발제 : 임흥섭 선교사(KAPC교단 세계선교회 WMS본부장)<br></br><br></br><br></br><br></br>
            </span>
            
            {makeProfile(월터김, "Walter Kim 목사", "주제:  Evangelicals in USA", "", <span>
            <span>- NorthWestern University, B.A</span><br></br>
            <span>- Regent College(Vancouver), M.Div.</span><br></br>
            <span>- Harvard University, Ph.D.</span><br></br>
            <br></br>
            <span>- (前) 파크 스트리트 교회(보스턴) 담임</span><br></br>
            <span>- Christian Today, World Relief 이사</span><br></br>
            <span>- Gordon College 자문위원회 이사</span><br></br>
            <span>- 전미복음주의연맹(NAE) 대표</span><br></br>
            <span>- 트리니티 장로교회 담임</span><br></br><br></br>
            월터 킴 목사는 뉴욕시의 한국 이민자 가정에서 태어났으며 펜실베니아 서부, 시카고, 밴쿠버 등 여러 곳에 거주했다. 보스턴에 지내며 파크스트리트교회를 섬기다 현재는 버지니아 샬로츠빌 소재 트리니티 장로교회 담임으로 섬기고 있다. 신학자이자 목회자인 월터 킴 목사는 비백인 최초로 전미복음주의연맹(NAE)의 대표로 2020년 취임했다. NAE 이사회 Roy Taylor의장은 김 목사에 대해 “미국을 비롯한 전 세계 복음주의를 위해 그의 냉철한 사고와 관용의 정신이 필요하며, 그는 검증된 목회자이자 신학자, 리더로서 향후 NAE의 10년을 이끌 것이다.”고 말했다. 미국 복음주의를 대표하는 단체인 NAE는 40개 교단을 비롯해 다양한 조직과 학교 등의 연합체로 지난 1942년 설립됐으며 현재 워싱턴D.C.에 본부를 두고 4만5천여 개 교회가 속해있다. 김 목사는 복음주의는 사회운동이 아니라 영적운동임을 강조하며 대표로서 정치적으로 양극화된 사회 안에 그리스도인들의 ‘영적 갱신’과 ‘화해’를 목표로 NAE를 이끌고 있다.
            </span>,"")}

            {makeProfile(김양재, "김양재 목사", "", ""
            , <span>이북이 고향인 부모님 밑에서 4대째 모태신앙으로 태어나서 서울대학교 음악대학에서 피아노를 전공하고, 백석대학교 신학대학원(구 기독신학대학원, M.Div.)을 졸업한 후 2003년 우리들교회를 설립하여 지금까지 담임목사로 섬기고 있습니다. 서울예술고등학교와 총신대학교 강사를 지낸 바 있고, 학창 시절부터 피아노 반주자로 오랫동안 교회를 섬겼지만 교양과 엘리트 의식에 사로잡혀 장로 집안의 의사 아들과 결혼했습니다. 그러나 유교적 전통이 강한 시댁에서 고된 시집살이 5년 만에 가출해 기도원에 갔다가 예수님을 인격적으로 만나고 말씀의 능력을 깊이 체험하게 되었습니다. 말씀이 교과서가 되고, 성령이 스승이 되며, 환난이 주제가 되고 보니, 고통스러웠던 가정생활이 주님의 섭리임을 깨닫게 되었습니다. 그러다가 37세가 되던 해에, 산부인과 의사였던 남편이 간암으로 세상을 떠나기 직전 극적으로 회개한 일을 계기로 영혼 구원 사역에 헌신하게 되었습니다.
            <br></br><br></br>
            이후 고난이 축복임을 역설하며 삶에서 부딪히는 모든 문제를 말씀으로 조명하는 말씀묵상에 힘쓰며, 2000년에 큐티엠(QTM, Quiet Time Movement)을 설립하여 ‘말씀묵상을 통해 한 영혼을 구원하고, 가정을 중수하며, 교회를 새롭게 하는’ 말씀묵상 운동을 지속적으로 펼쳐 나가고 있습니다.
            저서로는 『날마다 큐티하는 여자』, 『사랑받고 사랑하고』, 『날마다 큐티하는 청소년』, 『절대복음』, 『절대순종』(로마서 강해), 『내가 너를 아노라』(요한계시록1 강해), 『말씀을 먹으라』(요한계시록2 강해), 『우리는 다 이겼습니다』(요한계시록3 강해) 등 다수가 있습니다.
            한편 우리들교회는 ‘환난당하고 빚지고 원통한 자들’이 모여 날마다 말씀을 묵상함으로 ‘영혼이 살아나고, 무너진 가정이 되살아나는’ 구원의 간증이 넘쳐 나면서 개척 15년 만에 1만 명 이상이 모이는 공동체로 성장했습니다.
            </span>,
            `한국과 마찬가지로 많은 선교지의 근본 문제가 가정입니다. 먼저 내 삶이 말씀 앞에 해석되어지고 내 고난이 약재료가 되어, 깨어진 가정에서 많은 아픔을 가진 사람들에게 어떻게 접근하며 말씀을 전해야 할지에 대한 선교적 방법론의 전환점을 가지게 되는 시간이 될 것입니다.`)}
             
            {makeProfile(이여백, "이여백 목사", "", ""
            , <span>1998년 주사랑선교교회를 개척하여 현재 서울 서초구 방배동에서 사역하고 있다. 선교에 동참하고자 2007년부터 KWMA 법인이사로, 2014년부터 선교타임즈 공동발행인으로 섬기고 있다.</span>,
            `철저히 헌신된 사역자들이 많이 있다. 사역의 헌신, 자세, 열정 어느 하나 부족함이 없어 보인다. 그럼에도 때로는 성경적 결과에 비추어 보면 안타까울 때가 많았다. 헌신의 과정들의 말씀을 살피다 보면 열매는 부수적 산물이 되고야 만다. 이 점을 나누고 함께 하며 주님 은혜의 풍성함과 넘침을 나누고 싶다.  `)}
            
            {makeProfile(돈덴트, "Dr. Donald T. (Don) Dent", "Planting Indigenous Churches and the Wise Use of Outside Funding", ""
            , <span>
                <span> -Baker James Cauthen Professor of World Missions, Gateway Seminary, from 2012~</span><br></br>
                <span> -Director, Kim School of Global Missions, Gateway Seminary, 2012~2021</span><br></br>
                <span> -International Mission Board, South Asia Apprentice Program Director, Personnel Training Team, 2010~2012</span><br></br>
                <span> -IMB, Missionary-In-Residence and Visiting Professor, Southeastern Baptist Theological Seminary, 2009</span><br></br>
                <span> -IMB Regional Leader, Pacific Rim, 2004~2008(approx. 850 missionaries)</span><br></br>
                <span> -IMB Regional Leader, Southeast Asia and Oceania, 1998~2004(from 275~550 missionaries)</span><br></br><br></br>
                Don Dent 박사는 Gateway 신학교에서 가르치며 베이커 제임스 카우첸 세계선교 교수로 재직하고 있다. 미시시피 태생인 그는 29살인 1975년 하나님께 선교로 부르심을 받고 30년 동안 아시아의 대도시들에서 미국남침례교단 국제선교위원회(IMB)와 국제 기업에서 일을 했으며, 다양한 문화와 환경에서의 경험을 통해 고층 건물이 밀집한 대도시에서 공동체를 개척하고, 새로운 시장을 개척하기 위해 전략들을 세웠다. 또한 100개 이상의 해외 선교 팀의 리더십으로 섬길 뿐 아니라 다음세대 리더들을 세웠고, 선교팀 멤버들을 훈련시키며 새로운 환경에 잘 적응하는 과정을 이끄는 등 다양한 환경에서 많은 사람들과 사역을 해왔다.
            </span>,
            "")}
            

            {makeProfile(임흥섭, "임흥섭 선교사", "주제: 교회와 선교사 케어", `제목 : "탈락이라는 빙산" 잃어버리기에는 너무 소중한 교회와 선교사`
            , <span>
              한국의 국제 오엠 선교회를 창립하고, 구 소련 선교사로 사역을 했으며, 미주오엠 총무와  IV간사를 섬겼고 YWAM DTSdhk KOSTA강사이면서 이민교회 담임이면서, 상담실 대표와  대학 부총장겸 교수로 이민교회의 선교적 사명을위해 사역해 왔다. 미국 칼빈신학교, 웨스트민스터 신학교과 트리니티 신학교에서 공부했으며 현재는 KAPC 교단의 세계선교회 WMS 본부장으로 섬기고 있다. 
            </span>,
            `선교를위해 잃어버리기엔 너무도 소중한 사람들, 교회와 선교사가 타문화에 복음을 전하는 메신저로서 "Make or Break", 즉 '성공' 할것인가 아니면 '무너질' 것인가에 위기를 점검하고 보수를위해 필요한 도구와 기술을 상담학과 리더쉽 관점을 중심으로 제공한다.`, true)}
            
            
          
            </div>
        
          :   <div className="mWidth100 mFlexContainer mContainer4p mTextSize" style={{width: "60%", display: "flex", padding: "2.5vw", border: "1px solid rgb(226, 226, 226)", fontSize: "1vw", marginBottom: "3.5vw", background: "white", flexDirection: "column"}}>
          <iframe className="videoContainer4" src="https://stream.streamingchurch.tv/stream.php?churchid=church11053" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen;" modestbranding="1" rel="0" >
            </iframe>
          <span>
          <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
              <div className="WebImage" style={{display: "flex", justifyContent: "center", width: "100%", marginTop: "0.8vw"}} >
                <img style={{width:"100%"}} src={스페셜세션} alt="스페셜세션"></img>
              </div>
              <div className="MobImage" style={{display: "flex", justifyContent: "center", width: "100%"}} >
                <img style={{width:"100%"}} src={스페셜세션} alt="스페셜세션"></img>
              </div>
            </div>
            <span className='mTextSize'>

            ** 12~13일 영역별모임 시간에 교회와선교사 케어를 주제로 강의와 상담, QnA 시간이 있습니다. 
            <br></br><br></br>
            진행 및 발제 : 임흥섭 선교사(KAPC교단 세계선교회 WMS본부장)<br></br><br></br><br></br><br></br>
            </span>
          중국교회와 토론회     Jul. 13. 2022   2022年 7月 13日
          <br></br><br></br>
          World Mission After Covid 19 <br></br>
          基督教韩人世界宣教协议会 <br></br>
          国际基督徒专家互相合作研讨会 <br></br>
          공동토론회: 기독교한인세계선교협의회와 국제중국선교컨퍼런스
          <br></br><br></br>
          <br></br>
          P.M. 下午 오후 1:30 – 4:00 Special Session For KWMC(Korean World Mission Council) and  <br></br>
          ICCHC(International Conference on Christian Humanitarian Collaboration
          <br></br><br></br>
          Moderator 主持人 사회자:
          <br></br><br></br>
          Prof. Dr. Paul Liu, Director of Mandarin Studies, <br></br>
          Midwestern Baptist Theological Seminary, USA MBTS中文部主任教授  <br></br>
          유바울 MBTS 중국부 주임교수
          <br></br><br></br>
          Dr. Yongjoong Cho, General Secretary, KWMC， 基督教韩人世界宣教协议会秘书长  <br></br>
          조용중 선교사 (기독교한인세계선교협의회(KWMC) 사무총장) 
          <br></br><br></br>
          Dr. Unseong Kim, Youngnak Church, Seoul, Korea, 首尔永乐教会，7万信徒， <br></br>
          김운성 목사 영락교회 (http://www.youngnak.net/information/vision/) 비대면 줌으로 참여 
          <br></br><br></br>
          Dr. Todd Lafferty, Executive Vice President of International Mission Board, Southern  
          Baptist Church, USA, 世界最大南浸信会宣教会执行副总裁,  
          3600명 선교사의세계 최대선교기구 남침례교 IMB 제 1부총재(실무책임자) 
          <br></br><br></br>
          Dr. Yeou Cherng Bor, President of Ambassador for Christ, 柏有成博士 美國使者協會会长， 
          대만대학졸업, 코넬대학 생물학박사 토론토대학교수역임이후,  
          현재 세계 중국인 기독교계 가장 영향력있는 AFC 대표
          <br></br><br></br>
          <br></br>
          코로나이후 세계 선교에 대해서 
          <br></br><br></br>
          1)한국 선교 상황: KWMC 조용중 사무총장, <br></br>
          2)한국 교회: 서울 영락교회 김운성 목사(ZOOM으로 발표), <br></br>
          3)미국 교회 선교: 세계 최대 선교 기구 IMB의 실무책임자 Dr. Lafferty, <br></br>
          4)세계 중국인 교회:  AFC 대표 Yeou Cherng  Bor 박사 
          <br></br><br></br>
          각각 발표를 하고, 상호 토론해 보는 세션 입니다. 각 분야의 세계적인 전문가들의 토론을 통해서 나와 여러분과 그리고 교회가 어떻게 나의 선교, 교회의 선교, 하나님의 선교를 진행해야 할지, 하나님이 주시는 지혜를 찾는 기회가 되길 기도해 봅니다.


          </span>
          </div>
          }

        </div>
        
        <BottomBanner isHome={false}></BottomBanner>
    </div>
  );
}

export default Special;