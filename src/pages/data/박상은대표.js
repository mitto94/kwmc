import React, { useEffect, useState } from 'react';

const 박상은대표 = ({history}) => {
  const [section, setSection] = useState("디아스포라");
  return (
    <div style={{width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center"}}>
        <div className="mWidth100 mFlexContainer mMenuTextSize" style={{width: "60%", display: "flex", padding: "1rem", border: "1px solid rgb(226, 226, 226)", fontSize: "1vw", marginBottom: "3.5vw", background: "white", flexDirection: "column"}}>
            <ul style={{display: "inline-flex", flexWrap: "wrap", width: "100%"}}>
                <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="/kwmc/files/영역별모임/비정부기구/박상은대표/02 박상은(샘병원 미션원장) - NGO와 의료선교.hwp">박상은(샘병원 미션원장) - NGO와 의료선교</a></li>
                <li className="mWidth100" style={{width: "46%", marginBottom: "2vh", margin: "2%" }}><a target="_blank" rel="noreferrer" style={{textDecoration: "none"}} href="/kwmc/files/영역별모임/비정부기구/박상은대표/06 박상은(아프리카미래재단 대표) - NGO와 아프리카.hwp">박상은(아프리카미래재단 대표) - NGO와 아프리카</a></li>

            </ul>
        </div>
    </div>
  );
}

export default 박상은대표;