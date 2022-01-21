import { Animal } from "./animal.js";

export class Ovipare extends Animal{
    constructor(cri, race, nbPatte, alim, genre, tailleOeuf){
        super(cri,race,nbPatte, alim, genre);
        this.tailleOeuf = tailleOeuf;
    }

    seReproduire(){
        super.seReproduire();
        console.log("... dans un oeuf.")
    }
} 