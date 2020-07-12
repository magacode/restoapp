import React from 'react';

const { 
    Provider: RestaurantsServiceProvider, 
    Consumer: RestaurantsServiceConsumer, 
} = React.createContext();

export {
    RestaurantsServiceProvider,
    RestaurantsServiceConsumer,
}