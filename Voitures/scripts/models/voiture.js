export class Voiture {

    #serialNumber;

    constructor(couleur, roues = 4, portes = 3, sn = new Date()) {
        this.#SerialNumber = sn;
        this.roues = roues
        this.couleur = couleur
        this.portes = portes
        this.position = { x: 0, y: 0 };
        this.direction = "nord"
    }

    //Propriété auto-calculé
    get Orientation(){
        return {
            position : this.position,
            direction : this.direction
        };
    }

    //Assessor
    get SerialNumber(){
        return this.#serialNumber;
    }

    //Mutateur
    set #SerialNumber(value){
        if(!(value instanceof Date)) throw new TypeError('Doit être de type Date');
        this.#serialNumber = value;
    }

    avancer() {
        switch (this.direction) {
            case 'nord':
                this.position.x += 1;
                break;
            case 'sud':
                this.position.x -= 1;
                break;
            case 'ouest':
                this.position.y -= 1;
                break;
            case 'est':
                this.position.y += 1;
                break;
            default:
                break;
        }
        console.log(`J'avance! je suis en ${this.position.x} - ${this.position.y}`)
    }
}
