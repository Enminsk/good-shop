import { Route, Routes } from 'react-router';
import { Header } from './Header';
import { MainPage } from './MainPage';
import { Footer } from './Footer';
import { CategoryPage } from './CategoryPage';


//import css from './styles.module.css';

export function App() {
  return (
      <>
          <Header />
          <Routes>
              <Route path='/' element={<MainPage />} />
              <Route path='/category/:id' element={<CategoryPage />} />
          </Routes>
          <Footer />
      </>
  );
};
