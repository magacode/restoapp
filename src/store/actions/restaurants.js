import { FETCH_RESTAURANTS_REQUEST, FETCH_RESTAURANTS_SUCCESS, FETCH_RESTAURANTS_FAILURE } from '../constants';

import RestaurantsApi from '../../api/restaurants-api';

export const getRestaurantsList = (getAllRestaurants) => async dispatch => {
    dispatch({
        type: FETCH_RESTAURANTS_REQUEST,
    })  
    
    const { data } = await RestaurantsApi.getAllRestaurants()

    dispatch({
        type: FETCH_RESTAURANTS_SUCCESS,
        payload: data,        
    })
}