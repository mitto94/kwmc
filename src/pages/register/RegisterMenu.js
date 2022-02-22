import React, { useEffect, useState } from 'react';

const RegisterMenu = ({history}) => {
  return (
    <div style={{width: "100%", height: "60%", minHeight: "30px", border: "1px solid #E2E2E2", display: "flex", justifyContent: "space-around", alignItems: "center"}}>
            <div className={history?.location.pathname === "/register" ? "clickedMenu" : ""} onClick={() => {history.push({
              pathname: "/register",
              state: {
                from: "register"
              }
              })}}
              style={{borderRight: "1px solid #E2E2E2", width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>신청안내</div>
            <div className={history?.location.pathname === "/register_missionary" ? "clickedMenu" : ""} onClick={() => {history.push({
              pathname: "/register_missionary",
              state: {
                from: "missionary"
              }
              })}}
              style={{borderRight: "1px solid #E2E2E2", width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>선교사</div>
            <div className={history?.location.pathname === "/register_mkmz" ? "clickedMenu" : ""} onClick={() => {history.push({
              pathname: "/register_mkmz",
              state: {
                from: "mkmz"
              }
              })}}
              style={{borderRight: "1px solid #E2E2E2", width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>MK/MZ</div>
            <div className={history?.location.pathname === "/register_church" ? "clickedMenu" : ""} onClick={() => {history.push({
              pathname: "/register_church",
              state: {
                from: "church"
              }
              })}} style={{width: "100%", display: "flex", justifyContent: "center", alignItems: "center", height: "100%"}}>교회</div>
          </div>
  );
}

export default RegisterMenu;
