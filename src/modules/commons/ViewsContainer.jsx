import React from "react";
import { Route, Switch } from "react-router";
import Home from "../home/Home";
import Another from "../another/Another";
import Login from "../login/Login";
import PrivateRoute from "./PrivateRoute";

const ViewsContainer = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path='/login' component={Login} />
    <Route path="/another" component={Another} />
    <PrivateRoute exact path='/private' render={() => <div>Private Data</div>} />
    <Route render={() => <div>DEFAULT</div>} />
  </Switch>
);

export default ViewsContainer;
