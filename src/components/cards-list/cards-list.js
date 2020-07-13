import React from 'react';

import Card from '../card';

const CardsList = ({ cardsList }) => {
        return cardsList.map((cardData) => {
            const { restaurant_id } = cardData;
            return <Card cardData={cardData} key={restaurant_id} />;
        })
}

export default CardsList;