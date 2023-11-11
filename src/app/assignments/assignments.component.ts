import {Component, OnInit} from '@angular/core';
import {Assignment} from './assignment.model';
import {AssignmentsService} from '../shared/assignments.service';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})

export class AssignmentsComponent implements OnInit {
  titre = "Mon application sur les Assignments !";
  FormVisible=false;

  assignementSelectionne : Assignment | undefined;

  assignments: Assignment[]= [];


  constructor(private assignmentService: AssignmentsService){
  }

  ngOnInit(): void{
    //this.assignments= this.assignmentService.getAssignments();
    this.getAssignments();

  }

  assignmentClique(assignment: Assignment){
    this.assignementSelectionne = assignment;
    console.log("L'assignement selectionné est "+this.assignementSelectionne);
  }

  onAddAssignmentBtnClick(){
   // this.FormVisible=true;
  }


  /*
  onNouvelAssignment(event: Assignment){
    //this.assignments.push(event);
    this.assignmentService.addAssignment(event).subscribe(message => console.log(message));
    this.FormVisible=false;// on veut voir la liste avec le nouvel assignment
  }
*/
  OnRenduAssignmentDelete(event : any){
    // permetbde supprimer le rendu et non l'assignment
    this.assignments.forEach((item, index) => {
      if(item === event) this.assignments.splice(index,1);
    });
    this.assignementSelectionne = undefined;
  }


  getAssignments() {
    this.assignmentService.getAssignments().
    subscribe(assignments => {
      this.assignments = assignments;
    }
    );

  }


}
