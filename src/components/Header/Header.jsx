import { PageHeader } from 'antd';
import { UserOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import { useNavigate, } from 'react-router';
import { Link } from 'react-router-dom';
import { GoodSearch } from '../GoodsSearch';
import css from './styles.module.css';


export function Header() {
    const navigate = useNavigate();
    return (
            <PageHeader className={css.header}
                onBack={() => navigate(-1)}
                title={<Link to={"/"}>
                    BAZAR
                </Link>}
                subTitle={
                    <GoodSearch />
                }
                extra={[
                    <Link to='/login' style={{ color: '#000000' }}><UserOutlined style={{ fontSize: '20px' }} /></Link>,
                    <Link to='/cart'></Link>,
                    <ShoppingCartOutlined style={{ fontSize: '20px' }} />
                ]}
            ></PageHeader>
    );
}


