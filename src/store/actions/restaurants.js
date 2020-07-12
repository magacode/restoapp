import { FETCH_RESTAURANTS_REQUEST, FETCH_RESTAURANTS_SUCCESS, FETCH_RESTAURANTS_FAILURE } from '../constants';

const fetchRestaurantsRequest = () => {
    return {
        type: FETCH_RESTAURANTS_REQUEST,
    }
}

const fetchRestaurantsSuccess = (restaurantsList) => {
    return {
        type: FETCH_RESTAURANTS_SUCCESS,
        payload: restaurantsList,
    }
}

const fetchRestaurantsFailure = (error) => {
    return {
        type: FETCH_RESTAURANTS_FAILURE,
        payload: error,
    }
}

export {
    fetchRestaurantsRequest,
    fetchRestaurantsSuccess,
    fetchRestaurantsFailure,
};