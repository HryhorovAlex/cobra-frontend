import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home, SignUp } from "../pages";
import { Main } from "./Main";

export const Root: React.FC = () => {
  return (
    <Switch>
      {/* <Route exact path='/sign-up' render={(props) => <SignUp {...props} />}/> */}
      <Route exact path='/' render={(props) => <SignUp {...props} />}/>
      <Route path='/home' component={Main} />
    </Switch>
  );
};