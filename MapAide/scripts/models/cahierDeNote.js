export class CahierDeNotes{
    #notes

    constructor(){
        this.#notes = new Map();
    }

    ajouterNote(eleve, note){
        if(this.#notes.has(eleve)){
            let oldNote = this.#notes.get(eleve)
            this.#notes.set(eleve,oldNote + note);
        }
        else{
            this.#notes.set(eleve,note);
        }
    }

    note(eleve){
        if(!this.#notes.has(eleve)) throw new RangeError('L\'élève n\'existe pas')
        return this.#notes.get(eleve)
    }
}