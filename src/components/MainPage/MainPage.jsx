import { Menu } from '../Menu';
import { GoodCategory } from '../GoodCategory';
import { Col, Row } from 'antd';

//import css from './styles.module.css';

export function MainPage() {
  return (
      <>
          <Row wrap={false}>
              <Col flex="none"><Menu /></Col>
              <Col flex="auto"><GoodCategory /></Col>
          </Row>
      </>
  );
}

