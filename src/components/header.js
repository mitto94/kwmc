import React, { useEffect, useState } from 'react';
import { Menubar } from 'primereact/menubar';

const Header = ({history}) => {
	const items = [
		{
		   label:'Main Page',
		   command: () => history.push({
				pathname: "/main",
				state: {
					from: "main"
				}
			})
		},
		{
		   label:'대회개요',
		   items:[
			  {
				 label:'인사말',
				 command: () => history.push({
					pathname: "/summary",
					state: {
						from: "summary"
					}
				})
			  },
			  {
				 label:'대회 성격',
				 command: () => history.push({
					pathname: "/summary_character",
					state: {
						from: "character"
					}
				})
			  },
			  {
				 label:'조직도',
				 command: () => history.push({
					pathname: "/summary_organization",
					state: {
						from: "organization"
					}
				})
			  },
			  {
				 label:'KWMC 소개',
				 command: () => history.push({
					pathname: "/summary_KWMC",
					state: {
						from: "KWMC"
					}
				})
			  },
	
		   ]
		},
		{
			label:'프로그램',
			items:[
			   {
				  label:'일정표',
				  command: () => history.push({
					pathname: "/program",
					state: {
						from: "program"
					}
				})
			   },
			   {
				  label:'주강의',
				  command: () => history.push({
					pathname: "/program_lecture",
					state: {
						from: "lecture"
					}
				})
			   },
			   {
				  label:'영역별프로그램',
				  command: () => history.push({
					pathname: "/program_section",
					state: {
						from: "section"
					}
				})
			   },
			   {
				  label:'저녁집회',
				  command: () => history.push({
					pathname: "/program_gathering",
					state: {
						from: "gathering"
					}
				})
			   },
	 
			]
		 },
		 {
			label:'대회안내',
			items:[
			   {
				  label:'숙박/식사',
				  command: () => history.push({
					pathname: "/guide",
					state: {
						from: "guide"
					}
				})
			   },
			   {
				  label:'교통/대회장안내',
				  command: () => history.push({
					pathname: "/guide_traffic",
					state: {
						from: "traffic"
					}
				})
			   },
			   {
				  label:'주변안내',
				  command: () => history.push({
					pathname: "/guide_around",
					state: {
						from: "around"
					}
				})
			   },
			   {
				  label:'그외 정보',
				  command: () => history.push({
					pathname: "/guide_etc",
					state: {
						from: "etc"
					}
				})
			   },
	 
			]
		 },
		 {
			label:'대회신청',
			items:[
			   {
				  label:'신청안내',
				  command: () => history.push({
					pathname: "/register",
					state: {
						from: "register"
					}
				})
			   },
			   {
				  label:'선교사',
				  command: () => history.push({
					pathname: "/register_missionary",
					state: {
						from: "missionary"
					}
				})
			   },
			   {
				  label:'MK/MZ',
				  command: () => history.push({
					pathname: "/register_mkmz",
					state: {
						from: "mkmz"
					}
				})
			   },
			   {
				  label:'교회',
				  command: () => history.push({
					pathname: "/register_church",
					state: {
						from: "church"
					}
				})
			   },
	 
			]
		 },
		 {
			label:'자료실',
			items:[
			   {
				  label:'선교사 리포트',
				  command: () => history.push({
					pathname: "/data",
					state: {
						from: "data"
					}
				})
			   },
			   {
				  label:'홍보자료',
				  command: () => history.push({
					pathname: "/data_promotion",
					state: {
						from: "promotion"
					}
				})
			   },
			   {
				  label:'행사후 업데이트',
				  command: () => history.push({
					pathname: "/data_update",
					state: {
						from: "update"
					}
				})
			   },
	
			]
		 },
	 ];
  return (
    <div style={{display: "flex", flexDirection: "column", width: "108%"}}>
      <div style={{display: "flex", justifyContent: "center"}}>Header</div>
      {/* <div style={{display: "flex", justifyContent: "space-around", background: "#005b9a"}}>
          <div className="menuText" style={{margin: "1rem"}} onClick={() => {history.push({
				pathname: "/main",
				state: {
					from: "main"
				}
				})}}
            >Main Page</div>
            <div className="menuText" style={{margin: "1rem"}} onClick={() => {history.push({
				pathname: "/summary",
				state: {
					from: "summary"
				}
				})}}
            >대회개요</div>
            <div className="menuText" style={{margin: "1rem"}} onClick={() => {history.push({
				pathname: "/program",
				state: {
					from: "program"
				}
				})}}
            >프로그램</div>
			<div className="menuText" style={{margin: "1rem"}} onClick={() => {history.push({
				pathname: "/guide",
				state: {
					from: "guide"
				}
				})}}
            >대회안내</div>
			<div className="menuText" style={{margin: "1rem"}} onClick={() => {history.push({
				pathname: "/register",
				state: {
					from: "register"
				}
				})}}
            >대회신청</div>
			<div className="menuText" style={{margin: "1rem"}} onClick={() => {history.push({
				pathname: "/data",
				state: {
					from: "data"
				}
				})}}
            >자료실</div>
      </div> */}
	  <Menubar model={items} style={{display: "flex", justifyContent: "flex-end"}}/>
    </div>
  );
}

export default Header;