import { MovieCard } from '../../components/MovieCard/MovieCard';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const Favourites = () => {
    let movies = useSelector(state => state.favourites.selectedMovieData);
    const movieCards = Object.values(movies).map((movie, index) => {
        return (
            <Link to={`/movie/${movie.id}`} key={movie.id}>
                <MovieCard 
                    key={index}
                    title={movie.title}
                    image={movie.backdrop_path}
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