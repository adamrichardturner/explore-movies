import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import './Loader.css';

export const Loader = () => {
  return (
    <div className="loaderWrapper">
      <Box sx={{ display: 'flex', justifyContent: 'center'}}>
        <CircularProgress />
      </Box>
    </div>
  );
}