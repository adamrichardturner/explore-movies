import { MovieCard } from '../../components/MovieCard/MovieCard';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

export const Favourites = () => {
    const isLoading = useSelector(state => state.favourites.isLoading);
    const movies = useSelector(state => state.favourites.selectedMovieData);
    const navigate = useNavigate();
    const movieCards = !isLoading && Object.values(movies).map((movie, index) => {
        return (
            <Link to={`/movie/${movie.id}`} key={movie.id}>
                <MovieCard 
                    key={index}
                    title={movie.title}
                    image={movie.poster_path}
                    movieId={movie.id}
                />
            </Link>
        );
    });

    const noFavourites = () => {
        return (
            <>
                <h2 id="favouritesHeader">Save Some Favourites...</h2>
                <Button variant="contained"
                    onClick={() => navigate(-1)}>
                Back
                </Button>
            </>
        );
    };

    return (
        <>
        {movies.length > 0 ? <h2 id="favouritesHeader">Favourites</h2> : noFavourites()}
            <div className="favouritesGrid">
                {movieCards}
            </div>
        </>
    );
};