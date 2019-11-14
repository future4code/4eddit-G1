import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import DoubtList from "../DoubtListPage";
import DoubtDetail from "../DoubtDetailPage";
import SignUpPage from "../SignUpPage";
import LoginPage from "../LoginPage";

export const routes = {
  list: "/doubt/list",
  home: "/",
  signup: "/signup",
  detail: "/doubt/details"
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route path={routes.signup} component={SignUpPage} />
        <Route path={routes.detail} component={DoubtDetail} />
        <Route path={routes.list} component={DoubtList} />
        <Route path={routes.home} component={LoginPage} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
