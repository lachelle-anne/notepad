import React from "react";
import { HomePage, AddPage, EditPage } from "../Pages";
import { Switch, Route } from "react-router-dom";

export function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/addPage">
        <AddPage />
      </Route>
      <Route path="/editPage">
        <EditPage />
      </Route>
      <Route>404 not found.</Route>
    </Switch>
  );
}
