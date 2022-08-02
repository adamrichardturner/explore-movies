import { useEffect } from 'react';
import { MovieCard } from '../../components/MovieCard/MovieCard';
import './Home.module.css';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getHomeMovies } from './homeSlice';
import Loader from '../Loader/Loader.svg';

export const Home = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.home.loading);
    const movies = useSelector(state => state.home.movies);
    const movieCards = !isLoading && Object.values(movies).map(movie => {
        return (
            <Link to={`/movie/${movie.id}`} key={movie.id}>
                <MovieCard 
                    key={movie.title}
                    title={movie.title}
                    image={movie.poster_path}
                    movieId={movie.id}
                />
            </Link>
        )
    });

    useEffect(() => {
        dispatch(getHomeMovies());
      }, [dispatch]);

    return (
        <div className="homeGrid">
            {isLoading ? <img src={Loader} id="loadingAnimation" alt="Loading"/> : movieCards}
        </div>
    )
}