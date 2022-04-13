import {Injectable} from '@angular/core';
import {Auteur} from "../models/auteur-model";
import {WebService} from "./web.service";
import {Logger} from "./customLogging.service";
import {LogLevel} from "../models/logLevel-model";

@Injectable({
  providedIn: 'root'
})
export class AuteurService {

  private auteurs = Array();
  myHttp : WebService;
  logger : Logger;


  constructor(myHttp : WebService, logger : Logger) {
    this.myHttp = myHttp;
    this.logger = logger;
  }

  addAuteur(newAuteur : Auteur) {
    this.logger.log("Un auteur a été créé",LogLevel.INFO);
   return this.myHttp.postAuthor(newAuteur);
  }

  getAuteurs(){
    return this.myHttp.getAuthors();
  }

  supprimerAuteur(id : number){
    return this.myHttp.deleteAuthor(id);
  }

  modifierAuteur(id: number,nom : string, prenom : string){
    let auteur = new Auteur(nom,prenom,id);
    return this.myHttp.putAuthor(auteur);


  }
}
