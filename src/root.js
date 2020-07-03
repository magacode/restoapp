import React from "react";
import { Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

import Navbar from "./components/navbar";
import LoginPage from "./login-page";
import ResetPasswordPage from "./reset-pasword-page";
import App from "./app";

const Root = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/login" component={LoginPage} />
          <Route path="/reset-password" component={ResetPasswordPage} />
          <Route path="/app" component={App} />
        </Switch>
      </Router>
    </>
  );
};

export default Root;

// <Route path="/main"></Route>
// <Route path="/admin"></Route>
