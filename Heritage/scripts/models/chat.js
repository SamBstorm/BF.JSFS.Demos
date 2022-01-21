import { Animal } from "./animal.js";

export class Chat extends Animal{

    constructor(couleur, nbPatte, alim, genre){
        super('Miaou', 'Félidé', nbPatte, alim, genre)
        //this.cri = 'Miaou';
        this.pelage = couleur;
    }

    regarder(){
        //Animal.prototype.regarder.call(this)
        super.regarder();
        console.log('... bien dans le jour et dans la nuit');
    }

    ronronne(){
        console.log('Je ronronne');
    }
}