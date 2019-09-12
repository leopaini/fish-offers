import App from "./App";
import React from "react";
import NotFound from "./NotFound";
import StorePicker from "./StorePicker";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Switch>
        <Route exact path="/" component={StorePicker}></Route>
        <Route path="/store/:storeId" component={App}></Route>
        <Route component={NotFound}></Route>
      </Switch>
    </Switch>
  </BrowserRouter>
);

export default Router;
