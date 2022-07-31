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

    useEffect(() => {
        dispatch(updateSelectedMovieId(id));
        dispatch(getMovieDetails(id))
    },[dispatch, id])

    const movieData = useSelector(state => state.selectedMovie.selectedMovieData);

    return (
        <div className="movieDetailWrapper">
            <div id="movieDetailHead">
                <Button variant="contained"
                        onClick={() => navigate(-1)}>
                Back
                </Button>
            </div>
            <div 
            id="movieDetailPoster"
            // style={{
            //     backgroundImage: `url("https://image.tmdb.org/t/p/original${movieData.backdrop_path}")`
            // }}
            >
            </div>
        </div>
    );
};