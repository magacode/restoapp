import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

import Navbar from "./components/navbar";
import PrivateRoute from "./components/private-route";
import LoginPage from "./login-page";
import ResetPasswordPage from "./reset-pasword-page";
import App from "./app";

const Root = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const authenticate = (cb) => {
    setIsAuthenticated(true);
    setTimeout(cb, 100); // fake async
  };

  const signout = (cb) => {
    setIsAuthenticated(false);
    setTimeout(cb, 100);
  };

  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <PrivateRoute exact path="/" isAuthenticated={isAuthenticated}>
            <App />
          </PrivateRoute>
          <Route path="/login">
            <LoginPage authenticate={authenticate} />
          </Route>
          <Route path="/reset-password" component={ResetPasswordPage} />
        </Switch>
      </Router>
    </>
  );
};

export default Root;

// <Route path="/main"></Route>
// <Route path="/admin"></Route>
