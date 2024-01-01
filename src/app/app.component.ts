import { Component} from '@angular/core';
import { AuthService } from './shared/auth.service';
import { Router } from '@angular/router';
import { AssignmentsService } from './shared/assignments.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Assignment app"
  opened = false;
  islogin=false;

  constructor(private authService: AuthService,
              private router: Router,
              private assignmentService: AssignmentsService) {
  }

  login() {
    if (!this.authService.isLoggedIn()) {
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

  InitalBD(){
    this.assignmentService.peuplerBD().
    subscribe(() => {
      console.log("BD initialisée");
      this.router.navigate(['/home'],{replaceUrl:true});
      })
    }

}



