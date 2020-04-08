import React from 'react';
import {Container, Spinner} from 'react-bootstrap';
import { useFetch } from './hooks';
import FormHeader from './components/FormHeader';
import UserForm from './components/UserForm';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import FormNavBar from './components/FormNavBar';
import FormTable from './components/FormTable';

function App() {
  const [data, loading] = useFetch(
    "https://webserver-trialanthem-prd.lfr.cloud/o/headless-anthem-forms/v1.0/forms/site/20124"
  );
  const getForms = () => {
    console.log("Called submit");
  }
  return (
    <div className="App-header">
     <Container>
      <FormNavBar/>  
       <FormHeader getForms={getForms}/>
        <FormTable />
         {loading ? (
          <Spinner animation="grow" />
          ) : (
          <>         
        {data.items.map((item, idx) => (
            <UserForm key={idx} props={item}/>
          ))}
        </>
       )}
      </Container>
    </div>
  );
}

export default App;
