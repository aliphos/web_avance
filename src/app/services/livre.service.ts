import { Injectable } from '@angular/core';
import {Livre} from "../models/livre-model";
import {HttpService} from "./http.service";
import {Auteur} from "../models/auteur-model";

@Injectable({
  providedIn: 'root'
})
export class LivreService {


  private livres = Array();
  myHttp : HttpService;

  constructor(myHttp : HttpService) {
    this.myHttp = myHttp;
  }
  addLivre(newLivre : Livre) {
    return this.myHttp.postBook(newLivre);
  }

  getLivres(){
    return this.myHttp.getBooks();
  }
  supprimerLivre(id : number){
    return this.myHttp.deleteBook(id);
  }

  modifierLivre(id: number,id_auteur : number,nom : string, nb_exemplaires : number,auteur : Auteur){
    let livre =  new Livre(id,id_auteur,nom,nb_exemplaires);
    livre.auteur = auteur;
    return this.myHttp.putBook(livre);

  }
}
