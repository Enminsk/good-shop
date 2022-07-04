import { PageHeader } from 'antd';
import { useNavigate, } from 'react-router';
import { Link } from 'react-router-dom';
import { GoodSearch } from '../GoodsSearch';
import css from './styles.module.css';


export function Header() {
    const navigate = useNavigate();
    return (
        <>
            <PageHeader className={css.header}
                onBack={() => navigate(-1)}
                title={<Link to={"/"}>
                    BAZAR
                </Link>}
                subTitle={
                    <GoodSearch />
                }
            ></PageHeader>
        </>
    );
}


