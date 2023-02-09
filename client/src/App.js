import React, { Component, Fragment } from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import "../src/assets/css/style.css"
import ReadPage from "./pages/ReadPage";
import CreatePage from "./pages/CreatePage";
import UpdatePage from "./pages/UpdatePage";

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ReadPage} />
            <Route exact path="/create" component={CreatePage} />
            <Route exact path="/update" component={UpdatePage} />
          </Switch>
        </BrowserRouter>
      </Fragment>
    );
  }
}
