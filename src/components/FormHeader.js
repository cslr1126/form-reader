import React, {useState} from 'react';
import {Container, Row, Col, Form, Dropdown, InputGroup, DropdownButton, FormControl} from 'react-bootstrap';

const FormHeader = () => {
  const [selectedState, setSelectedState] = useState('');
  function handleSelect(evt) {
    setSelectedState(evt.target.value)

  }
  
  return (
      <>
    
          <Row>
            <Col>
            <Form>
            <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Select a Sate</Form.Label>
                <Form.Control as="select"  onChange={(evt)=>{handleSelect(evt)}}>
                    <option>--select--</option>
                    <option>New York</option>
                    <option>New Jersey</option>
                    <option>California</option>
                    <option>Florida</option>
                    <option>Conneticut</option>
                </Form.Control>
            </Form.Group>
            </Form>
            </Col>

          </Row>
         <Row>
            <h4>You selected: {selectedState}</h4>
         </Row>

      </>
  )

}

export default FormHeader;
