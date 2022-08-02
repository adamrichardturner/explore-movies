import { MovieCard } from '../../components/MovieCard/MovieCard';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarBorder from '@mui/icons-material/StarBorder';

export const Favourites = () => {
    let movies = useSelector(state => state.favourites.selectedMovieData);
    const noFavourites = <h2>You have no favourites saved! Add some...<StarBorderIcon /></h2>
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
            {movies.length > 0 ? movieCards : noFavourites}
        </div>
    )
}