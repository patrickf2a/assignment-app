import { Component,EventEmitter,OnInit,Output } from '@angular/core';
import {Assignment} from "../assignment.model";

@Component({
  selector: 'app-add-assignment',
  templateUrl: './add-assignment.component.html',
  styleUrls: ['./add-assignment.component.css']
})
export class AddAssignmentComponent implements OnInit {
  @Output() nouvelAssignment = new EventEmitter<Assignment>();

  //for
  nomDevoir = "";
  // date a la quel on le rend
  dateRendu?:Date;

  constructor() { }
  ngOnInit(): void {

  }


  onSubmit() {
    if((!this.dateRendu) || (!this.nomDevoir)) return;

    const newAssignment = new Assignment();
    newAssignment.nom = this.nomDevoir;
    newAssignment.dateDeRendu = this.dateRendu;
    newAssignment.rendu = false;
    //console.log(newAssignment);
    //this.assignments.push(newAssignment);
    this.nouvelAssignment.emit(newAssignment);

    //console.log(newAssignment);
  }

}
