import { MovieCard } from '../../components/MovieCard/MovieCard';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const Favourites = () => {
    const isLoading = useSelector(state => state.favourites.isLoading);
    const movies = useSelector(state => state.favourites.selectedMovieData);
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
        )
    });

    return (
        <div className="homeGrid">
            {movieCards}
        </div>
    )
}