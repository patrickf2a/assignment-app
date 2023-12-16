import { Component, OnInit } from '@angular/core';
import { Assignment } from "../assignment.model";
import { AssignmentsService } from "../../shared/assignments.service";
import { Router } from "@angular/router";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-assignment',
  templateUrl: './edit-assignment.component.html',
  styleUrls: ['./edit-assignment.component.css']
})
export class EditAssignmentComponent implements OnInit {
  assignment!: Assignment;
  NomDevoir!: string;
  DateRendu!: Date;
  auteur!: string;
  matiere!: string;
  photomatiere!: string;
  photoprof!: string;
  note!: number;
  remarques!: string;

  constructor(private assignmentService: AssignmentsService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.getAssignment();
    console.log("Query Params : ");
    console.log(this.route.snapshot.queryParams);
    console.log("Fragment : ");
    console.log(this.route.snapshot.fragment);
  }

  getAssignment() {
    const id = +this.route.snapshot.params['id'];
    this.assignmentService.getAssignment(id)
      .subscribe(assignment => {
        if(!assignment) return;
        this.assignment = assignment;
        this.NomDevoir = this.assignment.nom;
        this.DateRendu = this.assignment.dateDeRendu;
        this.auteur = this.assignment.auteur;
        this.matiere = this.assignment.matiere;
        this.photomatiere = this.assignment.photomatiere;
        this.photoprof = this.assignment.photoprof;
        this.note = this.assignment.note;
        this.remarques = this.assignment.remarques;
      });
  }

  OnSaveAssignment(event:Event) {
    event.preventDefault();
    if(!this.assignment) return;
    this.assignment.nom = this.NomDevoir;
    this.assignment.dateDeRendu = this.DateRendu;
    this.assignment.auteur = this.auteur;
    this.assignment.matiere = this.matiere;
    this.assignment.photomatiere = this.photomatiere;
    this.assignment.photoprof = this.photoprof;
    this.assignment.note = this.note;
    this.assignment.remarques = this.remarques;
    this.assignmentService.updateAssignment(this.assignment)
      .subscribe(reponse =>{
        console.log("Reponse du serveur : " + reponse.message);
        this.router.navigate(["/home"]);
      });
  }
}
