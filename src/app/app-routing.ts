import {APP_INITIALIZER, NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AccueilComponent} from "./components/accueil/accueil.component";
import {AuteursComponent} from "./components/auteurs/auteurs.component";
import {AjoutAuteurComponent} from "./components/auteurs/form-ajoutAuteur/ajoutAuteur.component";
import {AuthGuard} from "./services/keycloak-authguard-service";
import {LivresComponent} from "./livres/livres.component";
import {AjoutLivrecomponent} from "./livres/form-ajoutLivre/ajoutLivrecomponent";

const routes: Routes = [
  { path: 'accueil', component: AccueilComponent },
  { path: 'auteurs', component: AuteursComponent/*,canActivate: [AuthGuard],data: { roles: ['user'] }*/ },
  { path: 'ajoutAuteur', component: AjoutAuteurComponent },
  { path: 'livres', component: LivresComponent },
  { path: 'ajoutLivre', component: AjoutLivrecomponent},
  { path: '**', redirectTo: '/accueil', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    //AuthGuard
  ]
})
export class AppRoutingModule { }
