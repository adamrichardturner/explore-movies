import { MovieCard } from "../../components/MovieCard/MovieCard";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loader from '../Loader/Loader.svg';
import { Pagination } from "../../components/Pagination/Pagination";
import { useEffect } from "react";
import { getSearchQueryMovies } from "../SearchBar/searchBarSlice";
import { useDispatch } from "react-redux";

export const Search = () => {
    const isLoading = useSelector(state => state.search.isLoading);
    const movies = useSelector(state => state.search.movies);
    const page = useSelector(state => state.pagination.page);
    const searchTerm = useSelector(state => state.search.searchTerm);
    const dispatch = useDispatch();
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
        dispatch(getSearchQueryMovies({
            search: searchTerm,
            pageNum: page
        }))
        window.scrollTo(0, 0);
    }, [dispatch, page, searchTerm])

    return (
        <>
            <div className="homeGrid">
                {isLoading ? <img src={Loader} id="loadingAnimation" alt="Loading"/> : movieCards}
            </div>
            {isLoading ? null : <Pagination />}
        </>
    );
};