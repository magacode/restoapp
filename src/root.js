import React from "react";
import { Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";


import Navbar from "./components/navbar";
import PrivateRoute from "./components/private-route";
import LoginPage from "./login-page";
import ResetPasswordPage from "./reset-pasword-page";
import App from "./app";
import { userIsAuthorized, userLeft } from "./store/actions";

const Root = (props) => {

  const { isAuthenticated, userIsAuthorized, userLeft } = props;
 

  return (
    
      <Router>
        <Navbar userLeft={userLeft} isAuthenticated={isAuthenticated} />
        <Switch>
          <PrivateRoute exact path="/" isAuthenticated={isAuthenticated}>
            <App />
          </PrivateRoute>
          <Route path="/login">
            <LoginPage
              isAuthenticated={isAuthenticated}
              authenticate={userIsAuthorized}
            />
          </Route>
          <Route path="/reset-password" component={ResetPasswordPage} />
        </Switch>
      </Router>
  );
};

const mapStateToProps = ({ authReducer }) => {
  return {
    isAuthenticated: authReducer.isAuthenticated,
  }
}

const mapDispathToProps = {
  userIsAuthorized, 
  userLeft,
}

export default connect(mapStateToProps, mapDispathToProps)(Root);
