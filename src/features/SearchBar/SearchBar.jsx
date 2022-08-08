import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import SearchIcon from '@mui/icons-material/Search';
import { getSearchQueryMovies, updateSearchTerm } from './searchBarSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'rgba(0,0,0, 0.98)',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export const SearchBar = ({handleModalOpen, open}) => {
  const dispatch = useDispatch();
  const page = useSelector(state => state.pagination.page);
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    const searchTerm = event.target.searchInput.value;
    if(searchTerm === undefined || searchTerm === '') {
      handleModalOpen();
      navigate('/search/404');
    } else {
      console.log('dispatching')
      dispatch(updateSearchTerm(searchTerm));
      dispatch(getSearchQueryMovies({
        search: searchTerm,
        pageNum: page
      }));
      handleModalOpen();
      navigate('/search')
    }
    event.preventDefault();
  }

  return (
    <div>
      <Modal
        open={open}
        onClose={handleModalOpen}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} id="searchBox">
            <form onSubmit={handleSubmit}>
              <div className="searchWrapper">
                <input type="text" placeholder="Search.." id="searchBar" name="searchInput" />
                <button type="submit" id="searchButton"><SearchIcon className="searchIcon"/></button>
              </div>
            </form>
        </Box>
      </Modal>
    </div>
  );
}
