import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { LandingPage, Resume } from "./pages";
import { NotFoundPage } from "./components";
import { Grid } from "@material-ui/core";

const App = () => (
  <Router basename={process.env.PUBLIC_URL}>
    <Grid id="app">
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/user/:username/resume" component={Resume} />
        <Route path="/404-not-found" component={NotFoundPage} />
      </Switch>
    </Grid>
  </Router>
);

export default App;
