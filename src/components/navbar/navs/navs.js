import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./navs.module.scss";

const Navs = ({ links }) => {
  return (
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        {links.map(({ id, src, title }) => {
          return (
            <NavLink
              to={src}
              className="nav-item nav-link"
              activeClassName={classes.active}
              key={id}
            >
              {title}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default Navs;
