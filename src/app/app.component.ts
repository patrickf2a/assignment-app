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
  title = "Assignment Application";
  opened = false;
  islogin = false;
  username = '';

  constructor(private authService: AuthService, private router: Router, private assignmentService: AssignmentsService) {
  }

  ngOnInit(): void {
    this.authService.ViewLoggedInUser().subscribe((loggedIn: boolean) => {
      this.islogin = loggedIn;
      if (this.islogin) {
        this.username = this.authService.getUsername();
      } else {
        this.username = '';
      }
      console.log("app component", this.islogin);
    });
  }

  login() {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/login']);
    }
  }

  logout() {
    this.authService.logout();
    this.islogin = false;
    this.username = '';
    this.router.navigate(['/login']);
  }

  InitalBD() {
    this.assignmentService.peuplerBD().subscribe(() => {
      console.log("BD initialisée");
      this.router.navigate(['/home'], { replaceUrl: true });
    });
  }
}
