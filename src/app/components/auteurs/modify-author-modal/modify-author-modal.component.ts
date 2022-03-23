import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {AuteurService} from "../../../services/auteur-service";

@Component({
  selector: 'app-modify-author-modal',
  templateUrl: './modify-author-modal.component.html',
  styleUrls: ['./modify-author-modal.component.css']
})
export class ModifyAuthorModalComponent implements OnInit {

  nom: string = "";
  prenom: string = "";
  auteurService : AuteurService;

  @Input()
  id: number = 0

  constructor(public activeModal: NgbActiveModal,auteurService : AuteurService) {
    this.auteurService = auteurService;
  }

  ngOnInit(): void {
    let auteurs = new Array();
    auteurs = this.auteurService.getAuteurs();
    this.nom = auteurs[this.id].nom;
    this.prenom = auteurs[this.id].prenom;

  }

  closeModal(): void {
    console.log(this.id + "-" + this.prenom + "-" + this.nom);
    this.auteurService.modifierAuteur(this.id,this.nom,this.prenom);


  }

}
