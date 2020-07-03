import React from "react";
import { Link } from "react-router-dom";

import Logo from "../logo";
import Navs from "./navs";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Logo />
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <Navs
        links={[
          { id: 0, src: "/restaurants/", title: "Рестораны" },
          { id: 1, src: "/store/", title: "Магазины" },
        ]}
      />
      <Link to="/login" className="btn btn-outline-success my-2 my-sm-0">
        Вход
      </Link>
    </nav>
  );
};

export default Navbar;
