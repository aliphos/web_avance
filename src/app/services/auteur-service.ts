import { Injectable } from '@angular/core';
import {Auteur} from "../models/auteur-model";

@Injectable({
  providedIn: 'root'
})
export class AuteurService {

  private auteurs = Array();


  constructor() {

  }

  addAuteur(newAuteur : Auteur) {
    newAuteur.id = this.auteurs.length;
   this.auteurs.push(newAuteur);
  }

  getAuteurs(){
    return this.auteurs;
  }
  supprimerAuteur(id : number){
    const index = this.auteurs.findIndex(obj => obj.id == id );
    if (index > -1) {
      this.auteurs.splice(index, 1);
    }
  }

  modifierAuteur(id: number,nom : string, prenom : string){
    const index = this.auteurs.findIndex(obj => obj.id == id);
    this.auteurs[index].nom = nom;
    this.auteurs[index].prenom = prenom;

  }
}
