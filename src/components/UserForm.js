import React from 'react';
import {Form, Row} from 'react-bootstrap';

import FormElements from '../components/FormElements';

const UserForm = (element) => {
  console.log(element.props)
  const elements = element.props.elements;
  const title = element.props.title;
  const subTitle = element.props.subTitle;

  
  return (
    <Row>

      <Form>
         <h1>{title  ? title : subTitle}</h1>
         
         {elements.map((item, idx) => (
           <FormElements key={idx} value={item}/>
         ))}
         
      </Form>
    </Row>
  ) 
  

}

export default UserForm;