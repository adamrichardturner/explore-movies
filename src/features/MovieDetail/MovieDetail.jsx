import { useParams, useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button';
import './MovieDetail.module.css';
import { updateSelectedMovieId } from './movieDetailSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getMovieDetails } from './movieDetailSlice';

export const MovieDetail = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const dispatch = useDispatch();
    const movieData = useSelector(state => state.selectedMovie.selectedMovieData);
    console.log(movieData)
    let { title,
          overview,
          backdrop_path,
          vote_average,
          release_date } = movieData;

    useEffect(() => {
        dispatch(updateSelectedMovieId(id));
        dispatch(getMovieDetails(id))
    },[dispatch, id])

    console.log(backdrop_path)
    return (
        <>
            <div className="movieDetailWrapper">
                <div className="movieDetailImage">
                    <img src={`https://image.tmdb.org/t/p/original${backdrop_path}`} alt={title}/>
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