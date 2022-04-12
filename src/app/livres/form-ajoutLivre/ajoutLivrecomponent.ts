import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import {Livre} from "../../models/livre-model";
import {Router} from "@angular/router";
import {LivreService} from "../../services/livre.service";
import {AuteurService} from "../../services/auteur-service";

@Component({
  selector: 'app-form-ajoutAuteur',
  templateUrl: './ajoutLivre.component.html',
  styleUrls: ['./ajoutLivre.component.css']
})


export class AjoutLivrecomponent implements OnInit {
  livre = new Livre(0,-1,"",0);
  livreForm = this.fb.group({
    id_auteur: [{value: 'Pas d\'auteurs', disabled: true}, Validators.required],
    nom: ['', Validators.required],
    nb_exemplaires: ['', [Validators.required,Validators.pattern("^(?=.*[1-9])\\d*\\.?\\d*$")]],
  });



  livreService: LivreService
  auteurService : AuteurService;
  auteurs = Array();
  envoiForm() {
  this.livre = new Livre(0,this.livreForm.value.id_auteur,this.livreForm.value.nom,this.livreForm.value.nb_exemplaires);
  this.livre.auteur = this.auteurs.find(x => x.id === this.livre.id_auteur);
  console.log(this.livre);
    this.livreService.addLivre(this.livre).subscribe(response => {
      this.router.navigate(['livres']);
    });

  }



  constructor(private fb: FormBuilder, livreService : LivreService, private router: Router, auteurService : AuteurService) {
    this.livreService = livreService;
    this.auteurService = auteurService;
  }

  ngOnInit(): void {
    this.auteurService.getAuteurs().subscribe(auteurs => {
      this.auteurs = auteurs;
      if(this.auteurs.length > 0){
        this.livreForm.controls['id_auteur'].enable();
      }
    });

  }

}

