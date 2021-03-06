import React, { useEffect, useState } from 'react';

const ProgramMenu = ({history}) => {
  return (
    <div className="mWidth100 mMenuTextSize mdLRBorder" style={{width: "60%", height: "9vh", minHeight: "20px", border: "1px solid #E2E2E2", display: "flex", justifyContent: "space-around", alignItems: "center", background: "#F3F3F3", color: "#807F7F", cursor: "pointer", fontWeight: 500, fontSize: "1.3vw", borderTop: "none"}}>
            <div className={history?.location.pathname === "/program" ? "clickedMenu" : ""} onClick={() => {history.push({
              pathname: "/program",
              state: {
                from: "program"
              }
              })}}
              style={{borderRight: "1px solid #E2E2E2", width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", background: "white", textAlign: "center", wordBreak: "keep-all"}}>일정표 (Timetable)</div>
              
            <div className={history?.location.pathname === "/program_presentation" ? "clickedMenu" : ""} onClick={() => {history.push({
              pathname: "/program_presentation",
              state: {
                from: "lecture"
              }
              })}}
              style={{borderRight: "1px solid #E2E2E2", width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", background: "white", textAlign: "center", wordBreak: "keep-all"}}>주제 발표 (Keynote Speech)</div>
              <div className={history?.location.pathname === "/bible" ? "clickedMenu" : ""} onClick={() => {history.push({
              pathname: "/bible",
              state: {
                from: "bible"
              }
              })}}
              style={{borderRight: "1px solid #E2E2E2", width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", background: "white", textAlign: "center", wordBreak: "keep-all"}}>성경 (Bilble Exposition)</div>
            <div className={history?.location.pathname === "/program_lecture" ? "clickedMenu" : ""} onClick={() => {history.push({
              pathname: "/program_lecture",
              state: {
                from: "lecture"
              }
              })}}
              style={{borderRight: "1px solid #E2E2E2", width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", background: "white", textAlign: "center", wordBreak: "keep-all"}}>주제 강의 (Plenary)</div>
            
            <div className={history?.location.pathname === "/program_section" ? "clickedMenu" : ""} onClick={() => {history.push({
              pathname: "/program_section",
              state: {
                from: "section"
              }
              })}}
              style={{borderRight: "1px solid #E2E2E2", width: "100%", height: "100%", display: "flex", justifyContent: "center", wordBreak: "keep-all", textAlign: "center", alignItems: "center", background: "white"}}>영역별 모임 (Track)</div>
            <div className={history?.location.pathname === "/program_special" ? "clickedMenu" : ""} onClick={() => {history.push({
              pathname: "/program_special",
              state: {
                from: "section"
              }
              })}}
              style={{borderRight: "1px solid #E2E2E2", width: "100%", height: "100%", display: "flex", justifyContent: "center", wordBreak: "keep-all", textAlign: "center", alignItems: "center", background: "white"}}>Special Session</div>
            
            <div className={history?.location.pathname === "/program_gathering" ? "clickedMenu" : ""} onClick={() => {history.push({
              pathname: "/program_gathering",
              state: {
                from: "gathering"
              }
              })}} style={{width: "100%", display: "flex", justifyContent: "center", alignItems: "center", height: "100%", background: "white", wordBreak: "keep-all", textAlign: "center"}}>저녁 집회 (Evening Worship)</div>
          </div>
  );
}

export default ProgramMenu;
