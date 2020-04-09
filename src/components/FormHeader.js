import React, {useState, useEffect } from 'react';
import { Row, Col, Form} from 'react-bootstrap';
import LoadingButton from './LoadingButtom';
import FormTable from './FormTable';
import UserForm from './UserForm';
import { useFetch } from '../hooks';

const FormHeader = (props) => {
  const [selectedState, setSelectedState] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  //const [url, setUrl] = useState( 'https://webserver-trialanthem-prd.lfr.cloud/o/headless-anthem-forms/v1.0/forms/34639');
  //let [data, loading] = useFetch(url);
  const [url, setUrl] = useState();

  const handleSelect = (evt) =>{
    setSelectedState(evt.target.value)
  }
  const handleCategory = (evt) => {
      setSelectedCategory(evt.target.value);
  }
  let username = 'test@liferay.com';
  let password = 'test';
  let authString = `${username}:${password}`
  let headers = new Headers();
  headers.set('Authorization', 'Basic ' + btoa(authString))

  async function selectedRow  (row) {
        console.log('in async function ' + row)
        if(row === '35029') {
          setUrl('https://webserver-trialanthem-prd.lfr.cloud/o/headless-anthem-forms/v1.0/forms/35029');
        }else if(row === '34691')
          setUrl('https://webserver-trialanthem-prd.lfr.cloud/o/headless-anthem-forms/v1.0/forms/34691')
        else if (row === '34639')
          setUrl('https://webserver-trialanthem-prd.lfr.cloud/o/headless-anthem-forms/v1.0/forms/34639')
        console.log(url)
        const response = await fetch(url,{method: 'GET', headers: headers});
        const json = await response.json();
        console.log(json);
        setData(json);
        setLoading(false);
      return true;
      
  }
  useEffect(() => {
    selectedRow();
  }, []);

  return (
      <> 
         <Row>
            <Col>
            <Form>
              <Form.Group controlId="antForm.ControlSelect1">
                <Form.Label>Select a Sate</Form.Label>
                <Form.Control as="select"  onChange={(evt)=>{handleSelect(evt)}}>
                    <option>--select--</option>
                    <option>New York</option>
                    <option>New Jersey</option>
                    <option>California</option>
                    <option>Florida</option>
                    <option>Conneticut</option>
                </Form.Control>
              </Form.Group>
              <Form.Row>  
              <Form.Group as={Col} controlId="antForm.ControlSelect2">
                <Form.Label>Select a Category</Form.Label>
                <Form.Control as="select"  onChange={(evt)=>{handleCategory(evt)}}>
                    <option>--select--</option>
                    <option>Applications & Enrollment</option>
                    <option>Authorization & Verification</option>
                    <option>Behavioral Health</option>
                    <option>Benefits & Continuity of Coverage</option>
                    <option>Claims</option>
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col} controlId="antForm.ControlLanguage">
                  <Form.Label>Select a Language</Form.Label>
                  <Form.Control as="select">
                  <option>--select--</option>
                    <option>English</option>
                    <option>Spanish</option>
                    <option>Other</option>
                  </Form.Control>
              </Form.Group>
              </Form.Row>    
            </Form>
            </Col>
          </Row>    
          <Row>
            <Col>
            <h4>You selected: {selectedState}</h4> and <h4> {selectedCategory}</h4>
            </Col>            
         </Row>
         <Row>
           <Col>
             <FormTable selectedRow={selectedRow} items={props.items} loading={props.loading}/>
           </Col>
         </Row>
         <Row>
           <Col>
            <LoadingButton getForms={props.getForms} />
           </Col>
         </Row> 
         <Row>
           <Col>
           {loading ? (
            <h4>No Form data</h4>
            ) : (
               <UserForm props={data}/>
             
            )
            }
           </Col>
         </Row>
      </>
  )

}

export default FormHeader;
