import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useParams } from 'react-router';
import { useEffect } from 'react';
import { fetchPopularCategories } from '../../store/popularCategoriesSlice/popularCategoriesSlice';
import { Card } from '../Card';
import css from './styles.module.css';


export const CategoryPage = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const category = useSelector((state) => state.category.category);

    useEffect(() => {
        dispatch(fetchPopularCategories())
    }, [id])

    return (
            <ul>
                {category.map(({ category, items }) =>
                    <li key={category.id}>
                        {category.label}
                        <div className={css.wrap}>
                            {items.map(({ label, id, price, img }) =>
                                <Card key={id} label={label} id={id} price={price} img={img} />).slice(0, 6)}
                        </div>
                    </li>)}
            </ul>
    )
}

