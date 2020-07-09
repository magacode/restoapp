const restaurantsLoaded = (restaurants) => {
    return {
        type: 'RESTAURANTS_LOADED',
        payload: restaurants,
    }
}

export {
    restaurantsLoaded
}