import Grid from './components/Grid';
import { useEffect } from 'react';
import axios from "axios";

function App() {

  const fetchAPI = async (url) => {
    const options = {
      method: "GET",
      url,
  };

    try {
      const response = await axios.request(options);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect( () => {
    fetchAPI("http://localhost:8000/random-vegaterian");
  }, []);

  useEffect( () => {
    fetchAPI("http://localhost:8000/biceps");
  }, []);

  useEffect( () => {
    fetchAPI("http://localhost:8000/quote");
  }, []);

  return (
    <>
      <div>
        <h1>Manage your productivity here</h1>
        <Grid data="Hello world" />
      </div>
    </>
  )
}

export default App;