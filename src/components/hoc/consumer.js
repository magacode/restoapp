import React from "react";
import { Consumer } from "../context";

const context = () => (Wrapper) => {
  return (props) => {
    return (
      <Consumer>
        {(data) => {
          return <Wrapper {...props} data={data} />;
        }}
      </Consumer>
    );
  };
};

export default context;
