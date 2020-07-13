import React, { useEffect, useCallback } from 'react';
import { connect } from 'react-redux';

import { restaurantsConsumer } from '../components/hoc';
import { getRestaurantsList } from '../store/actions';
import CardsList from '../components/cards-list';

const CardsListContainer = (props) => {

    // const useRequest = (request) => {
    //     useEffect(() => {
    //         let cancelled = false;            
 
    //         request()            
    //             .then((restaurantsList) => { !cancelled && props.fetchRestaurantsSuccess(restaurantsList)})
    //             .catch((error) => fetchRestaurantsFailure(error))
    
    //         return () => cancelled = true;
    //     }, [ request ]);
    // }
    
    // const useRestaurantsList = (page) => {
    //     const { getAllRestaurants } = props.data;       
            
    //     const request = useCallback(() => getAllRestaurants(page), [ page ]);
        
    //     return useRequest(request);
    // }

    // const { restaurantsLoading, restaurantsList } = props;

    // useRestaurantsList(1);

    // if (restaurantsLoading) {
        
    //     return <div>Loading...</div>
    // } else {
    //     console.log(restaurantsList.data)
    //     return <CardsList cardsList={restaurantsList.data} />
    // }

    // console.log(restaurantsLoading);
    useEffect(() => {
        const { getAllRestaurants } = props.data;

    props.getRestaurantsListHandler(getAllRestaurants)
    }, [])



   

    if (props.restaurantsLoading) {
        
        return 'Loading...'
    } else {
        // console.log(props.restaurantsList)
        return <CardsList cardsList={props.restaurantsList} />
    }

    
};

const mapStateToProps = (state) => {
    console.log(state, '------+')
    return {
        restaurantsLoading: state.restaurantsReducer.loading,
        restaurantsList: state.restaurantsReducer.restaurantsList,
    }
}

const mapDispatchToProps = (dispatch) => ({
    getRestaurantsListHandler: (list) => dispatch(getRestaurantsList(list)) 
})

export default restaurantsConsumer()(
    connect(mapStateToProps, mapDispatchToProps)(CardsListContainer)
);