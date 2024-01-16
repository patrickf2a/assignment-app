import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSelectChange } from '@angular/material/select';

import { Assignment } from '../assignment.model';
import { AssignmentsService } from '../../shared/assignments.service';
import { AuthService } from '../../shared/auth.service';
import { Matiere } from '../Matiere.model';

@Component({
  selector: 'app-add-assignment',
  templateUrl: './add-assignment.component.html',
  styleUrls: ['./add-assignment.component.css']
})
export class AddAssignmentComponent implements OnInit {
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  matieres: Matiere[] = [];
  matiere: string = '';
  photomatiere: string = '';
  photoprof: string = '';


  constructor(private assignmentsService: AssignmentsService,
              public authService: AuthService,
              private router: Router,
              private _formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/login']);
    } else {
      this.assignmentsService.getmatieres().subscribe(matieres => {
        this.matieres = matieres;
      });

      this.firstFormGroup = this._formBuilder.group({
        nom: ['', Validators.required],
        auteur: ['', Validators.required]
      });

      this.secondFormGroup = this._formBuilder.group({
        note: [0, [Validators.required, Validators.max(20)]],
        remarques: [''],
        matiere: ['', Validators.required],
        dateDeRendu: [null, Validators.required],
        photomatiere: [''],
        photoprof: ['']
      });
    }
  }

  get step1Completed(): boolean {
    return this.firstFormGroup?.valid || false;
  }

  get step2Completed(): boolean {
    return this.secondFormGroup?.valid || false;
  }

  OnMatierechoisi(event: MatSelectChange) {
    const selectedMatiere = this.matieres.find(m => m.id === event.value);
    if (selectedMatiere) {
      this.secondFormGroup.get('matiere')?.setValue(selectedMatiere.nom);
      this.secondFormGroup.get('photomatiere')?.setValue(selectedMatiere.photomatiere);
      this.secondFormGroup.get('photoprof')?.setValue(selectedMatiere.photoprof);

    }
  }

  onSubmit(event: Event) {
    if (this.firstFormGroup.invalid || this.secondFormGroup.invalid) {
      return;
    }

    const newAssignment = new Assignment();
    newAssignment.id = Math.floor(Math.random() * 10000);
    newAssignment.nom = this.firstFormGroup.value.nom;
    newAssignment.auteur = this.firstFormGroup.value.auteur;
    newAssignment.note = this.secondFormGroup.value.note;
    newAssignment.remarques = this.secondFormGroup.value.remarques;
    newAssignment.matiere = this.secondFormGroup.value.matiere;
    newAssignment.dateDeRendu = this.secondFormGroup.value.dateDeRendu;
    newAssignment.photomatiere = this.secondFormGroup.value.photomatiere;
    newAssignment.photoprof = this.secondFormGroup.value.photoprof;
    newAssignment.rendu = false;

    this.assignmentsService.addAssignment(newAssignment).subscribe(response => {
      console.log("Response from server: " + response.message);
      this.router.navigate(['/home']);
    });
  }

}
