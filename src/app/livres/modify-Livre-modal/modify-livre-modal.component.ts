import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {LivreService} from "../../services/livre.service";
import {AuteurService} from "../../services/auteur-service";

@Component({
  selector: 'app-modify-author-modal',
  templateUrl: './modify-livre-modal.component.html',
  styleUrls: ['./modify-livre-modal.component.css']
})
export class ModifyLivreModalComponent implements OnInit {

  id_auteur: number = 0;
  nom: string = "";
  nb_exemplaires : number = 0;
  livreService : LivreService;
  auteurService : AuteurService;
  auteurs  = new Array();
  livres = new Array();

  @Input()
  id: number = 0

  constructor(public activeModal: NgbActiveModal,livreService : LivreService,auteurService : AuteurService) {
    this.livreService = livreService;
    this.auteurService = auteurService;
  }

  ngOnInit(): void {
    this.auteurService.getAuteurs().subscribe(auteurs => {
      this.auteurs = auteurs;
    });
    this.livreService.getLivres().subscribe(livres => {
      this.livres = livres;
      this.nom = this.livres.find(x => x.id === this.id).nom;
      console.log(this.livres.find(x => x.id === this.id));
      this.nb_exemplaires = this.livres.find(x => x.id === this.id).nb_exemplaires;
      this.id_auteur = this.livres.find(x => x.id === this.id).id_auteur;

    });

  }



  closeModal(): void {
    console.log(this.id + "-" + this.nom + "-" + this.id_auteur);
    this.livreService.modifierLivre(this.id,this.id_auteur,this.nom,this.nb_exemplaires,this.auteurs.find(x => x.id === this.id_auteur)).subscribe(responses => {
         this.auteurService.getAuteurs().subscribe(auteurs => {
          this.auteurs = auteurs;
        })
    });


  }

}
