const initialState = {
    restaurants: [],
};

const restaurantsReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'RESTAURANTS_LOADED':
            return {
                restaurants: action.payload,
            };

        default: 
            return state;
    }
}

export default restaurantsReducer;