import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import './MovieCard.css';

export const MovieCard = ({title, image}) => {
  return (
    <div className="cardContainer">
        <Card>
            <CardMedia
                component="img"
                height="auto"
                image={`https://image.tmdb.org/t/p/original${image}`}
                alt={title}
            />
        </Card>
        <div className="cardOverlay">
            <div className="text">{title}</div>
        </div>
        <div className="textMobile">{title}</div>
    </div>
  );
}