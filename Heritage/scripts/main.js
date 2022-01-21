import { Animal } from "./models/animal.js";
import { Chat } from "./models/chat.js";
import { Chien } from "./models/chien.js";

let animal = new Animal("Cui cui","Oiseau",2, 'Verre de terre', 'male');
animal.regarder();
console.log('Animal? : ',animal.constructor === Animal.prototype.constructor);
console.log('Chat? : ',animal.constructor === Chat.prototype.constructor);
console.log('Chien? : ',animal.constructor === Chien.prototype.constructor);

let chien = new Chien("Blanc", "Long",4,'carnacié','Femelle');
chien.regarder();
chien.vaChercher();
console.log(chien.poil);
console.log('Animal? : ',chien.constructor === Animal.prototype.constructor);
console.log('Animal? : ',chien instanceof Animal);
console.log('Animal? : ',Animal.prototype.isPrototypeOf(chien));
console.log('Chat? : ',chien.constructor === Chat.prototype.constructor);
console.log('Chien? : ',chien.constructor === Chien.prototype.constructor);