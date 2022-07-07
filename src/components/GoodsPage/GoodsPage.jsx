import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';
import { goodsSelectors } from '../../store';
import { fetchGoods } from '../../store';
import { fetchCategories } from '../../store';
import { Table } from 'antd';


export function GoodsPage () {
    const dispatch = useDispatch();
    const { goods } = useSelector(goodsSelectors.getMapGoods)

    useEffect(() => {
        dispatch(fetchGoods())
        dispatch(fetchCategories())
    }, [dispatch])

    const columns = [
        {
            title: '№',
            dataIndex: 'id',
            key: 'id'
        },
        {
            title: 'Category',
            dataIndex: 'categoryLabel',
            key: 'categoryTypeId'
        },
        {
            title: 'Goods',
            dataIndex: 'label',
            key: 'id',
            render: (label) => {
                return <a>{label}</a>
            }
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'id'
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'id'
        }
    ]
    return (
            <Table 
                dataSource={goods} 
                columns={columns} 
                pagination={{ total: 220, pageSize: 10 }}>
            </Table>
    )
} 
