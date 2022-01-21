import { Animal } from "./models/animal.js";
import { Chat } from "./models/chat.js";
import { Chien } from "./models/chien.js";
import { Mamifere } from "./models/mamifaire.js";
import { Ovipare } from "./models/ovipare.js";

let animal = new Ovipare("Cui cui","Oiseau",2, 'Verre de terre', 'male',6);
animal.regarder();
animal.seReproduire();
console.log('Animal? : ',animal.constructor === Animal.prototype.constructor);
console.log('Chat? : ',animal.constructor === Chat.prototype.constructor);
console.log('Chien? : ',animal.constructor === Chien.prototype.constructor);

console.log(animal.toString());

let chien = new Chien("Blanc", "Long",4,'carnacié','Femelle');
chien.regarder();
chien.vaChercher();
chien.seReproduire();
console.log(chien.poil);
console.log('Animal? : ',chien.constructor === Animal.prototype.constructor);
console.log('Animal? : ',chien instanceof Animal);
console.log('Animal? : ',Animal.prototype.isPrototypeOf(chien));
console.log('Mamifère? : ',chien.constructor === Mamifere.prototype.constructor);
console.log('Mamifère? : ',chien instanceof Mamifere);
console.log('Mamifère? : ',Mamifere.prototype.isPrototypeOf(chien));
console.log('Chat? : ',chien.constructor === Chat.prototype.constructor);
console.log('Chien? : ',chien.constructor === Chien.prototype.constructor);
console.log(chien.toString());