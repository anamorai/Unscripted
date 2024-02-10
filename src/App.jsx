import Grid from './components/Grid';
import { useEffect } from 'react';
import axios from "axios";

function App() {

  const fetchRecipeAPI = async (url) => {
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
    fetchRecipeAPI("http://localhost:8000/random-vegaterian");
  }, []);

  useEffect( () => {
    fetchRecipeAPI("http://localhost:8000/biceps");
  }, []);


  return (
    <>
      <div>
        <h1>Manage your productivity here</h1>
        <Grid />
      </div>
    </>
  )
}

export default App;