import React from "react";

const ContainerRow = (props) => {
  return (
    <div className="container">
      <div className="row">{props.children}</div>
    </div>
  );
};

export default ContainerRow;
