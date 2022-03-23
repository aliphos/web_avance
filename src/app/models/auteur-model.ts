
export class Auteur {

  id : number = 0
  nom: string = "";
  prenom: string = "";


  constructor(nom: string,prenom: string, id : number) {
    this.nom = nom;
    this.prenom = prenom;
    this.id = id;
  }
}
