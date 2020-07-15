import React, { useEffect, useCallback } from 'react';
import { connect } from 'react-redux';

import ErrorIndicator from '../components/error-indicator';
import { getRestaurantsList } from '../store/actions';
import CardsList from '../components/cards-list';
import Spinner from '../components/spinner';

const CardsListContainer = (props) => {

    const { getRestaurantsListHandler, restaurantsLoading, restaurantsError, restaurantsPage, restaurantsList } = props;

    useEffect(() => {      
        getRestaurantsListHandler(restaurantsPage)
    }, [restaurantsPage])

    const spinner = restaurantsLoading ? <Spinner /> : null;
    const errorMessage = restaurantsError ? <ErrorIndicator /> : null;

    const hasData = !(restaurantsLoading || restaurantsError);
    const content = hasData ? <CardsList cardsList={restaurantsList} /> : null;

    return (
        <div className="container">
            <div className="row row-cols-1 row-cols-md-3 pt-3">
                { spinner }
                { errorMessage }
                { content }
            </div>
        </div>
    )
    
};

const mapStateToProps = (state) => {
    return {
        restaurantsLoading: state.restaurantsReducer.loading,
        restaurantsError: state.restaurantsReducer.error,
        restaurantsPage: state.restaurantsReducer.page,
        restaurantsList: state.restaurantsReducer.restaurantsData.data,        
    }
}

const mapDispatchToProps = (dispatch) => ({
    getRestaurantsListHandler: () => dispatch(getRestaurantsList()) 
})

export default connect(mapStateToProps, mapDispatchToProps)(CardsListContainer)
