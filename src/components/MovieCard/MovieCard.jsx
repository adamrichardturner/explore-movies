import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

export const MovieCard = ({title, image}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="auto"
        image={`https://image.tmdb.org/t/p/original${image}`}
        alt={title}
      />
    </Card>
  );
}