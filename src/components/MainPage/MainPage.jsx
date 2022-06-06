import { Menu } from '../Menu';
import { GoodCategory } from '../GoodCategory';
import { Footer } from '../Footer';

import css from './styles.module.css';

export function MainPage() {
  return (
      <>
          <Menu />
          <GoodCategory />
          <Footer />
      </>
  );
}

