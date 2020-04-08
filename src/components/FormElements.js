import React, {Fragment} from 'react';
import {FormControl, FormGroup, FormLabel} from 'react-bootstrap';

const FormElements = (props) => {
   console.log(props.value)
   const elements = props.value.formElements;
   
   return (
    <Fragment>
      {elements.map((item, idx) => (
       
       <FormGroup key={idx} controlId="formGroupEmail"> 
         <FormLabel>{item.name}</FormLabel>
          <FormControl type={item.fieldType}/>
          </FormGroup> 
      ))}
     </Fragment>
    )  

}

export default FormElements;