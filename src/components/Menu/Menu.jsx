import { useSelector, useDispatch } from 'react-redux';
import css from './styles.module.css';

export function Menu() {
    const categories = useSelector();
    const dispatch = useDispatch();

  return (
    <>
        <div className={css.menu}>
              <ul >
                  {categories.map(({ category }) =>
                      <li key={category.id}>{category}</li>)}
              </ul>;
        </div>
    </>
  );
}

