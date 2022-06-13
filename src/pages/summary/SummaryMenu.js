import React, { useEffect, useState } from 'react';

const SummaryMenu = ({history}) => {
  return (
    <div className="mWidth100 mMenuTextSize mdLRBorder" style={{width: "60%", height: "7vh", minHeight: "20px", border: "1px solid #E2E2E2", display: "flex", justifyContent: "space-around", alignItems: "center", background: "#F3F3F3", color: "#807F7F", cursor: "pointer", fontWeight: 500, fontSize: "1.3vw", borderTop: "none"}}>
            <div className={history?.location.pathname === "/summary" ? "clickedMenu" : ""} onClick={() => {history.push({
              pathname: "/summary",
              state: {
                from: "summary"
              }
              })}}
              style={{borderRight: "1px solid #E2E2E2", width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", background: "white"}}>인사말</div>
            <div className={history?.location.pathname === "/summary_character" ? "clickedMenu" : ""} onClick={() => {history.push({
              pathname: "/summary_character",
              state: {
                from: "character"
              }
              })}}
              style={{borderRight: "1px solid #E2E2E2", width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", background: "white"}}>대회소개</div>
            <div className={history?.location.pathname === "/summary_organization" ? "clickedMenu" : ""} onClick={() => {history.push({
              pathname: "/summary_organization",
              state: {
                from: "summary"
              }
              })}}
              style={{borderRight: "1px solid #E2E2E2", width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", background: "white", textAlign: "center", wordBreak: "keep-all"}}>제9차 KWMC 공동대회장</div>
            <div className={history?.location.pathname === "/summary_KWMC" ? "clickedMenu" : ""} onClick={() => {history.push({
              pathname: "/summary_KWMC",
              state: {
                from: "summary"
              }
              })}} style={{width: "100%", display: "flex", justifyContent: "center", alignItems: "center", height: "100%", background: "white"}}>KWMC 소개</div>
          </div>
  );
}

export default SummaryMenu;
