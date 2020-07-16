import { UPDATE_PAGE } from '../constants';

const initialState = {
    page: 1,
}

const paginationReducer = (state = initialState, action) => {

    switch(action.type) {

        case UPDATE_PAGE: 
            return {
                page: action.payload
            }

        default: 
            return state;

    }

}

export default paginationReducer;