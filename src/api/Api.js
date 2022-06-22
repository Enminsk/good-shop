import { resource } from "./resource";

export class Api {
    andPoints = {
        goods: '/api/goods',
        categories: '/api/categories',
    }
    getGoods = () => {
        return resource(this.andPoints.goods)
    }
    getCategories = () => {
        return resource(this.andPoints.categories)
    }
};
