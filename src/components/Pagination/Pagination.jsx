import { useDispatch, useSelector } from 'react-redux';
import './Pagination.css';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { incrementPage, decrementPage } from './paginationSlice';

export const Pagination = () => {
    const dispatch = useDispatch();
    const pageNum = useSelector(state => state.pagination.page);
    const handleDecrement = () => {
        dispatch(decrementPage())
    };
    const handleIncrement = () => {
        dispatch(incrementPage())
    }
    return (
        <aside className="pageArrows">
            <ArrowCircleLeftIcon 
            className={pageNum === 1 ? "firstPage" : "normalArrow"}
            onClick={handleDecrement}
            />
            {<p>{pageNum}</p>}
            <ArrowCircleRightIcon
            className={pageNum === 1000 ? "lastPage" : "normalArrow"}
            onClick={handleIncrement}
            />
      </aside>
    );
};