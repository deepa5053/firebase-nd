import { db } from '../firebaseConfig.js';
import { 
    getDocs, collection, deleteDoc,doc
    
} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";


async function getMovielist () {

    const movies = await getDocs(collection(db, 'movies'));
    return movies;

}
// Function for deleting movie
async function deleteMovie(id) {
    try {
      await deleteDoc(doc(db, "movies", id)).then (()=> {
        console.log("Deleted doc id successfully " + id);
      });
    } catch (error) {
      console.log(`ERROR: ${error}`);
    }
  }

//function for form
    const formSection = document.querySelector("#form");
    const movieSection = document.querySelector("#movieList");
    const confirmationSection = document.querySelector("#confirmation");
function createMovieForm(document, docid, movie){
    

 
    document.getElementById("listMovieButton").innerText = "See MovieList";
    //headSection.style.display = "none";
    formSection.style.display = "flex";
    movieSection.style.display = "none";
  
    //dynamic form
    const formElem = document.createElement("form");
    formElem.setAttribute("id", "movieForm");
  
    // input elements for form
  
    const titleElem = document.createElement("input");
  
    titleElem.setAttribute("type", "text");
    titleElem.value=movie.title;
    
    // titleElem.setAttribute("required", "required");
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
    genreElem.value=movie.genre;
    genreElem.setAttribute("placeholder", "Genre:");
    //genreElem.setAttribute("id", "movie-genre");
    genreElem.setAttribute("id", "genre");
  
    const releaseDateElem = document.createElement("input");
    
    releaseDateElem.setAttribute("type", "text");
    releaseDateElem.setAttribute("placeholder", "Release Date:");
    releaseDateElem.value=movie.releaseDate;
    releaseDateElem.setAttribute("id", "releaseDate");
  
    const deleteButton = document.createElement("input");
    deleteButton.setAttribute("type", "button");
    //deleteButton.setAttribute("id", "submitFormBtn");
    deleteButton.setAttribute("docid", docid);
    deleteButton.value = "Delete";
    
    deleteButton.addEventListener("click", () => {
        try {
          console.log("Deleting docid="+docid);
          deleteMovie(docid);
        } catch (error) {
          console.log(`ERROR: ${error}`);
        }
      });
    formElem.append(titleElem);
    formElem.append(genreElem);
    formElem.append(releaseDateElem);
    formElem.append(deleteButton);
  
    formSection.append(formElem);
  }
  
  

export {getMovielist, createMovieForm};
