/* import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react'
import { actions, selectorsCategories } from 'store/sliceCategories';
import { Api } from 'api';

const api = new Api()

export const CategoryPage = () => {
    const dispatch = useDispatch();
    const categoriesItems = useSelector(selectorsCategories.getCategories)

    useEffect(() => {
        dispatch(actions.fetchCategories)
    }, [])

    console.log(categoriesItems);
    const { categories } = categoriesItems
    return (<ul >{categories.map(({ label, id, type }) => <li key={id}>
        <CardCategory label={label} id={id} type={type} />
    </li>)}</ul>);
}
 */