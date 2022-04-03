import { Row, Col, Card } from 'react-bootstrap';
import QuestionForm from './QuestionForm';
import OnMap from './OnMap';
import ContactInfo from './ContactInfo';

const Contacts = () => {

  return (
    <>
      <Card.Title as="h1" className="text-center text-orange mb-4">
        Наші контакти
      </Card.Title>
      <Row>
        <Col xs={{span: 10, offset: 1}} lg={{span: 6, offset: 0}} className="my-4 d-flex flex-column justify-content-center" >
          <ContactInfo/>
        </Col>
        <Col xs={{span: 10, offset: 1}} lg={{span: 6, offset: 0}} className="my-4 text-center">
          <OnMap/>
        </Col>
      </Row>

      <Row>
        <Col xs={{span: 10, offset: 1}} className="my-4">
          <QuestionForm/>
        </Col>
      </Row>
    </>
  );
}

export default Contacts;
