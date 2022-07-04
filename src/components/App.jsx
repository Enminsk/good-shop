import { Route, Routes } from 'react-router';
import { MainPage } from './MainPage';
import { CategoryPage } from './CategoryPage';
import { LoginPage } from './LoginPage';
import { ProductPage } from './ProductPage';
import { GoodsPage } from './GoodsPage';
import { Layout } from './Layout';


//import css from './styles.module.css';

export function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<MainPage />} />
                    <Route path='login' element={<LoginPage />} />
                    <Route path='goods' element={<GoodsPage />} />
                    <Route path='category/:id' element={<CategoryPage />} />
                    <Route path='goods/:id' element={<ProductPage />} />
                </Route>
            </Routes>
        </>
    );
};
