import { PageHeader, Input } from 'antd';
import { useNavigate } from 'react-router';
import 'antd/dist/antd.css';
//import css from './styles.module.css';



export function Header() {
    const navigate = useNavigate();
  return (
      <PageHeader
          onBack={() => navigate(-1)}
          title="Беда-Бедовая"
          subTitle={
              <Input placeholder="input search text" />
          }
      ></PageHeader>
  );
}


