import React from "react";
import { Route, Switch } from "react-router-dom";

// Configure routes
import Home from "./screens/home";

export default (
  <Switch>
    <Route exact path="/" component={Home} />
  </Switch>
);
