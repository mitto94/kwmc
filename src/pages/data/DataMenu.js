import React, { useEffect, useState } from 'react';

const DataMenu = ({history}) => {
  return (
    <div className="mWidth100 mMenuTextSize mdLRBorder" style={{width: "60%", height: "7vh", minHeight: "20px", border: "1px solid #E2E2E2", display: "flex", justifyContent: "space-around", alignItems: "center", background: "#F3F3F3", color: "#807F7F", cursor: "pointer", fontWeight: 500, fontSize: "1.3vw", borderTop: "none"}}>
            <div className={history?.location.pathname === "/data" ? "clickedMenu" : ""} onClick={() => {history.push({
              pathname: "/data",
              state: {
                from: "data"
              }
              })}}
              style={{borderRight: "1px solid #E2E2E2", width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", background: "white"}}>선교사 리포트</div>
            <div className={history?.location.pathname === "/data_promotion" ? "clickedMenu" : ""} onClick={() => {history.push({
              pathname: "/data_promotion",
              state: {
                from: "data_promotion"
              }
              })}}
              style={{borderRight: "1px solid #E2E2E2", width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", background: "white"}}>홍보자료</div>
            <div className={history?.location.pathname === "/data_update" ? "clickedMenu" : ""} onClick={() => {history.push({
              // pathname: "/data_update",
              state: {
                from: "data_update"
              }
              })}}
              style={{borderRight: "1px solid #E2E2E2", width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>행사 후 업데이트</div>
          </div>
  );
}

export default DataMenu;
