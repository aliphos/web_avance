import { Component } from '@angular/core';
import {AuteurService} from "../services/auteur-service";
import {KeycloakService} from "keycloak-angular";
import {KeycloakProfile} from "keycloak-js";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front';
  loginService : AuteurService
  public isLoggedIn = false;
  public userProfile: KeycloakProfile | null = null;

  constructor(loginService : AuteurService, private   keycloak: KeycloakService) {
    this.loginService = loginService;
  }

  public async ngOnInit() {
    this.isLoggedIn = await this.keycloak.isLoggedIn();

    if (this.isLoggedIn) {
      this.userProfile = await this.keycloak.loadUserProfile();
    }
  }

  public login() {
    this.keycloak.login();
  }

  public logout() {
    this.keycloak.logout();
  }
}
