import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AuthService} from "../../shared/auth.service";
import {AssignmentsService} from "../../shared/assignments.service";
import { User } from '../User.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  createAccountForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService ,
              private assignmentService : AssignmentsService,
              private router: Router) { }

  ngOnInit(): void {
    this.createAccountForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      isAdmin: [false]
    });
  }

  onSubmit(): void {
    if (this.createAccountForm.valid) {

      const newUser = new User();
      newUser.id = Math.floor(Math.random() * 1000000);
      newUser.nom = this.createAccountForm.value.username;
      newUser.motdepasse = this.createAccountForm.value.password;

      newUser.isadmin = this.createAccountForm.value.isAdmin;


      this.assignmentService.createUser(newUser)
        .subscribe(reponse => {
        console.log("Reponse du serveur jdd: " + reponse.message);
      });
      this.router.navigate(['/home']);
    }
  }
}
