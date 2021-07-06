import React from "react";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import { useState, useEffect } from "react";
import { useHistory, withRouter } from "react-router";

import Home from './components/Home.js';
import About from './components/About.js';
import General from './components/General.js';
import Members from './components/Members.js';
import MembersSolar from './components/MembersSolar.js';
import MembersMoonbyul from './components/MembersMoonbyul.js';
import MembersWheein from './components/MembersWheein.js';
import MembersHwasa from './components/MembersHwasa.js';
// import MembersSolarParallax from './components/MembersSolarParallax.js';
import './App.css';


// https://www.intechnic.com/blog/50-examples-of-large-background-video-websites/

function App() {
  const [ isHome, setHome ] = useState(false);
  const history = useHistory();

  useEffect (() => {
    if(history && history.location.pathname === '/') {
      setHome(true);
    } else {
      setHome(false);
    }
  });

  return (
    <Router>
      <div className="App" id="Main">
        <switch>
          <Route exact path="/" component={Home}/>
          <Route path="/general" component={General}/>
          <Route path="/about" component={About}/>
          <Route path="/members" component={Members}/>
          <Route path="/members/solar" component={MembersSolar}/>
          <Route path="/members/moonbyul" component={MembersMoonbyul}/>
          <Route path="/members/wheein" component={MembersWheein}/>
          <Route path="/members/hwasa" component={MembersHwasa}/>
          {/* <Route path="/solarParallax" component={MembersSolarParallax}/> */}
        </switch>
      </div>
    </Router>
  );
}

export default withRouter(App);
