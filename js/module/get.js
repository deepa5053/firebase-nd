import { db } from '../firebaseConfig.js';
import { 
    getDocs, collection,
    
} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";


async function getMovielist () {

    const movies = await getDocs(collection(db, 'movies'));
    return movies;

}

export {getMovielist};