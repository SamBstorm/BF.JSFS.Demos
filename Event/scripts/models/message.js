export class Message{

    #events;
    #reponse;

    constructor(text, destinataire){
        this.text = text;
        this.destinataire = destinataire;
        this.#reponse = undefined;
        this.#events = new Map();
    }

    obtientReponse(message){
        this.#reponse = message;
        this.#emit('avoirReponse', this.#reponse);
    }

    on(eventName, func){
        if(!this.#events.has(eventName)) this.#events.set(eventName,[]);
        this.#events.get(eventName).push(func);
        console.log(this.#events)
    }
    
    subon(eventName, func){
        if(!this.#events.has(eventName)) throw new Error(`L'événement '${eventName}' n'existe pas...`);
        let index = this.#events.get(eventName).indexOf( f => f === func);
        this.#events.get(eventName).splice(index,1);
        console.log(this.#events)
    }

    #emit(eventName, data){
        if(!this.#events.has(eventName)) throw new Error(`L'événement '${eventName}' n'existe pas...`);
        this.#events.get(eventName).forEach(
            func => func(data)
        );
    }
}