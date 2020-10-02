import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home } from "../pages";

export const Root: React.FC = () => {
  return (
    <Switch>
      <Route path='/' render={(props) => <Home {...props} />} />
    </Switch>
  );
};