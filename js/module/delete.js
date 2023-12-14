import { db } from './firebaseConfig.js';
import { 
    deleteDoc, collection,
    
} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

async function deleteMovie(id) {
    try {
      await deleteDoc(doc(db, "movie", id));
    } catch (error) {
      console.log(`ERROR: ${error}`);
    }
  }


  const deleteButtonElem = document.createElement("input");
  deleteButtonElem.setAttribute("id", "delete-Btn");
  deleteButtonElem.setAttribute("type", "button");
  deleteButtonElem.value = "delete";

  //delete a movie from database
  deleteButtonElem.addEventListener("click", async function () {
    await deleteMovie(id);
    displayUpdatedMovieList();
  });
  titleElem.innerText = "Movie Name : " + movie.title;
  genreElem.innerText = "Genre : " + movie.genre;
  releaseDateElem.innerText = "Released On : " + movie.releaseDate;

  articleElem.append(titleElem);
  articleElem.append(genreElem);
  articleElem.append(releaseDateElem);
  articleElem.append(watchedButtonElem);
  articleElem.append(deleteButtonElem);

  movieSection.append(articleElem);
  document.querySelector("#seeMovieBtn").addEventListener("click", function () {
    location.reload();
  });


