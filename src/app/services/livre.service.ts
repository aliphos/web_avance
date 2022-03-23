import { Injectable } from '@angular/core';
import {Livre} from "../models/livre-model";

@Injectable({
  providedIn: 'root'
})
export class LivreService {


  private livres = Array();


  constructor() {

  }

  addLivre(newLivre : Livre) {
    newLivre.id = this.livres.length;
    this.livres.push(newLivre);
  }

  getLivres(){
    return this.livres;
  }
  supprimerLivre(id : number){
    const index = this.livres.findIndex(obj => obj.id == id );
    if (index > -1) {
      this.livres.splice(index, 1);
    }
  }

  modifierLivre(id: number,id_auteur : number,nom : string, nb_exemplaires : number){
    const index = this.livres.findIndex(obj => obj.id == id);
    this.livres[index].nom = nom;
    this.livres[index].id_auteur = id_auteur;
    this.livres[index].nb_exemplaires = nb_exemplaires;

  }
}
