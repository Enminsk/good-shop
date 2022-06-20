import { request } from "./request";

export class Api {
    andPoints = {
        goods: '/api/goods',
        categories: '/api/categories',
    }
    getGoods = () => {
        return request(this.andPoints.goods)
    }
    getCategories = () => {
        return request(this.andPoints.category)
    }
};