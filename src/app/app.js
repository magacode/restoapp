import React from "react";

import ErrorBoundary from '../components/error-boundary';
import RestaurantsListContainer from '../containers/cards-list-container';

const App = () => {
  return (    
    <ErrorBoundary>     
      <RestaurantsListContainer></RestaurantsListContainer>
    </ErrorBoundary>    
  );
};

export default App;
