import {APP_INITIALIZER, NgModule} from '@angular/core';
import {AppComponent} from "./components/app.component";
import { AuteursComponent } from './components/auteurs/auteurs.component';
import {BrowserModule} from "@angular/platform-browser";
import { AccueilComponent } from './components/accueil/accueil.component';
import { AjoutAuteurComponent } from './components/auteurs/form-ajoutAuteur/ajoutAuteur.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {KeycloakAngularModule, KeycloakService} from "keycloak-angular";
import {AppRoutingModule} from './app-routing';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { ModifyAuthorModalComponent } from './components/auteurs/modify-author-modal/modify-author-modal.component';
import { LivresComponent } from './livres/livres.component';
import {AjoutLivrecomponent} from "./livres/form-ajoutLivre/ajoutLivrecomponent";
import {ModifyLivreModalComponent} from "./livres/modify-Livre-modal/modify-livre-modal.component";
import {HttpClientModule, HttpHeaders} from "@angular/common/http";
import {AuteurService} from "./services/auteur-service";

function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        url: 'http://localhost:9990/auth',
        realm: 'Raspoucorp',
        clientId: 'Angular',
      },
      initOptions: {
        onLoad: 'login-required'
      },
      bearerExcludedUrls: ['http://localhost:5000/logsAngular']
    });
}


@NgModule({
  declarations: [
    AppComponent,
    AuteursComponent,
    AccueilComponent,
    AjoutAuteurComponent,
    ModifyAuthorModalComponent,
    LivresComponent,
    AjoutLivrecomponent,
    ModifyLivreModalComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    KeycloakAngularModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [

    AuteurService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService]
    }


  ]
})
export class AppModule { }
