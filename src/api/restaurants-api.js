export default class RestaurantsApi {

    _apiBase = "https://us-restaurant-menus.p.rapidapi.com";

    getResource = async (url, search) => {
        const res = await fetch(`${this._apiBase}${url}search${search}`, {
            method: "GET",
            headers: {
                "x-rapidapi-host": "us-restaurant-menus.p.rapidapi.com",
                "x-rapidapi-key": "007247cf5amshdd7ab1a205152c1p1f5e22jsn9611dc5c48ff",
            },
        });
    
        if (!res.ok) {
            throw new Error(`Не удалось получить ${url}, получен ${res.status}`);
        }

        return await res.json();
      };

    getAllRestaurants = async (page = 1) => {
        const search = `?page=${page}`;
        const res = await this.getResource("/restaurants/", search);
        return res.result;
    };

}