import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPopularCategories, popularCategoriesSelectors } from '../../store/popularCategoriesSlice';
import { Card } from '../Card';
import css from './styles.module.css';

export function GoodCategory() {
    const dispatch = useDispatch();
    const category = useSelector(popularCategoriesSelectors.getPopularCategoriesSelector);

    useEffect(() => {
        dispatch(fetchPopularCategories())
    }, [dispatch])

    return (
        <ul>
            {category.map(({ category: { id, label }, items }) =>
                <Link key={id} to={`/category/${id}`}>
                    <li>{label}</li>
                    <div className={css.wrap}>
                        {items.map(({ label, id, price, img }) =>
                            <Card key={id} label={label} id={id} price={price} img={img} />).slice(0, 6)}
                    </div>
                </Link>)}
        </ul>
    );
}


