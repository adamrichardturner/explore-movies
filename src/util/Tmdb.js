export const Tmdb = {
    async getPopularMovies () {
        try {
            const response = await fetch("http://localhost:8000/discover/movie");
            if(response.ok) {
                const jsonResponse = await response.json();
                return Object.values(jsonResponse);
            }
            throw new Error('Request for Discover Popular Movies failed.');
        } catch (error) {
            console.log(error);
        }
    }
}