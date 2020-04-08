import React from 'react';
import {Table, Spinner} from 'react-bootstrap';

const FormTable = (props) => {
    
    const items = props.items
    const loading = props.loading;

    return(
      <>  
        {loading ? (
            <Spinner animation="grow" />
            ) : (
            <>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Pages</th>
                    </tr>
                </thead>
                <tbody>
                
                   {items.map((item, idx) => (
                    <>
                     <tr key={item.id}>
                       <td>{item.id}</td>
                       <td>{item.title}</td>
                       <td>{item.description}</td>
                       <td>{item.pages.length}</td>
                       </tr>   
                    </>
                   ))}
                
                </tbody>
                </Table>         
          
           </>  
       )}
      </>
    )
}

export default FormTable;