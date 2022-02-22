import React, { useEffect, useState } from 'react';

const DataMenu = ({history}) => {
  return (
    <div style={{width: "100%", height: "60%", minHeight: "30px", border: "1px solid #E2E2E2", display: "flex", justifyContent: "space-around", alignItems: "center"}}>
            <div className={history?.location.pathname === "/data" ? "clickedMenu" : ""} onClick={() => {history.push({
              pathname: "/data",
              state: {
                from: "data"
              }
              })}}
              style={{borderRight: "1px solid #E2E2E2", width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>선교사리포트</div>
            <div className={history?.location.pathname === "/data_promotion" ? "clickedMenu" : ""} onClick={() => {history.push({
              pathname: "/data_promotion",
              state: {
                from: "promotion"
              }
              })}}
              style={{borderRight: "1px solid #E2E2E2", width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>홍보자료</div>
            <div className={history?.location.pathname === "/data_update" ? "clickedMenu" : ""} onClick={() => {history.push({
              pathname: "/data_update",
              state: {
                from: "update"
              }
              })}}
              style={{borderRight: "1px solid #E2E2E2", width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>행사 후 업데이트</div>
          </div>
  );
}

export default DataMenu;
