import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home, SignUp, Login } from "../pages";
import { Main } from "./Main";

export const Root: React.FC = () => {
  return (
    <Switch>
      {/* <Route exact path='/sign-up' render={(props) => <SignUp {...props} />}/> */}
      <Route path='/sign-up' render={(props) => <SignUp {...props} />}/>
      <Route path='/main' component={Main} />
      <Route exact path='/' render={(props) => <Login {...props} />} />
    </Switch>
  );
};