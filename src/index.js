import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import Confirmed from "./Confirmed.jsx";

import { BrowserRouter, Switch, Route } from "react-router-dom";
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={App} />

      <Route path="/confirmed" exact component={Confirmed} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
