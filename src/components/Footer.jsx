import { Container, Row, Col } from "react-bootstrap";
import Social from "./Social";
import logo from '../assets/rb-logo.png';

const Footer = () => {
  return (
    <footer className="bg-dark-half footer">
      <Container>
        <Row className='py-4'>
          <Col xs={{span: 6, order: 2}} md={4} className='d-flex align-items-center justify-content-center justify-content-md-start text-light my-2'>
            <span>© 2022 Lviv All Stars</span>
          </Col>
          <Col xs={{span: 12, order: 1}} md={{span: 4, order: 2}} className='d-flex align-items-center justify-content-center text-light my-2'>
            <Social/>
          </Col>
          <Col xs={{span: 6, order: 3}} md={4} className='d-flex align-items-center justify-content-center justify-content-md-end text-info'>
            <span>
              Created with{' '}
              <img src={logo} height='30px' alt="React Bootstrap logo" />  
            </span> 
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
