import Home from './components/Home.js';
import General from './components/General.js';
import Members from './components/Members.js';
import MembersSolar from './components/MembersSolar.js';
import './App.css';

import React from "react";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

// https://www.intechnic.com/blog/50-examples-of-large-background-video-websites/

function App() {
  return (
    <Router>
      <div className="App" id="Main">
        <switch>
          <Route exact path="/" component={Home}/>
          <Route path="/general" component={General}/>
          <Route path="/members" component={Members}/>
          <Route path="/members/solar" component={MembersSolar}/>
        </switch>
      </div>
    </Router>
  );
}

export default App;
