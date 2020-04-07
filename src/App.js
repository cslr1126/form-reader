import React from 'react';
import {Container, Row} from 'react-bootstrap';
import { useFetch } from './hooks';
import FormHeader from './components/FormHeader';
import UserForm from './components/UserForm';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [data, loading] = useFetch(
    "https://s3.amazonaws.com/mymeganotes.com/basic-info.json"
  );
  
  return (
    <div className="App-header">
    <Container>
    <FormHeader/>
       {loading ? (
         "loading..."
       ) : (
        <>
          {data[0].collection.map((item, idx) => (
            <UserForm key={idx} props={item}/>
          ))}
        </>
       )}
      
      </Container>
    </div>
  );
}

export default App;
