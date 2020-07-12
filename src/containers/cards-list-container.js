import React from 'react';
import CardsList from '../components/cards-list';

const CardsListContainer = () => {

    const data = [
        {
            restaurant_id: 1,
            restaurant_src: null,
            restaurant_name: 'ZangaLyanga'
        },
    ];

    return <CardsList cardsList={data} />
};

export default CardsListContainer;