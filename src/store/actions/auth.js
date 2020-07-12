import { AUTH_USER_ISAUTHORIZED, AUTH_USER_LEFT } from '../constants';

const userIsAuthorized = () => {
    return {
        type: AUTH_USER_ISAUTHORIZED
    }
}

const userLeft = () => {
    return {
        type: AUTH_USER_LEFT
    }
}

export {
    userIsAuthorized,
    userLeft,    
}