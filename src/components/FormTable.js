import React from 'react';
import {Table} from 'react-bootstrap';

const FormTable = () => {

    return(
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
            <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            </tr>
            </tbody>
    </Table>
    )
}

export default FormTable;