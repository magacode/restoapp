const initialState = {
    isAuthenticated: false,
    restaurants: []    
};

const reducer = (state = initialState, action) => {

    switch(action.type) {
        case 'USER_ISAUTHORIZED':
            return {
                ...state,
                isAuthenticated: true,
            };

        case 'USER_LEFT':
            return {
                ...state,
                isAuthenticated: false,
            };
        
        case 'RESTAURANTS_LOADED': 
            return {
                restaurants: action.payload
            };

        default: 
            return state;
    }
};

export default reducer;