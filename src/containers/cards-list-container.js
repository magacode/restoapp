import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import ErrorIndicator from '../components/error-indicator';
import { getRestaurantsList, setPage } from '../store/actions';
import CardsList from '../components/cards-list';
import Spinner from '../components/spinner';
import Pagination from "react-js-pagination";

const CardsListContainer = (props) => {

    const { 
        setPageHandler, 
        getRestaurantsListHandler, 
        restaurantsLoading, 
        restaurantsError, 
        currentPage, 
        restaurantsPages, 
        restaurantsMorePages, 
        restaurantsList 
    } = props;

    useEffect(() => { 
        getRestaurantsListHandler(currentPage)
    }, [currentPage])

    const spinner = restaurantsLoading ? <Spinner /> : null;
    const errorMessage = restaurantsError ? <ErrorIndicator /> : null;

    const hasData = !(restaurantsLoading || restaurantsError);
    const content = hasData ? <CardsList cardsList={restaurantsList} /> : null;
    const pagination = restaurantsMorePages 
                                ? 
                                    <Pagination
                                        activePage={currentPage}
                                        pageRangeDisplayed={10}                                        
                                        totalItemsCount={restaurantsPages}
                                        onChange={setPageHandler}
                                        itemClass="page-item"
                                        linkClass="page-link"
                                    />
                                : 
                                    null;

    return (
        <div className="container">
            <div className="row row-cols-1 row-cols-md-3 pt-3">
                { spinner }
                { errorMessage }
                { content }                
            </div>
            <div className="row row-cols-1 row-cols-md-3 pt-3">
                <div className="col">
                    { pagination }
                </div>
            </div>
        </div>
    )
    
};

const mapStateToProps = ({ restaurantsReducer, paginationReducer }) => {
    return {
        restaurantsLoading: restaurantsReducer.loading,
        restaurantsError: restaurantsReducer.error,
        currentPage: paginationReducer.page,
        restaurantsPages: restaurantsReducer.restaurantsData.pages,
        restaurantsMorePages: restaurantsReducer.restaurantsData.morePages,
        restaurantsList: restaurantsReducer.restaurantsData.data,        
    }
}

const mapDispatchToProps = (dispatch) => ({
    getRestaurantsListHandler: (page) => dispatch(getRestaurantsList(page)), 
    setPageHandler: (page) => dispatch(setPage(page)), 
})

export default connect(mapStateToProps, mapDispatchToProps)(CardsListContainer)
