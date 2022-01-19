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

let myDictionnary = new Map();
myDictionnary.set('key',auto);
myDictionnary.set('key2',auto);
myDictionnary.set(0,auto);
myDictionnary.set('key4',auto);
myDictionnary.set('key5',auto);
console.log(myDictionnary.has(0));
console.log(myDictionnary.get(0));
console.log(myDictionnary);
auto.couleur = "blue"
myDictionnary.delete(0);
console.log(myDictionnary);
console.log(myDictionnary.keys());
console.log(myDictionnary.entries());

for (const [key, value] of myDictionnary) {
    console.log(key);
    console.log(value);
}

let myFalseDictionnary = [['key','value'],['key','value2'],['key','value3'],['key','value4'],['key','value5']]
console.log(myFalseDictionnary);