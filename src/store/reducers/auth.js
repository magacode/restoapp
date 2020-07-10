const initialState = {
    isAuthenticated: false,
}

const authReducer = (state = initialState, action) => {
 
    switch(action.type) {
        
        case 'USER_ISAUTHORIZED':
            return {
                isAuthenticated: true,
            };

        case 'USER_LEFT':
            return {
                isAuthenticated: false,
            }

        default: 
            return state;
    }
}

export default authReducer;