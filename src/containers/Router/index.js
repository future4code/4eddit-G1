import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import DoubtList from "../DoubtListPage";
import DoubtDetail from "../DoubtDetailPage";
import SignUpPage from "../SignUpPage";
import LoginPage from "../LoginPage";

export const routes = {
  home: "/",
  login: "/login",
  signup: "/signup",
  detail: "/doubt/details"
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route path={routes.login} component={LoginPage} />
        <Route path={routes.signup} component={SignUpPage} />
        <Route path={routes.detail} component={DoubtDetail} />
        <Route path={routes.home} component={DoubtList} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
