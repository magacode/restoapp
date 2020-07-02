import React from "react";

import { Link } from "react-router-dom";

import logo from "../../images/logo.png";

const Logo = () => {
  return (
    <Link to="/" className="navbar-brand">
      <img
        src={logo}
        width="41"
        height="30"
        className="d-inline-block align-top"
        alt="GetEatApp"
        loading="lazy"
      />
      <span className="pl-1 font-weight-bold">GetFoodApp</span>
    </Link>
  );
};

export default Logo;
