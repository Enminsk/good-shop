import { Divider } from 'antd';
import css from './footer.module.css';

export function Footer() {
    return (
        <>
            <Divider />
            <div className={css.footer}>Разработано благодаря TeachMeSkills</div>
            <Divider />
        </>
    );
}

