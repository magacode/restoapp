import { FETCH_RESTAURANTS_REQUEST, FETCH_RESTAURANTS_SUCCESS, FETCH_RESTAURANTS_FAILURE } from '../constants';

import RestaurantsApi from '../../api/restaurants-api';

export const getRestaurantsList = () => async dispatch => {
    dispatch({
        type: FETCH_RESTAURANTS_REQUEST,
    })  
    
    const { data: {result} } = await RestaurantsApi.getRestaurantsData()



console.log(result)
    dispatch({
        type: FETCH_RESTAURANTS_SUCCESS,
        payload: result,        
    })
}