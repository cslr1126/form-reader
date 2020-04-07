import React from 'react';
import {Form, Row} from 'react-bootstrap';

import FormElements from '../components/FormElements';

const UserForm = (element) => {

  console.log(element.props)
  const elements = element.props.pages;
  const title = element.props.title;
  const subTitle = element.props.subTitle;

  
  return (
    <>
      <h3>{title  ? title : subTitle}</h3>
      <Form>               
         {elements.map((item, idx) => (
           <FormElements key={idx} value={item}/>
         ))}        
      </Form>
      </>
  ) 
  

}

export default UserForm;