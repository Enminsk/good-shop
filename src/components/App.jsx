import { Route, Routes } from 'react-router';
import { Header } from './Header';
import { MainPage } from './MainPage';

import css from './styles.module.css';

export function App() {
  return (
      <>
          <Header />
          <Routes>
              <Route path='/' element={<MainPage />} />
          </Routes>
      </>
  );
};
