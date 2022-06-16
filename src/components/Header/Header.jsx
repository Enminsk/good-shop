import { PageHeader, Input } from 'antd';
import 'antd/dist/antd.css';
//import css from './styles.module.css';



export function Header() {
  return (
      <PageHeader
          onBack={() => null}
          title="Беда-Бедовая"
          subTitle={[
              <Input placeholder="input search text" />
          ]}
      ></PageHeader>
  );
}


