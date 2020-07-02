import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Navbar from "../components/navbar";
import Root from "../root";

import "../styles/root.scss";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Root />
    </Router>
  );
};

export default App;
