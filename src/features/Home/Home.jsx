import { useEffect } from 'react';
import { MovieCard } from '../../components/MovieCard/MovieCard';
import './Home.module.css';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getHomeMovies } from './homeSlice';
import Loader from '../Loader/Loader.svg';
import { Pagination } from '../../components/Pagination/Pagination';

export const Home = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.home.loading);
    const movies = useSelector(state => state.home.movies);
    const page = useSelector(state => state.pagination.page);
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
        dispatch(getHomeMovies(page));
        window.scrollTo(0, 0);
      }, [dispatch, page]);

    return (
        <>
            <div className="homeGrid">
                {isLoading ? <img src={Loader} id="loadingAnimation" alt="Loading"/> : movieCards}
            </div>
            {isLoading ? null : <Pagination />}
        </>
    )
}