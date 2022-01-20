import { CahierDeNotes } from "./models/cahierDeNote.js";

let note = new CahierDeNotes();

note.ajouterNote("Samuel",20);
note.ajouterNote("Jérome", 10);
note.ajouterNote("Jérome", 8);

console.log(note);