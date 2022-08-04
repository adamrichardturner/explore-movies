# Explore Movies | TMdb React & Redux Movie App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

Explore Movies features a responsive movie grid of popular and trending movies. The data used in this application is sourced from [The Movie Database (TMdb) API](https://developers.themoviedb.org/3). The app was built primarily with React, React Router v6 & React-Redux toolkit, with use of Material UI components such as a Card and AppBar that have been customized.

## Demo

You can [view a live demo of this project deployed on my portfolio.](https://adamrichardturner.dev/projects/explore-movies/)

## Features

1. Responsive Home & Trending Gallery of Popular Movies - The homepage serves 20 of the most popular movies on TMdb. There is also a Trending page that returns trending movies. 

2. Movie Details View - Users can click an individual movie card and it will serve a page with metadata regarding the chosen movie.

3. Add to Favourite Functionality - It is possible to add movies to a favourites list and peruse this, though no persistent storage is used.

4. Search - Queries made will use the search API endpoint and return movies related to the keywords used.

## Future Enhancements

1. Infinite Scroll - It is possible to fetch pages of more than 20 movie data requests (according to the API documentation, up to 1000 pages). It would be interesting to implement an infinte scroll feature where the user fetches more movies on scroll.

2. Persistent Storage - Using browser based features or a backend with database, it would be useful to implement saving to favourites per user. 

3. More information on the Movie Details View - It would be useful to include Movie trailers, links to the website for the movie and actor details.

## Getting Started

Clone the repository and add a .env file in the src directory.

Visit and register at [TMDb API](https://developers.themoviedb.org/3/getting-started/introduction) to obtain an API key.

Place your API key in a env. file and store in project root as follows:

TMDB_API_KEY="API KEY HERE"

## Available Scripts

In the project directory, you can run:

### `npm run start:backend` 
### `npm run start:frontend`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
