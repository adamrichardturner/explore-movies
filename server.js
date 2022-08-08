const path = require('path');
const PORT = process.env.PORT || 8000;
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();
// Serve static files from the React app
app.use(express.static(path.resolve(__dirname, "./client/build")));

app.use(cors());

const BASE_URL = "https://api.themoviedb.org/3";

const popularEndpoint = "/discover/movie";
const popularQuery = "&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_watch_monetization_types=flatrate"
const fullPopularQuery = `${BASE_URL}${popularEndpoint}?api_key=${process.env.TMDB_API_KEY}${popularQuery}`;
  
app.get(popularEndpoint, (req, res) => {
    const page = req.query.page;
    const options = {
        method: 'GET',
        url: fullPopularQuery + `&page=${page}`
    }
    axios.request(options).then((response) => {
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

const searchMovieEndpoint = "/search/movie";

app.get(searchMovieEndpoint, (req, res) => {
    const term = req.query.term;
    const page = req.query.page;
    const options = {
        method: 'GET',
        url: `${BASE_URL}${searchMovieEndpoint}?api_key=${process.env.TMDB_API_KEY}&query=${term}&include_adult=false&page=${page}`
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
    const page = req.query.page;
    const options = {
        method: 'GET',
        url: fullTrendingQuery + `&page=${page}`
    }
    axios.request(options).then((response) => {
        res.json(response.data.results);

    }).catch((error) => {
        console.error(error);
    })
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
  });

app.listen(8000, () => console.log(`Server is running on port ${PORT}`));