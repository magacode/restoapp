import React from "react";
import { connect } from 'react-redux';
import { NavLink, Link } from "react-router-dom";

const Navs = ({ userLeft, isAuthenticated, userIsAuthorized, links }) => {
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
      {
        isAuthenticated 
          ? 
            <Link to="/login" className="btn btn-outline-danger ml-auto my-2 my-md-0" onClick={userLeft}>Выход</Link>
          : 
            <Link to="/login" className="btn btn-outline-success ml-auto my-2 my-md-0" onClick={userIsAuthorized}>Вход</Link>
      }
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.authReducer.isAuthenticated,
  }
}

export default connect(mapStateToProps, null)(Navs);
