import React from 'react';
import {Container, Row} from 'react-bootstrap';
import { useFetch } from './hooks';
import FormHeader from './components/FormHeader';
import UserForm from './components/UserForm';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [data, loading] = useFetch(
    "https://webserver-trialanthem-prd.lfr.cloud/o/headless-anthem-forms/v1.0/forms/site/20124"
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
