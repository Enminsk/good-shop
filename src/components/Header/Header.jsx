import { PageHeader, Input } from 'antd';
import { useNavigate } from 'react-router';


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


