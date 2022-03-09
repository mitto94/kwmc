import React, { useEffect, useState } from 'react';
import Header from '../components/header';
const Plan = ({history}) => {
  return (
    <div style={{width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center"}}>
        <Header history={history}></Header>
        {/* <div style={{width: "100%", height: "20%"}}>
          <GuideMenu history={history}/>
        </div> */}
        <div style={{display: "flex", justifyContent: "center", width: "80%", height: "100%", alignItems: "center", fontFamily: "Noto Sans KR"}} >
            추후 업데이트 예정입니다
        </div>
    </div>
  );
}

export default Plan;