import React, {Fragment} from 'react';

const FormElements = (props) => {
    console.log(props.value)
   const elements = props.value.formElements;

   return (
    <Fragment>
      {elements.map((item, idx) => (
          <li key={idx}>{item.type}</li>
      ))}
     </Fragment>
    )  

}

export default FormElements;