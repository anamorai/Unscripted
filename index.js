import express from "express";
import cors from "cors";
import axios from "axios";
import "dotenv/config";

const PORT = 8000;

const app = express();

app.use(cors());

const fetchTrainingAPI = async (bodyPart, res) => {
  const options = {
    method: "GET",
    url: "https://work-out-api1.p.rapidapi.com/search",
    params: {
      Muscles: bodyPart,
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
};

const fetchRecipeAPI = async (diet, res) => {
  const options = {
    method: "GET",
    url: "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random",
    params: {
      diet,
      number: "3",
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
};

// Fetching Quote API
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

// Fetching Meal API
app.get("/vegaterian", async (req, res) => {
  fetchRecipeAPI("vegaterian", res);
});

app.get("/vegan", async (req, res) => {
  fetchRecipeAPI("vegan", res);
});

app.get("/breakfast", async (req, res) => {
  fetchRecipeAPI("breakfast", res);
});

app.get("/lunch", async (req, res) => {
  fetchRecipeAPI("lunch", res);
});

app.get("/dinner", async (req, res) => {
  fetchRecipeAPI("dinner", res);
});

app.get("/healthy", async (req, res) => {
  fetchRecipeAPI("healthy", res);
});

// Fetching Training API
app.get("/chest", async (req, res) => {
  fetchTrainingAPI("chest", res);
});

app.get("/back", async (req, res) => {
  fetchTrainingAPI("back", res);
});

app.get("/legs", async (req, res) => {
  fetchTrainingAPI("legs", res);
});

app.get("/abs", async (req, res) => {
  fetchTrainingAPI("abs", res);
});

app.get("/shoulders", async (req, res) => {
  fetchTrainingAPI("shoulders", res);
});

app.get("/stretching", async (req, res) => {
  fetchTrainingAPI("stretching", res);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
