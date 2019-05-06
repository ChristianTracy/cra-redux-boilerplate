import React from "react";
import { Route, Switch } from "react-router";
import Home from "../home/Home";
import Another from "../another/Another";

const ViewsContainer = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/another" component={Another} />
    <Route render={() => <div>DEFAULT</div>} />
  </Switch>
);

export default ViewsContainer;
