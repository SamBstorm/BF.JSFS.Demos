const concat = function (...boutsDeMots){
    let result = "";
    for (const mot of boutsDeMots) {
        result += mot + " "; 
    }
    return result;
}

const concatRepeat = function (nbRepeat, ...boutsDeMots){
    let text = "";
    let result = "";
    for (const mot of boutsDeMots) {
        text += mot + " "; 
    }
    for( let i = 0; i < nbRepeat; i++ ) {
        result += text+"\n"; 
    }
    return result;
}

const concatRepeatYield = function* (nbRepeat, ...boutsDeMots){
    let text = "";
    for (const mot of boutsDeMots) {
        text += mot + " "; 
    }
    for( let i = 0; i < nbRepeat; i++ ) {
        yield text+"\n"; 
    }
}

console.log(concat(["Salut","tout","le","monde"])); //[["Salut","tout","le","monde"]]
console.log(concat("Salut","tout","le","monde")); //["Salut","tout","le","monde"]
console.log(concatRepeat(4,"Salut","tout","le","monde")); //nbRepeat : 4 , boutsDeMots["Salut","tout","le","monde"]
console.log(concat());
console.log(concatRepeatYield(4,"Salut","tout","le","monde")); //nbRepeat : 4 , boutsDeMots["Salut","tout","le","monde"]
let result = concatRepeatYield(4,"Salut","tout","le","monde");
for(const text of result){
    console.log(text);
}

class NotationOption{
    constructor(){
        this.firstArray = []
        this.secondArray = []
    }
}

const notation = function(notationOption){
    if(notationOption.constructor !== NotationOption.prototype.constructor) throw new TypeError('Mauvais type');
    for (const i in notationOption.firstArray) {
        console.log(notationOption.firstArray[i],':',notationOption.secondArray[i]);
    }
}

let option = new NotationOption();
option.firstArray = ["Sam","Corentin",'Aurore','Isis'];
option.secondArray = [12,20,6,20];
notation(option);

console.log(concat(["Sam","Isis"],[20,30]));

const fusionTableau = function(...tableauDeVoitures){
    if(tableauDeVoitures.constructor !== Array.prototype.constructor) throw new TypeError('Mauvais type');
    let result = [];
    for (const tableau of tableauDeVoitures) {
        tableau.forEach( v => result.push(v));
    }
    return result;
}

console.log(fusionTableau ([{name : "BMW", model : "M3"},{name : "BMW", model : "M5"},{name : "BMW", model : "Z3"}] , [{name:"Renault", model:"Twingo"}]));

