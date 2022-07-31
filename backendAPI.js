const PORT = 8000;
const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();

const BASE_URL = "https://api.themoviedb.org/3";

const endpoint = "/discover/movie";
const query = "&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate"
const fullQuery = `${BASE_URL}${endpoint}?api_key=${process.env.TMDB_API_KEY}${query}`;

app.use(cors());

app.get(endpoint, (req, res) => {
    const options = {
        method: 'GET',
        url: fullQuery
    }

    axios.request(options).then((response) => {
        res.json(response.data.results);

    }).catch((error) => {
        console.error(error);
    })
})

app.listen(8000, () => console.log(`Server is running on port ${PORT}`));