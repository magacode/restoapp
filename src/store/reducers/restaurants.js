const restaurantsReducer = (state, action) => {

    if (state === undefined) {
        return {
            restaurants: [],
        }
    }

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