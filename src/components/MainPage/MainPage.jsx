import { Menu } from '../Menu';
import { GoodCategory } from '../GoodCategory';
import { Col, Row, Divider } from 'antd';

//import css from './styles.module.css';

export function MainPage() {
  return (
      <>
          <Row wrap={false}>
              <Col flex="none"><Menu /></Col>
              <Divider type="vertical" />
              <Col flex="auto"><GoodCategory /></Col>
          </Row>
      </>
  );
}

