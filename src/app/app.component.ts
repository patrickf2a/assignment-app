import { Component} from '@angular/core';
import { AuthService } from './shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Mon Assignment app"
  opened = false;

  constructor(private autService: AuthService,
              private router: Router) {
  }

  login() {

    if (!this.autService.loggedIn) {
      this.autService.logIn();
    } else {
      this.autService.logOut();
      // on retourne sur la page d'accueil
      this.router.navigate(["/home"]);
    }
  }
}
