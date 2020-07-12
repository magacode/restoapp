import { FETCH_RESTAURANTS_REQUEST, FETCH_RESTAURANTS_SUCCESS, FETCH_RESTAURANTS_FAILURE } from '../constants';

const restaurantsReducer = (state, action) => {

    if (state === undefined) {
        return {
            loading: true,
            restaurantsList: [],
            error: false,
        }
    }

    console.log('6666',action.type);

    switch(action.type) {        

        case FETCH_RESTAURANTS_REQUEST:
            return {
                loading: true,
                restaurantsList: [],
                error: false,
            };

        case FETCH_RESTAURANTS_SUCCESS:
            return {
                loading: false,
                restaurantsList: action.payload,
                error: false,
            };

        case FETCH_RESTAURANTS_FAILURE:
            return {
                loading: false,
                restaurantsList: [],
                error: action.payload,
            };

        default: 
            return state;
    }
}

export default restaurantsReducer;