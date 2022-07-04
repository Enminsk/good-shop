import { Spin } from 'antd';
import React from 'react';
import css from './styles.module.css';

export const Spinner = () => (
    <div className={css.example}>
        <Spin size="large" />
    </div>
);
