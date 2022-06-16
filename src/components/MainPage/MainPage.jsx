import { Menu } from '../Menu';
import { GoodCategory } from '../GoodCategory';
import { Col, Row } from 'antd';

//import css from './styles.module.css';

export function MainPage() {
  return (
      <>
          <Row>
              <Col flex='250px'><Menu /></Col>
              <Col flex='auto'><GoodCategory /></Col>
          </Row>
      </>
  );
}

