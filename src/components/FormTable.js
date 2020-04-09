import React from 'react';
import {Table, Spinner} from 'react-bootstrap';

const FormTable = (props) => {
    
    const items = props.items
    const loading = props.loading;
    

    function selectRow (row) {
        console.log(row.target.innerText)
         props.selectedRow(row.target.innerText);    
    }
    return(
      <>  
        {loading ? (
            <Spinner animation="grow" />
            ) : (
            <>
            <Table key="109" striped bordered hover size="sm"
              onClick={selectRow}
              >
                <thead key="303">
                    <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Sections</th>
                    </tr>
                </thead>
                <tbody key="392">
                  {items.map((item, idx) => (
                  <>
                    <tr key={idx}>
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