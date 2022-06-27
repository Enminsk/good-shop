import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPopularCategories } from '../../store/popularCategoriesSlice';
import { CardItem } from '../Card';
import css from './styles.module.css';

export function GoodCategory() {
    const dispatch = useDispatch();
    const category = useSelector((state) => state.category.category);

    useEffect(() => {
        dispatch(fetchPopularCategories())
    }, [dispatch])

    return (
        <>
            <ul>
                {category.map(({ category, items }) =>
                    <li key={category.id}>
                        {category.label}
                        <div className={css.wrap}>
                            {items.map(({ label, id, price, img }) =>
                                <CardItem key={id} label={label} id={id} price={price} img={img} />).slice(0, 6)}
                        </div>
                    </li>)}
            </ul>
        </>
    );
}


