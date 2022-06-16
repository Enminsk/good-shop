import { Route, Routes } from 'react-router';
import { Header } from './Header';
import { MainPage } from './MainPage';
import { Footer } from './Footer';


//import css from './styles.module.css';

export function App() {
  return (
      <>
          <Header />
          <Routes>
              <Route exact path='/' element={<MainPage />} />
          </Routes>
          <Footer />
      </>
  );
};
