import { Voiture } from './models/voiture.js';


let auto = new Voiture("Rouge");

let auto2 = new Voiture("Rouge", 5, 5);

let auto3 = new Voiture("Rouge", undefined, 5);

console.log(auto);
console.log(auto2);
console.log(auto3.roues);

auto3.roues = auto3.roues - 1;
console.log(auto3.roues);
auto3.avancer();
//auto.#SerialNumber = new Date(1987,8,27);
console.log(auto.SerialNumber)
console.log(auto);
console.log(auto.Orientation);

// let nom = 'Samuel';

// console.log(`Bonjour je m'appelle ${nom}`);