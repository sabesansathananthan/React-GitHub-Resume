import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Darkmode from "darkmode-js";
import { LandingPage, Resume } from "./pages";
import { NotFoundPage } from "./components";

import "./App.css";

// adding dark mode context to the app
const darkMode = new Darkmode({
  saveInCookies: true,
  label: '🌓',
  autoMatchOsTheme: true,
  backgroundColor: '#f3f6f9',
  mixColor: '#f8dabf',
});


const App = () => { 
  
  useEffect(() => {
    darkMode.showWidget();
  }, []);
  
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div id="app">
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/user/:username/resume" component={Resume} />
          <Route path="/404-not-found" component={NotFoundPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;