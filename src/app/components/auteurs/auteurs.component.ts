import { Component, OnInit } from '@angular/core';
import {AuteurService} from "../../services/auteur-service";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ModifyAuthorModalComponent} from "./modify-author-modal/modify-author-modal.component";
import {Router} from "@angular/router";


@Component({
  selector: 'app-auteurs',
  templateUrl: './auteurs.component.html',
  styleUrls: ['./auteurs.component.css']
})
export class AuteursComponent implements OnInit {
  auteurService: AuteurService;
  auteurs = new Array();
  closeResult = '';

  name: String = ""

  constructor(auteurService : AuteurService,private modalService: NgbModal,private router: Router) {
    this.auteurService = auteurService;
  }

  ngOnInit(): void {
    this.recuperation();

  }

  recuperation(): void {
    this.auteurService.getAuteurs().subscribe(auteurs => {
      this.auteurs = auteurs;console.log(this.auteurs);
    });
  }

  Suppression(id:number) : void {
    this.auteurService.supprimerAuteur(id).subscribe(response => {
      console.log(response);
      if(response.statusCode == 201){
        this.recuperation();
      }

    });
  }



  ouvrirModale(id: number) {

    let modal = this.modalService.open(ModifyAuthorModalComponent, {ariaLabelledBy: 'modal-basic-title'});
    modal.componentInstance.id = id;
    modal.result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
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

  closeModale() {
    this.recuperation();
    console.log(this.name);
  }

}
