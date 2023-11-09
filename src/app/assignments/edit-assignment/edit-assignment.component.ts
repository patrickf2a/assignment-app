import { Component,OnInit } from '@angular/core';
import {Assignment} from "../assignment.model";
import {AssignmentsService} from "../../shared/assignments.service";
import {Router} from "@angular/router";
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-edit-assignment',
  templateUrl: './edit-assignment.component.html',
  styleUrls: ['./edit-assignment.component.css']
})
export class EditAssignmentComponent {
  assignment!: Assignment | undefined;
  NomDevoir!: string;
  DateRendu!: Date;

  constructor(private assignmentService: AssignmentsService,
              private route: ActivatedRoute,
              private router: Router) { }
  ngOnInit(): void {
    this.getAssignment();

    // affichage des queryParams et fragment
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
  });
  }

  OnSaveAssignment(event:Event) {
    event.preventDefault();
    if(!this.assignment) return;
    this.assignment.nom = this.NomDevoir;
    this.assignment.dateDeRendu = this.DateRendu;
    this.assignmentService.updateAssignment(this.assignment)
    .subscribe(message => console.log(message));
    this.router.navigate(["/home"]);
  }

}
