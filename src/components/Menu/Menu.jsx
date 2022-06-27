import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
/* import { actions, categoriesSelectors } from '../../store'; */
import { fetchCategories } from '../../store/categoriesSlice';
import css from './styles.module.css';


export function Menu() {
    const dispatch = useDispatch();
    const categories = useSelector((state) => state.categories.categories);

    useEffect(() => {
        dispatch(fetchCategories())
    }, [dispatch])

  return (
    <>
        <div className={css.menu}>
              <ul >
                  {categories.map(({ label, id }) =>
                      <li key={id}>{label}</li>)}
              </ul>
        </div>
    </>
  );
}

