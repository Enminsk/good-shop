import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchProductPage } from '../../store/productPageSlice/productPageSlice';
import { productPageSelectors } from '../../store/productPageSlice';
import { Divider } from 'antd';
import css from './styles.module.css';
import { Spinner } from '../common';
import { Notfoundpage } from '../Notfoundpage';


export const ProductPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const productPage = useSelector(productPageSelectors.getProductPage);
    const isLoaded = useSelector(productPageSelectors.getIsLoadedSeletor);
    const isLoading = useSelector(productPageSelectors.getIsLoadingSeletor);
    const isError = useSelector(productPageSelectors.getIsErrorSeletor);

    useEffect(() => {
        dispatch(fetchProductPage(id))
    }, [id])

    return (
        <div className={css.conteiner}>
            {isLoading && <Spinner />}
            {isLoaded && productPage.map(({ id, label, price, img, description }) => (
                <div key={id} className={css.wrap}>
                    <div className={css.image}>
                        <img className={css.img} src={img} alt='картинка'></img>
                    </div>
                    <div className={css.info}>
                        <h1>{label}</h1>
                        <Divider />
                        <span>{description}</span>
                        <Divider />
                        <div className={css.price}>
                            <span className={css.price_price}>{`${price} $`}</span>
                            <button className={css.price_btn}>Положить в корзину</button>
                        </div>
                    </div>
                </div>
            ))}
            {isError && <Notfoundpage />}
        </div>
    )
}
