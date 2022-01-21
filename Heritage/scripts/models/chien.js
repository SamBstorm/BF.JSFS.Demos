import { Animal } from "./animal.js";

export class Chien extends Animal{

    constructor(couleur, typePoil, nbPatte, alim, genre){
        super('Wouf wouf!','Canidé',nbPatte, alim, genre);
        this.poil = { couleur :couleur, type : typePoil};
    }

    regarder(){
        super.regarder();
        console.log('... bien le jour, et en noir et blanc.');
    }

    vaChercher(){
        console.log('Où ça? Où ça!');
    }
}