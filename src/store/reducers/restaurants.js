import { FETCH_RESTAURANTS_REQUEST, FETCH_RESTAURANTS_SUCCESS, FETCH_RESTAURANTS_FAILURE } from '../constants';

const initialState = {
    loading: true,
    page: 1,
    restaurantsList: [],
    error: false,
}

const restaurantsReducer = (state = initialState, action) => {

    switch(action.type) {        

        case FETCH_RESTAURANTS_REQUEST:
            return {
                loading: true,
                page: 1,
                restaurantsList: [],
                error: false,
            };

        case FETCH_RESTAURANTS_SUCCESS:
            return {
                loading: false,
                page: 1,
                restaurantsList: action.payload,
                error: false,
            };

        case FETCH_RESTAURANTS_FAILURE:
            return {
                loading: false,
                page: 1,
                restaurantsList: [],
                error: action.payload,
            };

        default: 
            return state;
    }
}

export default restaurantsReducer;