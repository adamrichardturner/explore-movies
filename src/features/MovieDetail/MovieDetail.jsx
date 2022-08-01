import { useParams, useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button';
import './MovieDetail.module.css';
import { updateSelectedMovieId } from './movieDetailSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getMovieDetails } from './movieDetailSlice';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { updateFavourites } from '../Favourites/favouritesSlice';
import { getFavouriteMovieDetails, removeFavourites } from '../Favourites/favouritesSlice';

export const MovieDetail = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();
    const movieData = useSelector(state => state.selectedMovie.selectedMovieData);
    const favourites = useSelector(state => state.favourites.movies);
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
    },[dispatch, id])

    return (
        <>
            <div className="movieDetailWrapper">
                <div className="movieDetailImage">
                    <img src={`https://image.tmdb.org/t/p/original${backdrop_path}`} alt={title}/>
                    <div className="movieDetailButtonWrapper">
                        <button>Released: {release_date}</button>
                        <button>Average Rating: {Math.floor(vote_average)}</button>
                    </div>
                    <StarBorderIcon 
                    id="addToFavourite"
                    onClick={handleClick}
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
            </div>
        </>
    );
};