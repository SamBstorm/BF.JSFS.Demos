let auto = {text:"Ceci est une voiture...", couleur : "red"};

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
console.log('FalseDictionnary (don\'t use it) :\n',myFalseDictionnary);