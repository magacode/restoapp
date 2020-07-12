import React from "react";

import ErrorBoundary from '../components/error-boundary';
import { RestaurantsServiceProvider } from '../services/restaurants-context-service';
import RestaurantsApi from '../api/restaurants-api';
import RestaurantsListContainer from '../containers/cards-list-container';

const restaurantsApi = new RestaurantsApi();

const App = () => {
  return (    
    <ErrorBoundary>
      <RestaurantsServiceProvider value={restaurantsApi}>
        <RestaurantsListContainer></RestaurantsListContainer>
      </RestaurantsServiceProvider>
    </ErrorBoundary>    
  );
};

export default App;
