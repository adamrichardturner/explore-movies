import { useParams, useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button';
import './MovieDetail.module.css';
import { updateSelectedMovieId, clearSelectedMovieData, getMovieDetails } from './movieDetailSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { getFavouriteMovieDetails, updateFavourites, removeFavourites } from '../Favourites/favouritesSlice';
import Loader from '../Loader/Loader.svg';
import Placeholder from './explore-movies-backdrop.jpg';

export const MovieDetail = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();
    const movieData = useSelector(state => state.selectedMovie.selectedMovieData);
    const favourites = useSelector(state => state.favourites.movies);
    const isLoading = useSelector(state => state.selectedMovie.isLoading);
    let { title,
          overview,
          backdrop_path,
          vote_average,
          release_date } = movieData;

    const handleClick = () => {
        if(favourites.includes(id)) {
            dispatch(removeFavourites(id));
        } else {
            dispatch(updateFavourites(id));
            dispatch(getFavouriteMovieDetails(id));
        }
    }

    useEffect(() => {
        dispatch(updateSelectedMovieId(id));
        dispatch(getMovieDetails(id))
        return () => {
            dispatch(updateSelectedMovieId(''));
            dispatch(clearSelectedMovieData())
        }
    },[dispatch, id])

    const movieDetails = (
    <>
        <div className="movieDetailImage">
            <img src={backdrop_path ? `https://image.tmdb.org/t/p/original${backdrop_path}` : Placeholder} alt={title}/>
            <div className="movieDetailButtonWrapper">
                <button>Released: {release_date}</button>
                <button>Average Rating: {Math.floor(vote_average)}</button>
            </div>
            <StarBorderIcon 
            id="addToFavourite"
            onClick={handleClick}
            className={favourites.includes(id) ? "favourite" : "notFavourite"}
            />
        </div>
        <h2>{title}</h2>
        <article className="movieDetailOverview">
            <p>{overview}</p>
        </article>
        <div id="movieDetailHead">
            <Button variant="contained"
                    onClick={() => navigate(-1)}>
            Back
            </Button>
        </div>
    </>
    );

    return (
        <div className="movieDetailWrapper">
            {isLoading ? <img src={Loader} id="loadingAnimation" alt="Loading"/> : movieDetails}
        </div>
    );
};