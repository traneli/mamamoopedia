import React from "react";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import { useState, useEffect } from "react";
import { useHistory, withRouter } from "react-router";

import { Home, About, General, Members, MembersSolar, MembersMoonbyul, MembersWheein, MembersHwasa, Discography, Timeline } from './components/Index';

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
          {/* <Route exact path="/members/solar" component={MembersSolar}/>
          <Route exacth path="/members/moonbyul" component={MembersMoonbyul}/>
          <Route path="/members/wheein" component={MembersWheein}/>
          <Route path="/members/hwasa" component={MembersHwasa}/> */}
          <Route path="/discography" component={Discography}/>
          <Route path="/timeline" component={Timeline}/>
        </switch>
      </div>
    </Router>
  );
}

export default withRouter(App);
