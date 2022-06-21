import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actions, categoriesSelectors } from '../../store';
import css from './styles.module.css';


export function Menu() {
    const dispatch = useDispatch();
    const categoriesItem = useSelector(categoriesSelectors.getCategories);
    

    useEffect(() => {
        dispatch(actions.fetchCategories())
    }, [])
    

    const { categories } = categoriesItem;


  return (
    <>
        <div className={css.menu}>
              <ul >
                  {categories.map(({ label, id, type }) =>
                      <li key={id}>{label}</li>)}
              </ul>
        </div>
    </>
  );
}

