import { Animal } from "./animal.js";

export class Mamifere extends Animal{
    constructor(cri, race, nbPatte, alim , genre, nbMamelle){
        super(cri, race, nbPatte, alim, genre)
        this.nbMamelle = nbMamelle;
    }

    seReproduire(){
        super.seReproduire();
        console.log('... dans mon ventre.');
    }
} 