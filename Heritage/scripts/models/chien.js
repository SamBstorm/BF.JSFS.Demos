import { Mamifere } from "./mamifaire.js";

export class Chien extends Mamifere{

    constructor(couleur, typePoil, nbPatte, alim, genre){
        super('Wouf wouf!','Canidé',nbPatte, alim, genre, 6);
        this.poil = { couleur :couleur, type : typePoil};
    }

    regarder(){
        super.regarder('toujours tout droit');
        console.log('... bien le jour, et en noir et blanc.');
    }

    vaChercher(){
        console.log('Où ça? Où ça!');
    }

    toString(){
        return JSON.stringify(this);
    }
}