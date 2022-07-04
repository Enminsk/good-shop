import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCategories } from '../../store/categoriesSlice/categoriesSlice';
import { categoriesSelectors } from '../../store';
import css from './styles.module.css';


export function Category() {
    const dispatch = useDispatch();
    const categories = useSelector(categoriesSelectors.getCategoriesSelector);

    useEffect(() => {
        dispatch(fetchCategories())
    }, [dispatch])

  return (
        <div className={css.menu}>
                {categories.map(({ label, id }) =>
                    <Link key={id} to={`/category/${id}`}>
                        <li>{label}</li>
                    </Link>)}
        </div>
  );
}

