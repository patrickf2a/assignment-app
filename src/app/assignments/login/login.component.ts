import { Component } from '@angular/core';
import { FormBuilder, FormGroup ,Validators} from '@angular/forms'
import { AuthService } from 'src/app/shared/auth.service';
import { Router } from '@angular/router';

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
      password: ['', Validators.required]
    });
  }

onSubmit() {

  if(this.loginForm.valid) {
    const { username, password } = this.loginForm.value;

    if(this.authService.isLogged(username, password)) {

      console.log('connecter avec succes ');
      this.router.navigate(['/home']);

    } else {

      console.log('connexion echouer');

    }

  }

}

}
