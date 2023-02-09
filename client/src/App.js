import React, {Component, Fragment} from "react";
import {Route, Switch} from "react-router";
import HomePage from "./pages/HomePage";

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </Fragment>
    );
  }
}
