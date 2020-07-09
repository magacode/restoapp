const userIsAuthorized = () => {
    return {
        type: 'USER_ISAUTHORIZED'
    }
}

const userLeft = () => {
    return {
        type: 'USER_LEFT'
    }
}

const restaurantsLoaded = (restaurants) => {
    return {
        type: 'RESTAURANTS_LOADED',
        payload: restaurants,
    }
}

export {
    userIsAuthorized,
    userLeft,
    restaurantsLoaded,
}