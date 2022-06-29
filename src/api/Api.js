import { request } from "./resource";

export class Api {
    andPoints = {
        goods: '/api/goods',
        categories: '/api/categories',
        popularCategories: '/api/popular_categories'
    }
    getGoods = () => {
        return request(this.andPoints.goods)
    }
    getCategories = () => {
        return request(this.andPoints.categories)
    }
    getPopularCategories = () => {
        return request(this.andPoints.popularCategories)
    }
};
