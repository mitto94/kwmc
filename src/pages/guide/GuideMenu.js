import React, { useEffect, useState } from 'react';

const GuideMenu = ({history}) => {
  return (
    <div style={{width: "100%", height: "60%", minHeight: "30px", border: "1px solid #E2E2E2", display: "flex", justifyContent: "space-around", alignItems: "center"}}>
            <div className={history?.location.pathname === "/guide" ? "clickedMenu" : ""} onClick={() => {history.push({
              pathname: "/guide",
              state: {
                from: "guide"
              }
              })}}
              style={{borderRight: "1px solid #E2E2E2", width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>숙박/식사</div>
            <div className={history?.location.pathname === "/guide_traffic" ? "clickedMenu" : ""} onClick={() => {history.push({
              pathname: "/guide_traffic",
              state: {
                from: "traffic"
              }
              })}}
              style={{borderRight: "1px solid #E2E2E2", width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>교통/대회장안내</div>
            <div className={history?.location.pathname === "/guide_around" ? "clickedMenu" : ""} onClick={() => {history.push({
              pathname: "/guide_around",
              state: {
                from: "around"
              }
              })}}
              style={{borderRight: "1px solid #E2E2E2", width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>주변안내</div>
            <div className={history?.location.pathname === "/guide_etc" ? "clickedMenu" : ""} onClick={() => {history.push({
              pathname: "/guide_etc",
              state: {
                from: "etc"
              }
              })}} style={{width: "100%", display: "flex", justifyContent: "center", alignItems: "center", height: "100%"}}>그외정보</div>
          </div>
  );
}

export default GuideMenu;
