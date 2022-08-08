import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
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
              <div className="searchWrapper">
                <form onSubmit={handleSubmit}>
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Search Movies..."
                  inputProps={{ 'aria-label': 'search movies' }}
                  name="searchInput"
                  id="searchBar"
                />
                <IconButton type="submit" id="searchButton" sx={{ p: '10px' }} aria-label="search">
                  <SearchIcon />
                </IconButton>
                </form>
              </div>
        </Box>
      </Modal>
    </div>
  );
}
