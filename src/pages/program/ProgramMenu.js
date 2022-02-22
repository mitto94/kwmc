import React, { useEffect, useState } from 'react';

const ProgramMenu = ({history}) => {
  return (
    <div style={{width: "100%", height: "60%", minHeight: "30px", border: "1px solid #E2E2E2", display: "flex", justifyContent: "space-around", alignItems: "center"}}>
            <div className={history?.location.pathname === "/program" ? "clickedMenu" : ""} onClick={() => {history.push({
              pathname: "/program",
              state: {
                from: "program"
              }
              })}}
              style={{borderRight: "1px solid #E2E2E2", width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>일정표</div>
            <div className={history?.location.pathname === "/program_lecture" ? "clickedMenu" : ""} onClick={() => {history.push({
              pathname: "/program_lecture",
              state: {
                from: "lecture"
              }
              })}}
              style={{borderRight: "1px solid #E2E2E2", width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>주강의</div>
            <div className={history?.location.pathname === "/program_section" ? "clickedMenu" : ""} onClick={() => {history.push({
              pathname: "/program_section",
              state: {
                from: "section"
              }
              })}}
              style={{borderRight: "1px solid #E2E2E2", width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>영역별 프로그램</div>
            <div className={history?.location.pathname === "/program_gathering" ? "clickedMenu" : ""} onClick={() => {history.push({
              pathname: "/program_gathering",
              state: {
                from: "gathering"
              }
              })}} style={{width: "100%", display: "flex", justifyContent: "center", alignItems: "center", height: "100%"}}>저녁집회</div>
          </div>
  );
}

export default ProgramMenu;
