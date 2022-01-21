export class Messagerie{

    #messages;

    constructor(...messages){
        this.#messages = []
        for (const message of messages) {
            this.#messages.push(message);
        }
    }

    ajoutMessage(message){
        this.#messages.push(message);
        message.on('avoirReponse',this.afficherReponse)
        message.on('avoirReponse',this.afficherHeure)
        message.on('avoirReponse',console.log)
        message.subon('avoirReponse', this.afficherHeure)
    }

    afficherReponse(reponse){
        alert(reponse.text + "\n" + reponse.destinataire);
    }

    afficherHeure(){
        console.log(Date.now());
    }
}