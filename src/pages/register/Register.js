import React, { useEffect, useState } from 'react';
import Header from '../../components/header';
import RegisterMenu from './RegisterMenu';
import { Button } from 'primereact/button';
import BottomBanner from '../../components/bottomBanner';
import TopBanner from '../../components/topBanner';

const Register = ({history}) => {
  return (
    <div style={{width: "100%", height: "100%", display: "flex", flexDirection: "column"}}>
        <Header history={history}></Header>
        <TopBanner></TopBanner>
        <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
          <RegisterMenu history={history}/>
        </div>
        <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
          <div className="formContainer" style={{wordBreak: "keep-all"}}>
              <div className="mMargin0" style={{width: "100%", border: "1px solid #E2E2E2", marginTop: "1rem", background: "white", marginBottom: "1rem"}}>
                <div className="mTextSize notosanskr" style={{margin: "2rem", lineHeight: "150%", background: "white", fontWeight: "500"}}>
                  <div className="titleFont" style={{width: "100%", display: "flex", justifyContent: "center", color: "#163875", fontWeight: "600", textAlign: "center"}}>2022년 KWMC 제9차 한인세계선교대회 신청안내</div>
                      <span>
                      <br></br><br></br>
                      <span style={{color: "#143674", fontWeight: "800", lineHeight: "200%"}}>1 주제 : 예수, 온 인류의 소망(Jesus, the Hope of the World)</span>
                      <br></br>
                      <span style={{color: "#143674", fontWeight: "800", lineHeight: "200%"}}>2 주제성구 : 열방이 그에게 소망을 두리라(로마서 15:12)</span>
                      <br></br>
                      <span style={{color: "#143674", fontWeight: "800", lineHeight: "200%"}}>3 일시 : 2022년 7월 11일(월) - 14일(목)</span>
                      <br></br>
                      <span style={{color: "#143674", fontWeight: "800", lineHeight: "200%"}}>4 장소 : 와싱톤중앙장로교회(담임 류응렬 목사)</span>

                      <br></br><br></br>
                      ** 선교사와 성인 일반참가자(교회/MK(/MZ)의 신청방법이 다르오니 신청자의 직임에 맞는 신청방식을 따라주시길 바랍니다.

                      <br></br><br></br>
                      * 선교사 - 신청서제출 후 등록안내 메일을 수신합니다. 등록안내 메일은 신청서 제출 후 3-5일 안에 받으실 수 있습니다. 해당메일에 포함된 항목에 대한 답변과 함께 메일을 회신해주시고 등록비를 입금해 주시면 등록이 완료됩니다. 선교사와 동반하는 미성년 MK는 등록안내 메일의 항목에 기재하여 선교사와 함께 신청해 주시면 됩니다.
                      <br></br><br></br>
                      * 성인 일반참가자(교회/MK/MZ) - 홈페이지 대회신청 메뉴에 있는 교회/MK/MZ 신청란을 클릭, 연결된 등록폼에 항목을 모두 작성하고 등록비를 결제하시면 등록이 완료됩니다.
                      <br></br><br></br>
                      * 등록에 관련된 문의사항은 <span style={{color: "#143674", fontWeight: "700"}}><a style={{textDecoration: "none", color: "#143674", fontWeight: "700"}} href="mailto:kwmc.usa.register@gmail.com">kwmc.usa.register@gmail.com</a></span> 로 문의해주시길 바랍니다.
                  </span>
                  </div>
                  <div className="mobColumn" style={{width: "100%", display: "flex", justifyContent: "center", padding: "1.5rem", paddingTop: "0"}}>
                    <div className="mobColumn" style={{width: "100%", display: "flex", justifyContent: "center"}}>
                        <Button label="선교사 신청" className="p-button-raised p-button-text p-button-plain sSize" style={{height: "3rem", background: "#003685", color: "white", width: "100%", boxShadow: "none", margin: ".5rem"}}  onClick={() => window.open("https://forms.gle/nVCRY7tRWsxS4HGN7")}/>
                    </div>
                    <div className="mobColumn" style={{width: "100%", display: "flex", justifyContent: "center"}}>
                        <Button label="교회/MK/MZ 신청" className="p-button-raised p-button-text p-button-plain sSize" style={{height: "3rem", background: "#E2EBEE", color: "#003685", width: "100%", boxShadow: "none", border: "1px solid lightgray", margin: ".5rem"}} onClick={() => window.open("https://form.jotform.com/221007600697148")} />
                    </div>
                  </div>
              </div>
          </div>
          <BottomBanner isHome={false}></BottomBanner>
        </div>
    </div>
  );
}

export default Register;
