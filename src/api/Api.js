import { request } from "./request";

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
    getGoodsByCategoryId = (categoryTypeIds) => {
        const url = this.andPoints.goods;
        return request(url, { categoryTypeIds })
    }
    getGoodById = (ids) => {
        const url = this.andPoints.goods;
        return request(url, { ids })
    }
    getSearch = (text) => {
        const url = this.andPoints.goods;
        return request(url, { text });
    }
};
