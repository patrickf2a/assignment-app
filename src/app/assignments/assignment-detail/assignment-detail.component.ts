import { Component,Input,OnInit,EventEmitter,Output } from '@angular/core';
import { Assignment } from '../assignment.model';
import { AssignmentsService } from 'src/app/shared/assignments.service';


@Component({
  selector: 'app-assignment-detail',
  templateUrl: './assignment-detail.component.html',
  styleUrls: ['./assignment-detail.component.css']
})
export class AssignmentDetailComponent implements OnInit {

  @Input() assignmentTransmis?: Assignment;
  @Output() assignmentRendu=new EventEmitter<Assignment>();
  @Output() deleteAssignment=new EventEmitter<Assignment>();
  constructor( private assignmentService:AssignmentsService) { }

  ngOnInit(): void {
    }

  OnAssignmentRendu(){
  // Vérifie que l'objet assignmentTransmis est initialisé avant d'accéder à sa propriété rendu
  if (this.assignmentTransmis) {
    this.assignmentTransmis.rendu = true;
    this.assignmentService.updateAssignment(this.assignmentTransmis)
    .subscribe(message => console.log(message));}
    //this.assignmentTransmis = undefined;

  }

  supprimerRenduAssignment(){
    // permet de supprimer le rendu et non l'assignment
    if (this.assignmentTransmis) {
      this.assignmentTransmis.rendu = false;
      this.assignmentService.updateRendu(this.assignmentTransmis).subscribe(message => console.log(message));
    }
    //this.assignmentTransmis = undefined;
  }


  DeleteElement(){
    //permet de supprimer l'assignment
    if (this.assignmentTransmis) {

    this.assignmentService.deleteAssignment(this.assignmentTransmis)
    .subscribe(message => console.log(message));}

    this.assignmentTransmis = undefined;
  }

}
