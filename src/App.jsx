import Grid from './components/Grid';
import { useEffect } from 'react';
import axios from "axios";
import { useState } from 'react';

function App() {
  const [diet, setDiet] = useState("");
  const [bodyPart, setBodyPart] = useState("");

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
    fetchAPI(`http://localhost:8000/${diet}`);
  }, [diet]);

  useEffect( () => {
    fetchAPI(`http://localhost:8000/${bodyPart}`);
  }, [bodyPart]);

  useEffect( () => {
    fetchAPI("http://localhost:8000/quote");
  }, []);

  return (
    <>
      <div>
        <h1>Manage your productivity here</h1>
        <Grid diet={diet} setDiet={setDiet} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
      </div>
    </>
  )
}

export default App;