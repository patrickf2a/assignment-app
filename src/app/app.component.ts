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
  islogin=false;

  constructor(private authService: AuthService,
              private router: Router) {
  }

  login() {
    if (!this.authService.loggedInUser) {
      this.islogin=true;
      this.router.navigate(['/login']);  
    }
    return this.islogin;
  }

  logout() {
    this.authService.logout();
    // navigue vers login
    this.router.navigate(['/login']);
  }
}



