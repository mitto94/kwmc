import React, { useEffect, useState } from 'react';
import { Menubar } from 'primereact/menubar';
import Logo from "../image/KWMClogo.png"
const Header = ({history}) => {
	// const items = [
	// 	{
	// 	   label:'홈',
	// 	   command: () => history.push({
	// 			pathname: "/",
	// 			state: {
	// 				from: ""
	// 			}
	// 		})
	// 	},
	// 	{
	// 	   label:'대회개요',
	// 	   items:[
	// 		  {
	// 			 label:'인사말',
	// 			 command: () => history.push({
	// 				pathname: "/summary",
	// 				state: {
	// 					from: "summary"
	// 				}
	// 			})
	// 		  },
	// 		  {
	// 			 label:'대회 소개',
	// 			 command: () => history.push({
	// 				pathname: "/summary_character",
	// 				state: {
	// 					from: "character"
	// 				}
	// 			})
	// 		  },
	// 		  {
	// 			 label:'조직도',
	// 			 command: () => history.push({
	// 				pathname: "/summary_organization",
	// 				state: {
	// 					from: "organization"
	// 				}
	// 			})
	// 		  },
	// 		  {
	// 			 label:'KWMC 소개',
	// 			 command: () => history.push({
	// 				pathname: "/summary_KWMC",
	// 				state: {
	// 					from: "KWMC"
	// 				}
	// 			})
	// 		  },
	
	// 	   ]
	// 	},
	// 	{
	// 		label:'프로그램',
	// 		items:[
	// 		   {
	// 			  label:'일정표',
	// 			  command: () => history.push({
	// 				pathname: "/program",
	// 				state: {
	// 					from: "program"
	// 				}
	// 			})
	// 		   },
	// 		   {
	// 			  label:'주강의',
	// 			  command: () => history.push({
	// 				pathname: "/program_lecture",
	// 				state: {
	// 					from: "lecture"
	// 				}
	// 			})
	// 		   },
	// 		   {
	// 			  label:'영역별프로그램',
	// 			  command: () => history.push({
	// 				pathname: "/program_section",
	// 				state: {
	// 					from: "section"
	// 				}
	// 			})
	// 		   },
	// 		   {
	// 			  label:'저녁집회',
	// 			  command: () => history.push({
	// 				pathname: "/program_gathering",
	// 				state: {
	// 					from: "gathering"
	// 				}
	// 			})
	// 		   },
	 
	// 		]
	// 	 },
	// 	 {
	// 		label:'대회안내',
	// 		items:[
	// 		   {
	// 			  label:'숙박/식사',
	// 			  command: () => history.push({
	// 				pathname: "/guide",
	// 				state: {
	// 					from: "guide"
	// 				}
	// 			})
	// 		   },
	// 		   {
	// 			  label:'교통/대회장안내',
	// 			  command: () => history.push({
	// 				pathname: "/guide_traffic",
	// 				state: {
	// 					from: "traffic"
	// 				}
	// 			})
	// 		   },
	// 		   {
	// 			  label:'주변안내',
	// 			  command: () => history.push({
	// 				pathname: "/guide_around",
	// 				state: {
	// 					from: "around"
	// 				}
	// 			})
	// 		   },
	// 		   {
	// 			  label:'그외 정보',
	// 			  command: () => history.push({
	// 				pathname: "/guide_etc",
	// 				state: {
	// 					from: "etc"
	// 				}
	// 			})
	// 		   },
	 
	// 		]
	// 	 },
	// 	 {
	// 		label:'대회신청',
	// 		items:[
	// 		   {
	// 			  label:'신청안내',
	// 			  command: () => history.push({
	// 				pathname: "/register",
	// 				state: {
	// 					from: "register"
	// 				}
	// 			})
	// 		   },
	// 		   {
	// 			  label:'선교사',
	// 			  command: () => history.push({
	// 				pathname: "/register_missionary",
	// 				state: {
	// 					from: "missionary"
	// 				}
	// 			})
	// 		   },
	// 		   {
	// 			  label:'MK/MZ',
	// 			  command: () => history.push({
	// 				pathname: "/register_mkmz",
	// 				state: {
	// 					from: "mkmz"
	// 				}
	// 			})
	// 		   },
	// 		   {
	// 			  label:'교회',
	// 			  command: () => history.push({
	// 				pathname: "/register_church",
	// 				state: {
	// 					from: "church"
	// 				}
	// 			})
	// 		   },
	 
	// 		]
	// 	 },
	// 	 {
	// 		label:'자료실',
	// 		items:[
	// 		   {
	// 			  label:'선교사 리포트',
	// 			  command: () => history.push({
	// 				pathname: "/data",
	// 				state: {
	// 					from: "data"
	// 				}
	// 			})
	// 		   },
	// 		   {
	// 			  label:'홍보자료',
	// 			  command: () => history.push({
	// 				pathname: "/data_promotion",
	// 				state: {
	// 					from: "promotion"
	// 				}
	// 			})
	// 		   },
	// 		   {
	// 			  label:'행사후 업데이트',
	// 			  command: () => history.push({
	// 				pathname: "/data_update",
	// 				state: {
	// 					from: "update"
	// 				}
	// 			})
	// 		   },
	
	// 		]
	// 	 },
	// ];
	const items = [
		{
		   label:'홈',
		   command: () => history.push({
				pathname: "/",
				state: {
					from: ""
				}
			}),
			className: "made"
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
				}),
				className: "made"
			  },
			  {
				 label:'대회 소개',
				 command: () => history.push({
					pathname: "/planning",
					state: {
						from: "character"
					}
				})
			  },
			  {
				 label:'조직도',
				 command: () => history.push({
					pathname: "/planning",
					state: {
						from: "organization"
					}
				})
			  },
			  {
				 label:'KWMC 소개',
				 command: () => history.push({
					pathname: "/planning",
					state: {
						from: "KWMC"
					}
				})
			  },
	
		   ],
		   className: "made"
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
				}),
				className: "made"
			   },
			   {
				label:'Timetable',
				command: () => history.push({
				  pathname: "/eprogram",
				  state: {
					  from: "eprogram"
				  }
			  }),
			  className: "made"
			 },
			   {
				  label:'주제강의',
				  command: () => history.push({
					pathname: "/planning",
					state: {
						from: "lecture"
					}
				})
			   },
			   {
				  label:'영역별모임',
				  command: () => history.push({
					pathname: "/planning",
					state: {
						from: "section"
					}
				})
			   },
			   {
				  label:'저녁집회',
				  command: () => history.push({
					pathname: "/planning",
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
					pathname: "/planning",
					state: {
						from: "guide"
					}
				})
			   },
			   {
				  label:'교통/대회장안내',
				  command: () => history.push({
					pathname: "/planning",
					state: {
						from: "traffic"
					}
				})
			   },
			   {
				  label:'주변안내',
				  command: () => history.push({
					pathname: "/planning",
					state: {
						from: "around"
					}
				})
			   },
			   {
				  label:'그외 정보',
				  command: () => history.push({
					pathname: "/planning",
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
					pathname: "/planning",
					state: {
						from: "register"
					}
				})
			   },
			   {
				//   label:'선교사',
				//   command: () => history.push({
				// 	pathname: "/planning",
				// 	state: {
				// 		from: "missionary"
				// 	}
				// })
				  label:'선교사',
				  command: () => window.open("https://forms.gle/nVCRY7tRWsxS4HGN7"),
				  className: "made"
			   },
			   {
				  label:'MK/MZ',
				  command: () => history.push({
					pathname: "/planning",
					state: {
						from: "mkmz"
					}
				})
			   },
			   {
				  label:'교회',
				  command: () => history.push({
					pathname: "/planning",
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
					pathname: "/planning",
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
				}),
				className: "made"
			   },
			   {
				  label:'행사후 업데이트',
				  command: () => history.push({
					pathname: "/planning",
					state: {
						from: "update"
					}
				})
			   },
	
			]
		 },
	];
	const start = <img style={{width: "20rem", maxWidth: "50vw", marginLeft: "3.5vw", cursor: "pointer"}} src={Logo} alt="KWMC Logo"
					onClick={() => history.push({
						pathname: "/",
						state: {
							from: ""
						}
					})}></img>;
	return (
		<div style={{display: "flex", flexDirection: "column", width: "100%", height: "9vh", justifyContent: "center"}}>
			{/* <Menubar start={start} className="d-border" model={items} style={{display: "flex", justifyContent: "space-between", background: "white", borderRadius: 0, padding: 0, height: "9vh", paddingRight: "4.5%", pointerEvents: "none"}}/> */}
			<Menubar start={start} className="d-border" model={items} style={{display: "flex", justifyContent: "space-between", background: "white", borderRadius: 0, padding: 0, height: "9vh", paddingRight: "3.5vw"}}/>
		</div>
	);
}

export default Header;
