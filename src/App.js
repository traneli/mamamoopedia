import React from "react";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import { useState, useEffect } from "react";
import { useHistory, withRouter } from "react-router";

import Home from './components/Home';
import About from './components/About';
import General from './components/General';
import Members from './components/Members';
import MembersSolar from './components/MembersSolar';
import MembersMoonbyul from './components/MembersMoonbyul';
import MembersWheein from './components/MembersWheein';
import MembersHwasa from './components/MembersHwasa';
import Discography from './components/Discography';
import Timeline from './components/Timeline';

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
          <Route path="/discography" component={Discography}/>
          <Route path="/timeline" component={Timeline}/>
        </switch>
      </div>
    </Router>
  );
}

export default withRouter(App);
