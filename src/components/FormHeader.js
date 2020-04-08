import React, {useState} from 'react';
import { Row, Col, Form} from 'react-bootstrap';
import LoadingButton from './LoadingButtom';
import FormTable from './FormTable';

const FormHeader = (props) => {
  
  const [selectedState, setSelectedState] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  function handleSelect(evt) {
    setSelectedState(evt.target.value)

  }
  function handleCategory (evt) {
      setSelectedCategory(evt.target.value);
  }
  
  return (
      <> 
         <Row>
            <Col>
            <Form>
              <Form.Group controlId="antForm.ControlSelect1">
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
              <Form.Row>  
              <Form.Group as={Col} controlId="antForm.ControlSelect2">
                <Form.Label>Select a Category</Form.Label>
                <Form.Control as="select"  onChange={(evt)=>{handleCategory(evt)}}>
                    <option>--select--</option>
                    <option>Applications & Enrollment</option>
                    <option>Authorization & Verification</option>
                    <option>Behavioral Health</option>
                    <option>Benefits & Continuity of Coverage</option>
                    <option>Claims</option>
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col} controlId="antForm.ControlLanguage">
                  <Form.Label>Select a Language</Form.Label>
                  <Form.Control as="select">
                  <option>--select--</option>
                    <option>English</option>
                    <option>Spanish</option>
                    <option>Other</option>
                  </Form.Control>
              </Form.Group>
              </Form.Row>    
            </Form>
            </Col>
          </Row>    
          <Row>
            <Col>
            <h4>You selected: {selectedState}</h4> and <h4> {selectedCategory}</h4>
            </Col>            
         </Row>
         <Row>
           <Col>
             <FormTable items={props.items} loading={props.loading}/>
           </Col>
         </Row>
         <Row>
           <Col>
            <LoadingButton getForms={props.getForms} />
           </Col>
         </Row> 
        
      </>
  )

}

export default FormHeader;
