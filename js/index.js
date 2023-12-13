import { db } from './firebaseConfig.js';
import { 
    addDoc, collection, getDocs, 
    where, query, deleteDoc,
    doc, updateDoc 
} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

// Add note button
const postNoteButton = document.querySelector('#postNotesButton');
postNoteButton.addEventListener('click', () => {
    const note = {
        username: document.querySelector('#usernamePost').value,
        title: document.querySelector('#title').value,
        note: document.querySelector('#note').value,
        createdAt: new Date().toLocaleDateString()
      }

      postNote(note);
});

// add note function
async function postNote(note) {
    try {
        await addDoc(collection(db, 'notes'), note)
    } catch (error) {
        console.log(`ERROR: ${error}`);
    }
}
async function getNotes(username) {
    try {
        const queryUsername = query(collection(db, 'notes'), where('username', '==', username));
        const notes = await getDocs(queryUsername);

        const formatedNotes = [];

        notes.forEach((note) => {
            const formatedNote = {
                id: note.id,
                note: note.data()
            }

            formatedNotes.push(formatedNote);
        });

        return formatedNotes;
    } catch (error) {
        console.log(`ERROR: ${error}`);
    }
}
// To test add note
// var note={
//     username : 'Vedika',
//     title: 'sample',
//     note: 'nilesh'
// }
// postNote(note).then(e => {
//     console.log("Added successfully");
// });