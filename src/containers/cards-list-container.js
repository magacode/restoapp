import React, { useEffect, useCallback } from 'react';
import { connect } from 'react-redux';

import { restaurantsConsumer } from '../components/hoc';
import { fetchRestaurantsRequest, fetchRestaurantsSuccess, fetchRestaurantsFailure } from '../store/actions';
import CardsList from '../components/cards-list';

const CardsListContainer = (props) => {

    const useRequest = (request) => {
        useEffect(() => {
            let cancelled = false;            
 
            request()            
                .then((restaurantsList) => { !cancelled && props.fetchRestaurantsSuccess(restaurantsList)})
                .catch((error) => fetchRestaurantsFailure(error))
    
            return () => cancelled = true;
        }, [ request ]);
    }
    
    const useRestaurantsList = (page) => {
        const { getAllRestaurants } = props.data;       
            
        const request = useCallback(() => getAllRestaurants(page), [ page ]);
        
        return useRequest(request);
    }

    const { restaurantsLoading, restaurantsList } = props;

    useRestaurantsList(1);

    if (restaurantsLoading) {
        
        return <div>Loading...</div>
    } else {
        console.log(restaurantsList.data)
        return <CardsList cardsList={restaurantsList.data} />
    }

    console.log(restaurantsLoading);

    // console.log(props)



    // let data;

    // if (!props.restaurantsLoading) {
    //     data = useRestaurantsList(1);
    //     return 'Loading...'
    // } else {
    //     return <CardsList cardsList={data} />
    // }

    return <div>555</div>
};

const mapStateToProps = (state) => {
    // console.log(state, '------+')
    return {
        restaurantsLoading: state.restaurantsReducer.loading,
        restaurantsList: state.restaurantsReducer.restaurantsList,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchRestaurantsRequest: () => {
            console.log('-----');
            dispatch(fetchRestaurantsRequest())
        },

        fetchRestaurantsSuccess: (data) => {
            console.log('+++++', data);
            dispatch(fetchRestaurantsSuccess(data))
        }
        
    }
    
}

export default restaurantsConsumer()(
    connect(mapStateToProps, mapDispatchToProps)(CardsListContainer)
);