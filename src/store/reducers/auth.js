import { AUTH_USER_ISAUTHORIZED, AUTH_USER_LEFT } from '../constants';

const initialState = {    
    isAuthenticated: localStorage.getItem('isAuthenticated'),    
}

const authReducer = (state = initialState, action) => {
 
    switch(action.type) {
        
        case AUTH_USER_ISAUTHORIZED:
            return {
                isAuthenticated: action.payload,
            };

        case AUTH_USER_LEFT:
            return {
                isAuthenticated: action.payload,
            }

        default: 
            return state;
    }
}

export default authReducer;