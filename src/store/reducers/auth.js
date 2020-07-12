import { AUTH_USER_ISAUTHORIZED, AUTH_USER_LEFT } from '../constants';

const authReducer = (state, action) => {

    if (state === undefined) {
        return {
            isAuthenticated: false,
        }
    }
 
    switch(action.type) {
        
        case AUTH_USER_ISAUTHORIZED:
            return {
                isAuthenticated: true,
            };

        case AUTH_USER_LEFT:
            return {
                isAuthenticated: false,
            }

        default: 
            return state;
    }
}

export default authReducer;