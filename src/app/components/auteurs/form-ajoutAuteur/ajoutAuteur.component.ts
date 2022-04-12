import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import {AuteurService} from "../../../services/auteur-service";
import {Auteur} from "../../../models/auteur-model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-form-ajoutAuteur',
  templateUrl: './ajoutAuteur.component.html',
  styleUrls: ['./ajoutAuteur.component.css']
})


export class AjoutAuteurComponent implements OnInit {
  auteur = new Auteur("","",0);
  auteurForm = this.fb.group({
    nom: ['', Validators.required],
    prenom: ['', Validators.required],
  });



  auteurService: AuteurService

  envoiForm() {
  this.auteur = new Auteur(this.auteurForm.value.nom,this.auteurForm.value.prenom,0);
    this.auteurService.addAuteur(this.auteur).subscribe(response => {
      this.router.navigate(['auteurs']);
    });

  }



  constructor(private fb: FormBuilder, auteurService : AuteurService, private router: Router) {
    this.auteurService = auteurService;
  }

  ngOnInit(): void {
  }

}

