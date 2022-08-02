import { useEffect } from "react";
import { MovieCard } from "../../components/MovieCard/MovieCard";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loader from '../Loader/Loader.svg';

export const Search = () => {
    const isLoading = useSelector(state => state.search.isLoading);
    const movies = useSelector(state => state.search.movies);
    const movieCards = !isLoading && Object.values(movies.results).map((movie, index) => {
        return (
            <Link to={`/movie/${movie.id}`} key={index + 1}>
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

    })

    return (
        <div className="homeGrid">
            {isLoading ? <img src={Loader} id="loadingAnimation" alt="Loading"/> : movieCards}
        </div>
    );
};