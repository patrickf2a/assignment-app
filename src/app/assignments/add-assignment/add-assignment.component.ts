import { Component,/*EventEmitter,Output*/OnInit } from '@angular/core';
import {Assignment} from "../assignment.model";
import {AssignmentsService} from "../../shared/assignments.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-assignment',
  templateUrl: './add-assignment.component.html',
  styleUrls: ['./add-assignment.component.css']
})
export class AddAssignmentComponent implements OnInit {
  //@Output() nouvelAssignment = new EventEmitter<Assignment>();

  //for
  nomDevoir = "";
  // date a la quel on le rend
  dateRendu?:Date;

  constructor(private assignmentsService:AssignmentsService,private router: Router) { }
  ngOnInit(): void {

  }


  onSubmit(event: Event) {
    event.preventDefault();
    if((!this.dateRendu) || (!this.nomDevoir)) return;

    const newAssignment = new Assignment();

    newAssignment.id = this.assignmentsService.getNewId();

    newAssignment.nom = this.nomDevoir;
    newAssignment.dateDeRendu = this.dateRendu;
    newAssignment.rendu = false;
    //this.assignments.push(newAssignment);


    //this.nouvelAssignment.emit(newAssignment);
    this.assignmentsService.addAssignment(newAssignment).
    subscribe(message => console.log(message));

    //console.log(newAssignment);

    // on navigue vers la page d'accueil
    this.router.navigate(["/home"]);
  }

}
