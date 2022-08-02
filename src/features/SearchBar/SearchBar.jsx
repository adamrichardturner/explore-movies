import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import SearchIcon from '@mui/icons-material/Search';
import { getSearchQueryMovies, updateSearchTerm, clearSearchTerm } from './searchBarSlice';
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
  const searchTerm = useSelector(state => state.search.searchTerm);
  const handleSearch = (event) => {
      dispatch(updateSearchTerm(event.target.value));
  }
  const navigate = useNavigate();
  const handleSubmit = (event) => {
      event.preventDefault();
      dispatch(getSearchQueryMovies(searchTerm))
      dispatch(clearSearchTerm())
      handleModalOpen();
      navigate('/search')
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
                <input type="text" placeholder="Search.." id="searchBar" value={searchTerm} onChange={handleSearch}/>
                <button type="submit" id="searchButton"><SearchIcon /></button>
            </form>
        </Box>
      </Modal>
    </div>
  );
}
