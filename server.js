const PORT = 8000;
const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();
const app = express();

const BASE_URL = "https://api.themoviedb.org/3";

const popularEndpoint = "/discover/movie";
const popularQuery = "&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate"
const fullPopularQuery = `${BASE_URL}${popularEndpoint}?api_key=${process.env.TMDB_API_KEY}${popularQuery}`;

app.use(cors());
  
app.get(popularEndpoint, (req, res) => {
    const options = {
        method: 'GET',
        url: fullPopularQuery
    }
    axios.request(options).then((response) => {
        console.log(response.data.results)
        res.json(response.data.results);

    }).catch((error) => {
        console.error(error);
    })
})

const selectedMovieEndpoint = "/movie/";
const selectedQuery = "&language=en-US";

app.get(selectedMovieEndpoint, (req, res) => {
    const id = req.query.id;
    const options = {
        method: 'GET',
        url: `${BASE_URL}${selectedMovieEndpoint}${id}?api_key=${process.env.TMDB_API_KEY}${selectedQuery}`
    }
    axios.request(options).then((response) => {
        res.json(response.data);
    }).catch((error) => {
        console.error(error);
    })
})

const trendingEndpoint = "/trending";
const trendingData = "/movie/week";
const fullTrendingQuery = `${BASE_URL}${trendingEndpoint}${trendingData}?api_key=${process.env.TMDB_API_KEY}`;

app.get(trendingEndpoint, (req, res) => {
    const options = {
        method: 'GET',
        url: fullTrendingQuery
    }
    axios.request(options).then((response) => {
        res.json(response.data.results);

    }).catch((error) => {
        console.error(error);
    })
})


app.listen(8000, () => console.log(`Server is running on port ${PORT}`));