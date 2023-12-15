import { db } from "../firebaseConfig.js";
import {
  addDoc,
  collection,
} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";


// add movie function
async function addMovie(movie) {
  try {
    await addDoc(collection(db, "movies"), movie);
  } catch (error) {
    console.log(`ERROR: ${error}`);
    throw error;
  }
}

export { addMovie };
