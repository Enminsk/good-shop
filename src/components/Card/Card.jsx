import { Card as CardAntd } from 'antd';
import React from 'react';
//import css from './styles.module.css';

export const Card = (({ img, price, label }) => {
    const { Meta } = CardAntd;
    return (
        <CardAntd
            hoverable
            style={{ width: 250, margin: 2 }}
            cover={<img alt="example" src={img} />}
        >
            <Meta title={price} description={label} />
        </CardAntd>
    )
});
