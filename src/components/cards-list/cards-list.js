import React from 'react';

import Card from '../card';

const CardsList = ({ cardsList }) => {
    return (
        <div className="container">
            <div className="row row-cols-1 row-cols-md-3 pt-3">
                {
                    cardsList.map((cardData) => {
                        const { restaurant_id } = cardData;
                        return <Card cardData={cardData} key={restaurant_id} />;
                    })
                }
            </div>
        </div>
      );
}

export default CardsList;