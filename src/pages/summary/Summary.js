import React, { useEffect, useState } from 'react';
import Header from '../../components/header';
import SummaryMenu from './SummaryMenu';
const Summary = ({history}) => {
  return (
    <div style={{width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center"}}>
        <Header history={history}></Header>
        <div style={{width: "100%", height: "20%"}}>
          <SummaryMenu history={history}/>
        </div>
        <div style={{display: "flex", justifyContent: "center", width: "80%", height: "150%"}} >
          Main Content
        </div>
      <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "30%"}}>
        Footer
      </div>
    </div>
  );
}

export default Summary;