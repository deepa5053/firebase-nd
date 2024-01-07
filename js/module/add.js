import { db } from "../firebaseConfig.js";
import {
  addDoc,
  collection,
} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";
import { getMovielist } from "./get.js";


// add movie function

async function addMovie(movie) {
  try {
    const moviesindb = await getMovielist();
    let movieexist = false;
    moviesindb.forEach((doc) => {
      const movieItem = doc.data();
      if (movieItem.title === movie.title) {
        movieexist = true;
      }
    });
      if (movieexist){
        console.log ("Duplicate moview list");
        alert(" Movie title already exists, please provide another title");
      }
      else {
        await addDoc(collection(db, "movies"), movie);
        alert('Movie added successfully');
      }
        
  } catch (error) {
    console.log(`ERROR: ${error}`);
    throw error;
  }
}

export { addMovie };
