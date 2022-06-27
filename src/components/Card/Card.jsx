import { Card } from 'antd';
import React from 'react';
//import css from './styles.module.css';

export const CardItem = (({ img, price, label }) => {
    const { Meta } = Card;
    return (
        <Card
            hoverable
            style={{ width: 250, margin: 2 }}
            cover={<img alt="example" src={img} />}
        >
            <Meta title={price} description={label} />
        </Card>
    )
});
