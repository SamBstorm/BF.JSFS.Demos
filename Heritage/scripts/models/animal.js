export class Animal{

    constructor( cri, race, nbPatte, alim, genre ){
        this.cri = cri;
        this.race = race;
        this.nbPatte = nbPatte;
        this.regimeAlimentaire = alim;
        this.genre = genre;
    }

    regarder(direction){
        console.log(`Je regarde vers ${direction}...`);
    }

    seReproduire(){
        console.log('Je me reproduis...')
    }
}