import React, { useEffect, useState } from 'react';

const GuideMenu = ({history}) => {
  return (
    <div className="mWidth100 mMenuTextSize mdLRBorder" style={{width: "60%", height: "7vh", minHeight: "20px", border: "1px solid #E2E2E2", display: "flex", justifyContent: "space-around", alignItems: "center", background: "#F3F3F3", color: "#807F7F", cursor: "pointer", fontWeight: 500, fontSize: "1.3vw", borderTop: "none"}}>
            <div className={history?.location.pathname === "/guide" ? "clickedMenu" : ""} onClick={() => {history.push({
              // pathname: "/guide",
              state: {
                from: "guide"
              }
              })}}
              style={{borderRight: "1px solid #E2E2E2", width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", wordBreak: "keep-all", textAlign: "center"}}>숙박/식사</div>
            <div className={history?.location.pathname === "/guide_around" ? "clickedMenu" : ""} onClick={() => {history.push({
              // pathname: "/guide_around",
              state: {
                from: "traffic"
              }
              })}}
              style={{borderRight: "1px solid #E2E2E2", width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", wordBreak: "keep-all", textAlign: "center"}}>대회장안내</div>
            <div className={history?.location.pathname === "/guide_traffic" ? "clickedMenu" : ""} onClick={() => {history.push({
              // pathname: "/guide_around",
              pathname: "/guide_traffic",
              state: {
                from: "around"
              }
              })}}
              style={{borderRight: "1px solid #E2E2E2", width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", wordBreak: "keep-all", textAlign: "center", background: "white"}}>교통안내</div>
            <div className={history?.location.pathname === "/guide_etc" ? "clickedMenu" : ""} onClick={() => {history.push({
              pathname: "/guide_etc",
              state: {
                from: "etc"
              }
              })}} style={{width: "100%", display: "flex", justifyContent: "center", alignItems: "center", height: "100%", wordBreak: "keep-all", textAlign: "center", background: "white"}}>그외 정보</div>
          </div>
  );
}

export default GuideMenu;
