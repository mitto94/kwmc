import React, { useEffect, useState } from 'react';

const ProgramMenu = ({history}) => {
  return (
    <div className="mWidth100 mTextSize mdLRBorder" style={{width: "60%", height: "7vh", minHeight: "20px", border: "1px solid #E2E2E2", display: "flex", justifyContent: "space-around", alignItems: "center", background: "#F3F3F3", color: "#807F7F", cursor: "pointer", fontWeight: 500, fontSize: "1.3vw", borderTop: "none"}}>
            <div className={history?.location.pathname === "/program" ? "clickedMenu" : ""} onClick={() => {history.push({
              pathname: "/program",
              state: {
                from: "program"
              }
              })}}
              style={{borderRight: "1px solid #E2E2E2", width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", background: "white"}}>일정표</div>
              <div className={history?.location.pathname === "/eprogram" ? "clickedMenu" : ""} onClick={() => {history.push({
              pathname: "/eprogram",
              state: {
                from: "eprogram"
              }
              })}}
              style={{borderRight: "1px solid #E2E2E2", width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", background: "white"}}>Timetable</div>
            <div className={history?.location.pathname === "/program_lecture" ? "clickedMenu" : ""} onClick={() => {history.push({
              // pathname: "/program_lecture",
              state: {
                from: "lecture"
              }
              })}}
              style={{borderRight: "1px solid #E2E2E2", width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>주제강의</div>
            <div className={history?.location.pathname === "/program_section" ? "clickedMenu" : ""} onClick={() => {history.push({
              // pathname: "/program_section",
              state: {
                from: "section"
              }
              })}}
              style={{borderRight: "1px solid #E2E2E2", width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>영역별모임</div>
            <div className={history?.location.pathname === "/program_gathering" ? "clickedMenu" : ""} onClick={() => {history.push({
              // pathname: "/program_gathering",
              state: {
                from: "gathering"
              }
              })}} style={{width: "100%", display: "flex", justifyContent: "center", alignItems: "center", height: "100%"}}>저녁집회</div>
          </div>
  );
}

export default ProgramMenu;
