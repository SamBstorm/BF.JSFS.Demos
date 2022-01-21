export class Animal{

    constructor( cri, race, nbPatte, alim, genre ){
        this.cri = cri;
        this.race = race;
        this.nbPatte = nbPatte;
        this.regimeAlimentaire = alim;
        this.genre = genre;
    }

    regarder(){
        console.log('Je vois...');
    }

    seReproduire(){
        console.log('Je me reproduis...')
    }
}