import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  let username = 'test@liferay.com';
  let password = 'test';
  let authString = `${username}:${password}`
  let headers = new Headers();
  headers.set('Authorization', 'Basic ' + btoa(authString))

  async function fetchUrl() 
  {
    const response = await fetch(url,{method: 'GET', headers: headers});
    const json = await response.json();
    setData(json);
    setLoading(false);
  }
  useEffect(() => {
    fetchUrl();
  }, []);
  return [data, loading];
}
export { useFetch };