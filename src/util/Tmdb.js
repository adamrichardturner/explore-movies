import axios from "axios";

export const Tmdb = {
    async getPopularMovies (page) {
        const response = await axios.get('http://localhost:8000/discover/movie/', {
            params: {
                page: page
            }
        });
        return await Object.values(response);
    },
    async getTrendingMovies (page) {
        const response = await axios.get('http://localhost:8000/trending/', {
            params: {
                page: page
            }
        });
        return await Object.values(response);
    },
    async getMovieDetails (movieId) {
        const response = await axios.get('http://localhost:8000/movie/', {
            params: {
                id: movieId
            }
        });
        return await Object.values(response);
    },
    async getMovieFromSearch (searchTerm, page) {
        const response = await axios.get('http://localhost:8000/search/movie', {
            params: {
                term: searchTerm,
                page: page
            }
        });
        return await Object.values(response);
    }
};