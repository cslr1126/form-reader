import React, {Fragment} from 'react';
import {FormControl, FormGroup, Form, FormLabel} from 'react-bootstrap';

const FormElements = (props) => {
   console.log(props.value)
   const elements = props.value.formElements;
   const type = 'radio';
   return (
    <Fragment>
      {elements.map((item, idx) => (
       
       <FormGroup key={idx} controlId="formGroupEmail"> 
         <FormLabel>{item.name}</FormLabel>
           {item.fieldType !== 'radio'? <FormControl type={item.fieldType}/> :
             <>
             <div key={`inline-radio`} className="mb-3">
               
               {item.options.map((option) => (
                 <div key={`inline-${option.value}`} className="mb-3">
                   <Form.Check inline label={option.value} type={item.fieldType} id={`inline-${type}-1`} />
                 </div>
                 ))}
             </div>
            </>
         
           }
         </FormGroup> 
      ))}
     </Fragment>
    )  

}

export default FormElements;