import { Component, OnInit } from '@angular/core';
import { Assignment } from "../assignment.model";
import { AssignmentsService } from "../../shared/assignments.service";
import { Router } from "@angular/router";
import { AuthService } from "../../shared/auth.service";
import { MatSelectChange } from '@angular/material/select';
import { Matiere } from "../Matiere.model";

@Component({
  selector: 'app-add-assignment',
  templateUrl: './add-assignment.component.html',
  styleUrls: ['./add-assignment.component.css']
})
export class AddAssignmentComponent implements OnInit {
  nomDevoir = "";
  dateRendu?: Date;
  auteur = "";
  matiere = "";
  photomatiere = "";
  photoprof = "";
  note = 0;
  remarques = "";
  matieres: Matiere[]= [];
  valeurselectionneID:number=0;

  constructor(private assignmentsService: AssignmentsService,
              private router: Router,
              public authService: AuthService) { }

  ngOnInit(): void {
    this.assignmentsService.getmatieres().subscribe((a)=>{
      this.matieres=a;
    })
  }

  onSubmit(event: Event) {
    event.preventDefault();
    if((!this.dateRendu) || (!this.nomDevoir) || (!this.auteur) || (!this.matiere) || (!this.photomatiere) || (!this.photoprof) || (!this.note)) return;

    const newAssignment = new Assignment();
    newAssignment.id = Math.floor(Math.random() * 1000000);
    newAssignment.nom = this.nomDevoir;
    newAssignment.dateDeRendu = this.dateRendu;
    newAssignment.rendu = false;
    newAssignment.auteur = this.auteur;
    newAssignment.matiere = this.matiere;
    newAssignment.photomatiere = this.photomatiere;
    newAssignment.photoprof = this.photoprof;
    newAssignment.note = this.note;
    newAssignment.remarques = this.remarques;

    this.assignmentsService.addAssignment(newAssignment)
      .subscribe(reponse => console.log("reponse du serveur : " + reponse.message));

    this.router.navigate(["/home"]);
  }

  subjectSelected() {
    this.assignmentsService.getmateireById(this.valeurselectionneID).subscribe((matiere) => {
      if (matiere) {
        this.matiere = matiere.nom;
        this.photomatiere = matiere.photomatiere;
        this.photoprof = matiere.photoprof;
      }
    })
  }

  onOptionSelected(event:MatSelectChange) {
    this.valeurselectionneID = event.value;
    this.subjectSelected();
  }

}
