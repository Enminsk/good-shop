import { resource } from "./resource";

export class Api {
    andPoints = {
        goods: '/api/goods',
        categories: '/api/categories',
        popular_categories: '/api/popular_categories'
    }
    getGoods = () => {
        return resource(this.andPoints.goods)
    }
    getCategories = () => {
        return resource(this.andPoints.categories)
    }
    getPopularCategories = () => {
        return resource(this.andPoints.popular_categories)
    }
};
