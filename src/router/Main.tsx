import React from "react";
import { Switch, Route } from "react-router-dom";
import { Header } from "../components";
import { Home } from "../pages";

export const Main: React.FC = () => {
  return (
    <div className='page'>
      <Header />
      <Switch>
        {/* <Route exact path='/sign-up' render={(props) => <SignUp {...props} />}/> */}
        <Route exact path='/home' render={(props) => <Home {...props} />} />
      </Switch>
    </div>
  );
};