import React from 'react';

import Picture from '../picture';
import CardBody from '../card-body';

const Card = ({ cardData }) => {
    const { restaurant_id, restaurant_src, restaurant_name, price_range_100 } = cardData;

    console.log(restaurant_id, restaurant_src, restaurant_name, price_range_100 )

    return (
        <div className="col mb-4" key={restaurant_id}>
            <div className="card h-100">
                <Picture src={restaurant_src} />
                <CardBody
                    restaurantName={restaurant_name}
                    priceRange={price_range_100}
                />
            </div>
        </div>
      );
}

export default Card;