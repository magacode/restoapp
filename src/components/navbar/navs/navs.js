import React from "react";
import { NavLink, Link } from "react-router-dom";

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
      <Link
        to="/login"
        className="btn btn-outline-success ml-auto my-2 my-md-0"
      >
        Вход
      </Link>
    </div>
  );
};

export default Navs;
