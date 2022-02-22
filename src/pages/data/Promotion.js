import React, { useEffect, useState } from 'react';
import Header from '../../components/header';
import DataMenu from './DataMenu';
const Promotion = ({history}) => {
  return (
    <div style={{width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center"}}>
      <div style={{display: "flex", alignItems: "center", minHeight: "20%", width: "80%", position: "relative"}}>
        <Header history={history}></Header>
      </div>
        <div style={{width: "80%", height: "15%"}}>
          <DataMenu history={history}/>
        </div>
        <div style={{display: "flex", justifyContent: "center", width: "80%", height: "150%"}} >
            Promotion
        </div>
      <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "30%"}}>
        Footer
      </div>
    </div>
  );
}

export default Promotion;