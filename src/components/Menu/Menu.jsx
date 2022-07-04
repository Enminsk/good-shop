import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCategories } from '../../store/categoriesSlice/categoriesSlice';
import { categoriesSelectors } from '../../store';
import { Divider } from 'antd';
import css from './styles.module.css';


export function Menu() {
    const dispatch = useDispatch();
    const categories = useSelector(categoriesSelectors.getCategories);

    useEffect(() => {
        dispatch(fetchCategories())
    }, [dispatch])

    return (
        <nav className={css.menu}>
            <Divider />
            {categories.map(({ label, id }) =>
                <Link key={id} to={`/category/${id}`}>
                    <h4>{label}</h4>
                    <Divider />
                </Link>)}
            <Link to="/goods"><h4>Все товары</h4></Link>
        </nav>
    );
}

