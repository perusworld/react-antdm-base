import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.less';

import DefaultLayout from "./layout/DefaultLayout";
import Landing from "./landing/Landing";
import Home from "./home/Home";
import Details from "./details/Details";
import Settings from "./settings/Settings";

class App extends Component {
  render() {
    return (
      <Router>
        <DefaultLayout>
          <Switch>
            <Route exact path={"/"} component={Landing} />
            <Route path={"/home"} component={Home} />
            <Route path={"/details/:id"} component={Details} />
            <Route path={"/settings"} component={Settings} />
            <Redirect path={"/logout"} to={"/"} />
          </Switch>
        </DefaultLayout>
      </Router>
    );
  }
}

export default App;
