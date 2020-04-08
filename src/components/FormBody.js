import React, { Fragment } from 'react';
import Spinner from 'react-bootstrap';

import UserForm from './UserForm';

const FormBody = () =>  {
    let loading, data;
    return (
        <Fragment>
        <h2>Form Body</h2>
        {loading ? (
            <Spinner animation="grow" />
            ) : (
            <>         
          {data.items.map((item, idx) => (
              <UserForm key={idx} props={item}/>
            ))}
          </>
         )}
         </Fragment>
    )
}

export default FormBody;