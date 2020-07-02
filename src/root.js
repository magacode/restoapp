import React from "react";
import { Switch, Route } from "react-router-dom";

import LoginPage from "./login-page";
import ResetPasswordPage from "./reset-pasword-page";

const Root = () => {
  return (
    <Switch>
      <Route exact path="/">
        <LoginPage />
      </Route>
      <Route path="/reset-password">
        <ResetPasswordPage />
      </Route>
    </Switch>
  );
};

export default Root;

// <Route path="/main"></Route>
// <Route path="/admin"></Route>
