#!/usr/bin/node
const request = require('request');

// Function to get the Star Wars movie title based on the provided movie ID
function getStarWarsMovieTitle(movieID) {
  const url = `https://swapi-api.alx-tools.com/api/films/${movieID}`;

  request(url, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      const movie = JSON.parse(body);
      console.log(`Title of Episode ${movie.episode_id}: ${movie.title}`);
    } else {
      console.error('Error fetching data from the Star Wars API');
    }
  });
}

// Check if the script is executed from the command line
if (require.main === module) {
  // Get the movie ID from the command line arguments
  const movieID = process.argv[2];

  if (!movieID || isNaN(movieID)) {
    console.error('Please provide a valid movie ID (integer) as the first argument.');
    process.exit(1);
  }

  getStarWarsMovieTitle(movieID);
}

module.exports = getStarWarsMovieTitle;

