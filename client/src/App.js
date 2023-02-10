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
            <Route exact path="/" render={(props)=><ReadPage{...props} key={Date.now()} />}/>
            <Route exact path="/create" render={(props)=><CreatePage{...props} key={Date.now()} />} />
            <Route exact path="/update/:id" render={(props)=><UpdatePage{...props} key={Date.now()} />}/>
          </Switch>
        </BrowserRouter>
      </Fragment>
    );
  }
}
