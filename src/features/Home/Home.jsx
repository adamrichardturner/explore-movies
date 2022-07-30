import { useEffect } from 'react';
import { MovieCard } from '../../components/MovieCard/MovieCard';
import Styles from './Home.module.css';
import { Tmdb } from '../../util/Tmdb';
import { useDispatch } from 'react-redux';
import { updateHomeMovies } from './homeSlice';
import { useSelector } from 'react-redux';
import { getHomeMovies } from './homeSlice';

export const Home = () => {
    const dispatch = useDispatch();
    const activeHomeMovies = useSelector(state => state.home);

    console.log(activeHomeMovies)

    useEffect(() => {
        dispatch(getHomeMovies())
      }, [dispatch])

    return (
        <main className="movieCards" style={Styles}>
            <MovieCard />
        </main>
    )
}