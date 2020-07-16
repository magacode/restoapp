import { AUTH_USER_ISAUTHORIZED, AUTH_USER_LEFT } from '../constants';

const userIsAuthorized = () => {
    localStorage.setItem('isAuthenticated', true);

    return {
        type: AUTH_USER_ISAUTHORIZED,
        payload: localStorage.getItem('isAuthenticated'),
    }

}

const userLeft = () => {
    localStorage.removeItem('isAuthenticated');

    return {
        type: AUTH_USER_LEFT,
        payload: localStorage.getItem('isAuthenticated'),
    }   
}

export {
    userIsAuthorized,
    userLeft,    
}