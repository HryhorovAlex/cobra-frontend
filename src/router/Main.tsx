import React from "react";
import { Switch, Route } from "react-router-dom";
import { Header } from "../components";
import { Contacts, Home, Groups, Todo, Music } from "../pages";

export const Main: React.FC = () => {
  return (
    <div className='page flex-col-fs-fs'>
      <Header />
      <Switch>
        {/* <Route exact path='/sign-up' render={(props) => <SignUp {...props} />}/> */}
        <Route exact path='/main/home' render={(props) => <Home {...props} />} />
        <Route path='/main/contacts' render={(props) => <Contacts {...props} />} />
        <Route path='/main/groups' render={(props) => <Groups {...props} />} />
        <Route path='/main/todo' render={(props) => <Todo {...props} />} />
        <Route path='/main/music' render={(props) => <Music {...props} />} />
      </Switch>
    </div>
  );
};