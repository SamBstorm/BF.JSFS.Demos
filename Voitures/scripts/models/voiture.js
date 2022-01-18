export class Voiture {
    constructor(couleur, roues = 4, portes = 3) {
        this.roues = roues
        this.couleur = couleur
        this.portes = portes
        this.position = { x: 0, y: 0 };
        this.direction = "nord"
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
