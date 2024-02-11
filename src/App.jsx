import Header from './components/Header';
import Grid from './components/Grid';
import { useEffect } from 'react';
import axios from "axios";
import { useState } from 'react';

function App() {
  const [diet, setDiet] = useState("");
  const [bodyPart, setBodyPart] = useState("");
  const [dataFromRecipeAPI, setDataFromRecipeAPI] = useState([]);
  const [dataFromTrainingAPI, setDataFromTrainingAPI] = useState([]);
  const [dataFromQuoteAPI, setDataFromQuoteAPI] = useState([]);

  const fetchAPI = async (url) => {
    const options = {
      method: "GET",
      url,
  };

    try {
      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  useEffect( () => {
    const fetchRecipeAPI = async () => {
      const data = await fetchAPI(`http://localhost:8000/${diet}`);
      setDataFromRecipeAPI(data);
    }
    fetchRecipeAPI();
  }, [diet]);

  useEffect( () => {
    const fetchTrainingAPI = async () => {
      const data = await fetchAPI(`http://localhost:8000/${bodyPart}`);
      setDataFromTrainingAPI(data);
    }
    fetchTrainingAPI();
  }, [bodyPart]);

  useEffect( () => {
    const fetchingQuoteAPI = async () => {
      const data = await fetchAPI("http://localhost:8000/quote");
      setDataFromQuoteAPI(data);
    } 
    fetchingQuoteAPI();
  }, [dataFromQuoteAPI]);

  return (
    <>
          <div style={{ marginBottom: '50px' }}>
        <Header />
      </div>
      <div>
        <Grid diet={diet} setDiet={setDiet} bodyPart={bodyPart} setBodyPart={setBodyPart} dataFromRecipeAPI={dataFromRecipeAPI} dataFromTrainingAPI={dataFromTrainingAPI} />
      </div>
    </>
  )
}

export default App;