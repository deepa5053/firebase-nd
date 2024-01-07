import { db } from "./firebaseConfig.js";
import { addMovie } from "./module/add.js";
import { getMovielist, createMovieForm } from "./module/get.js";

// Add movie button
const addMoviesButton = document.querySelector("#addMoviesButton");
addMoviesButton.addEventListener("click", () => {
  const movie = {
    title: document.querySelector("#title").value,
    genre: document.querySelector("#genre").value,
    releaseDate: document.querySelector("#releaseDate").value,
  };
  try {
    addMovie(movie).then((res) => {
      // ON successful addition clear the Dialog
      document.querySelector("#title").value = "";
      document.querySelector("#genre").value = "";
      document.querySelector("#releaseDate").value = "";
      
    });
  } catch (error) {
    console.log(`ERROR: ${error}`);
  }
});

// Movie list button event listner

const movieListButton = document.querySelector("#listMovieButton");
movieListButton.addEventListener("click", () => {
  try {
    getMovielist().then((movies) => {
      movies.forEach((doc) => {
        const movie = doc.data();
        console.log("docid=" + doc.id);
        // console.log('title=' + movie.title);
        createMovieForm(document, doc.id, movie);
      });
    });
  } catch (error) {
    console.log(`ERROR: ${error}`);
  }
});
