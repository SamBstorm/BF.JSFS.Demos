import { Message } from "./models/message.js";
import { Messagerie } from "./models/messagerie.js";

let message1 = new Message("Bonjour à tous!","Elèves");

let messagerie = new Messagerie();
messagerie.ajoutMessage(message1);

console.log(message1);


message1.obtientReponse(new Message("Bonjour Sam","Formateur"));

