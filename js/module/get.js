import { db } from "../firebaseConfig.js";
import {
  getDocs,
  collection,
  deleteDoc,
  doc,
  updateDoc,
} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

async function getMovielist() {
  const movies = await getDocs(collection(db, "movies"));
  return movies;
}
// Function for deleting movie
async function deleteMovie(id) {
  try {
    await deleteDoc(doc(db, "movies", id)).then(() => {
      console.log("Deleted doc id successfully " + id);
    });
  } catch (error) {
    console.log(`ERROR: ${error}`);
  }
}

// Function for update
async function updateMovieStatus(id, watchedStatus) {
  try {
    await updateDoc(doc(db, "movies", id), {
      watched: watchedStatus,
    }).then(() => {
      console.log(" updated watch status successfully");
    });
  } catch (error) {}
}

//function for form
const formSection = document.querySelector("#form");
const movieSection = document.querySelector("#movieList");

function createMovieForm(document, docid, movie) {
  document.getElementById("listMovieButton").innerText = "See MovieList";
  formSection.style.display = "flex";
  movieSection.style.display = "none";
  const formElem = document.createElement("form");
  formElem.setAttribute("id", "movieForm");
formElem.setAttribute("class", "displayMovie");
  // input elements for form

  const titleElem = document.createElement("input");

  titleElem.setAttribute("type", "text");
  titleElem.value = movie.title;
  titleElem.required = true;
  titleElem.setAttribute("placeholder", "Title:");
  titleElem.setAttribute("id", "movie-title");
  titleElem.addEventListener("keyup", async (e) => {
    console.log(e.target.value);
    const movieL = await checkTitle(e.target.value);
    if (movieL.empty) {
      console.log("empty");
      deleteButton.removeAttribute("disabled");
    }
  });

  const genreElem = document.createElement("input");
  genreElem.value = movie.genre;
  genreElem.setAttribute("placeholder", "Genre:");
  genreElem.setAttribute("id", "genre");

  const releaseDateElem = document.createElement("input");

  releaseDateElem.setAttribute("type", "text");
  releaseDateElem.setAttribute("placeholder", "Release Date:");
  releaseDateElem.value = movie.releaseDate;
  releaseDateElem.setAttribute("id", "releaseDate");

  const deleteButton = document.createElement("input");
  deleteButton.setAttribute("type", "button");
  deleteButton.setAttribute("class", "btn");

  deleteButton.setAttribute("docid", docid);
  deleteButton.value = "Delete";

  deleteButton.addEventListener("click", () => {
    try {
      console.log("Deleting docid=" + docid);
      deleteMovie(docid);
      // Remove all the elements of this form
      titleElem.remove();
      genreElem.remove();
      releaseDateElem.remove();
      watchedButton.remove();
      deleteButton.remove();
    } catch (error) {
      console.log(`ERROR: ${error}`);
    }
  });

  // Watched status button
  const watchedButton = document.createElement("input");
  watchedButton.setAttribute("type", "button");
  watchedButton.setAttribute("class", "btn");
  watchedButton.setAttribute("docid", docid);
  if (movie.watched == true) watchedButton.value = "Watched ";
  else watchedButton.value = "Not Watched ";

  watchedButton.addEventListener("click", () => {
    try {
      console.log("updating wached status of  docid=" + docid);
      updateMovieStatus(docid, !movie.watched);
      movie.watched = ! movie.watched;
      if (movie.watched == true) 
        watchedButton.value = "Watched ";
      else 
        watchedButton.value = "Not Watched ";
    } catch (error) {
      console.log(`ERROR: ${error}`);
    }
  });
  formElem.append(titleElem);
  formElem.append(genreElem);
  formElem.append(releaseDateElem);
  formElem.append(deleteButton);
  formElem.append(watchedButton);
  formSection.append(formElem);
}

export { getMovielist, createMovieForm };
