import axios from "axios";

export const Tmdb = {
    async getPopularMovies () {
        try {
            const response = await fetch(`http://localhost:8000/discover/movie/`);
            if(response.ok) {
                const jsonResponse = await response.json();
                return Object.values(jsonResponse);
            }
            throw new Error('Request to get Popular Movies failed.');
        } catch (error) {
            console.log(error);
        }
    },
    async getMovieDetails (movieId) {
        await axios.get('http://localhost:8000/movie/', {
            params: {
                id: movieId
            }
        })
        .then(response => {
            console.log(`Response is ${response.data}`)
            return response.data;
        })
    }
}