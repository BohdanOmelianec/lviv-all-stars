import { useState } from 'react';
import { Row, Col, Card, Form, Button } from 'react-bootstrap';


const QuestionForm = () => {
  const [tel, setTel] = useState('+380');

  const telhandler = e => {
    if(e.target.value.length < 4) {
      setTel('+380')
    } else if(!Number(e.target.value) || e.target.value.length >= 14) {
      return;
    } else {
      setTel(e.target.value)
    }   
  }


  return (
    <>
      <Card.Title as='h4' className='text-center text-orange mb-4' >
        У тебе виникли запитання? Напиши нам!
      </Card.Title>
      <Form>
        <Form.Group as={Row}>
          <Col xs={12} sm={6} className="mb-3" ><Form.Control type='text' size='lg' placeholder="Ім'я" /></Col>
          <Col xs={12} sm={6} className="mb-3" ><Form.Control type='text' size='lg' placeholder="Прізвище" /></Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Col xs={12} sm={6} className="mb-3" ><Form.Control type='email' size='lg' placeholder="E-mail" /></Col>
          <Col xs={12} sm={6} className="mb-3" ><Form.Control type='tel' size='lg' placeholder="Телефон" value={tel} onChange={telhandler} /></Col>
        </Form.Group>
        <Form.Control className="mb-5" as='textarea' rows={3} placeholder='Повідомлення' />
        <div className='d-grid'>
          <Button variant='orange' type='submit' size='lg'>НАДІСЛАТИ</Button>
        </div>
      </Form>
    </>
  );
}

export default QuestionForm;
