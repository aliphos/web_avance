import { Component, OnInit } from '@angular/core';
import {LivreService} from "../services/livre.service";
import {AuteurService} from "../services/auteur-service";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ModifyLivreModalComponent} from "./modify-Livre-modal/modify-livre-modal.component";

@Component({
  selector: 'app-livres',
  templateUrl: './livres.component.html',
  styleUrls: ['./livres.component.css']
})
export class LivresComponent implements OnInit {
  livres = new Array();
  auteurs = new Array();
  livresService : LivreService
  auteursService : AuteurService
  closeResult = '';

  constructor(livresService : LivreService, auteursService : AuteurService,private modalService : NgbModal) {
    this.livresService = livresService;
    this.auteursService = auteursService;

  }

  ngOnInit(): void {
    this.livres = this.livresService.getLivres();
    this.auteurs = this.auteursService.getAuteurs();
  }

  Suppression(id : number) : void {
    this.livresService.supprimerLivre(id);
}
  ouvrirModale(id: number) {

    let modal = this.modalService.open(ModifyLivreModalComponent, {ariaLabelledBy: 'modal-basic-title'});
    modal.componentInstance.id = id;
    modal.result.then((result: any) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason: any) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }


}
