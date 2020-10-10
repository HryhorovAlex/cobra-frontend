import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home, SignUp } from "../pages";

export const Root: React.FC = () => {
  return (
    <Switch>
      <Route exact path='/sign-up' render={(props) => <SignUp {...props} />}/>
      <Route path='/' render={(props) => <Home {...props} />} />
    </Switch>
  );
};