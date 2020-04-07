import React, {Fragment} from 'react';
import {FormControl, InputGroup} from 'react-bootstrap';

const FormElements = (props) => {
   console.log(props.value)
   const elements = props.value.formElements;

   return (
    <Fragment>
      {elements.map((item, idx) => (
          <InputGroup  key={idx} className="mb-12">
        
          <FormControl
            placeholder={item.properties.placeholder}
            aria-label={item.properties.label}
            aria-describedby="basic-addon1"
          />
        </InputGroup>
          
      ))}
     </Fragment>
    )  

}

export default FormElements;