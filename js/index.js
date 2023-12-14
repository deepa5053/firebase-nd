import { db } from './firebaseConfig.js';
import {
    addMovie
} from './module/add.js';
import {
    getMovielist
} from './module/get.js';
// Add movie button
const addMoviesButton = document.querySelector('#addMoviesButton');
addMoviesButton.addEventListener('click', () => {
    const movie = {
        title: document.querySelector('#title').value,
        genre: document.querySelector('#genre').value,
        releaseDate:  document.querySelector('#releaseDate').value
      }
try {
    addMovie(movie).then((res)=> {
        // ON successful addition clear the Dialog
        document.querySelector('#title').value ="";
        document.querySelector('#genre').value = "";
        document.querySelector('#releaseDate').value ="";
    });
} catch (error) {
    console.log(`ERROR: ${error}`);
}
      
});

// Movie list button event listner

const movieListButton = document.querySelector('#listMovieButton');
movieListButton.addEventListener('click', () => {
   try {
    getMovielist ().then ((movies) => {
        movies.forEach(doc => {
            const movie = doc.data();
           // console.log('title=' + movie.title);
            formSection.style.display = "flex";
  movieSection.style.display = "none";

  // Create a form dynamically
  const formElem = document.createElement("form");
  formElem.setAttribute("id", "movieForm");

  // Create input elements for form

  const titleElem = document.createElement("input");

  titleElem.setAttribute("type", "text");
  // titleElem.setAttribute("required", "required");
  //titleElem.required = true;
  titleElem.setAttribute("placeholder", "Title:");
  titleElem.setAttribute("id", "movie-title");
        });
    });
    
   } catch (error) {
    console.log(`ERROR: ${error}`);
   }
    
});
