import React from "react";
import { NavLink } from "react-router-dom";

const Navs = ({ links }) => {
  return (
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        {links.map(({ id, src, title }) => {
          return (
            <NavLink
              to={src}
              className="nav-item nav-link"
              activeClassName="active"
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
