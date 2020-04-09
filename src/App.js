import React, {useState} from 'react';
import { Container } from 'react-bootstrap';
import { useFetch } from './hooks';
import FormHeader from './components/FormHeader';
import FormNavBar from './components/FormNavBar';


import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [url, setUrl] = useState(
    'https://webserver-trialanthem-prd.lfr.cloud/o/headless-anthem-forms/v1.0/forms/site/20124',
  );

  const [data, loading] = useFetch(
    url
  );


  function getForms () {
    console.log("Called submit");
  }
  return (
    <div className="App-header">
     <Container>
      <FormNavBar/>      
       <FormHeader getForms={getForms} items={data.items} loading={loading}/>   
      </Container>
    </div>
  );
}

export default App;
