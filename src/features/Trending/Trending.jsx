import { useEffect } from "react";
import { MovieCard } from "../../components/MovieCard/MovieCard";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTrendingMovies } from "./trendingSlice";
import { Loader } from '../Loader/Loader';

export const Trending = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.trending.loading);
    const movies = useSelector(state => state.trending.movies);
    const movieCards = !isLoading && Object.values(movies).map(movie => {
        return (
            <Link to={`/movie/${movie.id}`} key={movie.id}>
                <MovieCard 
                    key={movie.title}
                    title={movie.title}
                    image={movie.backdrop_path}
                    movieId={movie.id}
                />
            </Link>
        )
    });

    useEffect(() => {
        dispatch(getTrendingMovies());
    }, [dispatch]);
    return (
        <div className="homeGrid">
            {isLoading ? <Loader /> : movieCards}
        </div>
    );
};