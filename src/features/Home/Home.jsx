import { useEffect } from 'react';
import { MovieCard } from '../../components/MovieCard/MovieCard';
import './Home.module.css';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getHomeMovies } from './homeSlice';
import { Loader } from '../Loader/Loader';
import { CircularSpeedDial } from '../CircularSpeedDial/CircularSpeedDial';

export const Home = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.home.loading);
    const movies = useSelector(state => state.home.movies);
    const movieCards = !isLoading && Object.values(movies).map(movie => {
        return (
            <MovieCard 
                key={movie.title}
                title={movie.title}
                image={movie.backdrop_path}
            />
        )
    });

    useEffect(() => {
        dispatch(getHomeMovies())
      }, [dispatch])

    return (
        <main className="movieCards">
            {isLoading ? <Loader /> : movieCards}
            <CircularSpeedDial />
        </main>
    )
}