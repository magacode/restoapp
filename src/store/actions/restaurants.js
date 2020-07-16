import { FETCH_RESTAURANTS_REQUEST, FETCH_RESTAURANTS_SUCCESS, FETCH_RESTAURANTS_FAILURE } from '../constants';

import RestaurantsApi from '../../api/restaurants-api';

export const getRestaurantsList = (page) => async dispatch => {
    dispatch({
        type: FETCH_RESTAURANTS_REQUEST,
    }) 
    
    try {
        const { data: {result} } = await RestaurantsApi.getRestaurantsData(page)

        dispatch({
            type: FETCH_RESTAURANTS_SUCCESS,
            payload: result,        
        })
    } catch(error) {
        dispatch({
            type: FETCH_RESTAURANTS_FAILURE,
            payload: error,
        })         
    }    

}