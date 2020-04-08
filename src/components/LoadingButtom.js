import React, {useEffect, useState} from 'react';
import {Button} from 'react-bootstrap';


function simulateNetworkRequest() {
  return new Promise((resolve) => setTimeout(resolve, 2000));
}

function LoadingButton(props) {
    
  const [isLoading, setLoading] = useState(false);
  
  useEffect(() => {
    if (isLoading) {
    simulateNetworkRequest().then(() => {
        setLoading(false);
        props.getForms();
    });
    }
  }, [isLoading]);

  const handleClick = () => setLoading(true);

  return (
        <Button
        variant="secondary"
        size="lg"
        block
        disabled={isLoading}
        onClick={!isLoading ? handleClick : null}
        >
        {isLoading ? 'Loading…' : 'Submit'}
        </Button>
  );
}

export default LoadingButton;