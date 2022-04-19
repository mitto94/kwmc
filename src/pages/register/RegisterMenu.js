import React, { useEffect, useState } from 'react';

const RegisterMenu = ({history}) => {
  return (
    <div className="mWidth100 mTextSize mdLRBorder" style={{width: "60%", height: "7vh", minHeight: "20px", border: "1px solid #E2E2E2", display: "flex", justifyContent: "space-around", alignItems: "center", background: "#F3F3F3", color: "#807F7F", cursor: "pointer", fontWeight: 500, fontSize: "1.3vw", borderTop: "none"}}>
            <div className={history?.location.pathname === "/register" ? "clickedMenu" : ""} onClick={() => {history.push({
              // pathname: "/register",
              state: {
                from: "register"
              }
              })}}
              style={{borderRight: "1px solid #E2E2E2", width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>신청안내</div>
              <div className={history?.location.pathname === "/register_missionary" ? "clickedMenu" : ""} onClick={() => {
              //   history.push({
              // // pathname: "/register_missionary",
              // state: {
              //   from: "register_missionary"
              // }
              // })
              window.open("https://forms.gle/nVCRY7tRWsxS4HGN7")

            }}
              style={{borderRight: "1px solid #E2E2E2", width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", background: "white"}}>선교사</div>
            <div className={history?.location.pathname === "/register_mkmz" ? "clickedMenu" : ""} onClick={() => {
              history.push({
              // pathname: "/register_mkmz",
              state: {
                from: "register_mkmz"
              }
              })
            }
          }
              style={{borderRight: "1px solid #E2E2E2", width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>MK/MZ</div>
            <div className={history?.location.pathname === "/register_church" ? "clickedMenu" : ""} onClick={() => {history.push({
              // pathname: "/register_church",
              state: {
                from: "register_church"
              }
              })}}
              style={{borderRight: "1px solid #E2E2E2", width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>교회</div>
            <div className={history?.location.pathname === "/register_display" ? "clickedMenu" : ""} onClick={() => {history.push({
              pathname: "/register_display",
              state: {
                from: "register_display"
              }
              })}} style={{width: "100%", display: "flex", justifyContent: "center", alignItems: "center", height: "100%", wordBreak: "keep-all", textAlign: "center"}}>전시부스 신청</div>
          </div>
  );
}

export default RegisterMenu;
