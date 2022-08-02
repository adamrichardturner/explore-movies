import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import './MovieCard.css';
import Placeholder from './explore-movies-poster.jpg';

export const MovieCard = ({title, image}) => {
  return (
    <div className="cardContainer">
        <Card>
            <CardMedia
                component="img"
                height="auto"
                image={image ? `https://image.tmdb.org/t/p/original${image}` : Placeholder}
                alt={title}
            />
        </Card>
        <div className="cardOverlay">
            <div className="text">{title}</div>
        </div>
    </div>
  );
}