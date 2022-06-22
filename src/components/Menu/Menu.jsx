import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actions, categoriesSelectors } from '../../store';
import css from './styles.module.css';


export function Menu() {
    const dispatch = useDispatch();
    const categories = useSelector(categoriesSelectors.getCategories);

    useEffect(() => {
        dispatch(actions.fetchCategories())
    }, [])

  return (
    <>
        <div className={css.menu}>
              <ul >
                  {categories.categories.map(({ label, id }) =>
                      <li key={id}>{label}</li>)}
              </ul>
        </div>
    </>
  );
}

