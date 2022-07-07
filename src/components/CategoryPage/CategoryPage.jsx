import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { fetchCategoryPage } from '../../store/categoryPageSlice';
import { categoryPageSelectors } from '../../store/categoryPageSlice';
import { Card } from '../Card';
import { Spinner } from '../common';
import { Row } from 'antd';
import { Notfoundpage } from '../Notfoundpage';

export const CategoryPage = ({ categories }) => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const categoryPage = useSelector(categoryPageSelectors.getCategoryPage)
    const isLoaded = useSelector(categoryPageSelectors.getIsLoadedSeletor);
    const isLoading = useSelector(categoryPageSelectors.getIsLoadingSeletor);
    const isError = useSelector(categoryPageSelectors.getIsErrorSeletor);

    useEffect(() => {
        dispatch(fetchCategoryPage(id))
    }, [id])

    return (
            <Row justify="center">
            {isLoading && <Spinner />}
            {isLoaded &&
            categoryPage.map(( { id, label, price, img }) => (
                    <Link key={id} to={`/goods/${id}`}>
                        <Card label={label} id={id} price={price} img={img} />
                    </Link>
                ))}
            {isError && <Notfoundpage />}
            </Row>
    )
}
