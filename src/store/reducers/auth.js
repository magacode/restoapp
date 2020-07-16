import { AUTH_USER_ISAUTHORIZED, AUTH_USER_LEFT } from '../constants';

const initialState = {    
    isAuthenticated: localStorage.getItem('isAuthenticated'),    
}

const authReducer = (state = initialState, action) => {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
 
    switch(action.type) {
        
        case AUTH_USER_ISAUTHORIZED:
            return {
                isAuthenticated,
            };

        case AUTH_USER_LEFT:
            return {
                isAuthenticated,
            }

        default: 
            return state;
    }
}

export default authReducer;