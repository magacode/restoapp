import API from '../utils/axios-settings';

class RestaurantsApi {

    getRestaurantsData = async (page = 1) => { 
        const addr = `/restaurants/search?page=${page}`;
        return await API.get(addr);
    };

}

export default new RestaurantsApi();