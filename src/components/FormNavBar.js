import React from 'react';
import { Col, Row, Image} from 'react-bootstrap';

const FormNavBar = () => {
  return (
    <>

    <Row>
      <Col xs={4} md={2}>
        <Image  src="../logo.svg" width="175px" rounded />
      </Col>
      </Row>  
  </>
  )
};

export default FormNavBar;