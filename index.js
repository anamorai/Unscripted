import express from "express";
import cors from "cors";
import axios from "axios";
import "dotenv/config";

const PORT = 8000;

const app = express();

app.use(cors());

app.get("/quote", async (req, res) => {
  const options = {
    method: "GET",
    url: "https://quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com/quote",
    params: {
      token: "ipworld.info",
    },
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
      "X-RapidAPI-Host":
        "quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    res.json(response.data);
  } catch (error) {
    console.error(error);
  }
});

app.get("/random-vegaterian", async (req, res) => {
  const options = {
    method: "GET",
    url: "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random",
    params: {
      diet: "vegetarian",
      number: "5",
    },
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
      "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    res.json(response.data);
  } catch (error) {
    console.error(error);
  }
});

app.get("/biceps", async (req, res) => {
  const options = {
    method: "GET",
    url: "https://work-out-api1.p.rapidapi.com/search",
    params: {
      Muscles: "biceps",
    },
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
      "X-RapidAPI-Host": "work-out-api1.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    res.json(response.data);
  } catch (error) {
    console.error(error);
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
