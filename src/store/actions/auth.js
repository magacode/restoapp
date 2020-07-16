import { AUTH_USER_ISAUTHORIZED, AUTH_USER_LEFT } from '../constants';

const userIsAuthorized = () => {
    localStorage.setItem('isAuthenticated', true);

    return {
        type: AUTH_USER_ISAUTHORIZED
    }

}

const userLeft = () => {
    localStorage.removeItem('isAuthenticated');
    
    return {
        type: AUTH_USER_LEFT
    }   
}

export {
    userIsAuthorized,
    userLeft,    
}