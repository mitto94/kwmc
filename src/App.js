import React, { useEffect, useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Guide from './pages/guide/Guide';
import Home from './pages/Home';
import Mainpage from './pages/main/Main';
import Program from './pages/program/Program';
import Summary from './pages/summary/Summary';
import Register from './pages/register/Register';
import Data from './pages/data/Data';
import Character from './pages/summary/Character';
import Organization from './pages/summary/Organization';
import KWMC from './pages/summary/KWMC';
import "./App.css"
import Lecture from './pages/program/Lecture';
import Section from './pages/program/Section';
import Gathering from './pages/program/Gathering';
import Traffic from './pages/guide/Traffic';
import Around from './pages/guide/Around';
import Etc from './pages/guide/Etc';
import Missionary from './pages/register/Missionary';
import MkMz from './pages/register/MkMz';
import Church from './pages/register/Church';
import Promotion from './pages/data/Promotion';
import Update from './pages/data/Update';
import Plan from './pages/Plan';
// import EProgram from './pages/program/EPro/gram';/
import Display from './pages/register/Display';
import Presentation from './pages/program/Presentation';
import Bible from './pages/program/Bible';
import Special from './pages/program/Special';

import 김휴성이창진 from './pages/data/김휴성이창진';
import 박상은대표 from './pages/data/박상은대표';

const App = () => {
  return (
    <div style={{height: "100%", width: "100%", paddingBottom: "8vh", background: "rgb(236, 246, 252)"}}>
				{/* <Menu/> */}
				<Switch>
					<Route exact path="/" component={Home}></Route>
					<Route path="/main" component={Mainpage}/>
					<Route path="/summary" component={Summary}/>
					<Route path="/summary_character" component={Character}/>
					<Route path="/summary_organization" component={Organization}/>
					<Route path="/summary_KWMC" component={KWMC}/>

					<Route path="/program" component={Program}/>
					<Route path="/bible" component={Bible}/>
					<Route path="/program_special" component={Special}/>

					<Route path="/program_presentation" component={Presentation}/>
					<Route path="/program_lecture" component={Lecture}/>
					<Route path="/program_section" component={Section}/>
					<Route path="/program_gathering" component={Gathering}/>

					<Route path="/guide" component={Guide}/>
					<Route path="/guide_traffic" component={Traffic}/>
					<Route path="/guide_around" component={Around}/>
					<Route path="/guide_etc" component={Etc}/>

					<Route path="/register" component={Register}/>
					<Route path="/register_missionary" component={Missionary}/>
					<Route path="/register_mkmz" component={MkMz}/>
					<Route path="/register_church" component={Church}/>
					<Route path="/register_display" component={Display}/>

					<Route path="/data" component={Data}/>
					<Route path="/data_promotion" component={Promotion}/>
					<Route path="/data_update" component={Update}/>

					<Route path="/planning" component={Plan}/>

					<Route path="/김휴성이창진" component={김휴성이창진}/>
					<Route path="/박상은대표" component={박상은대표}/>
					<Route path="/planning" component={Plan}/>

					<Route path="/" component={Home}></Route>

					<Redirect path="*" to="/" />
				</Switch>
			</div>
  );
}

export default App;
