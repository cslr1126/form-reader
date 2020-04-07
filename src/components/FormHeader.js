import React, {useState} from 'react';
import {Container, Row, Col, Form, Dropdown, InputGroup, DropdownButton, FormControl} from 'react-bootstrap';

const FormHeader = () => {
  const [selectedState, setSelectedState] = useState('');
 
  
  return (
      <>
       <Container>
          <Row>
            <Col>
            <Form>
            <Form.Group controlId="formBasicInformation">
                <Form.Label>Please select your state
                 Our forms are organized by state. Select your state below to view forms for your area.</Form.Label>
                <InputGroup className="mb-3">
                    <DropdownButton
                    as={InputGroup.Prepend}
                    variant="outline-secondary"
                    title="Select Your State"
                    id="input-group-dropdown-1"
                    onSelect={function(evt){setSelectedState(evt)}}>
                    >
                    <Dropdown.Item href="newyork">New York</Dropdown.Item>
                    <Dropdown.Item href="california">California</Dropdown.Item>
                    <Dropdown.Item href="florida">Florida</Dropdown.Item>
                    </DropdownButton>
                    <FormControl aria-describedby="basic-addon1"  />
                    
                </InputGroup>
            </Form.Group>
            </Form>
            </Col>

          </Row>
         <Row>
            <h4>You selected: {selectedState}</h4>
         </Row>
        </Container>
      </>
  )

}

export default FormHeader;
