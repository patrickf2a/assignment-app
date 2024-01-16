import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared/auth.service';
import { Router } from '@angular/router';
import { AssignmentsService } from './shared/assignments.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = "Assignment app";
  opened = false;
  islogin = false;

  constructor(private authService: AuthService, private router: Router, private assignmentService: AssignmentsService) {
  }

  ngOnInit(): void {
    // Utilisez watchLoggedInUser() pour observer les changements d'état de connexion
    this.authService.ViewLoggedInUser().subscribe((loggedIn: boolean) => {
      this.islogin = loggedIn;
      console.log("app component", this.islogin);
    });
  }

  login() {
    if (!this.authService.isLoggedIn()) {
      //this.islogin = true;
      this.router.navigate(['/login']);
    }
  }

  logout() {
    this.authService.logout();
    this.islogin = false;
    this.router.navigate(['/login']);
  }

  InitalBD() {
    this.assignmentService.peuplerBD().subscribe(() => {
      console.log("BD initialisée");
      this.router.navigate(['/home'], { replaceUrl: true });
    });
  }
}
