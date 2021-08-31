import React from "react";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import { useState, useEffect } from "react";
import { useHistory, withRouter } from "react-router";

import { Home, About, General, Members, Discography, Timeline, Resources } from './components/Index';

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
          <Route path="/discography" component={Discography}/>
          <Route path="/timeline" component={Timeline}/>
          <Route path="/resources" component={Resources}/>
        </switch>
      </div>
    </Router>
  );
}

export default withRouter(App);
