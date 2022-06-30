import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { fetchCategoryPage } from '../../store/categoryPageSlice';
import { categoryPageSelectors } from '../../store/categoryPageSlice';
import { Card } from '../Card';
import { Divider, Row } from 'antd';
import css from './styles.module.css';

export const CategoryPage = () => {
    const { id } = useParams()
    const categoryPage = useSelector(categoryPageSelectors.getCategoryPageSelectors)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchCategoryPage(id))
    }, [id])

    return (
            <Row justify="center">
                {categoryPage.map(({ id, label, price, img, categoryTypeId }) => (
                    <Link key={id} to={`/${categoryTypeId}/${id}`}>
                        <Card label={label} id={id} price={price} img={img} />
                    </Link>
                ))}
            </Row>
    )
}
