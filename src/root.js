import React from "react";
import { Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from 'prop-types';

import Navbar from "./components/navbar";
import PrivateRoute from "./components/private-route";
import LoginPage from "./login-page";
import ResetPasswordPage from "./reset-pasword-page";
import App from "./app";
import { userIsAuthorized, userLeft } from "./store/actions";

const Root = (props) => {

  const { userIsAuthorized, userLeft } = props;

  const isAuthenticated = localStorage.getItem('isAuthenticated'); 

  return (    
      <Router>
        <Navbar userLeft={userLeft} userIsAuthorized={userIsAuthorized} />
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

Root.propTypes = {
  userIsAuthorized: PropTypes.func.isRequired,
  userLeft: PropTypes.func.isRequired,
}

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
