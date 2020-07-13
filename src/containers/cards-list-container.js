import React, { useEffect, useCallback } from 'react';
import { connect } from 'react-redux';

import { getRestaurantsList } from '../store/actions';
import CardsList from '../components/cards-list';
import Spinner from '../components/spinner';

const CardsListContainer = (props) => {

    const { getRestaurantsListHandler, restaurantsLoading, restaurantsPage, restaurantsList } = props;

    useEffect(() => {      
        getRestaurantsListHandler(restaurantsPage)
    }, [restaurantsPage])

    const spinner = restaurantsLoading ? <Spinner /> : null;
    const content = !restaurantsLoading ? <CardsList cardsList={restaurantsList} /> : null;

    return (
        <div className="container">
            <div className="row row-cols-1 row-cols-md-3 pt-3">
                { spinner }
                { content }
            </div>
        </div>
    )
    
};

const mapStateToProps = (state) => {
    return {
        restaurantsLoading: state.restaurantsReducer.loading,
        restaurantsPage: state.restaurantsReducer.page,
        restaurantsList: state.restaurantsReducer.restaurantsList,
    }
}

const mapDispatchToProps = (dispatch) => ({
    getRestaurantsListHandler: () => dispatch(getRestaurantsList()) 
})

export default connect(mapStateToProps, mapDispatchToProps)(CardsListContainer)
