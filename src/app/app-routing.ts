import {APP_INITIALIZER, NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AccueilComponent} from "./components/accueil/accueil.component";
import {AuteursComponent} from "./components/auteurs/auteurs.component";
import {AjoutAuteurComponent} from "./components/auteurs/form-ajoutAuteur/ajoutAuteur.component";
import {AuthGuard} from "./services/keycloak-authguard-service";
import {LivresComponent} from "./livres/livres.component";
import {AjoutLivrecomponent} from "./livres/form-ajoutLivre/ajoutLivrecomponent";

const routes: Routes = [
  { path: 'accueil', component: AccueilComponent ,canActivate: [AuthGuard],data: { roles: ['user'] }},
  { path: 'auteurs', component: AuteursComponent ,canActivate: [AuthGuard],data: { roles: ['user'] } },
  { path: 'ajoutAuteur', component: AjoutAuteurComponent ,canActivate: [AuthGuard],data: { roles: ['user'] }},
  { path: 'livres', component: LivresComponent ,canActivate: [AuthGuard],data: { roles: ['user'] }},
  { path: 'ajoutLivre', component: AjoutLivrecomponent ,canActivate: [AuthGuard],data: { roles: ['user'] }},
  { path: '**', redirectTo: '/accueil', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    AuthGuard
  ]
})
export class AppRoutingModule { }
