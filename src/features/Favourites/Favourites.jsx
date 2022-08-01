import { useEffect } from 'react';
import { MovieCard } from '../../components/MovieCard/MovieCard';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getMovieDetails } from './favouritesSlice';
import { Loader } from '../Loader/Loader';

export const Favourites = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.favourites.loading);
    const movieIds = useSelector(state => state.favourites.movies);
    let movies = useSelector(state => state.favourites.selectedMovieData);
    const movieCards = !isLoading && Object.values(movies).map((movie, index) => {
        console.log(movie.id)
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

    useEffect(() => {
    }, [])

    return (
        <div className="homeGrid">
            {isLoading ? <Loader /> : movieCards}
        </div>
    )
}