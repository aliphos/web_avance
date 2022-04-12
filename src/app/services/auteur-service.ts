import {Injectable} from '@angular/core';
import {Auteur} from "../models/auteur-model";
import {HttpService} from "./http.service";

@Injectable({
  providedIn: 'root'
})
export class AuteurService {

  private auteurs = Array();
  myHttp : HttpService;


  constructor(myHttp : HttpService) {
    this.myHttp = myHttp;
  }

  addAuteur(newAuteur : Auteur) {

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
