import React, { useEffect, useState } from 'react';

const 김휴성이창진 = ({history}) => {
  const [section, setSection] = useState("디아스포라");
  return (
    <div style={{width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center"}}>
        <div className="mWidth100 mFlexContainer mMenuTextSize" style={{width: "60%", display: "flex", padding: "1rem", border: "1px solid rgb(226, 226, 226)", fontSize: "1vw", marginBottom: "3.5vw", background: "white", flexDirection: "column"}}>
            <ul style={{display: "inline-flex", flexWrap: "wrap", width: "100%"}}>
                <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="/files/영역별모임/비정부기구/01 김휴성 선교사 - 글로벌호프 기관소개.pdf">김휴성 선교사 파일다운로드</a></li>
                <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="/files/영역별모임/문화예술/06 문화예술&미디어 - 이창진 선교사(청년미디어 인턴십을 통한 거점미디어센터 파트너십).pdf">이창진 선교사 파일다운로드</a></li>
            </ul>
        </div>
    </div>
  );
}

export default 김휴성이창진;