import { Row, Col, Card } from "react-bootstrap";

const ContactInfo = () => {
  return (
    <>    
      <Card  text="orange" className='container-custom'  >
        {/* <Card.Title as="h4" className="text-center text-orange">
          Наші контакти
        </Card.Title> */}
        <Card.Body>
          <Row className="my-2">
            <Col xs={1}>
              <span className="material-icons">home</span>
            </Col>
            <Col as='h5'>м. Львів, вул.Лісна 50А</Col>
          </Row>

          <Row className="my-2">
            <Col xs={1}>
              <span className="material-icons">smartphone</span>
            </Col>
            <Col as='h5'>
              <Row>
                <Col>068 407 78 87</Col>
              </Row>
              <Row>
                <Col>063 407 78 87</Col>
              </Row>
            </Col>
          </Row>

          <Row className="my-2">
            <Col xs={1}>
              <span className="material-icons">email</span>
            </Col>
            <Col as='h5'>www.facebook.com/lviv.dancestudio</Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};

export default ContactInfo;
