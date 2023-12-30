import { Component } from '@angular/core';
import { FormBuilder, FormGroup ,Validators} from '@angular/forms'
import { AuthService } from 'src/app/shared/auth.service';
import { Router } from '@angular/router';
import { User } from '../User.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router){

    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      isAdmin: [false]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      this.authService.login(username, password).subscribe(
        response => {
          if(response.success) {
            this.router.navigate(['/home']);
          } else {
            alert('Échec de la connexion');
          }
        },
        error => {
          console.error('Erreur lors de la connexion:', error);
          alert('Erreur de connexion');
        }
      );
    }
  }


}
