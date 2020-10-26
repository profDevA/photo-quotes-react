import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Blog from "../pages/blog";

function Routes() {
  return (
      <Switch>
        <Route exact path={`/blog`} component={Blog} />
        <Redirect from="/" to='blog' />
      </Switch>
  );
}

export default Routes;