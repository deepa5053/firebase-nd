import { db } from './firebaseConfig.js';
import {
    addMovie
} from './module/add.js';
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


