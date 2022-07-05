import { Button, Result } from 'antd';

import React from 'react';
import { useNavigate } from 'react-router';

export function Notfoundpage () {
    const navigate = useNavigate();
    <Result
        status="404"
        title="404"
        subTitle="Категория не найдена,"
        extra={<Button onBack={() => navigate(-1)} type="primary">Вернуться назад</Button>}
    />
};
