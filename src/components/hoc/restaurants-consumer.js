import React from "react";
import { RestaurantsServiceConsumer } from "../../services/restaurants-context-service";

const restaurantsConsumer = () => (Wrapper) => {
  return (props) => {
    return (
      <RestaurantsServiceConsumer>
        {(data) => {
          return <Wrapper {...props} data={data} />;
        }}
      </RestaurantsServiceConsumer>
    );
  };
};

export default restaurantsConsumer;
