
export class Livre {

  id : number = 0
  id_auteur: number = 0;
  nom: string = "";
  nb_exemplaires : number = 0;


  constructor(id: number,id_auteur: number, nom : string,nb_exemplaires : number) {
    this.id = id;
    this.id_auteur = id_auteur;
    this.nom = nom;
    this.nb_exemplaires = nb_exemplaires;
  }
}
