import {Component, OnInit} from '@angular/core';
import {LivreService} from "../services/livre.service";
import {AuteurService} from "../services/auteur-service";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ModifyLivreModalComponent} from "./modify-Livre-modal/modify-livre-modal.component";
import {WebService} from "../services/web.service";
import {Auteur} from "../models/auteur-model";
import {Livre} from "../models/livre-model";
import {NGXLogger} from "ngx-logger";

@Component({
  selector: 'app-livres',
  templateUrl: './livres.component.html',
  styleUrls: ['./livres.component.css']
})
export class LivresComponent implements OnInit {
  livres = new Array();
  auteurs = new Array();
  livresService: LivreService
  auteursService: AuteurService
  closeResult = '';

  constructor(livresService: LivreService, auteursService: AuteurService, private modalService: NgbModal) {
    this.livresService = livresService;
    this.auteursService = auteursService;

  }

  ngOnInit(): void {
    this.recuperation();
  }

  recuperation() {
    this.auteursService.getAuteurs().subscribe(auteurs => {
      this.livresService.getLivres().subscribe(livres => {
        this.auteurs = auteurs;
        this.livres = livres;
        livres.forEach(livre => {
          livre.auteur = this.auteurs.find(x => x.id ===livre.id_auteur);
        });
      });

    });
  }

  Suppression(id: number): void {
    this.livresService.supprimerLivre(id).subscribe(response => {
      if(response.statusCode == 201){
        this.recuperation();
      }
    });
  }

  ouvrirModale(id: number) {

    let modal = this.modalService.open(ModifyLivreModalComponent, {ariaLabelledBy: 'modal-basic-title'});
    modal.componentInstance.id = id;
    modal.result.then((result: any) => {
      this.closeResult = `Closed with: ${result}`;
      this.recuperation();
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

  public async findAuteur(livre: Livre) {
    let auteur: Auteur[] = [];
    await this.auteursService.getAuteurs().subscribe(aut => auteur = aut);
    let auteurFound: Auteur | undefined = auteur.find(e => e.id === livre.id_auteur);
    return auteurFound?.prenom;
  }


}
